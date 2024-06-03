// api/axiosClient.js
import axios from "axios";

// Set up default config for http requests here
// Please have a look at here `https://github.com/axios/axios#requestconfig` for the full list of configs
const axiosClient = axios.create({
  baseURL: "http://103.186.65.188/api",
  headers: {
    "content-type": "application/json",
  },
});
axiosClient.interceptors.request.use(async (config) => {
  // Handle token here ...
  return config;
});
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    console.log(response);
    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  }
);
export default axiosClient;
