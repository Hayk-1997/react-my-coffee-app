import React from 'react';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import WebLayout from './Layouts/WebLayout';

const client = new ApolloClient({
    uri: "http://localhost:4000/",
});


const hist = createBrowserHistory();

function App () {
    console.log('client', client);
    return (
        <ApolloProvider client={client} >
            <Router history={hist}>
                <Switch>
                    <Route path="/" render={props => <WebLayout {...props} />} />
                </Switch>
            </Router>
        </ApolloProvider>
    );
}

export default App;
