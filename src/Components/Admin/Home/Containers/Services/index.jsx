import React, { useCallback, useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { ToastContainer } from 'react-toastify';
import { notify } from '../../../../../Config/Notify';
import TabsAppBar from '../../../Main/TabsAppBar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Spinner from '../../../../Spinner';
import Avatar from '@material-ui/core/Avatar';
import SearchIconModal from '../../../Main/SearchIconModal';
import handleOpenSearchIconModal from '../../../../../CustomHooks/handleOpenSearchIconModal';
import { ServicesRequest, UpdateServicesRequest } from '../../../../../Redux/Admin/Services/actions';
import usePrevious from '../../../../../CustomHooks/usePrevious';
import SubmitButton from '../../../../Main/SubmitButton';
import updateIcon from '../../../../../Helpers/updateIcon';
import useStyles from '../../../Layout/useStyles';


const Services = (props) => {
  const {
    GetServices, ServicesSuccess, ServicesData,
    UpdateServices, UpdateServicesSuccess, UpdateServicesSuccessMessage,
    UpdateServicesError, UpdateServicesErrorMessage
  } = props;

  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const fields = {
    box1: { title: '', description: '', icon : {} },
    box2: { title: '', description: '', icon : {} },
    box3: { title: '', description: '', icon : {} },
  };
  const [form, setForm] = useState({ en: fields, am: fields });
  const [tab, setTab] = useState(0);
  const [lang, setLang] = useState('en');
  const [isModalShow, setIsModalShow] = useState({
    box1: false,
    box2: false,
    box3: false,
  });
  const ref = useRef();
  const previousServicesSuccess = usePrevious(ServicesSuccess);
  const previousUpdateServicesSuccess = usePrevious(UpdateServicesSuccess);
  const previousUpdateServicesError = usePrevious(UpdateServicesError);

  useEffect(() => {
    GetServices();
  }, []);

  useEffect(() => {
    if (ServicesSuccess && previousServicesSuccess === false) {
      setForm(ServicesData);
      setLoading(false);
    }
  }, [ServicesSuccess]);

  useEffect(() => {
    if (UpdateServicesSuccess && previousUpdateServicesSuccess === false) {
      notify(UpdateServicesSuccessMessage, 1000, 'SUCCESS');
      setLoading(false);
    } else if (UpdateServicesError && previousUpdateServicesError === false) {
      notify(UpdateServicesErrorMessage, 1000, 'ERROR');
    }
  }, [UpdateServicesSuccess, UpdateServicesError]);

  const handleTabChange = useCallback((tab, lang) => {
    setTab(tab);
    setLang(lang);
  }, [lang, tab]);

  const handleClose = () => {
    setIsModalShow(() => ({
      box1: false,
      box2: false,
      box3: false,
    }));
  };

  const updateIconField = (field, lang, icon) => updateIcon(field, lang, icon, setForm);

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

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    UpdateServices(form);
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
            <Grid container>
              <Grid item lg={4} md={12} sm={12} xs={12} className={classes.box}>
                <Grid>
                  <TextValidator
                    label="Title"
                    margin="normal"
                    className={classes.textArea}
                    variant="outlined"
                    value={form[lang].box1.title}
                    validators={['required']}
                    errorMessages={['Title s required']}
                    onChange={(e) => handleInputChange(lang,'box1', 'title', e.target.value)}
                    name="box1-title"
                  />
                </Grid>
                <Grid>
                  <TextValidator
                    label="Description"
                    margin="normal"
                    className={classes.textArea}
                    variant="outlined"
                    value={form[lang].box1.description}
                    validators={['required']}
                    errorMessages={['Description s required']}
                    onChange={(e) => handleInputChange(lang,'box1', 'description', e.target.value)}
                    name="box1-description"
                  />
                </Grid>
                <Grid className={classes.avatarField}>
                  <Grid className={classes.avatarLarge}>
                    <Avatar src={form[lang].box1.icon.item.preview_url} />
                  </Grid>
                </Grid>
                <Grid className={classes.iconSearchBox}>
                  <Button variant="outlined" color="primary" onClick={() => handleOpenSearchIconModal('box2', setIsModalShow)}>
                    Open full-screen dialog
                  </Button>
                  {
                    isModalShow.box1 ? (
                      <SearchIconModal
                        onClose={handleClose}
                        query="box1"
                        language={lang}
                        page='services'
                        updateIconField={updateIconField}
                      />
                    ) : null
                  }
                </Grid>
              </Grid>
              <Grid item lg={4} md={12} sm={12} xs={12} className={classes.box}>
                <Grid>
                  <TextValidator
                    label="Title"
                    margin="normal"
                    className={classes.textArea}
                    variant="outlined"
                    value={form[lang].box2.title}
                    validators={['required']}
                    errorMessages={['Title s required']}
                    onChange={(e) => handleInputChange(lang,'box2', 'title', e.target.value)}
                    name="box2-title"
                  />
                </Grid>
                <Grid>
                  <TextValidator
                    label="Description"
                    margin="normal"
                    className={classes.textArea}
                    variant="outlined"
                    value={form[lang].box2.description}
                    validators={['required']}
                    errorMessages={['Description s required']}
                    onChange={(e) => handleInputChange(lang,'box2', 'description', e.target.value)}
                    name="box2-description"
                  />
                </Grid>
                <Grid className={classes.avatarField}>
                  <Grid className={classes.avatarLarge}>
                    <Avatar src={form[lang].box2.icon.item.preview_url} />
                  </Grid>
                </Grid>
                <Grid className={classes.iconSearchBox}>
                  <Button variant="outlined" color="primary" onClick={() => handleOpenSearchIconModal('box2', setIsModalShow)}>
                  Open full-screen dialog
                  </Button>
                  {
                    isModalShow.box2 ? (
                      <SearchIconModal
                        onClose={handleClose}
                        query="box2"
                        language={lang}
                        page='services'
                        updateIconField={updateIconField}
                      />
                    ) : null
                  }
                </Grid>
              </Grid>
              <Grid item lg={4} md={12} sm={12} xs={12} className={classes.box}>
                <Grid>
                  <TextValidator
                    label="Title"
                    margin="normal"
                    className={classes.textArea}
                    variant="outlined"
                    value={form[lang].box3.title}
                    validators={['required']}
                    errorMessages={['Title s required']}
                    onChange={(e) => handleInputChange(lang,'box3', 'title', e.target.value)}
                    name="box3-title"
                  />
                </Grid>
                <Grid>
                  <TextValidator
                    label="Description"
                    margin="normal"
                    className={classes.textArea}
                    variant="outlined"
                    value={form[lang].box3.description}
                    validators={['required']}
                    errorMessages={['Description s required']}
                    onChange={(e) => handleInputChange(lang,'box3', 'description', e.target.value)}
                    name="box3-description"
                  />
                </Grid>
                <Grid className={classes.avatarField}>
                  <Grid className={classes.avatarLarge}>
                    <Avatar src={form[lang].box3.icon.item.preview_url} />
                  </Grid>
                </Grid>
                <Grid className={classes.iconSearchBox}>
                  <Button variant="outlined" color="primary" onClick={() => handleOpenSearchIconModal('box3', setIsModalShow)}>
                  Open full-screen dialog
                  </Button>
                  {
                    isModalShow.box3 ? (
                      <SearchIconModal
                        onClose={handleClose}
                        query="box3"
                        language={lang}
                        page='services'
                        updateIconField={updateIconField}
                      />
                    ) : null
                  }
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

Services.propTypes = {
  GetServices: PropTypes.func.isRequired,
  ServicesData: PropTypes.object.isRequired,
  ServicesSuccess: PropTypes.bool.isRequired,
  ServicesError: PropTypes.bool.isRequired,
  UpdateServices: PropTypes.func.isRequired,
  UpdateServicesSuccess: PropTypes.bool.isRequired,
  UpdateServicesSuccessMessage: PropTypes.string.isRequired,
  UpdateServicesError: PropTypes.bool.isRequired,
  UpdateServicesErrorMessage: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  ServicesSuccess: state.Services.ServicesSuccess,
  ServicesData: state.Services.ServicesData,
  ServicesError: state.Services.ServicesError,
  UpdateServicesSuccess: state.Services.UpdateServicesSuccess,
  UpdateServicesSuccessMessage: state.Services.UpdateServicesSuccessMessage,
  UpdateServicesError: state.Services.UpdateServicesError,
  UpdateServicesErrorMessage: state.Services.UpdateServicesErrorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  GetServices: () => dispatch(ServicesRequest()),
  UpdateServices: (data) => dispatch(UpdateServicesRequest(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Services);