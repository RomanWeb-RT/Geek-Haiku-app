import classes from './Haiku.css'
import React from "react";
import HaikuText from "./HaikuText/HaikuText";

const Haiku = props => {
    return (
        <div className={classes.Haiku}>
            <HaikuText text={props.text}/>
        </div>
    )
}

export default Haiku;