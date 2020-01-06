import styles from './Register.css'
import React, {Component} from 'react';
import Button from '../../components/Ui/Button/Button';
import Input from '../../components/Ui/Input/Input';
import {Redirect} from 'react-router-dom';
import {
    createControl,
    validate,
    validateForm,
    validatePassword,
    validateComparePasswords,
    validateEmail, validateOnEmpty
} from '../../form/registerFormFramework';

class Register extends Component {
    state = {
        isFormValid: false,
        redirect: false,
        formInputs: {
            email: createControl({
                label: 'E-mail',
                errorMessage: 'Неправильный формат почты',
                id: 1,
                type: 'email'
            }, {required: true}),
            password: createControl({
                label: 'Пароль',
                errorMessage: 'Пароль должен содержать 6-20 символов, включая как минимум одну цифру, одну прописную и одну строчную букву',
                id: 2,
                type: 'password'
            }, {required: true}),
            confirmPassword: createControl({
                label: 'Подтвердите пароль',
                errorMessage: 'Пароли не совпадают',
                id: 3,
                type: 'password'
            }, {required: true}),
        }
    };

    submitHandler = event => {
        event.preventDefault();
    };

    changeTextHandler = (value, controlName) => {
        const formInputs = {...this.state.formInputs};
        const control = {...formInputs[controlName]};
        control.touched = true;
        if (value.length <= 35)
            control.value = value;
        control.valid = validate(control);
        validateOnEmpty(control.value, control.validation) ?
            control.invalidMessage = control.errorMessage :
            control.invalidMessage = 'Поле не должно быть пустым';
        formInputs[controlName] = control;
        this.setState({
            formInputs,
            isFormValid: validateForm(formInputs)
        })
    };


    inputFieldsRender() {
        return Object.keys(this.state.formInputs).map((controlName) => {
            const control = this.state.formInputs[controlName];
            return (
                <Input
                    type={control.type}
                    label={control.label}
                    value={control.value}
                    valid={control.valid}
                    key={control.id}
                    shouldValidate={!!control.validation}
                    touched={control.touched}
                    invalidMessage={control.invalidMessage}
                    onChange={event => this.changeTextHandler(event.target.value, controlName)}/>
            )
        })
    }

    redirectRender() {
        if (this.state.redirect) {
            return <Redirect to="/"/>
        }
    }

    render() {
        return (
            <div className={styles.Register}>
                <div>
                    <form onSubmit={this.submitHandler} className={styles.RegisterForm}>
                        {this.inputFieldsRender()}
                        <hr/>
                        <hr/>
                        <Button type="successful" onClick={this.loginHandler}
                                disabled={!this.state.isFormValid}>Вход</Button>
                    </form>
                    {this.redirectRender()}
                </div>
            </div>
        )
    }
}

export default Register;