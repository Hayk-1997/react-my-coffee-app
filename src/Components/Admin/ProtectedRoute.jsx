import React, { useEffect, useRef, useState } from 'react';
import { Route, Redirect,  } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AdminTokenVerifyRequest } from '../../Redux/Admin/VerifyAdminToken/actions';
import Spinner from '../Spinner';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const {
    GetAdminTokenVerifySuccess, GetAdminTokenVerifyError, AdminLoginSuccess,
    history, VerifyAdminToken
  } = {...rest};
  const [tokenVerify, setVerifyToken] = useState(true);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('token');
  const prevSuccess = usePrevious(GetAdminTokenVerifySuccess);

  useEffect(() => {
    if (!token) {
      history.push('/admin/login');
    }
  }, []);

  useEffect(() => {
    if (prevSuccess === false && !GetAdminTokenVerifySuccess && token) {
      VerifyAdminToken(token);
    }
  }, [AdminLoginSuccess]);

  useEffect(() => {
    if (GetAdminTokenVerifySuccess) {
      setLoading(false);
      setVerifyToken(true);
    }
  }, [GetAdminTokenVerifySuccess]);
  useEffect(() => {
    if (GetAdminTokenVerifyError) {
      setVerifyToken(false);
      history.push('/admin/login');
    }
  },[GetAdminTokenVerifyError]);

  return !loading ? (
    <Route
      {...rest}
      render={props => {
        if (tokenVerify) {
          return <Component {...props} />;
        }
        else {
          return (
            <Redirect
              to={{
                pathname: '/admin/login',
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  ) : <Spinner />;
};

ProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  // Verify Admin Token
  VerifyAdminToken: PropTypes.func.isRequired,
  GetAdminTokenVerifySuccess:PropTypes.bool.isRequired,
  GetAdminTokenVerifyError:PropTypes.bool.isRequired,
  // Handle Admin Login
  AdminLoginSuccess:PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  GetAdminTokenVerifySuccess: state.VerifyAdminToken.GetAdminTokenVerifySuccess,
  GetAdminTokenVerifyError: state.VerifyAdminToken.GetAdminTokenVerifyError,
  AdminLoginSuccess: state.AdminLogin.AdminLoginSuccess,
});

const mapDispatchToProps = (dispatch) => ({
  VerifyAdminToken: (data) => dispatch(AdminTokenVerifyRequest(data)),
});

const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return !!ref.current;
};

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute);