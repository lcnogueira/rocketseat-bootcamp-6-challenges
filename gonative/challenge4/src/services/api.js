import axios from 'axios';

const api = axios.create({
  baseURL: 'http://dd88ad14.ngrok.io',
});

export default api;
