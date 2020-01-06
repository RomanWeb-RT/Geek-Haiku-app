export function createControl(config, validation) {
    return {
        ...config,
        validation,
        valid: !validation,
        error: false,
        touched: false,
        value: ''
    }
}

export function validate(value, validation = null) {
    let isValid = true;

    if (!validation) {
        return true
    }
    if (validation.required) {
        isValid = value.trim() !== '' && isValid
    }

    return isValid
}

export function validateEmail(value) {
    let expression = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
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
            isFormValid = formInputs[control].valid && formInputs[control].error && isFormValid
        }
    }

    return isFormValid
}
