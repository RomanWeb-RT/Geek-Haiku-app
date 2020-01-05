import React from 'react';
import Layout from './hoc/Layout/Layout';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Main from "./containers/Main/Main";
import About from "./containers/About/About";
import Auth from "./containers/Auth/Auth";
import HaikuCreator from "./containers/HaikuCreator/HaikuCreator";

function App() {
    return (
        <Layout>
            <Switch>
                <Route path={'/about'} component={About}/>
                <Route path={'/auth'} component={Auth}/>
                <Route path={'/create'} component={HaikuCreator}/>
                <Route path={'/'} component={Main}/>
            </Switch>
        </Layout>
    );
}

export default App;
