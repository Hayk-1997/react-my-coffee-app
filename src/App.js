import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch, BrowserRouter } from 'react-router-dom';
import CoffeeLayout from './Layouts/CoffeeLayout';
import AdminLayout from './Layouts/AdminLayout';
import { Provider } from 'react-redux';
import rootStore from './Redux/store';
import { ApolloProvider } from 'react-apollo';
import client from './graphQL/client';
import './App.css';

const hist = createBrowserHistory();

const App = () => (
  <ApolloProvider client={client}>
    <Provider store={rootStore.store}>
      <Router history={hist}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/coffee*" component={CoffeeLayout} />
            <Route path="/admin" component={AdminLayout} />
          </Switch>
        </BrowserRouter>
      </Router>
    </Provider>
  </ApolloProvider>
);
 
export default App;
