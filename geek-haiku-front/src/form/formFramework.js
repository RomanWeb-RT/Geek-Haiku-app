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
    let isValid = true;

    if (!validation) {
        return true
    }
    if (validation.required) {
        isValid = value.trim() !== '' && isValid
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