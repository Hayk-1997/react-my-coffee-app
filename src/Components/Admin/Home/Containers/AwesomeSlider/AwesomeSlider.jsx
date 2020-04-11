import React, {useState, useRef, useEffect} from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import './AwesomeSlider.css';
import Button from "@material-ui/core/Button";
import SaveIcon from '@material-ui/icons/Save';
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

// Our app
const AwesomeSlider = (props) => {
    const { UpdateAwesomeSlider } = props;
    // State
    const classes = useStyles();
    const [image, setImage] = useState([]);
    const editor = useRef(null);
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');
    const config = { readonly: false };
    const [renderFilePond, setRenderFilePond] = useState(false);
    const [renderEditor, setRenderEditor] = useState(false);

    useEffect(() => {
        setRenderFilePond(true);
        setRenderEditor(true);
    }, []);
    const handleUpdate = e => {
        e.preventDefault();
        UpdateAwesomeSlider({ image, title, description });
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
    const handleRenderEditor = () => {
        return (
            <JoditEditor
                // ref={useRef(null)}
                value={description}
                config={config}
                tabIndex={1}
                onBlur={newContent => setDescription(newContent)}
                onChange={newContent => {}}
            />
        )
    };

    return (
        <Grid container spacing={3} className={classes.container}>
            <Grid item lg={6} md={8} xs={12} className={classes.formContent}>
                <form noValidate autoComplete="off" className="Awesome" onSubmit={handleUpdate}>
                    <div className="title-field">
                        <TextField
                            id="filled-title"
                            className="awesome-title"
                            placeholder="Title"
                            fullWidth
                            variant="filled"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="description-field">
                        {
                            renderEditor ? (
                                handleRenderEditor()
                            ): null
                        }
                    </div>
                    <div className="upload-field">
                        {
                            renderFilePond ?
                                (
                                    handleRenderFilePond()
                                ): null
                        }
                    </div>
                    <div className="submit-box">
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            className={classes.button}
                            type="submit"
                            startIcon={<SaveIcon />}
                        >
                            Save
                        </Button>
                    </div>
                </form>
            </Grid>
        </Grid>
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