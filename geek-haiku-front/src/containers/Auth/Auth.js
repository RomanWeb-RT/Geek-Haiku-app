import styles from './Auth.css'
import React, {Component} from "react";
import Button from "../../components/Ui/Button/Button";
import Input from "../../components/Ui/Input/Input";
import {Redirect} from "react-router-dom";
import {createControl} from "../../form/formFramework";

class Auth extends Component {
    state = {
        isFormValid: false,
        redirect: false,
        formInputs: {
            email: createControl({
                label: 'E-mail',
                invalidMessage: 'Поле не должно быть пустым',
                id: 1,
                value: '',
                type: 'email'
            }, {required: true}),
            password: createControl({
                label: 'Пароль',
                invalidMessage: 'Поле не должно быть пустым',
                id: 2,
                value: '',
                type: 'password'
            }, {required: true})
        }
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

    renderRedirect() {
        if (this.state.redirect) {
            return <Redirect to="/"/>
        }
    }

    render() {
        return (
            <div className={styles.Auth}>
                <div>
                    <form onSubmit={this.submitHandler} className={styles.AuthForm}>

                        {this.inputFieldsRender()}
                        <Button type="success" onClick={this.loginHandler}
                                disabled={!this.state.isFormValid}>Войти</Button>
                        <Button type="primary" onClick={this.registerHandler}
                                disabled={!this.state.isFormValid}>Регистрация</Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Auth;