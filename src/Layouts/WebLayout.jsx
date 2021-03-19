import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../Components/Web/Auth/Login';
import Layout from '../Components/Web/Layout/';
import Register from '../Components/Web/Auth/Register';
import NotFoundPage from '../Components/Web/NotFoundPage';
import '../Components/Web/Styles/style.css';

function WebLayout () {
  return (
    <>
      <Switch>
        <Route path="/coffee/login" component={Login} />
        <Route path="/coffee/register" component={Register} />
        <Route exact path="/coffee/not-found" component={NotFoundPage} />
        <Route exact path="/coffee/*" component={Layout} />
      </Switch>
    </>
  );
}

export default WebLayout;