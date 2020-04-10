import axios from 'axios';
import store from '../store/index';


const http = axios.create({
    baseURL: 'http://localhost:3333'
});

http.interceptors.request.use(function (config) {
    const baseApiUrl = 'http://localhost:3333';
    if(store.getters.auth){
        const token = store.getters.token;
        const n = baseApiUrl.length;
        const requestToAPI = config.baseURL.substring(0, n) === baseApiUrl;
        if (requestToAPI && token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
    }
    return config;
}, function (err) {
    return Promise.reject(err);
});

export default http;
