import validator from 'validator';
import { notify } from '../Config/Notify';

export const validateForm = (form, verifyFields, setVerifyFields) => {
    if (!validator.isEmail(form.email)) {
        makeValidationMessage(setVerifyFields, verifyFields, "email", 'Incorrect Email!', 1500);
    }
    if (!validator.isLength(form.password, { min:8 })) {
        makeValidationMessage(setVerifyFields, verifyFields, "password", 'Password Min length must be (8)', 2500);
    }
};

/// Validation Message Function
const makeValidationMessage = (setVerifyFields, verifyFields, field,  message, timeout) => {
    notify(message, timeout, 'ERROR');
    setVerifyFields({
        ...verifyFields,
        [field]: false,
    });
};