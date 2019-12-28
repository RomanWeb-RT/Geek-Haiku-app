import classes from './HaikuText.css'
import React from "react";

const HaikuText = props => {
    return (
        <div className={classes.HaikuText}>
            <p>~ Мятный самурай ~<br/>
            ~ Любит сакэ навернуть ~<br/>
            ~ Смотря на закат ~</p>
        </div>
    )
};

export default HaikuText;