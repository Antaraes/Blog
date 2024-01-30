import { endLoading, startLoading } from "@/redux/blog/blogSlice";
import { store } from "@/redux/store";
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8880/api/v1",
  withCredentials: true,
});

API.interceptors.request.use(
  (config) => {
    const accessToken = store.getState().user.accessToken;

    if (accessToken) {
      config.headers["Authorization"] = accessToken;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

API.interceptors.request.use(
  (config) => {
    const publicRoutes = ["/", "/blog/blogs/filter", "/auth/signin", "/auth/signout"];

    if (publicRoutes.includes(config.url)) {
      delete config.headers["Authorization"];
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

export default API;
