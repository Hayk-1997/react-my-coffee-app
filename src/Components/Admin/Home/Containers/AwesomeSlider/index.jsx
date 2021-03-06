import React, { useState, useEffect, useCallback, useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  AwesomeSliderUpdateRequest,
  Admin_AwesomeSliderRequest
} from '../../../../../Redux/Admin/AwesomeSlider/actions';
import { notify } from '../../../../../Config/Notify';
import { ToastContainer } from 'react-toastify';
import FilePondEditor from '../../../../Main/FilePondEditor';
import Spinner from '../../../../Spinner';
import usePrevious from '../../../../../CustomHooks/usePrevious';
import TabsAppBar from '../../../Main/TabsAppBar';
import TextEditor from '../../../../Main/TextEditor';
import Grid from '@material-ui/core/Grid';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import handleAdminInputChange from '../../../../../CustomHooks/handleAdminInputChange';
import useStyles from '../../../Layout/useStyles';
import SubmitButton from '../../../../Main/SubmitButton';

const AwesomeSlider = (props) => {
  const {
    UpdateAwesomeSlider, GetAwesomeSliderData,
    AwesomeSliderSuccess, awesomeSliderData,
    AwesomeSliderUpdateSuccess, AwesomeSliderUpdateError
  } = props;

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
  const [loading, setLoading] = useState(false);
  const fields = { title: '', description: '' };
  const [form, setForm] = useState({ en: fields, am: fields });
  const [tab, setTab] = useState(0);
  const ref = useRef();

  useEffect(() => {
    GetAwesomeSliderData();
  }, []);

  useEffect(() => {
    if (AwesomeSliderSuccess) {
      const { en, am, image } = awesomeSliderData;
      const formData = {
        en: en, am: am
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
      setLoading(false);
    }
  }, [AwesomeSliderSuccess]);

  useEffect(() => {
    if (prevAwesomeSliderUpdateSuccess === false && AwesomeSliderUpdateSuccess) {
      notify('Data Updated Success', 1000, 'SUCCESS');
      setLoading(false);
    } else if (prevAwesomeSliderUpdateError === false && AwesomeSliderUpdateError) {
      notify('Something went wrong', 1000, 'ERROR');
    }
  }, [AwesomeSliderUpdateSuccess, AwesomeSliderUpdateError]);

  const handleSubmit = e => {
    e.preventDefault();
    UpdateAwesomeSlider({ image, form });
    setLoading(true);
  };

  const handleTabChange = useCallback((tab, lang) => {
    setTab(tab);
    setLang(lang);
  }, [lang, tab]);

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
              <TextValidator
                label="Title"
                margin="normal"
                className={classes.textArea}
                variant="outlined"
                value={form[lang].title}
                validators={['required']}
                errorMessages={['Field s required']}
                onChange={(e) => handleAdminInputChange(lang,'title', e.target.value, setForm)} //handleInputChange(lang,'title', e.target.value)}
                name="title"
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
            <SubmitButton name="Update" />
          </ValidatorForm>
        </Grid>
      </Grid>
    </Grid>
  ): <Spinner />;
};

AwesomeSlider.propTypes = {
  AwesomeSliderUpdateSuccess: PropTypes.bool.isRequired,
  AwesomeSliderUpdateError: PropTypes.bool.isRequired,
  UpdateAwesomeSlider: PropTypes.func.isRequired,
  GetAwesomeSliderData: PropTypes.func.isRequired,
  AwesomeSliderSuccess: PropTypes.bool.isRequired,
  AwesomeSliderError: PropTypes.bool.isRequired,
  awesomeSliderData: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  AwesomeSliderUpdateSuccess: state.AdminAwesomeSlider.AwesomeSliderUpdateSuccess,
  AwesomeSliderUpdateError: state.AdminAwesomeSlider.AwesomeSliderUpdateError,
  AwesomeSliderSuccess: state.AdminAwesomeSlider.AwesomeSliderSuccess,
  awesomeSliderData: state.AdminAwesomeSlider.awesomeSliderData,
  AwesomeSliderError: state.AdminAwesomeSlider.AwesomeSliderError,
});

const mapDispatchToProps = (dispatch) => ({
  UpdateAwesomeSlider: (data) => dispatch(AwesomeSliderUpdateRequest(data)),
  GetAwesomeSliderData: () => dispatch(Admin_AwesomeSliderRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AwesomeSlider);