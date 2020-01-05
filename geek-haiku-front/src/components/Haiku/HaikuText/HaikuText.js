import classes from './HaikuText.css'
import React from "react";

const HaikuText = props => {
    return (
        <div className={classes.HaikuText}>
            {
                props.text[0].text === '' && props.text[1].text === '' && props.text[2].text === '' ?
                    <p>~ Мятный самурай ~<br/>
                        ~ Любит сакэ навернуть ~<br/>
                        ~ Смотря на закат ~</p>
                    :
                    <p>~ {props.text[0].text} ~<br/>
                        ~ {props.text[1].text} ~<br/>
                        ~ {props.text[2].text} ~</p>
            }
        </div>
    )
};

export default HaikuText;