import axios from 'axios'
import store from '../store/index';


axios.interceptors.request.use(function (config) {
    const baseApiUrl = 'http://localhost:3333';
    const token = store.getters.token;
    const n = baseApiUrl.length;
    const requestToAPI = config.url.substring(0, n) === baseApiUrl;
    if (requestToAPI && token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, function (err) {
    return Promise.reject(err);
});