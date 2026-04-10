import axios from 'axios';

// Axios instance. It reads the base URL from the environment variables.
export const pokeApi = axios.create({
  baseURL: import.meta.env.VITE_POKEAPI_BASE_URL,
});