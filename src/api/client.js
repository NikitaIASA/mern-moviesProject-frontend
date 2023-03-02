import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:4444/api",
});

export default client;
