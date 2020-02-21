import React, {useEffect, useState} from 'react';
import {Router, Redirect, Link, Route} from "react-router-dom";
import { connect } from 'react-redux';
import validator from "validator";
import {notify} from "../../../../Config/Notify";
import { ToastContainer } from 'react-toastify';
import {AdminRegisterRequest} from "../../../../Redux/Admin/Auth/Register/actions";
import Login from "../Login/Login";
import PropTypes from 'prop-types';


const Register = (props) => {
    const {AdminRegisterSuccess, AdminRegisterError, AdminRegister} = props;
    const [form, setState] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [verify, setVerify] = useState({
        nameVerify: true,
        emailVerify: true,
        passwordVerify: true,
    });
    const updateField = e => {
        setState({
            ...form,
            [e.target.name]: e.target.value,
        })
    };
    const validateForm = () => {
        if (!validator.isLength(form.name)) {
            notify('Incorrect User Name!', 1000);
            setVerify({
                ...verify,
                nameVerify: false
            });
        }
        if (!validator.isEmail(form.email)) {
            notify('Incorrect Email!', 1500);
            setVerify({
                ...verify,
                emailVerify: false
            });
        }
        if (!validator.isLength(form.password, {min:8})) {
            notify('Incorrect Password!', 2500);
            setVerify({
                ...verify,
                passwordVerify: false
            });
        }
    };
    const handleSubmit = e => {
        e.preventDefault();
        validateForm();
        console.log(props);
        if (verify.emailVerify && verify.passwordVerify && verify.nameVerify) {
            AdminRegister(form);
        }
        console.log(form);
    };
    useEffect(() => {
        if (AdminRegisterSuccess) {
            props.history.push('/admin/login');
        }
    }, [AdminRegisterSuccess]);

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
                        <div className="col-lg-6 bg-white">
                            <div className="form d-flex align-items-center">
                                <div className="content">
                                    <form className="text-left form-validate" onSubmit={handleSubmit}>
                                        <div className="form-group-material">
                                            <input id="register-username"
                                                   type="text"
                                                   name="name"
                                                   className="input-material"
                                                   placeholder='Name'
                                                   value={form.name}
                                                   onChange={updateField}
                                            />
                                        </div>
                                        <div className="form-group-material">
                                            <input id="register-email"
                                                   type="text"
                                                   name="email"
                                                   className="input-material"
                                                   placeholder='Email'
                                                   value={form.email}
                                                   onChange={updateField}
                                            />
                                        </div>
                                        <div className="form-group-material">
                                            <input id="register-password"
                                                   type="password"
                                                   name="password"
                                                   className="input-material"
                                                   placeholder='Password'
                                                   value={form.password}
                                                   onChange={updateField}
                                            />
                                        </div>
                                        <div className="form-group terms-conditions text-center">
                                            <input id="register-agree"
                                                   name="registerAgree"
                                                   type="checkbox"
                                                   required
                                                   value="1"
                                                   data-msg="Your agreement is required"
                                                   className="checkbox-template" />
                                            <label htmlFor="register-agree">
                                                I agree with the terms and policy
                                            </label>
                                        </div>
                                        <div className="form-group text-center">
                                            <input id="register"
                                                   type="submit"
                                                   value="Register"
                                                   className="btn btn-primary" />
                                        </div>
                                    </form>
                                    <small>Already have an account? </small>
                                    <Link to="/admin/login">Login</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyrights text-center">
                <p>Design by <a href="https://bootstrapious.com" className="external">Bootstrapious</a></p>
            </div>
        </div>
    )
};

Register.propTypes  = {
    AdminRegisterSuccess: PropTypes.bool.isRequired,
    AdminRegisterError: PropTypes.bool.isRequired,
    AdminRegister: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
    AdminRegisterSuccess: state.AdminRegister.AdminRegisterSuccess,
    AdminRegisterError: state.AdminRegister.AdminRegisterError,
});
const mapDispatchToProps = (dispatch) => {
    return {
        AdminRegister: (data) => dispatch(AdminRegisterRequest(data))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);