import React, {Component} from 'react';
import styles from './Sandbox.css';
import SandGrain from "../../components/SandGrain/SandGrain";
import {NavLink} from "react-router-dom";

class Sandbox extends Component {

    state = {
        sandGrains: [
            {name: "High Speed Printing", url: "highSpeedPrinting", image: "https://i.imgur.com/lJ2bwAL.png"},
            {name: "JavaScript Quiz", url: "jsQuiz", image: "https://i.imgur.com/lJ2bwAL.png"},
            {name: "Organizer", url: "organizer", image: "https://i.imgur.com/lJ2bwAL.png"}
        ]
    };

    render() {
        return (
            <div className={styles.Sandbox}>
                {this.state.sandGrains.map(({name, url, image}) => {
                    return (
                        <NavLink to={`/sandbox/${url}`} exact={true}>
                            <SandGrain name={name} image={image}/>
                            <hr/>
                        </NavLink>)
                })}
            </div>
        )
    };
}

export default Sandbox;