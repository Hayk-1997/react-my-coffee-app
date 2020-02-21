import React from 'react';
import {createBrowserHistory} from "history";
import {Router, Route, Switch, Redirect, BrowserRouter} from "react-router-dom";
import WebLayout from './Layouts/WebLayout';
import AdminLayout from './Layouts/AdminLayout';
import {Provider} from 'react-redux';
import rootStore from './Redux/store';
import ReduxToastr from 'react-redux-toastr';
import ApolloClient from "apollo-boost";
import {ApolloProvider} from "react-apollo";

const client = new ApolloClient({
    uri: "http://localhost:4000/",
});

const hist = createBrowserHistory();

function App () {
    return (
        <ApolloProvider client={client}>
            <Provider store={rootStore.store}>
                <Router history={hist}>
                    <BrowserRouter>
                        {/*<Route exact path="/" render={() => <Redirect to="/coffee" />} />*/}
                        <Route path="/coffee" component={WebLayout}/>
                        <Route path="/admin" component={AdminLayout}/>
                    </BrowserRouter>
                </Router>
            </Provider>
        </ApolloProvider>
    );
}

export default App;
