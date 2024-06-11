import axios from "axios";
import { getLocalStorage } from "./storage";

const StatusCode = {
  Unauthorized: "Unauthorized",
};

export function getBaseUrl() {
  let result = `backendURL`;
  return result;
}

export function getErrorBaseUrl() {
  let result = `${window.location.protocol}//${window.location.host}`;
  if (/(localhost|127.0.0.1|0.0.0.0)/.test(window.location.hostname)) {
    result = `${window.location.protocol}//localhost:3000`;
  }
  return result;
}

var createInstance = (url) =>
  axios.create({
    baseURL: `${getBaseUrl()}/${url}`,
  });

export const api = createInstance("api");

const onRequestBegin = (config) => {
  if (!/login/.test(config.baseURL)) {
    const token = `Bearer ${getLocalStorage("token")}`;
    config.headers.Authorization = token;
  }

  return config;
};

const onError = (error) => {
  if (/(401|403)/gi.test(error?.response?.status)) {
    if (error.response?.data?.message === StatusCode.Unauthorized) {
      const target = `/login`;
      window.location.href = target;
      console.log(error.response?.data?.message);
    }
  }
  if (/(400|404|403)/gi.test(error?.response?.status)) {
    if (Object.keys(error.response?.data)) {
      console.warn(error.response?.data);
    }
  }

  return Promise.reject(error);
};

api.interceptors.request.use(onRequestBegin, onError);

// Catch auth errors - redirect to login page
api.interceptors.response.use((param) => param, onError);
