import React from 'react';
import styles from './Sandbox.css';
import SandGrain from "../../components/SandGrain/SandGrain";
import {Link, Redirect, Route, Switch} from "react-router-dom";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

const Sandbox = ({match}) => {

    const sandGrains = [
        {name: "High Speed Printing", url: "highSpeedPrinting", image: "https://i.imgur.com/lJ2bwAL.png"}
    ];

    return (
        <div className={styles.Sandbox}>
            {sandGrains.map(({name, url, image}) => {
                return (
                    <Link to={`${match.url}/${url}`}>
                        <SandGrain name={name} image={image}/></Link>)
            })}
            <Switch>
                <Route exact path={match.path}/>
                <Route path={`${match.path}/:sandGrainId`}/>
                <Route path={'/404'} component={NotFoundPage}/>
                <Redirect to={'/404'}/>
            </Switch>
        </div>
    )

};

export default Sandbox;