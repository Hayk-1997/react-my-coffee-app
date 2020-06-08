import { axiosInstance } from '../../Config/Axios/axiosInstance';

export default action => axiosInstance.post('admin/upload-icon', action);