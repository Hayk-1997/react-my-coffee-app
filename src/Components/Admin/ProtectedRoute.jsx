import React, {useEffect, useRef, useState} from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from "prop-types";
import {GetAdminRequest} from '../../Redux/Admin/getAdmin/actions';
import { connect } from 'react-redux';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { GetAdminSuccess , AdminLoginSuccess, GetAdminError } = {...rest};
    const [tokenVerify, setVerifyToken] = useState(true);
    const token = localStorage.getItem('token');
    const usePrevious = (value) => {
        const ref = useRef();
        useEffect(() => {
            ref.current = value;
        });
        return !!ref.current;
    };
    const prevSuccess = usePrevious(GetAdminSuccess);
    useEffect(() => {
        const { GetAdmin } = {...rest};
        if (!prevSuccess && !GetAdminSuccess) {
            GetAdmin(token);
            if (GetAdminSuccess) {
                setVerifyToken(true);
            }
        }

    }, [AdminLoginSuccess]);
    useEffect(() => {
        if (GetAdminError) {
            setVerifyToken(false);
        }
    },[GetAdminError]);
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
    GetAdminSuccess:PropTypes.bool.isRequired,
    GetAdminError:PropTypes.bool.isRequired,
    AdminLoginSuccess:PropTypes.bool.isRequired,
    GetAdmin: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    GetAdminSuccess: state.GetAdminRequest.GetAdminSuccess,
    GetAdminError: state.GetAdminRequest.GetAdminError,
    AdminLoginSuccess: state.AdminLogin.AdminLoginSuccess,
});

const mapDispatchToProps = (dispatch) => {
   return {
       GetAdmin: (data) => dispatch(GetAdminRequest(data)),
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute);