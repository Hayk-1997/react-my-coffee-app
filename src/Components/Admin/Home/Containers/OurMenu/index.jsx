import React, { useCallback, useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { ToastContainer } from 'react-toastify';
import TabsAppBar from '../../../Main/TabsAppBar';
import TextEditor from '../../../../Main/TextEditor';
import Grid from '@material-ui/core/Grid';
import handleAdminInputChange from '../../../../../CustomHooks/handleAdminInputChange';
import Spinner from '../../../../Spinner';
import { notify } from '../../../../../Config/Notify';
import SubmitButton from '../../../../Main/SubmitButton';
import useStyles from '../../../Layout/useStyles';
import { OurMenuRequest, UpdateOurMenuRequest, UploadImageRequest } from '../../../../../Redux/Admin/OurMenu/actions';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import usePrevious from '../../../../../CustomHooks/usePrevious';

const OurMenu = (props) => {
  const {
    API_URL, GetOurMenu, OurMenuSuccess, OurMenuData,
    UpdateOurMenu, UpdateOurMenuSuccess, UpdateOurMenuSuccessMessage,
    UpdateOurMenuError, UpdateOurMenuErrorMessage,
    UploadImage, UploadImageSuccess, UploadImageSuccessMessage, UploadImageError, UploadImageErrorMessage
  } = props;

  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const fields = {
    card1: '',
    card2: '',
    card3: '',
    card4: '',
  };
  const cards = {
    card1: { description: '' },
    card2: { description: '' },
    card3: { description: '' },
    card4: { description: '' },
  };
  const [form, setForm] = useState({ 
    en: { ...cards },
    am: { ...cards }
  });
  const [images, setImages] = useState({
    en: { ...fields },
    am: { ...fields }
  });
  const [tab, setTab] = useState(0);
  const [lang, setLang] = useState('en');
  const ref = useRef();
  const previousUpdateOurMenuSuccess = usePrevious(UpdateOurMenuSuccess);
  const previousUpdateOurMenuError = usePrevious(UpdateOurMenuError);
  const previousUploadImageSuccess = usePrevious(UploadImageSuccess);
  const previousUploadImageError = usePrevious(UploadImageError);

  useEffect(() => {
    GetOurMenu();
  }, []);

  useEffect(() => {
    if (OurMenuSuccess) {
      setLoading(false);
      setForm(OurMenuData);
    }
  }, [OurMenuSuccess]);

  useEffect(() => {
    if (UpdateOurMenuSuccess && previousUpdateOurMenuSuccess === false) {
      notify(UpdateOurMenuSuccessMessage, 1000, 'SUCCESS');
      setLoading(false);
    } else if (UpdateOurMenuError && previousUpdateOurMenuError === false) {
      notify(UpdateOurMenuErrorMessage, 1000, 'ERROR');
    }
  }, [UpdateOurMenuSuccess, UpdateOurMenuError]);

  useEffect(() => {
    if (UploadImageSuccess && previousUploadImageSuccess === false) {
      notify(UploadImageSuccessMessage, 1000, 'SUCCESS');
      setLoading(false);
    } else if (UploadImageError && previousUploadImageError === false) {
      notify(UploadImageErrorMessage, 1000, 'ERROR');
    }
  }, [UploadImageSuccess, UploadImageError]);

  const handleTabChange = useCallback((tab, lang) => {
    setTab(tab);
    setLang(lang);
  }, [lang, tab]);

  const handleInputChange = (lang, key, name, value) => {
    setForm((prevState) => ({
      ...prevState,
      [lang]: {
        ...prevState[lang],
        [key]: {
          ...prevState[lang][key],
          [name]: value
        }
      }
    }));
  };

  const handleImageChange = (lang, key, file) => {
    const reader = new FileReader();
    reader.onload = function(){
      const dataURL = reader.result;
      setImages((prevState) => ({
        ...prevState,
        [lang]: {
          ...prevState[lang],
          [key]: dataURL
        }
      }));
    };
    reader.readAsDataURL(file);
    UploadImage({ file, lang, field: key });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    UpdateOurMenu(form);
  };

  return !loading ? (
    <Grid className={classes.body}>
      <ToastContainer />
      <TabsAppBar
        handleTabChange={handleTabChange}
        tab={tab}
      />
      <Grid className={classes.root}>
        <Grid container spacing={3}>
          <ValidatorForm
            ref={ref}
            onSubmit={handleSubmit}
            className={classes.validatorForm}
          >
            <Grid item xs={12}>
              <TextEditor
                handleInputChange={handleAdminInputChange}
                setForm={setForm}
                lang={lang}
                form={form}
              />
            </Grid>
            <Grid container spacing={3}>
              <Grid item sm={12} md={3}>
                <Grid>
                  <TextValidator
                    label="Description"
                    margin="normal"
                    className={classes.textArea}
                    variant="outlined"
                    value={form[lang].card1.description}
                    validators={['required']}
                    errorMessages={['Description s required']}
                    onChange={(e) => handleInputChange(lang,'card1', 'description', e.target.value)}
                    name="card1-description"
                  />
                </Grid>
                <Grid className={classes.avatarField}>
                  <Grid className={classes.cardImage}>
                    <Avatar variant="square" src={images[lang].card1 || API_URL + form[lang].card1.image} />
                  </Grid>
                  <Grid>
                    <Button
                      variant="contained"
                      component="label"
                      startIcon={<CloudUploadIcon />}
                    >
                      Upload File
                      <input
                        type="file"
                        onChange={(e) => handleImageChange(lang,'card1', e.target.files[0])}
                        style={{ display: 'none' }}
                      />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sm={12} md={3}>
                <Grid>
                  <TextValidator
                    label="Description"
                    margin="normal"
                    className={classes.textArea}
                    variant="outlined"
                    value={form[lang].card2.description}
                    validators={['required']}
                    errorMessages={['Description s required']}
                    onChange={(e) => handleInputChange(lang,'card2', 'description', e.target.value)}
                    name="card2-description"
                  />
                </Grid>
                <Grid className={classes.avatarField}>
                  <Grid className={classes.cardImage}>
                    <Avatar variant="square" src={images[lang].card2 || API_URL + form[lang].card2.image} />
                  </Grid>
                  <Grid>
                    <Button
                      variant="contained"
                      component="label"
                      startIcon={<CloudUploadIcon />}
                    >
                      Upload File
                      <input
                        type="file"
                        onChange={(e) => handleImageChange(lang,'card2', e.target.files[0])}
                        style={{ display: 'none' }}
                      />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sm={12} md={3}>
                <Grid>
                  <TextValidator
                    label="Description"
                    margin="normal"
                    className={classes.textArea}
                    variant="outlined"
                    value={form[lang].card3.description}
                    validators={['required']}
                    errorMessages={['Description s required']}
                    onChange={(e) => handleInputChange(lang,'card3', 'description', e.target.value)}
                    name="card3-description"
                  />
                </Grid>
                <Grid className={classes.avatarField}>
                  <Grid className={classes.cardImage}>
                    <Avatar variant="square" src={images[lang].card3 || API_URL + form[lang].card3.image} />
                  </Grid>
                  <Grid>
                    <Button
                      variant="contained"
                      component="label"
                      startIcon={<CloudUploadIcon />}
                    >
                      Upload File
                      <input
                        type="file"
                        onChange={(e) => handleImageChange(lang,'card3', e.target.files[0])}
                        style={{ display: 'none' }}
                      />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sm={12} md={3}>
                <Grid>
                  <TextValidator
                    label="Description"
                    margin="normal"
                    className={classes.textArea}
                    variant="outlined"
                    value={form[lang].card4.description}
                    validators={['required']}
                    errorMessages={['Description s required']}
                    onChange={(e) => handleInputChange(lang,'card4', 'description', e.target.value)}
                    name="card4-description"
                  />
                </Grid>
                <Grid className={classes.avatarField}>
                  <Grid className={classes.cardImage}>
                    <Avatar variant="square" src={images[lang].card4 || API_URL + form[lang].card4.image} />
                  </Grid>
                  <Grid>
                    <Button
                      variant="contained"
                      component="label"
                      startIcon={<CloudUploadIcon />}
                    >
                      Upload File
                      <input
                        type="file"
                        onChange={(e) => handleImageChange(lang,'card4', e.target.files[0])}
                        style={{ display: 'none' }}
                      />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <SubmitButton name="Update" />
            </Grid>
          </ValidatorForm>
        </Grid>
      </Grid>
    </Grid>
  ) : <Spinner />;
};

OurMenu.propTypes = {
  API_URL: PropTypes.string.isRequired,
  GetOurMenu: PropTypes.func.isRequired,
  OurMenuSuccess: PropTypes.bool.isRequired,
  OurMenuData: PropTypes.object.isRequired,
  OurMenuError: PropTypes.bool.isRequired,
  UpdateOurMenu: PropTypes.func.isRequired,
  UpdateOurMenuSuccess: PropTypes.bool.isRequired,
  UpdateOurMenuSuccessMessage: PropTypes.string.isRequired,
  UpdateOurMenuError: PropTypes.bool.isRequired,
  UpdateOurMenuErrorMessage: PropTypes.string.isRequired,
  UploadImage: PropTypes.func.isRequired,
  UploadImageSuccess: PropTypes.bool.isRequired,
  UploadImageSuccessMessage: PropTypes.string.isRequired,
  UploadImageError: PropTypes.bool.isRequired,
  UploadImageErrorMessage: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  OurMenuSuccess: state.OurMenu.OurMenuSuccess,
  OurMenuData: state.OurMenu.OurMenuData,
  OurMenuError: state.OurMenu.OurMenuError,
  UpdateOurMenuSuccess: state.OurMenu.UpdateOurMenuSuccess,
  UpdateOurMenuSuccessMessage: state.OurMenu.UpdateOurMenuSuccessMessage,
  UpdateOurMenuError: state.OurMenu.UpdateOurMenuError,
  UpdateOurMenuErrorMessage: state.OurMenu.UpdateOurMenuErrorMessage,
  UploadImageSuccess: state.OurMenu.UploadImageSuccess,
  UploadImageSuccessMessage: state.OurMenu.UploadImageSuccessMessage,
  UploadImageError: state.OurMenu.UploadImageError,
  UploadImageErrorMessage: state.OurMenu.UploadImageErrorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  GetOurMenu: () => dispatch(OurMenuRequest()),
  UpdateOurMenu: (data) => dispatch(UpdateOurMenuRequest(data)),
  UploadImage: (data) => dispatch(UploadImageRequest(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(OurMenu);