import React, {Component} from 'react';
import {Router, Route, Switch, Redirect, BrowserRouter} from "react-router-dom";
import '../Components/Admin/Styles/styles.css';
import routes from "../Routes/Admin/routes";


class AdminLayout extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isAuthenticated: !!localStorage.getItem('token'),
        };
    }

    getRoutes = routes => {
        const {isAuthenticated} = this.state;
        return routes.map((route) => {
            let RouteVal;
            if (!isAuthenticated) {
                RouteVal = route.component;
                debugger
                return (
                    <Route
                        key={route.id}
                        path={route.path}
                        render={(props) => {
                            return (
                                <RouteVal{...props} />
                            )
                        }}
                    />
                )
            } else {
                RouteVal = route.component;
                return (
                    <Route
                        key={route.id}
                        path={route.path}
                        exact
                        render={(props) => (
                            <RouteVal{...props} />
                        )}
                    />
                );
            }
        });
    };

    render () {
        return (
            <>
                {
                    this.getRoutes(routes)
                }
            </>
        )
    }
}

export default AdminLayout;