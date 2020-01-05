export function createControl(config, validation) {
    return {
        ...config,
        validation,
        valid: !validation,
        touched: false,
        value: ''
    }
}

export function validate(value, validation = null) {
    if (!validation) {
        return true
    }

    let isValid = true;

    if (validation.required) {
        isValid = value.trim() !== '' && isValid && value.length < 25
    }

    return isValid
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