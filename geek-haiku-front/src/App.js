import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import './App.css';
import Layout from './hoc/Layout/Layout';
import Main from "./containers/Main/Main";
import About from "./containers/About/About";
import Auth from "./containers/Auth/Auth";
import HaikuCreator from "./containers/HaikuCreator/HaikuCreator";
import Register from "./containers/Register/Register";
import NotFoundPage from "./containers/NotFoundPage/NotFoundPage";
import Sandbox from "./containers/Sandbox/Sandbox";
import HighSpeedPrinting from "./containers/Sandbox/HighSpeedPrinting/HighSpeedPrinting";

function App() {
    return (
        <Layout>
            <Switch>
                <Route path={'/about'} component={About}/>
                <Route path={'/create'} component={HaikuCreator}/>
                <Route path={'/auth'} component={Auth}/>
                <Route path={'/register'} component={Register}/>
                <Route path={'/sandbox/highSpeedPrinting'} component={HighSpeedPrinting}/>
                <Route path={'/sandbox/jsQuiz'} />
                <Route path={'/sandbox/organizer'} />
                <Route path={'/sandbox'} component={Sandbox}/>
                <Route exact path={'/'} component={Main}/>
                <Route path={'/404'} component={NotFoundPage}/>
                <Redirect to={'/404'}/>
            </Switch>
        </Layout>
    );
}

export default App;
