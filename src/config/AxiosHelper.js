import axios from "axios";
export const baseURL = "https://chat-backend.onrender.com";
export const httpClient = axios.create({
  baseURL: baseURL,
});
