import { toast } from 'react-toastify';

export const notify = (message, autoClose, variant) => toast(message,{
    draggable: false,
    autoClose: autoClose,
    type: toast.TYPE[variant],
    hideProgressBar: true
});