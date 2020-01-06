import React from "react";
import styles from './Input.css'

function isInvalid({valid, touched, shouldValidate}) {
    return !valid && shouldValidate && touched
}

function isCorrect({error, touched, shouldValidate}) {
    return !error && shouldValidate && touched
}

const Input = props => {
    const inputType = props.type || 'text';
    const cls = [styles.Input];
    const htmlFor = `${inputType}-${Math.random()}`;

    if (isInvalid(props)) {
        cls.push(styles.invalid)
    }

    return (
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input type={inputType} id={htmlFor} value={props.value} onChange={props.onChange}/>
            {isInvalid(props) ? <span>{props.invalidMessage}</span> : null}
            {isCorrect(props) ? <span>{props.errorMessage}</span> : null}
        </div>
    )
};

export default Input