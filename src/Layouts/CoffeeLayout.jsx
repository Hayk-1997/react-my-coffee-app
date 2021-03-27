import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../Components/Coffee/Auth/Login';
import Layout from '../Components/Coffee/Layout/';
import Register from '../Components/Coffee/Auth/Register';
import NotFoundPage from '../Components/Coffee/NotFoundPage';
import '../Components/Coffee/Styles/style.css';

function CoffeeLayout () {
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

export default CoffeeLayout;