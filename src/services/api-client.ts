import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "bff9012d7d7347ca8fc4a7f3911d47fd",
  },
});