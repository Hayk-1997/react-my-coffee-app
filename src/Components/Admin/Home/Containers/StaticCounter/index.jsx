import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { ToastContainer } from 'react-toastify';
import { StaticCounterRequest } from '../../../../../Redux/Admin/StaticCounter/actions';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Typography from '@material-ui/core/Typography';
import useStyles from '../../../Layout/useStyles';
import SubmitButton from '../../../../Main/SubmitButton';
import Spinner from '../../../../Spinner';

const StaticCounter = (props) => {
  const {
    GetStaticCounter,
    StaticCounterSuccess,
    StaticCounterData,
  } = props;

  const classes = useStyles();
  const ref = useRef();
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    coffeeBranches: '',
    awards: '',
    customers: '',
    staffs: '',
  });

  useEffect(() => {
    GetStaticCounter();
    console.log('GetStaticCounter');
  }, []);

  useEffect(() => {
    if (StaticCounterSuccess) {
      setLoading(false);
      setForm(StaticCounterData);
    }
  }, [StaticCounterSuccess]);
  
  const handleInputChange = (key, value) => {
    setForm((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return !loading ? (
    <Grid className={classes.body}>
      <ToastContainer />
      <Grid className={classes.root}>
        <ValidatorForm
          ref={ref}
          onSubmit={handleSubmit}
          className={classes.validatorForm}
        >
          <Grid container>
            <Grid item lg={3} md={12} className={classes.box}>
              <Typography variant="h4" component="h4" color="primary">Coffee Branches</Typography>
              <Grid>
                <TextValidator
                  label="Coffee Branches"
                  margin="normal"
                  type="number"
                  className={classes.textArea}
                  variant="outlined"
                  value={form.coffeeBranches}
                  validators={['required']}
                  errorMessages={['Coffee Branches required']}
                  onChange={(e) => handleInputChange('coffeeBranches', e.target.value)}
                  name="coffeeBranches"
                />
              </Grid>
            </Grid>
            <Grid item lg={3} md={12} className={classes.box}>
              <Typography variant="h4" component="h4" color="primary">Number of Awards</Typography>
              <Grid>
                <TextValidator
                  label="Number of Awards"
                  margin="normal"
                  type="number"
                  className={classes.textArea}
                  variant="outlined"
                  value={form.awards}
                  validators={['required']}
                  errorMessages={['Awards required']}
                  onChange={(e) => handleInputChange('awards', e.target.value)}
                  name="awards"
                />
              </Grid>
            </Grid>
            <Grid item lg={3} md={12} className={classes.box}>
              <Typography variant="h4" component="h4" color="primary">Happy Customer</Typography>
              <Grid>
                <TextValidator
                  label="Happy Customer"
                  margin="normal"
                  type="number"
                  className={classes.textArea}
                  variant="outlined"
                  value={form.customers}
                  validators={['required']}
                  errorMessages={['Happy Customer required']}
                  onChange={(e) => handleInputChange('customers', e.target.value)}
                  name="customers"
                />
              </Grid>
            </Grid>
            <Grid item lg={3} md={12} className={classes.box}>
              <Typography variant="h4" component="h4" color="primary">Staff</Typography>
              <Grid>
                <TextValidator
                  label="Staff"
                  margin="normal"
                  type="number"
                  className={classes.textArea}
                  variant="outlined"
                  value={form.staffs}
                  validators={['required']}
                  errorMessages={['Staff required']}
                  onChange={(e) => handleInputChange('staffs', e.target.value)}
                  name="staff"
                />
              </Grid>
            </Grid>
            <SubmitButton name="Update" />
          </Grid>
        </ValidatorForm>
      </Grid>
    </Grid>
  ) : <Spinner />;
};

StaticCounter.propTypes = {
  GetStaticCounter: PropTypes.func.isRequired,
  StaticCounterSuccess: PropTypes.bool.isRequired,
  StaticCounterData: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  StaticCounterSuccess: state.StaticCounter.StaticCounterSuccess,
  StaticCounterData: state.StaticCounter.StaticCounterData,
});


const mapDispatchToProps = (dispatch) => ({
  GetStaticCounter: () => dispatch(StaticCounterRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(StaticCounter);
