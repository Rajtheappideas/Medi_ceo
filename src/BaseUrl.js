import axios from "axios";

export default axios.defaults.baseURL =
  "https://cms-test-backend.nova.medi.ceo";

export const PostUrl = axios.create({
  baseURL: "https://cms-test-backend.nova.medi.ceo/",
  method: "POST",
});

export const GetUrl = axios.create({
  baseURL: "https://cms-test-backend.nova.medi.ceo/",
  method: "GET",
});
