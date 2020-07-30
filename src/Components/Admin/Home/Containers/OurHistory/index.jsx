import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import TabsAppBar from '../../../Main/TabsAppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import TextEditor from '../../../../Main/TextEditor';
import FilePondEditor from '../../../../Main/FilePondEditor';

const OurHistory = () => {
  const fields = { title: '', description: '' };
  const [form, setForm] = useState({
    en: fields,
    am: fields
  });
  const [tab, setTab] = useState(0);
  const [lang, setLang] = useState('en');
  const [image, setImage] = useState([
    {
      source: '',
      options: {
        type: 'locale'
      }
    }
  ]);
  const handleInputChange = (lang, key, value) => {
    setForm((prevState) => ({
      ...prevState,
      [lang]: {
        ...prevState[lang],
        [key]: value
      }
    }));
  };

  const handleTabChange = useCallback((tab, lang) => {
    setTab(tab);
    setLang(lang);
  }, [lang, tab]);

  const handleSubmit = e => {
    e.preventDefault();

  };

  return (
    <div>
      <ToastContainer />
      <form noValidate autoComplete="off" className="Awesome" onSubmit={handleSubmit}>
        <TabsAppBar
          handleTabChange={handleTabChange}
          tab={tab}
        />
        <div className="title-field">
          <TextField
            id={`${lang}-title`}
            className={`${lang}awesome-title`}
            placeholder="Title"
            fullWidth
            margin="normal"
            multiline={true}
            variant="filled"
            value={form[lang].title}
            onChange={(e) => handleInputChange(lang,'title', e.target.value)}
          />
        </div>
        <div className="upload-field">
          <FilePondEditor
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
  );
};

export default OurHistory;