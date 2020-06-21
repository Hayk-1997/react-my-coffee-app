import { axiosInstance } from '../../Config/Axios/axiosInstance';

export default (icon, query, language) => axiosInstance.put('admin/info/upload-icon', { icon, field: query, language });