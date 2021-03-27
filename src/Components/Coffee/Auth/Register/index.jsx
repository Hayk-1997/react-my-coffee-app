import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Grid from '@material-ui/core/Grid';
import useLayoutStyles from '../../../Coffee/Layout/useStyles';
import Ellipsis from '../../../../assets/animation/ellipsis';
import { RegisterRequest } from '../../../../Redux/Coffee/Auth/Register/actions';
import usePrevious from '../../../../CustomHooks/usePrevious';
import MuiPhoneNumber from 'material-ui-phone-number';

const Register = (props) => {
  const {
    history,
    Register,
    RegisterSuccess,
    RegisterSuccessData,
    RegisterError,
    RegisterErrorMessage
  } = props;

  const classes = useLayoutStyles();
  const ref = useRef();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: ''
  });
  const [inputFocus, setInputFocus] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    confirmPassword: false,
  });
  const [errors, setErrors] = useState({});
  const previousRegisterSuccess = usePrevious(RegisterSuccess);
  const previousRegisterError = usePrevious(RegisterError);
  const savedProduct = localStorage.getItem('savedProduct');

  useEffect(() => {
    localStorage.removeItem('userToken');
  }, []);

  useEffect(() => {
    const { password, confirmPassword } = form;
    if (confirmPassword === password) {
      ref.current.resetValidations('isPasswordMatch');
    }
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
      return password === value;
    });
  }, [form]);

  useEffect(() => {
    if (previousRegisterSuccess === false && RegisterSuccess) {
      if (RegisterSuccessData.token) {
        localStorage.setItem('userToken', RegisterSuccessData.token);
        history.push(savedProduct ? `/coffee/single-product/${savedProduct}` : '/coffee/home');
      }
    } else if (previousRegisterError === false && RegisterError) {
      setErrors(RegisterErrorMessage.split('ValidationError: ')[1]);
    }
  }, [RegisterSuccess, RegisterError]);

  const updateField = e => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    Register(form);
  };

  const handleEllipsis = key => setInputFocus({ ...inputFocus, [key]: !inputFocus[key] });

  return (
    <section className={classes.root}>
      <ToastContainer />
      <div className="container">
        <div className="row">
          <div className="col-xl-8 ftco-animate m-auto">
            <ValidatorForm
              ref={ref}
              onSubmit={handleSubmit}
              className="billing-form ftco-bg-dark p-3 p-md-5"
            >
              <div className="row align-items-end">
                <div className="col-md-12">
                  <h3 className="mb-4 sign-in-heading">Sign Up to My Coffee</h3>
                  <Grid item xs={12}>
                    {
                      !inputFocus.firstName && !form.firstName && <Ellipsis style={{ left: 99, top: 5 }} />
                    }
                    <TextValidator
                      label="First Name"
                      name="firstName"
                      className={classes.textInput}
                      variant="filled"
                      onChange={updateField}
                      onFocus={() => handleEllipsis('firstName')}
                      onBlur={() => handleEllipsis('firstName')}
                      value={form.firstName}
                      validators={['required']}
                      errorMessages={['Field is required']}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    {
                      !inputFocus.lastName && !form.lastName && <Ellipsis style={{ left: 92, top: 2 }} />
                    }
                    <TextValidator
                      label="Last Name"
                      name="lastName"
                      variant="filled"
                      className={classes.textInput}
                      onChange={updateField}
                      onFocus={() => handleEllipsis('lastName')}
                      onBlur={() => handleEllipsis('lastName')}
                      value={form.lastName}
                      validators={['required']}
                      errorMessages={['Field is required']}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    {
                      !inputFocus.email && !form.email && <Ellipsis style={{ left: 113, top: 2 }} />
                    }
                    <TextValidator
                      label="Email Address"
                      name="email"
                      variant="filled"
                      onChange={updateField}
                      className={classes.textInput}
                      onFocus={() => handleEllipsis('email')}
                      onBlur={() => handleEllipsis('email')}
                      value={form.email}
                      validators={['required', 'isEmail']}
                      errorMessages={['Field is required', 'Wrong email type']}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    {
                      !inputFocus.password && !form.password && <Ellipsis style={{ left: 92, top: 2 }} />
                    }
                    <TextValidator
                      label="Password"
                      name="password"
                      type="text"
                      variant="filled"
                      className={classes.textInput}
                      onChange={updateField}
                      onFocus={() => handleEllipsis('password')}
                      onBlur={() => handleEllipsis('password')}
                      value={form.password}
                      validators={['required']}
                      errorMessages={['Field is required']}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    {
                      !inputFocus.confirmPassword && !form.confirmPassword && <Ellipsis />
                    }
                    <TextValidator
                      label="Confirm Password"
                      name="confirmPassword"
                      type="text"
                      variant="filled"
                      onChange={updateField}
                      onFocus={() => handleEllipsis('confirmPassword')}
                      onBlur={() => handleEllipsis('confirmPassword')}
                      value={form.confirmPassword}
                      className={classes.textInput}
                      validators={['isPasswordMatch', 'required']}
                      errorMessages={['Password mismatch', 'Field is required']}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <MuiPhoneNumber
                      name="phoneNumber"
                      label="Phone Number"
                      data-cy="user-phone"
                      variant="filled"
                      defaultCountry={'am'}
                      onlyCountries = {['am', 'ru']}
                      value={form.phoneNumber}
                      onChange={(e) => setForm({ ...form, phoneNumber: e })}
                      className={classes.phoneNumber}
                      fullWidth
                    />
                  </Grid>
                  <div className="w-100"/>
                  <Grid item lg={3} sm={12}>
                    <Button
                      className={`btn btn-primary p-3 px-xl-4 py-xl-3 ${classes.submitButton}`}
                      type="submit"
                      fullWidth
                    >
                      Sign Up
                    </Button>
                    <div className="form-button-group">
                      {/*   <div className="social-list">
                        <div className="social-box">
                          <SocialLogin
                            provider='facebook'
                            appId='135117591188065'
                            callback={handleSocialLogin}
                            onLoginFailure={onLoginFailure}
                          >
                            <span className="icon-facebook"/>
                          </SocialLogin>
                        </div>
                        <div className="social-box">
                          <SocialLogin
                            provider='google'
                            appId='78WMS-jy4gMXaD9xSwhMvKvq'
                            callback={() => handleSocialLogin()}
                            onLoginFailure={onLoginFailure}
                          >
                            <span className="icon-google"/>
                          </SocialLogin>
                        </div>
                        <div className="social-box">
                          <SocialLogin
                            provider='instagram'
                            appId='135117591188065'
                            callback={() => handleSocialLogin()}
                            onLoginFailure={onLoginFailure}
                          >
                            <span className="icon-instagram"/>
                          </SocialLogin>
                        </div>
                      </div>*/}
                    </div>
                  </Grid>
                </div>
              </div>
            </ValidatorForm>
          </div>
        </div>
      </div>
    </section>
  );
};

Register.propTypes = {
  history: PropTypes.object.isRequired,
  Register: PropTypes.func.isRequired,
  RegisterSuccess: PropTypes.bool.isRequired,
  RegisterSuccessData: PropTypes.object.isRequired,
  RegisterError: PropTypes.bool.isRequired,
  RegisterErrorMessage: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  RegisterSuccess: state.Register.RegisterSuccess,
  RegisterSuccessData: state.Register.RegisterSuccessData,
  RegisterError: state.Register.RegisterError,
  RegisterErrorMessage: state.Register.RegisterErrorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  Register: (data) => dispatch(RegisterRequest(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);