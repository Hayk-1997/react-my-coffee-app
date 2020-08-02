import React, { useCallback, useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { OurHistoryRequest, UpdateOurHistoryRequest } from '../../../../../Redux/Admin/OurHistory/actions';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { ToastContainer } from 'react-toastify';
import TabsAppBar from '../../../Main/TabsAppBar';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import TextEditor from '../../../../Main/TextEditor';
import FilePondEditor from '../../../../Main/FilePondEditor';
import Grid from '@material-ui/core/Grid';
import handleAdminInputChange from '../../../../../CustomHooks/handleAdminInputChange';
import useStyles from '../../../Layout/useStyles';
import Spinner from '../../../../Spinner';
import {notify} from '../../../../../Config/Notify';


const OurHistory = (props) => {
  const {
    GetOurHistory, OurHistorySuccess, OurHistoryData,
    UpdateOurHistory, UpdateOurHistorySuccess, UpdateOurHistoryError
  } = props;
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const fields = { title: '', subTitle: '', description: '' };
  const [form, setForm] = useState({ en: fields, am: fields });
  const [tab, setTab] = useState(0);
  const [lang, setLang] = useState('en');
  const ref = useRef();
  const [image, setImage] = useState([
    {
      source: '',
      options: {
        type: 'locale'
      }
    }
  ]);

  useEffect(() => {
    GetOurHistory();
  }, []);

  useEffect(() => {
    if (OurHistorySuccess) {
      setForm(OurHistoryData);
      setImage([
        {
          source: OurHistoryData.image,
          options: {
            type: 'locale'
          }
        }
      ]);
      setLoading(false);
    }
  }, [OurHistorySuccess]);

  useEffect(() => {
    if (UpdateOurHistorySuccess) {
      setLoading(false);
      notify('Data Updated Success', 1000, 'SUCCESS');
    } else if (UpdateOurHistoryError) {
      notify('Something went wrong', 1000, 'ERROR');
    }
  }, [UpdateOurHistorySuccess, UpdateOurHistoryError]);

  const handleTabChange = useCallback((tab, lang) => {
    setTab(tab);
    setLang(lang);
  }, [lang, tab]);

  const handleSubmit = e => {
    e.preventDefault();
    UpdateOurHistory({ image, form });
    setLoading(true);
  };

  return !loading ? (
    <div className={classes.body}>
      <ToastContainer />
      <TabsAppBar
        handleTabChange={handleTabChange}
        tab={tab}
      />
      <div className={classes.root}>
        <Grid container spacing={3}>
          <ValidatorForm
            ref={ref}
            onSubmit={handleSubmit}
            className={classes.validatorForm}
          >
            <Grid item xs={12}>
              <TextValidator
                label="Title"
                margin="normal"
                className={classes.textArea}
                variant="outlined"
                value={form[lang].title}
                validators={['required']}
                errorMessages={['Field s required']}
                onChange={(e) => handleAdminInputChange(lang,'title', e.target.value, setForm)}
                name="title"
              />
            </Grid>
            <Grid item xs={12}>
              <TextValidator
                label="SubTitle"
                margin="normal"
                className={classes.textArea}
                variant="outlined"
                value={form[lang].subTitle}
                validators={['required']}
                errorMessages={['SubTitle s required']}
                onChange={(e) => handleAdminInputChange(lang,'subTitle', e.target.value, setForm)}
                name="subTitle"
              />
            </Grid>
            <Grid item xs={12}>
              <TextEditor
                handleInputChange={handleAdminInputChange}
                setForm={setForm}
                lang={lang}
                form={form}
              />
            </Grid>
            <Grid item xs={12}>
              <FilePondEditor
                image={image}
                setImage={setImage}
              />
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
          </ValidatorForm>
        </Grid>
      </div>
    </div>
  ) : <Spinner />;
};

OurHistory.propTypes = {
  GetOurHistory: PropTypes.func.isRequired,
  OurHistorySuccess: PropTypes.bool.isRequired,
  OurHistoryError: PropTypes.bool.isRequired,
  OurHistoryData: PropTypes.object.isRequired,
  UpdateOurHistory: PropTypes.func.isRequired,
  UpdateOurHistorySuccess: PropTypes.bool.isRequired,
  UpdateOurHistoryError: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  OurHistorySuccess: state.OurHistory.OurHistorySuccess,
  OurHistoryError: state.OurHistory.OurHistoryError,
  OurHistoryData: state.OurHistory.OurHistoryData,
  UpdateOurHistorySuccess: state.OurHistory.UpdateOurHistorySuccess,
  UpdateOurHistoryError: state.OurHistory.UpdateOurHistoryError,
});

const mapDispatchToProps = (dispatch) => ({
  GetOurHistory: () => dispatch(OurHistoryRequest()),
  UpdateOurHistory: (data) => dispatch(UpdateOurHistoryRequest(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OurHistory);