import React from 'react';
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import WebLayout from "./Layouts/WebLayout";

const hist = createBrowserHistory();

function App() {
  return (
    <Router history={hist}>
      <Switch>
        <Route path="/" render={props => <WebLayout {...props} />} />
      </Switch>
    </Router>
  );
}

export default App;
