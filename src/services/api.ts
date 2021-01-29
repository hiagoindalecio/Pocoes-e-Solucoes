import axios from 'axios';

const api = axios.create({
    baseURL: 'http://ca5a1ce40360.ngrok.io' //base da API
});

export default api;