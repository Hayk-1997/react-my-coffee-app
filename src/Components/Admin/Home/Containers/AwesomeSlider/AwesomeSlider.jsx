import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  AwesomeSliderUpdateRequest,
  Admin_AwesomeSliderRequest
} from '../../../../../Redux/Admin/AwesomeSlider/actions';
import TabPanel from '../../../TypoGraphy';
import { notify } from '../../../../../Config/Notify';
import { ToastContainer } from 'react-toastify';
import FroalaEditor from './FroalaEditor';
import FilePond from './FilePond';
import Spinner from '../../../../Spinner';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './AwesomeSlider.css';
import useStyles from './useStyles';

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
  const [lang, setLang] = useState('en');
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
    if (!prevAwesomeSliderUpdateSuccess && AwesomeSliderUpdateSuccess) {
      notify('Data Updated Success', 1000, 'SUCCESS');
    }
  }, [AwesomeSliderUpdateSuccess]);

  useEffect(() => {
    if (!prevAwesomeSliderUpdateError && AwesomeSliderUpdateError) {
      notify('Something went wrong', 1000, 'ERROR');
    }
  }, [AwesomeSliderUpdateError]);

  const handleSubmit = e => {
    e.preventDefault();
    UpdateAwesomeSlider({ image, form });
  };
  const handleTabChange = (tab, lang) => {
    setTab(tab);
    setLang(lang);
  };
  const handleInputChange = (lang, key, value) => {
    setForm((prevState) => ({
      ...prevState,
      [lang]: {
        ...prevState[lang],
        [key]: value
      }
    }));
  };

  return AwesomeSliderSuccess ? (
    <div>
      <ToastContainer />
      <form noValidate autoComplete="off" className="Awesome" onSubmit={handleSubmit}>
        <AppBar position="static">
          <Tabs value={tab} aria-label="simple tabs example">
            <Tab label="English Tab" onClick={() => handleTabChange(0, 'en')} />
            <Tab label="Armenian Tab" onClick={() => handleTabChange(1, 'arm')} />
          </Tabs>
        </AppBar>
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
            onChange={(e) => handleInputChange('en','title', e.target.value)}
          />
        </div>
        <div className="description-field">
          <FroalaEditor
            handleInputChange={handleInputChange}
            lang={lang}
            form={form}
          />
        </div>
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
  ): <Spinner />;
};

AwesomeSlider.propTypes = {
  AwesomeSliderUpdateSuccess: PropTypes.bool.isRequired,
  AwesomeSliderUpdateError: PropTypes.bool.isRequired,
  UpdateAwesomeSlider: PropTypes.func.isRequired,
  //
  GetAwesomeSliderData: PropTypes.func.isRequired,
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
  return !!ref.current;
};

const mapStateToProps = (state) => ({
  AwesomeSliderUpdateSuccess: state.AdminAwesomeSlider.AwesomeSliderUpdateSuccess,
  AwesomeSliderUpdateError: state.AdminAwesomeSlider.AwesomeSliderUpdateError,
  //
  AwesomeSliderSuccess: state.AdminAwesomeSlider.AwesomeSliderSuccess,
  awesomeSliderData: state.AdminAwesomeSlider.awesomeSliderData,
  AwesomeSliderError: state.AdminAwesomeSlider.AwesomeSliderError,
});

const mapDispatchToProps = (dispatch) => ({
    UpdateAwesomeSlider: (data) => dispatch(AwesomeSliderUpdateRequest(data)),
    GetAwesomeSliderData: () => dispatch(Admin_AwesomeSliderRequest()),
});
export default connect(mapStateToProps, mapDispatchToProps)(AwesomeSlider);