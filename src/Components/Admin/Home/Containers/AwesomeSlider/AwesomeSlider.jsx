import React, {useState, useRef, useEffect} from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import './AwesomeSlider.css';
import Button from "@material-ui/core/Button";
import SaveIcon from '@material-ui/icons/Save';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
// Require Editor JS files.
import 'froala-editor/js/froala_editor.pkgd.min.js';

// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

// Require Font Awesome.
// import 'font-awesome/css/font-awesome.css';

import FroalaEditor from 'react-froala-wysiwyg';

// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginImageCrop from 'filepond-plugin-image-crop';
import FilePondPluginImageEdit from 'filepond-plugin-image-edit';

// Import FilePond styles
import 'filepond-plugin-image-edit/dist/filepond-plugin-image-edit.css';
import "filepond/dist/filepond.min.css";

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import JoditEditor from "jodit-react";
import {AwesomeSliderRequest} from "../../../../../Redux/Admin/AwesomeSlider/actions";

// Register the plugins
registerPlugin(
    FilePondPluginImageExifOrientation,
    FilePondPluginImagePreview,
    FilePondPluginImageCrop,
    FilePondPluginImageEdit
);

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
    const { UpdateAwesomeSlider } = props;
    // State
    const classes = useStyles();
    const [image, setImage] = useState([]);
    const fields = { title: '', description: '' };
    const [form, setForm] = useState({
        en: fields,
        arm: fields
    });
    const [tab, setTab] = useState(0);
    const handleSubmit = e => {
        e.preventDefault();
        console.log(form);
        UpdateAwesomeSlider({ image, form });
    };
    const handleRenderFilePond = () => {
        return (
            <FilePond
                server={
                    {
                        url: 'http://localhost:3100/awesome-slider',
                        process: {
                            method: 'POST',
                            withCredentials: false,
                            name: 'image',
                            headers: {
                                'authorization': localStorage.getItem('token'),
                            },
                            timeout: 7000,
                            onload: null,
                            onerror: null
                        }
                    }
                }
                files={image}
                method="POST"
                instantUpload={false}
                onupdatefiles={(fileItems) => {
                    setImage(fileItems.map((fileItem) => fileItem.file));
                }}
            />
        )
    };
    const handleModelChange = data => {
        console.log(data);
    };
    const handleRenderEditor = (key) => {
        return (
            <FroalaEditor
                tag='textarea'
                model={form[key].description}
                onModelChange={e => handleInputChange(key, 'description', e)}
                config={{
                    placeholder: "Edit Me",
                    events : {
                        'focus' : function(e, editor) {
                            console.log(editor);
                        }
                    }
                }}
            />
        )
    };
    const handleTabChange = (event, newValue) => {
        setTab(newValue);
    };
    const handleInputChange = (name, key, value) => {
        console.log(name, key, value);
        setForm((prevState) => ({
            ...prevState,
            [name]: {
                ...prevState[name],
                [key]: value
            }
        }));
    };

    return (
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
                        onChange={(e) => handleInputChange('en', 'title', e.target.value)}
                    />
                </div>
                <div className="description-field">
                    { handleRenderEditor('en') }
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
                    { handleRenderEditor('arm') }
                </div>
            </TabPanel>
            <div className="upload-field">
                { handleRenderFilePond() }
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
    )
};
AwesomeSlider.propTypes = {
    GetAwesomeSliderSuccess: PropTypes.bool.isRequired,
    GetAwesomeSliderError: PropTypes.bool.isRequired,
    UpdateAwesomeSlider: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
    GetAwesomeSliderSuccess: state.UpdateAwesomeSlider.GetAwesomeSliderSuccess,
    GetAwesomeSliderError: state.UpdateAwesomeSlider.GetAwesomeSliderError,
});
const mapDispatchToProps = (dispatch) => {
    return {
        UpdateAwesomeSlider: (data) => dispatch(AwesomeSliderRequest(data)),
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(AwesomeSlider);