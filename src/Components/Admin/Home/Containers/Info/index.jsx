import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Admin_InfoRequest, Admin_UpdateInfoRequest } from '../../../../../Redux/Admin/Info/actions';
import TabsAppBar from '../../../Main/TabsAppBar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import SearchIconModal from '../../../Main/SearchIconModal';
import Spinner from '../../../../Spinner';
import Avatar from '@material-ui/core/Avatar';
import { notify } from '../../../../../Config/Notify';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import useStyles from '../../../Layout/useStyles';
import Typography from '@material-ui/core/Typography';
import SaveIcon from '@material-ui/icons/Save';

const Info = (props) => {
  const {
    GetAdminInfoData, InfoSuccess,
    InfoData, UpdateInfo,
    UpdateInfoSuccess, UpdateInfoError
  } = props;
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState(0);
  const [lang, setLang] = useState('en');
  const ref = useRef();
  const fields = {
    phone: { number: '', description: '', icon : {} },
    address: { title: '', description: '', icon : {} },
    workingHours: { title: '', description: '', icon : {} },
  };
  const [form, setForm] = useState({
    en: { ...fields },
    am: { ...fields },
  });
  const [isModalShow, setIsModalShow] = useState({
    phone: false,
    address: false,
    workingHours: false,
  });

  useEffect(() => {
    GetAdminInfoData();
  }, []);

  useEffect(() => {
    if (InfoSuccess) {
      setForm(InfoData);
      setLoading(false);
    }
  }, [InfoSuccess]);

  useEffect(() => {
    if (UpdateInfoSuccess) {
      notify('Data Updated Success', 1000, 'SUCCESS');
    }
  },[UpdateInfoSuccess]);

  useEffect(() => {
    if (UpdateInfoError) {
      notify('Something went wrong', 1000, 'ERROR');
    }
  },[UpdateInfoError]);

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

  const handleTabChange = useCallback((tab, lang) => {
    setTab(tab);
    setLang(lang);
  }, [lang, tab]);

  const handleSubmit = e => {
    e.preventDefault();
    UpdateInfo(form);
  };

  const handleClickOpen = (key) => {
    setIsModalShow((prevState) => ({
      ...prevState,
      [key]: true,
    }));
  };

  const handleClose = () => {
    setIsModalShow(() => ({
      phone: false,
      address: false,
      workingHours: false,
    }));
  };
  const updateIconField = (field, lang, icon) => {
    setForm((prevState) => ({
      ...prevState,
      [lang]: {
        ...prevState[lang],
        [field]: {
          ...prevState[lang][field],
          icon
        }
      }
    }));
  };

  return !loading ? (
    <div className={classes.body}>
      <ToastContainer />
      <TabsAppBar
        handleTabChange={handleTabChange}
        tab={tab}
      />
      <div className={classes.root}>
        <ValidatorForm
          ref={ref}
          onSubmit={handleSubmit}
          className={classes.validatorForm}
        >
          <Grid container>
            <Grid item lg={4} md={12} sm={12} xs={12} className={classes.box}>
              <Typography variant="h4" component="h4" color="primary">Phone Number</Typography>
              <Grid>
                <TextValidator
                  label="Phone Number"
                  margin="normal"
                  className={classes.textArea}
                  variant="outlined"
                  value={form[lang].phone.number}
                  validators={['required']}
                  errorMessages={['Phone s required']}
                  onChange={(e) => handleInputChange(lang,'phone', 'number', e.target.value)}
                  name="Phone-Number"
                />
              </Grid>
              <Grid>
                <TextValidator
                  label="Phone Description"
                  margin="normal"
                  className={classes.textArea}
                  variant="outlined"
                  value={form[lang].phone.description}
                  validators={['required']}
                  errorMessages={['Description s required']}
                  onChange={(e) => handleInputChange(lang,'phone','description', e.target.value)}
                  name="Phone-Number-Description"
                />
              </Grid>
              <Grid className={classes.avatarField}>
                <div className={classes.avatarLarge}>
                  <Avatar
                    src={form[lang].phone.icon.item.preview_url} />
                </div>
              </Grid>
              <div className={classes.iconSearchBox}>
                <Button variant="outlined" color="primary" onClick={() => handleClickOpen('phone')}>
                Open full-screen dialog
                </Button>
                {
                  isModalShow.phone ? (
                    <SearchIconModal
                      onClose={handleClose}
                      title="Phone Icons"
                      query="phone"
                      language={lang}
                      updateIconField={updateIconField}
                    />
                  ) : null
                }
              </div>
            </Grid>
            <Grid item lg={4} md={12} sm={12} xs={12} className={classes.box}>
              <Typography variant="h4" component="h4" color="primary">Address</Typography>
              <Grid>
                <TextValidator
                  label="Address"
                  margin="normal"
                  className={classes.textArea}
                  variant="outlined"
                  validators={['required']}
                  errorMessages={['Address s required']}
                  value={form[lang].address.title}
                  onChange={(e) => handleInputChange(lang,'address', 'title', e.target.value)}
                  name="Address"
                />
              </Grid>
              <Grid>
                <TextValidator
                  label="Description"
                  margin="normal"
                  className={classes.textArea}
                  variant="outlined"
                  value={form[lang].address.description}
                  validators={['required']}
                  errorMessages={['Description s required']}
                  onChange={(e) => handleInputChange(lang,'address','description', e.target.value)}
                  name="Address-Description"
                />
              </Grid>
              <Grid className={classes.avatarField}>
                <div className={classes.avatarLarge}>
                  <Avatar
                    src={form[lang].address.icon.item.preview_url} />
                </div>
              </Grid>
              <div className={classes.iconSearchBox}>
                <Button variant="outlined" color="primary" onClick={() => handleClickOpen('address')}>
                Open full-screen dialog
                </Button>
                {
                  isModalShow.address ? (
                    <SearchIconModal
                      onClose={handleClose}
                      title="Address Icons"
                      query="address"
                      language={lang}
                      updateIconField={updateIconField}
                    />
                  ) : null
                }
              </div>
            </Grid>
            <Grid item lg={4} md={12} sm={12} xs={12} className={classes.box}>
              <Typography variant="h4" component="h4" color="primary">Working Hours</Typography>
              <Grid>
                <TextValidator
                  label="Working Hours"
                  margin="normal"
                  className={classes.textArea}
                  variant="outlined"
                  validators={['required']}
                  errorMessages={['Working Hours s required']}
                  value={form[lang].workingHours.title}
                  onChange={(e) => handleInputChange(lang,'workingHours', 'title', e.target.value)}
                  name="Working-Hours"
                />
              </Grid>
              <Grid>
                <TextValidator
                  label="Description"
                  margin="normal"
                  className={classes.textArea}
                  variant="outlined"
                  validators={['required']}
                  errorMessages={['Description s required']}
                  value={form[lang].workingHours.description}
                  onChange={(e) => handleInputChange(lang,'workingHours', 'description', e.target.value)}
                  name="Working-Hour-Description"
                />
              </Grid>
              <Grid className={classes.avatarField}>
                <div className={classes.avatarLarge}>
                  <Avatar
                    src={form[lang].workingHours.icon.item.preview_url} />
                </div>
              </Grid>
              <div className={classes.iconSearchBox}>
                <Button variant="outlined" color="primary" onClick={() => handleClickOpen('workingHours')}>
                  Open full-screen dialog
                </Button>
                {
                  isModalShow.workingHours ? (
                    <SearchIconModal
                      onClose={handleClose}
                      title="Phone Icons"
                      query="workingHours"
                      language={lang}
                      updateIconField={updateIconField}
                    />
                  ) : null
                }
              </div>
            </Grid>
            <Grid item xs={3}>
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
            </Grid>
          </Grid>
        </ValidatorForm>
      </div>
    </div>
  ): <Spinner />;
};

Info.propTypes = {
  GetAdminInfoData: PropTypes.func.isRequired,
  InfoSuccess: PropTypes.bool.isRequired,
  InfoError: PropTypes.bool.isRequired,
  InfoData: PropTypes.object.isRequired,
  UpdateInfo: PropTypes.func.isRequired,
  UpdateInfoSuccess: PropTypes.bool.isRequired,
  UpdateInfoError: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  InfoSuccess: state.Info.InfoSuccess,
  InfoError: state.Info.InfoError,
  InfoData: state.Info.InfoData,
  UpdateInfoSuccess: state.Info.UpdateInfoSuccess,
  UpdateInfoError: state.Info.UpdateInfoError,
});

const mapDispatchToProps = (dispatch) => ({
  GetAdminInfoData: () => dispatch(Admin_InfoRequest()),
  UpdateInfo: (data) => dispatch(Admin_UpdateInfoRequest(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Info);