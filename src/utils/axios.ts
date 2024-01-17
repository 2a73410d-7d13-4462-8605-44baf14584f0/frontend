import axios from "axios";

const Axios = axios.create({
    baseURL: '',
    timeout: 1000,
    headers: {
        Authorization: ''
    }
})