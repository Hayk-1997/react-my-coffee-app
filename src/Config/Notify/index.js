import {toast} from "react-toastify";

export const notify = (message, autoClose) => toast(message,{
    draggable: false,
    autoClose: autoClose,
    type: toast.TYPE.ERROR,
    hideProgressBar: true
});