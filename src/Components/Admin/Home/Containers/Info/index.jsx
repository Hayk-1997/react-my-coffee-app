import React, {useEffect, useState} from 'react';
import { ToastContainer } from 'react-toastify';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Admin_InfoRequest, Admin_UpdateInfoRequest } from '../../../../../Redux/Admin/Info/actions';
import useStyles from '../../useStyles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Grid from '@material-ui/core/Grid';
import SearchIconModal from './SearchIconModal';
import Spinner from '../../../../Spinner';
import Avatar from '@material-ui/core/Avatar';
import { notify } from '../../../../../Config/Notify';
import './Info.css';

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
  const handleTabChange = (tab, lang) => {
    setTab(tab);
    setLang(lang);
  };
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
    <div>
      <ToastContainer />
      <form noValidate autoComplete="off" className="Info" onSubmit={handleSubmit}>
        <AppBar position="static">
          <Tabs value={tab} aria-label="simple tabs example">
            <Tab label="English Tab" onClick={() => handleTabChange(0, 'en')} />
            <Tab label="Armenian Tab" onClick={() => handleTabChange(1, 'am')} />
          </Tabs>
        </AppBar>
        <div className="row container-box">
          <Grid container spacing={3}>
            <Grid item lg={4} md={6} xs={12}>
              <div className="phone-box">
                <span><h3>Phone Number</h3></span>
                <div className="phone-number">
                  <TextField
                    className="textField"
                    placeholder="Phone Number"
                    fullWidth
                    margin="normal"
                    multiline={true}
                    variant="filled"
                    value={form[lang].phone.number}
                    onChange={(e) => handleInputChange(lang,'phone', 'number', e.target.value)}
                  />
                </div>
                <div className="phone-description">
                  <TextField
                    className="textField"
                    placeholder="Description"
                    fullWidth
                    margin="normal"
                    multiline={true}
                    variant="filled"
                    value={form[lang].phone.description}
                    onChange={(e) => handleInputChange(lang,'phone','description', e.target.value)}
                  />
                </div>
                <div className={classes.avatarField}>
                  <div className={classes.avatarLarge}>
                    <Avatar
                      src={form[lang].phone.icon.item.preview_url} />
                  </div>
                </div>
                <div className="icon-search-box">
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
              </div>
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
              <div className="address-box">
                <span><h3>Address</h3></span>
                <div className="address-title">
                  <TextField
                    className="textField"
                    placeholder="Address"
                    fullWidth
                    margin="normal"
                    multiline={true}
                    variant="filled"
                    value={form[lang].address.title}
                    onChange={(e) => handleInputChange(lang,'address', 'title', e.target.value)}
                  />
                </div>
                <div className="address-description">
                  <TextField
                    className="textField"
                    placeholder="Description"
                    fullWidth
                    margin="normal"
                    multiline={true}
                    variant="filled"
                    value={form[lang].address.description}
                    onChange={(e) => handleInputChange(lang,'address', 'description', e.target.value)}
                  />
                </div>
                <div className={classes.avatarField}>
                  <div className={classes.avatarLarge}>
                    <Avatar
                      src={form[lang].address.icon.item.preview_url} />
                  </div>
                </div>
                <div className="icon-search-box">
                  <Button variant="outlined" color="primary" onClick={() => handleClickOpen('address')}>
                                        Open full-screen dialog
                  </Button>
                  {
                    isModalShow.address ? (
                      <SearchIconModal
                        onClose={handleClose}
                        title="Phone Icons"
                        query="address"
                        language={lang}
                        updateIconField={updateIconField}
                      />
                    ) : null
                  }
                </div>
              </div>
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
              <div className="workingHours-box">
                <span><h3>Working Hours</h3></span>
                <div className="workingHours-title">
                  <TextField
                    className="textField"
                    placeholder="198 West 21th Street"
                    fullWidth
                    margin="normal"
                    multiline={true}
                    variant="filled"
                    value={form[lang].workingHours.title}
                    onChange={(e) => handleInputChange(lang,'workingHours', 'title', e.target.value)}
                  />
                </div>
                <div className="workingHours-description">
                  <TextField
                    className="textField"
                    placeholder="Description"
                    fullWidth
                    margin="normal"
                    multiline={true}
                    variant="filled"
                    value={form[lang].workingHours.description}
                    onChange={(e) => handleInputChange(lang,'workingHours', 'description', e.target.value)}
                  />
                </div>
                <div className={classes.avatarField}>
                  <div className={classes.avatarLarge}>
                    <Avatar
                      src={form[lang].workingHours.icon.item.preview_url} />
                  </div>
                </div>
                <div className="icon-search-box">
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
              </div>
            </Grid>
          </Grid>
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
  InfoSuccess: state.AdminInfoData.InfoSuccess,
  InfoError: state.AdminInfoData.InfoError,
  InfoData: state.AdminInfoData.InfoData,
  UpdateInfoSuccess: state.AdminInfoData.UpdateInfoSuccess,
  UpdateInfoError: state.AdminInfoData.UpdateInfoError,
});

const mapDispatchToProps = (dispatch) => ({
  GetAdminInfoData: () => dispatch(Admin_InfoRequest()),
  UpdateInfo: (data) => dispatch(Admin_UpdateInfoRequest(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Info);