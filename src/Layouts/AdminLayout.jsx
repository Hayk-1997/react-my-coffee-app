import React  from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from "../Components/Admin/Layout/Layout";
import Login from "../Components/Admin/Auth/Login/Login";
import ProtectedRoute from "../Components/Admin/ProtectedRoute";

const AdminLayout = () => {
    return (
        <>
            <Switch>
                <Route path="/admin/login" component={Login} />
                <ProtectedRoute exact path="/admin/*"  component={Layout} />
                {/*<Route path="/admin/*" component={() => "404 NOT FOUND"} />*/}
            </Switch>
        </>
    );
};


export default AdminLayout;