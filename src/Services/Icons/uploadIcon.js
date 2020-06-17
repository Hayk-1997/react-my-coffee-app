import { axiosInstance } from '../../Config/Axios/axiosInstance';

export default (icon, field, language) => axiosInstance.put('admin/info/upload-icon', {icon, field, language});