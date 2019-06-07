import axios from 'axios';

const api = axios.create({
  baseURL: 'http://5a4c1ea5.ngrok.io',
});

export default api;
