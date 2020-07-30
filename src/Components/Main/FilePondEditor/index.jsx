import React from 'react';
import PropTypes from 'prop-types';
// Import React FilePond
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageCrop from 'filepond-plugin-image-crop';
import FilePondPluginImageEdit from 'filepond-plugin-image-edit';

// Import FilePond styles
import 'filepond-plugin-image-edit/dist/filepond-plugin-image-edit.css';
import 'filepond/dist/filepond.min.css';

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

// Register the plugins
registerPlugin(
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginImageCrop,
  FilePondPluginImageEdit
);

const FilePondEditor = ({ image, setImage }) => {
  return (
    <FilePond
      server={
        {
          url: 'http://localhost:3100/admin/awesome-slider',
          process: {
            method: 'PUT',
            withCredentials: false,
            headers: {
              'authorization': localStorage.getItem('token'),
            },
            timeout: 7000,
            onload: null,
            onerror: null
          }
        }
      }
      files={ image }
      method="POST"
      instantUpload={false}
      onupdatefiles={(fileItems) => {
        setImage(fileItems.map((fileItem) => fileItem.file));
      }}
    />
  );
};

FilePondEditor.propTypes = {
  image: PropTypes.array,
  setImage: PropTypes.func.isRequired
};

export default FilePondEditor;