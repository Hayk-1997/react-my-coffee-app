import React, {useEffect, useRef, useState} from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AdminTokenVerifyRequest } from '../../Redux/Admin/VerifyAdminToken/actions';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { GetAdminTokenVerifySuccess, GetAdminTokenVerifyError, AdminLoginSuccess } = {...rest};
    const [tokenVerify, setVerifyToken] = useState(true);
    const token = localStorage.getItem('token');
    const usePrevious = (value) => {
        const ref = useRef();
        useEffect(() => {
            ref.current = value;
        });
        return !!ref.current;
    };
    const prevSuccess = usePrevious(GetAdminTokenVerifySuccess);
    useEffect(() => {
        const { VerifyAdminToken } = {...rest};
        if (!prevSuccess && !GetAdminTokenVerifySuccess) {
            VerifyAdminToken(token);
            if (GetAdminTokenVerifySuccess) {
                setVerifyToken(true);
            }
        }
    }, [AdminLoginSuccess]);
    useEffect(() => {
        if (GetAdminTokenVerifyError) {
            setVerifyToken(false);
        }
    },[GetAdminTokenVerifyError]);
    return (
        <Route
            {...rest}
            render={props => {
                if (tokenVerify) {
                    return <Component {...props} />;
                } else {
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
    );
};

ProtectedRoute.propTypes = {
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

const mapDispatchToProps = (dispatch) => {
   return {
       VerifyAdminToken: (data) => dispatch(AdminTokenVerifyRequest(data)),
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute);