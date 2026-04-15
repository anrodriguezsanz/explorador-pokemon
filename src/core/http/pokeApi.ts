import axios from 'axios';

// Axios instance. It reads the base URL from .env.development
export const pokeApi = axios.create({
  baseURL: import.meta.env.VITE_POKEAPI_BASE_URL,
});