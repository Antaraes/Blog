import { endLoading, startLoading } from "@/redux/blog/blogSlice";
import { store } from "@/redux/store";
import axios from "axios";
import { refreshGenerateToken } from ".";
import { addAccessToken, logout } from "@/redux/user/userSlice";

const API = axios.create({
  baseURL: "http://10.1.40.36:8880/api/v1",
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
API.interceptors.response.use(
  (response) => response,
  async (error) => {
    const refreshToken = store.getState().user.refreshToken;

    if (error.response && error.response.status === 500) {
      try {
        const response = await refreshGenerateToken(refreshToken);
        const newAccessToken = response.data.data;
        console.log(newAccessToken);
        store.dispatch(addAccessToken(newAccessToken));
      } catch (refreshError) {
        store.dispatch(logout());
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

export default API;
