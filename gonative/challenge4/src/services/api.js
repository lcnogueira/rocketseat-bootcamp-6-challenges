import axios from 'axios';

const api = axios.create({
  baseURL: 'http://7cfd0d35.ngrok.io',
});

export default api;
