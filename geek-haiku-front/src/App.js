import React from 'react';
import Layout from './hoc/Layout/Layout';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Main from "./containers/Main/Main";
import About from "./containers/About/About";

function App() {
    return (
        <Layout>
            <Switch>
                <Route path={'/about'} component={About}/>
                <Route path={'/'} component={Main}/>
            </Switch>
        </Layout>
    );
}

export default App;
