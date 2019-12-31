import classes from './HaikuCreator.css'
import React, {Component} from "react";
import Button from "../../components/Ui/Button/Button";
import Input from "../../components/Ui/Input/Input";
import Haiku from "../../components/Haiku/Haiku";
import {createControl, validate, validateForm} from "../../form/formFramework";
import ImageUploader from "../../components/ImageUploader/ImageUploader";

class HaikuCreator extends Component {
    state = {
        haiku: [],
        isFormValid: false,
        formInputs: {
            firstLine: createControl({
                label: 'Первая строка (5 слогов)',
                invalidMessage: 'Поле не должно быть пустым',
                id: 1
            }, {required: true}),
            secondLine: createControl({
                label: 'Вторая строка (7 слогов)',
                invalidMessage: 'Поле не должно быть пустым',
                id: 2
            }, {required: true}),
            thirdLine: createControl({
                label: 'Третья строка (5 слогов)',
                invalidMessage: 'Поле не должно быть пустым',
                id: 3
            }, {required: true})
        },
        image: 'https://www.stratege.ru/forums/files/gallery/1/3c6/d2f/2768790f9f637ba7413e6127d3471fb3.jpg'
    };

    submitHandler = event => {
        event.preventDefault();
    };

    createHaikuHandler = async (event) => {
        event.preventDefault();
        const haiku = this.state.haiku.concat();
        const {firstLine, secondLine, thirdLine} = this.state.formInputs;
        const result = {
            text: [
                {text: firstLine.value, id: firstLine.id},
                {text: secondLine.value, id: secondLine.id},
                {text: thirdLine.value, id: thirdLine.id}
            ],
            image: this.state.image
        };
        haiku.push(result);

        try {
            await fetch('')
        } catch (e) {
            console.error(e)
        }
    };

    changeTextHandler = (value, controlName) => {
        const formInputs = {...this.state.formInputs};
        const control = {...formInputs[controlName]};
        control.touched = true;
        control.value = value;
        control.valid = validate(control.value, control.validation);

        formInputs[controlName] = control;

        this.setState({
            formInputs,
            isFormValid: validateForm(formInputs)
        })
    };

    changeImageHandler = value => {
        let reader = new FileReader();
        reader.onloadend = () => {
            this.setState({
                image: reader.result
            })
        };
        reader.readAsDataURL(value)
    };

    inputFieldsRender() {
        return Object.keys(this.state.formInputs).map((controlName) => {
            const control = this.state.formInputs[controlName];
            return (
                <Input
                    label={control.label}
                    value={control.value}
                    valid={control.valid}
                    key={control.id}
                    shouldValidate={!!control.validation}
                    touched={control.touched}
                    invalidMessage={control.invalidMessage}
                    onChange={event => this.changeTextHandler(event.target.value, controlName)}
                />)
        })
    }

    render() {
        return (
            <div className={classes.HaikuCreator}>
                <div>
                    <h1>Ваше Хайку!</h1>
                    <form onSubmit={this.submitHandler}>
                        {this.inputFieldsRender()}
                        <hr/>
                        <ImageUploader
                            onChange={event => this.changeImageHandler(event.target.files[0])}
                        />
                        <hr/>
                        <h2>Предпросмотр</h2>
                        <Haiku
                            firstLine={this.state.formInputs.firstLine.value}
                            secondLine={this.state.formInputs.secondLine.value}
                            thirdLine={this.state.formInputs.thirdLine.value}
                            image={this.state.image}
                        />
                        <hr/>
                        <Button type="primary" onClick={this.createHaikuHandler} disabled={!this.state.isFormValid}>
                            Создать
                        </Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default HaikuCreator;