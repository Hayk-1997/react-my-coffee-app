import React, { useCallback, useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { OurStoryRequest, UpdateOurStoryRequest } from '../../../../../Redux/Admin/OurStory/actions';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { ToastContainer } from 'react-toastify';
import TabsAppBar from '../../../Main/TabsAppBar';
import TextEditor from '../../../../Main/TextEditor';
import FilePondEditor from '../../../../Main/FilePondEditor';
import Grid from '@material-ui/core/Grid';
import handleAdminInputChange from '../../../../../CustomHooks/handleAdminInputChange';
import Spinner from '../../../../Spinner';
import { notify } from '../../../../../Config/Notify';
import SubmitButton from '../../../../Main/SubmitButton';
import useStyles from '../../../Layout/useStyles';


const OurStory = (props) => {
  const {
    GetOurStory, OurStorySuccess, OurStoryData,
    UpdateOurStory, UpdateOurStorySuccess,
    UpdateOurStorySuccessMessage, UpdateOurStoryError,
    UpdateOurStoryErrorMessage
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
    GetOurStory();
  }, []);

  useEffect(() => {
    if (OurStorySuccess) {
      setForm(OurStoryData);
      setImage([
        {
          source: OurStoryData.image,
          options: {
            type: 'locale'
          }
        }
      ]);
      setLoading(false);
    }
  }, [OurStorySuccess]);

  useEffect(() => {
    if (UpdateOurStorySuccess) {
      setLoading(false);
      notify(UpdateOurStorySuccessMessage, 1000, 'SUCCESS');
    } else if (UpdateOurStoryError) {
      notify(UpdateOurStoryErrorMessage, 1000, 'ERROR');
    }
  }, [UpdateOurStorySuccess, UpdateOurStoryError]);

  const handleTabChange = useCallback((tab, lang) => {
    setTab(tab);
    setLang(lang);
  }, [lang, tab]);

  const handleSubmit = e => {
    e.preventDefault();
    UpdateOurStory({ image, form });
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
            <SubmitButton name="Update" />
          </ValidatorForm>
        </Grid>
      </div>
    </div>
  ) : <Spinner />;
};

OurStory.propTypes = {
  GetOurStory: PropTypes.func.isRequired,
  OurStorySuccess: PropTypes.bool.isRequired,
  OurStoryError: PropTypes.bool.isRequired,
  OurStoryData: PropTypes.object.isRequired,
  UpdateOurStory: PropTypes.func.isRequired,
  UpdateOurStorySuccess: PropTypes.bool.isRequired,
  UpdateOurStorySuccessMessage: PropTypes.string.isRequired,
  UpdateOurStoryError: PropTypes.bool.isRequired,
  UpdateOurStoryErrorMessage: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  OurStorySuccess: state.OurStory.OurStorySuccess,
  OurStoryError: state.OurStory.OurStoryError,
  OurStoryData: state.OurStory.OurStoryData,
  UpdateOurStorySuccess: state.OurStory.UpdateOurStorySuccess,
  UpdateOurStorySuccessMessage: state.OurStory.UpdateOurStorySuccessMessage,
  UpdateOurStoryError: state.OurStory.UpdateOurStoryError,
  UpdateOurStoryErrorMessage: state.OurStory.UpdateOurStoryErrorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  GetOurStory: () => dispatch(OurStoryRequest()),
  UpdateOurStory: (data) => dispatch(UpdateOurStoryRequest(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OurStory);