import axios from "axios";

export const AXIOS_CLIENT = axios.create({
  baseURL: 'http://localhost:4000/'
});
