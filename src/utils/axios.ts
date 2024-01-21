import axios from "axios";
import { url } from "./api-service/api-config";

const Axios = axios.create({
    baseURL: url,
    timeout: 1000,
    headers: {
        Authorization: ''
    }
})

export { Axios }