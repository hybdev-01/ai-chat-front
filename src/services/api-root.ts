import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE;

export const clientApi = axios.create({
  baseURL: BASE_URL,
});
