import React  from "react";
import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "../Components/Admin/ProtectedRoute";
import Layout from "../Components/Admin/Layout/Layout";
import Login from "../Components/Admin/Auth/Login/Login";
import useStyles from "../Components/Admin/useStyles/useStyle";
import Register from "../Components/Admin/Auth/Register/Register";


const AdminLayout = () => {
    const classes = useStyles();
    return (
        <div className={classes.layout}>
            <Switch>
                <Route path="/admin/login" component={Login} />
                <Route path="/admin/register" component={Register} />
                <ProtectedRoute exact path="/admin/*"  component={Layout} />
                {/*<Route path="/admin/*" component={() => "404 NOT FOUND"} />*/}
            </Switch>
        </div>
    );
};


export default AdminLayout;