import React, {Component} from 'react';
import classes from './Main.css';
import Haiku from "../../components/Haiku/Haiku";

class Main extends Component {

    render() {
        return (
            <div className={classes.Main}>
                <Haiku/>
                <Haiku/>
                <Haiku/>
                <Haiku/>
                <Haiku/>
            </div>
        )
    }
}

export default Main;