import classes from './HaikuText.css'
import React from "react";

const HaikuText = props => {

    console.log(props.text.firstLine)
    return (
        <div className={classes.HaikuText}>
            {
                props.text.firstLine === '' && props.text.secondLine === '' && props.text.thirdLine === '' ?
                    <p>~ Мятный самурай ~<br/>
                        ~ Любит сакэ навернуть ~<br/>
                        ~ Смотря на закат ~</p>
                    :
                    <p>~ {props.text.firstLine} ~<br/>
                        ~ {props.text.secondLine} ~<br/>
                        ~ {props.text.thirdLine} ~</p>
            }
        </div>
    )
};

export default HaikuText;