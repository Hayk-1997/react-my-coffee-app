import React, { useEffect, useState } from "react";
import './Login.css';
import { OldSocialLogin as SocialLogin } from 'react-social-login'
import validator from 'validator';
import { ToastContainer } from 'react-toastify';
import { notify } from '../../../../Config/Notify';
import { connect } from 'react-redux';
import {SocialLoginRequest} from "../../../../Redux/Web/Auth/SocialLogin/actions";

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
    };
    const handleSocialLogin = (user, err) => {
        console.log('user',user)
        console.log('err', err)
        if (user) {
            const { SocialSignIn } = props;
            console.log(user);
            SocialSignIn(user);
            console.log(props);
        }
     };
    const onLoginFailure = (arg) => {
        console.log('arg', arg);
    };

    return (
        <section className="ftco-section">
            <ToastContainer />
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 ftco-animate m-auto">
                        <form onSubmit={handleSubmit} className="billing-form ftco-bg-dark p-3 p-md-5">
                            <div className="row align-items-end">
                                <div className="col-md-12">
                                    <h3 className="mb-4 sign-in-heading">Sign In to My Coffee</h3>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="email">Email Address</label>
                                            <input
                                                id="email"
                                                type="text"
                                                className="form-control"
                                                placeholder=""
                                                name="email"
                                                value={form.email}
                                                onChange={updateField}
                                            />
                                        </div>
                                    </div>
                                    <div className="w-100"/>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="password">Password</label>
                                            <input
                                                id="password"
                                                type="password"
                                                className="form-control"
                                                placeholder=""
                                                name="password"
                                                value={form.password}
                                                onChange={updateField}
                                            />
                                        </div>
                                    </div>
                                    <div className="w-100"/>
                                    <div className="col-md-12">
                                        <div className="form-button-group">
                                            <div className="sign-in">
                                                <button className="btn btn-primary p-3 px-xl-4 py-xl-3">Sign In</button>
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
                                                {/*<div className="social-box">*/}
                                                {/*    <SocialLogin*/}
                                                {/*        provider='google'*/}
                                                {/*        appId='78WMS-jy4gMXaD9xSwhMvKvq'*/}
                                                {/*        callback={() => handleSocialLogin()}*/}
                                                {/*        onLoginFailure={onLoginFailure}*/}
                                                {/*    >*/}
                                                {/*        <span className="icon-google"/>*/}
                                                {/*    </SocialLogin>*/}
                                                {/*</div>*/}
                                                {/*<div className="social-box">*/}
                                                {/*    <SocialLogin*/}
                                                {/*        provider='instagram'*/}
                                                {/*        appId='135117591188065'*/}
                                                {/*        callback={() => handleSocialLogin()}*/}
                                                {/*        onLoginFailure={onLoginFailure}*/}
                                                {/*    >*/}
                                                {/*        <span className="icon-instagram"/>*/}
                                                {/*    </SocialLogin>*/}
                                                {/*</div>*/}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
const mapStateToProps = (state) => ({

});
const mapDispatchToProps = (dispatch) => {
    return {
        SocialSignIn: (data) => dispatch(SocialLoginRequest(data))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);