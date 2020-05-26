import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Register from "../Register/Register";
import Login from "../Login/Login";

class AuthComponent extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }
    render () {
        const {isAuthenticated} = this.props;
        return (
            <div className="login-page">
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
                            {
                                !isAuthenticated ? (
                                    <Login />
                                ): <Register />

                            }

                        </div>
                    </div>
                </div>
                <div className="copyrights text-center">
                    <p>Design by <a href="https://bootstrapious.com" className="external">Bootstrapious</a></p>
                </div>
            </div>
        )
    }
}

export default AuthComponent;