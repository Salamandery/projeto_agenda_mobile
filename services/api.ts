import axios from "axios";

const api = axios.create({
  baseURL: "https://agendapj.herokuapp.com/",
});

export default api;
