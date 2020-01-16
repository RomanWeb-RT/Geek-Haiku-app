import styles from "./Button.css"
import React from "react";

const Button = props => {
    const cls = [
        styles.Button,
        styles[props.type]
    ];

    return (
        <button onClick={props.onClick} className={cls.join(' ')} disabled={props.disabled}>
            {props.children}
        </button>
    )

};

export default Button