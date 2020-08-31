import React from 'react';
import PropTypes from 'prop-types';
// Require Editor JS files.
import 'froala-editor/js/froala_editor.pkgd.min.js';

// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

// Require Font Awesome.
// import 'font-awesome/css/font-awesome.css';

import FroalaEditor from 'react-froala-wysiwyg';

const TextEditor = (props) => {
  const { handleInputChange, lang, form, setForm } = props;
  return (
    <FroalaEditor
      tag='textarea'
      model={form[lang].description}
      onModelChange={e => handleInputChange(lang, 'description', e, setForm)}
    />
  );
};

TextEditor.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  setForm: PropTypes.func.isRequired,
  lang: PropTypes.string.isRequired,
  form: PropTypes.object.isRequired
};

export default TextEditor;