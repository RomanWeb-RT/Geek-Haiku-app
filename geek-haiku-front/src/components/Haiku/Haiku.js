import classes from './Haiku.css'
import React from "react";
import HaikuText from "./HaikuText/HaikuText";

const Haiku = props => {
    return (
        <div className={classes.Haiku} style={{background: `url(${props.image})`}}>
            <HaikuText text={props}/>
        </div>
    )
};

export default Haiku;