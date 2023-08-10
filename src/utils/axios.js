import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://dev.abroadinquiry.com:5001",
});

export default axiosInstance;