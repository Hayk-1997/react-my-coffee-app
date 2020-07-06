import validator from 'validator';
import { notify } from '../Config/Notify';

export const validateLoginForm = (form, verifyFields, setVerifyFields) => {
  emailValidator(form, verifyFields, setVerifyFields);
  passwordValidator(form, verifyFields, setVerifyFields);
};


const emailValidator = (form, verifyFields, setVerifyFields) => {
  if (!validator.isEmail(form.email)) {
    validationMessage( 'Incorrect Email!', 1500);
    changeVerifyField(setVerifyFields, verifyFields, 'email', false);
  } else {
    changeVerifyField(setVerifyFields, verifyFields, 'email', true);
  }
};

const passwordValidator = (form, verifyFields, setVerifyFields) => {
  if (!validator.isLength(form.password, { min: 6 })) {
    validationMessage( 'Password Min length must be (6)', 2500);
    changeVerifyField(setVerifyFields, verifyFields, 'password', false);
  } else {
    changeVerifyField(setVerifyFields, verifyFields, 'password', true);
  }
};

/// Validation Message Function
const validationMessage = (message, timeout) => notify(message, timeout, 'ERROR');

const changeVerifyField = (setVerifyFields, verifyFields, field, type) => {
  setVerifyFields((prevState) => ({
    ...prevState,
    [field]: type,
  }));
};