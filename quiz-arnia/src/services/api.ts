import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/questions',
});

export default api;
