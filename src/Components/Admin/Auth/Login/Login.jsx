import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { AdminLoginRequest } from '../../../../Redux/Admin/Auth/Login/actions';
import { useForm } from '../../../../CustomHooks/useForm';
import { validateLoginForm } from '../../../../Helpers/validateForm';
import { notify } from '../../../../Config/Notify';
import usePrevious from '../../../../CustomHooks/usePrevious';
import '../../../Admin/Styles/styles.css';

const Login = (props) => {
  const {
    AdminLogin, AdminLoginSuccess, AdminLoginToken,
    AdminLoginError,
  } = props;
  const [form, handleFormChange] = useForm({ email: '', password: '' });
  const [verifyFields, setVerifyFields] = useState({
    password: false,
    email: false,
  });
  const previousAdminLoginSuccess = usePrevious(AdminLoginSuccess);

  useEffect(() => {
    localStorage.clear();
  }, []);

  useEffect(() => {
    if (AdminLoginSuccess && previousAdminLoginSuccess === false) {
      localStorage.setItem('token', AdminLoginToken );
      props.history.push('/admin/dashboard');
    }
  }, [AdminLoginSuccess]);

  useEffect(() => {
    if (AdminLoginError) {
      notify('Something went wrong', 1000, 'ERROR');
    }
  }, [AdminLoginError]);

  useEffect(() => {
    if (verifyFields.email && verifyFields.password) {
      AdminLogin(form);
    }
  }, [verifyFields]);
  const handleSubmit = event => {
    event.preventDefault();
    validateLoginForm(form, verifyFields, setVerifyFields);
  };

  return (
    <div className="login-page">
      <ToastContainer />
      <div className="container d-flex align-items-center">
        <div className="form-holder has-shadow">
          <div className="row">
            <div className="col-lg-6">
              <div className="info d-flex align-items-center">
                <div className="content">
                  <div className="logo">
                    <h1>Dashboard</h1>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form d-flex align-items-center">
                <div className="content">
                  <form className="form-validate mb-4" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <input id="login-email"
                        type="text"
                        name="email"
                        className="input-material"
                        placeholder="User Email"
                        value={form.email}
                        onChange={handleFormChange}
                      />
                    </div>
                    <div className="form-group">
                      <input id="login-password"
                        type="password"
                        name="password"
                        className="input-material"
                        placeholder="Password"
                        value={form.password}
                        onChange={handleFormChange}
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                  </form>
                  <small>Do not have an account? </small>
                  <Link to="/admin/register">Sign Up</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyrights text-center">
        <p>Design by
          <a href="https://bootstrapious.com/p/bootstrap-4-dark-admin" className="external">
             Bootstrapious
          </a>
        </p>
      </div>
    </div>
  );
};

Login.propTypes = {
  history: PropTypes.object.isRequired,
  AdminLoginSuccess: PropTypes.bool.isRequired,
  AdminLoginError: PropTypes.bool.isRequired,
  AdminLoginToken: PropTypes.string.isRequired,
  AdminLogin: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  AdminLoginSuccess: state.AdminLogin.AdminLoginSuccess,
  AdminLoginError: state.AdminLogin.AdminLoginError,
  AdminLoginToken: state.AdminLogin.AdminLoginToken,
});

const mapDispatchToProps = (dispatch) => ({
  AdminLogin: (data) => dispatch(AdminLoginRequest(data)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Login);


