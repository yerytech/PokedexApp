import axios from "axios";

export const imageApi = axios.create({
  baseURL: "https://api.color.pizza/v1/",
});
