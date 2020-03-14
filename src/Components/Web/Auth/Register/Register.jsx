import React, {useState} from 'react';
import { connect } from 'react-redux';
import {ToastContainer} from "react-toastify";
import validator from "validator";
import {notify} from "../../../../Config/Notify";

const Register = () => {
    const [form, setState] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirm_password: '',
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
    const handleSubmit = event => {
        event.preventDefault();
        validateForm();
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

    return (
        <section className="ftco-section">
            <ToastContainer />
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 ftco-animate m-auto">
                        <form onSubmit={handleSubmit} className="billing-form ftco-bg-dark p-3 p-md-5">
                            <div className="row align-items-end">
                                <div className="col-md-12">
                                    <h3 className="mb-4 sign-in-heading">Sign Up to My Coffee</h3>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="first_name">First Name</label>
                                            <input
                                                id="first_name"
                                                type="text"
                                                className="form-control"
                                                placeholder=""
                                                name="first_name"
                                                value={form.first_name}
                                                onChange={updateField}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="last_name">Last Name</label>
                                            <input
                                                id="last_name"
                                                type="text"
                                                className="form-control"
                                                placeholder=""
                                                name="last_name"
                                                value={form.last_name}
                                                onChange={updateField}
                                            />
                                        </div>
                                    </div>
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
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="confirm_password">Confirm Password</label>
                                            <input
                                                id="confirm_password"
                                                type="password"
                                                className="form-control"
                                                placeholder=""
                                                name="confirm_password"
                                                value={form.confirm_password}
                                                onChange={updateField}
                                            />
                                        </div>
                                    </div>
                                    <div className="w-100"/>
                                    <div className="col-md-12">
                                        <div className="form-button-group">
                                            <div className="sign-in">
                                                <button className="btn btn-primary p-3 px-xl-4 py-xl-3">Sign Up</button>
                                            </div>
                                            <div className="social-list">
                                                <div className="social-box">
                                                    {/*<SocialLogin*/}
                                                    {/*    provider='facebook'*/}
                                                    {/*    appId='135117591188065'*/}
                                                    {/*    callback={handleSocialLogin}*/}
                                                    {/*    onLoginFailure={onLoginFailure}*/}
                                                    {/*>*/}
                                                    {/*    <span className="icon-facebook"/>*/}
                                                    {/*</SocialLogin>*/}
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
    )
};

const mapStateToProps = (state) => {

};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);