import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3500', // Updated API base URL
});

export default api;
