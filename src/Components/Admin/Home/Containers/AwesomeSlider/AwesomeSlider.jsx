import React, {useState, useEffect, useRef} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { AwesomeSliderUpdateRequest, GetAwesomeSliderRequest } from '../../../../../Redux/Admin/AwesomeSlider/actions';
import FroalaEditor from './FroalaEditor';
import FilePond from './FilePond';
import './AwesomeSlider.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SaveIcon from '@material-ui/icons/Save';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { notify } from '../../../../../Config/Notify';
import { ToastContainer } from 'react-toastify';

const useStyles = makeStyles(theme => ({
    formContent: {
        textAlign: 'center',
    },
    button: {
        margin: theme.spacing(1),
    },
}));
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
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const AwesomeSlider = (props) => {
    const {
        UpdateAwesomeSlider, getAwesomeSliderData,
        GetAwesomeSliderSuccess, awesomeSliderData,
        GetAwesomeSliderUpdateSuccess, GetAwesomeSliderUpdateError
    } = props;
    // State
    const prevGetAwesomeSliderUpdateSuccess = usePrevious(GetAwesomeSliderUpdateSuccess);
    const prevGetAwesomeSliderUpdateError = usePrevious(GetAwesomeSliderUpdateError);
    const classes = useStyles();
    const [image, setImage] = useState([
        {
            source: "",
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
        getAwesomeSliderData();
    }, []);

    useEffect(() => {
        if (GetAwesomeSliderSuccess) {
            const { en, arm, image } = awesomeSliderData;
            const formData = {
                en: en[0], arm: arm[0]
            };
            setForm(formData);
            setImage(prevState => ([{ ...prevState, source: 'http://localhost:3100/' + image }]));
        }
    }, [GetAwesomeSliderSuccess]);

    useEffect(() => {
        if (prevGetAwesomeSliderUpdateSuccess === false && GetAwesomeSliderUpdateSuccess) {
            notify('Data Updated Success', 1000, 'SUCCESS');
        }
    }, [GetAwesomeSliderUpdateSuccess]);

    useEffect(() => {
        if (prevGetAwesomeSliderUpdateError === false && GetAwesomeSliderUpdateError) {
            notify('Something went wrong', 1000, 'ERROR');
        }
    }, [GetAwesomeSliderUpdateError]);
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
    return (
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

    )
};
AwesomeSlider.propTypes = {
    GetAwesomeSliderUpdateSuccess: PropTypes.bool.isRequired,
    GetAwesomeSliderUpdateError: PropTypes.bool.isRequired,
    UpdateAwesomeSlider: PropTypes.func.isRequired,
    //
    GetAwesomeSliderSuccess: PropTypes.bool.isRequired,
    GetAwesomeSliderError: PropTypes.bool.isRequired,

};
const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
};
const mapStateToProps = (state) => ({
    GetAwesomeSliderUpdateSuccess: state.AwesomeSliderData.GetAwesomeSliderUpdateSuccess,
    GetAwesomeSliderUpdateError: state.AwesomeSliderData.GetAwesomeSliderUpdateError,
    //
    GetAwesomeSliderSuccess: state.AwesomeSliderData.GetAwesomeSliderSuccess,
    awesomeSliderData: state.AwesomeSliderData.awesomeSliderData,
    GetAwesomeSliderError: state.AwesomeSliderData.GetAwesomeSliderError,
});
const mapDispatchToProps = (dispatch) => {
    return {
        UpdateAwesomeSlider: (data) => dispatch(AwesomeSliderUpdateRequest(data)),
        //
        getAwesomeSliderData: (data) => dispatch(GetAwesomeSliderRequest(data)),
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(AwesomeSlider);