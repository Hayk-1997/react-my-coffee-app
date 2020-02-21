import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import validator from 'validator';
import { ToastContainer } from 'react-toastify';
import { notify } from "../../../../Config/Notify";
import { connect } from 'react-redux';
import { AdminLoginRequest } from '../../../../Redux/Admin/Auth/Login/actions';

const Login = (props) => {
    const [form, setState] = useState({
        email: '',
        password: '',
    });
    const [verify, setVerify] = useState({
        emailVerify: true,
        passwordVerify: true,
    });

    const updateField = e => {
        setState({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const validateForm = () => {
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
    const handleSubmit = event => {
        event.preventDefault();
        validateForm();
        if (verify.emailVerify && verify.passwordVerify) {
            const { AdminLogin } = props;
            AdminLogin(form);
        }
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
                                                   onChange={updateField}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input id="login-password"
                                                   type="password"
                                                   name="password"
                                                   className="input-material"
                                                   placeholder="Password"
                                                   value={form.password}
                                                   onChange={updateField}
                                            />
                                        </div>
                                        <button type="submit" className="btn btn-primary">Login</button>
                                    </form>
                                    {/*<a href="#" className="forgot-pass">Forgot Password?</a><br />*/}
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
    )
};

const mapStateToProps = (state) => ({
    AdminLoginSuccess: state.AdminLogin.AdminLoginSuccess
});
function mapDispatchToProps(dispatch) {
    return {
        AdminLogin: (data) => dispatch(AdminLoginRequest(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);


