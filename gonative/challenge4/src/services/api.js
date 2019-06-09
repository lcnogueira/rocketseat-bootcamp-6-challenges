import axios from 'axios';

const api = axios.create({
  baseURL: 'http://30e8e7c8.ngrok.io',
});

export default api;
