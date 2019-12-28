import React from 'react';
import Layout from './hoc/Layout/Layout';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Main from "./containers/Main/Main";

function App() {
    return (
        <Layout>
            <Switch>
                <Route path={'/'} component={Main}/>
            </Switch>
        </Layout>
    );
}

export default App;
