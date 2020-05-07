import React from 'react';
// Require Editor JS files.
import 'froala-editor/js/froala_editor.pkgd.min.js';

// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

// Require Font Awesome.
// import 'font-awesome/css/font-awesome.css';

import FroalaEditor from 'react-froala-wysiwyg';

export default (props) => {
    const { handleInputChange, lang, form } = props;
    return (
        <FroalaEditor
            tag='textarea'
            model={form[lang].description}
            onModelChange={e => handleInputChange(lang, 'description', e)}
            config={{
                placeholder: 'Edit Me',
            }}
        />
    );
}