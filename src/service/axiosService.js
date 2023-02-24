import axios from "axios";


import { baseURL } from "../configs";


const auth = `Basic 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`
const axiosService = axios.create({ baseURL });

axiosService.interceptors.request.use((config) => {
    const access = auth;
    console.log(access);

    if (access) {
        config.headers.Authorization = access;
    }
    return config;
});


export {axiosService}