import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    AwesomeSliderUpdateRequest,
    Admin_AwesomeSliderRequest
} from '../../../../../Redux/Admin/AwesomeSlider/actions';
import { notify } from '../../../../../Config/Notify';
import { ToastContainer } from 'react-toastify';
import FroalaEditor from './FroalaEditor';
import FilePond from './FilePond';
import Spinner from '../../../../Spinner';
import './AwesomeSlider.css';
import useStyles from './useStyles';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SaveIcon from '@material-ui/icons/Save';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


// Handle TabPanel
const TabPanel = (props) => {
    const { children, value, index, ...other } = props;
    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
};

const AwesomeSlider = (props) => {
    const {
        UpdateAwesomeSlider, GetAwesomeSliderData,
        AwesomeSliderSuccess, awesomeSliderData,
        AwesomeSliderUpdateSuccess, AwesomeSliderUpdateError
    } = props;
    // State
    const prevAwesomeSliderUpdateSuccess = usePrevious(AwesomeSliderUpdateSuccess);
    const prevAwesomeSliderUpdateError = usePrevious(AwesomeSliderUpdateError);
    const classes = useStyles();
    const [image, setImage] = useState([
        {
            source: '',
            options: {
                type: 'locale'
            }
        }
    ]);
    const fields = { title: '', description: '' };
    const [form, setForm] = useState({
        en: fields,
        arm: fields
    });
    const [tab, setTab] = useState(0);

    useEffect(() => {
        GetAwesomeSliderData();
    }, []);
    useEffect(() => {
        if (AwesomeSliderSuccess) {
            const { en, arm, image } = awesomeSliderData;
            const formData = {
                en: en[0], arm: arm[0]
            };
            setForm(formData);
            setImage([
                {
                    source: image,
                    options: {
                        type: 'locale'
                    }
                }
            ]);
        }
    }, [AwesomeSliderSuccess]);
    useEffect(() => {
        if (prevAwesomeSliderUpdateSuccess === false && AwesomeSliderUpdateSuccess) {
            notify('Data Updated Success', 1000, 'SUCCESS');
        }
    }, [AwesomeSliderUpdateSuccess]);
    useEffect(() => {
        if (prevAwesomeSliderUpdateError === false && AwesomeSliderUpdateError) {
            notify('Something went wrong', 1000, 'ERROR');
        }
    }, [AwesomeSliderUpdateError]);
    const handleSubmit = e => {
        e.preventDefault();
        UpdateAwesomeSlider({ image, form });
    };
    const handleTabChange = (event, newValue) => {
        setTab(newValue);
    };
    const handleInputChange = (name, key, value) => {
        setForm((prevState) => ({
            ...prevState,
            [name]: {
                ...prevState[name],
                [key]: value
            }
        }));
    };

    const a11yProps = (index) => {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    };

    return AwesomeSliderSuccess ? (
        <div>
            <ToastContainer />
            <form noValidate autoComplete="off" className="Awesome" onSubmit={handleSubmit}>
                <AppBar position="static">
                    <Tabs value={tab} onChange={handleTabChange} aria-label="simple tabs example">
                        <Tab label="English Tab" {...a11yProps(0)} />
                        <Tab label="Armenian Tab" {...a11yProps(1)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={tab} index={0}>
                    <div className="title-field">
                        <TextField
                            id="en-title"
                            className="en-awesome-title"
                            placeholder="Title"
                            fullWidth
                            margin="normal"
                            multiline={true}
                            variant="filled"
                            value={form.en.title}
                            onChange={(e) => handleInputChange('en','title', e.target.value)}
                        />
                    </div>
                    <div className="description-field">
                        <FroalaEditor
                            handleInputChange={handleInputChange}
                            lang="en"
                            form={form}
                        />
                    </div>
                </TabPanel>
                <TabPanel value={tab} index={1}>
                    <div className="title-field">
                        <TextField
                            id="arm-title"
                            className="arm-awesome-title"
                            placeholder="Title"
                            fullWidth
                            margin="normal"
                            multiline={true}
                            variant="filled"
                            value={form.arm.title}
                            onChange={(e) => handleInputChange('arm', 'title', e.target.value)}
                        />
                    </div>
                    <div className="description-field">
                        <FroalaEditor
                            handleInputChange={handleInputChange}
                            lang="arm"
                            form={form}
                        />
                    </div>
                </TabPanel>
                <div className="upload-field">
                    <FilePond
                        image={image}
                        setImage={setImage}
                    />
                </div>
                <div className="submit-box">
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        className={classes.button}
                        type="submit"
                        startIcon={<SaveIcon/>}
                    >
                        Update
                    </Button>
                </div>
            </form>
        </div>
    ): <Spinner />
};

AwesomeSlider.propTypes = {
    AwesomeSliderUpdateSuccess: PropTypes.bool.isRequired,
    AwesomeSliderUpdateError: PropTypes.bool.isRequired,
    UpdateAwesomeSlider: PropTypes.func.isRequired,
    //
    AwesomeSliderSuccess: PropTypes.bool.isRequired,
    AwesomeSliderError: PropTypes.bool.isRequired,
    awesomeSliderData: PropTypes.object.isRequired,

};

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
};

const mapStateToProps = (state) => ({
    AwesomeSliderUpdateSuccess: state.AdminAwesomeSlider.AwesomeSliderUpdateSuccess,
    AwesomeSliderUpdateError: state.AdminAwesomeSlider.AwesomeSliderUpdateError,
    //
    AwesomeSliderSuccess: state.AdminAwesomeSlider.AwesomeSliderSuccess,
    awesomeSliderData: state.AdminAwesomeSlider.awesomeSliderData,
    AwesomeSliderError: state.AdminAwesomeSlider.AwesomeSliderError,
});

const mapDispatchToProps = (dispatch) => {
    return {
        UpdateAwesomeSlider: (data) => dispatch(AwesomeSliderUpdateRequest(data)),
        //
        GetAwesomeSliderData: () => dispatch(Admin_AwesomeSliderRequest()),
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(AwesomeSlider);