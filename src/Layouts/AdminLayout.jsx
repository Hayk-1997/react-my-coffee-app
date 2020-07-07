import React  from 'react';
import { Route, Switch } from 'react-router-dom';
import ProtectedRoute from '../Components/Admin/ProtectedRoute';
import Layout from '../Components/Admin/Layout/Layout';
import Login from '../Components/Admin/Auth/Login/Login';
import useStyles from '../Components/Admin/useStyles/useStyle';


const AdminLayout = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.layout}>
      <Switch>
        <Route path="/admin/login" component={Login} />
        <ProtectedRoute exact path="/admin/*"  component={Layout} {...props} />
      </Switch>
    </div>
  );
};


export default AdminLayout;