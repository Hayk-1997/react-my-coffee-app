import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Ellipsis from '../../../../assets/animation/ellipsis';
import { LoginRequest } from '../../../../Redux/Coffee/Auth/Login/actions';
import Button from '@material-ui/core/Button';
import usePrevious from '../../../../CustomHooks/usePrevious';
import { Link } from 'react-router-dom';
import { OldSocialLogin as SocialLogin } from 'react-social-login';
import { ToastContainer } from 'react-toastify';
import { connect } from 'react-redux';
import { SocialLoginRequest } from '../../../../Redux/Coffee/Auth/SocialLogin/actions';
import { useForm } from '../../../../CustomHooks/useForm';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import './styles.scss';
import useLayoutStyles from '../../../Coffee/Layout/useStyles';

const Login = (props) => {
  const {
    history,
    SocialSignIn,
    Login,
    LoginSuccess,
    LoginSuccessData
  } = props;

  const classes = useLayoutStyles();
  const savedProduct = localStorage.getItem('savedProduct');
  const [form, handleFormChange] = useForm({
    email: '',
    password: ''
  });
  const [inputFocus, setInputFocus] = useState({
    email: false,
    password: false,
  });

  const ref = useRef();
  const previousLoginSuccess = usePrevious(LoginSuccess);

  useEffect(() => {
    localStorage.removeItem('userToken');
  }, []);

  useEffect(() => {
    if (previousLoginSuccess === false && LoginSuccess) {
      localStorage.setItem('userToken', LoginSuccessData.token);
      history.push(savedProduct ? `/coffee/single-product/${savedProduct}` : '/coffee/home');
    }
  }, [previousLoginSuccess, LoginSuccess]);

  const handleEllipsis = key => setInputFocus({ ...inputFocus, [key]: !inputFocus[key] });

  const handleSubmit = event => {
    event.preventDefault();
    Login(form);
  };

  const handleSocialLogin = (user, err) => {
    console.log('user',user);
    console.log('err', err);
    if (user) {
      console.log(user);
      // SocialSignIn(user);
      console.log(props);
    }
  };
  const onLoginFailure = (arg) => {
    console.log('arg', arg);
  };

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
                  <Grid container>
                    <Grid item md={6} xs={12}>
                      <h3 className="mb-4 sign-in-heading">Sign In to My Coffee</h3>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <Grid container justify={'flex-end'}>
                        <Grid item>
                          <Button
                            component={Link}
                            to="/coffee/register">
                            Register
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    {
                      !inputFocus.email && !form.email && <Ellipsis style={{ left: 55, top: 11 }} />
                    }
                    <TextValidator
                      label="Email"
                      name="email"
                      className={classes.textInput}
                      variant="filled"
                      onChange={handleFormChange}
                      onFocus={() => handleEllipsis('email')}
                      onBlur={() => handleEllipsis('email')}
                      value={form.email}
                      validators={['required']}
                      errorMessages={['Field is required']}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    {
                      !inputFocus.password && !form.password && <Ellipsis style={{ left: 82, top: 11 }} />
                    }
                    <TextValidator
                      label="Password"
                      name="password"
                      type="text"
                      variant="filled"
                      className={classes.textInput}
                      onChange={handleFormChange}
                      onFocus={() => handleEllipsis('password')}
                      onBlur={() => handleEllipsis('password')}
                      value={form.password}
                      validators={['required']}
                      errorMessages={['Field is required']}
                      fullWidth
                    />
                  </Grid>
                  <div className="w-100"/>
                  <Grid item lg={12}>
                    <div className="form-button-group">
                      <div className="sign-in">
                        <Button
                          className="btn btn-primary p-3 px-xl-4 py-xl-3"
                          type="submit"
                        >
                          Sign In
                        </Button>
                      </div>
                      <div className="social-list">
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
                        {/*  <div className="social-box">
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
                        </div>*/}
                      </div>
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

Login.propTypes = {
  history: PropTypes.object.isRequired,
  SocialSignIn: PropTypes.func.isRequired,
  Login: PropTypes.func.isRequired,
  LoginSuccess: PropTypes.bool.isRequired,
  LoginError: PropTypes.bool.isRequired,
  LoginSuccessData: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  LoginSuccess: state.Login.LoginSuccess,
  LoginError: state.Login.LoginError,
  LoginSuccessData: state.Login.LoginSuccessData,
});

const mapDispatchToProps = (dispatch) => ({
  SocialSignIn: (data) => dispatch(SocialLoginRequest(data)),
  Login: (data) => dispatch(LoginRequest(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);