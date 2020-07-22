import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProtectedRoute from '../Components/Admin/ProtectedRoute';
import Layout from '../Components/Admin/Layout';
import Login from '../Components/Admin/Auth/Login/Login';


const AdminLayout = (props) => {
  return (
    <Switch>
      <Route path="/admin/login" component={Login} />
      <ProtectedRoute exact path="/admin/*" component={Layout} {...props} />
    </Switch>
  );
};


export default AdminLayout;