import axios from 'axios';

const api = axios.create({
  baseURL: 'https://629d09f03798759975df30e1.mockapi.io',
});

export default api;
