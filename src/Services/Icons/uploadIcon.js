import { axiosInstance } from '../../Config/Axios/axiosInstance';

export default (icon, query, language, page) => axiosInstance.put(`admin/${page}/upload-icon`, { icon, field: query, language });