export function createControl(config, validation) {
    return {
        ...config,
        validation,
        valid: !validation,
        touched: false,
        value: '',
        invalidMessage: ''
    }
}

function validateIncorrectData(id, value) {
    switch (id) {
        case 1:
            return validateEmail(value);
        case 2:
            return validatePassword(value);
        default:
            return true;
    }
}

export function validateOnEmpty(value, validation = null) {
    if (validation.required)
        return value.trim() !== ''
}

export function validate(control) {
    if (!control.validation)
        return true;
    return !!(validateIncorrectData(control.id, control.value) && validateOnEmpty(control.value, control.validation));
}

export function validateEmail(value) {
    let expression = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    return !!value.match(expression);
}

export function validatePassword(value) {
    let expression = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    return !!value.match(expression);
}

export function validateComparePasswords(value, compareValue) {
    return value === compareValue;
}

export function validateForm(formInputs) {
    let isFormValid = true;

    for (let control in formInputs) {
        if (formInputs.hasOwnProperty(control)) {
            isFormValid = formInputs[control].valid && isFormValid
        }
    }

    return isFormValid
}
