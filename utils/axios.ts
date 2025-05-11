import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_PET_FOOD_FINDER_API_URL,
});

export default api;
