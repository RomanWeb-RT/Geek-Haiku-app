import React from 'react';
import Layout from './hoc/Layout/Layout';
import './App.css';
import {Redirect, Route, Switch} from "react-router-dom";
import Main from "./containers/Main/Main";
import About from "./containers/About/About";
import Auth from "./containers/Auth/Auth";
import HaikuCreator from "./containers/HaikuCreator/HaikuCreator";
import Register from "./containers/Register/Register";
import NotFoundPage from "./containers/NotFoundPage/NotFoundPage";

function App() {
    return (
        <Layout>
            <Switch>
                <Route path={'/about'} component={About}/>
                <Route path={'/create'} component={HaikuCreator}/>
                <Route path={'/auth'} component={Auth}/>
                <Route path={'/register'} component={Register}/>
                <Route exact path={'/'} component={Main}/>
                <Route path={'/404'} component={NotFoundPage}/>
                <Redirect to={'/404'}/>
            </Switch>
        </Layout>
    );
}

export default App;
