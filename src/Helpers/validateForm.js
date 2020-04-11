import validator from 'validator';
import {notify} from "../Config/Notify";

export const validateForm = (verify, setVerify) => {
    if (!validator.isEmail(verify.email)) {
        __validateEmail(verify, setVerify);
    }
    if (!validator.isLength(verify.password, {min:8})) {
        __validatePassword(verify, setVerify);
    }
};

/// Validate Functions
const __validateEmail = (verify, setVerify) => {
    notify('Incorrect Email!', 1500);
    setVerify({
        ...verify,
        emailVerify: false
    });
};

const __validatePassword = (verify, setVerify) => {
    notify('Incorrect Password!', 2500);
    setVerify({
        ...verify,
        passwordVerify: false
    });
};