import axios from "axios";

export interface NetworkRequest {
  path: string;
  baseUrl?: string;
  data?: Record<string, any>;
}

const baseUrl = process.env.NODE_ENV === "development" ? "https://darwinia.network" : "https://darwinia.network";

const axiosInstance = axios.create();

axiosInstance.interceptors.response.use(
  (res) => {
    const { code } = res.data;
    let hasAuthFailed = false;
    switch (code) {
      case 4: {
        // Do something that relates to this server code response
        /* you may choose to log out the user,etc */
        hasAuthFailed = true;
        break;
      }
      case 0: {
        // Do something that relates to this server code response
        break;
      }
    }
    if (hasAuthFailed) {
      return;
    }
    return Promise.resolve(res);
  },
  (error) => {
    throw error;
  }
);

const http = {
  get: (requestData: NetworkRequest) => {
    return axiosInstance({
      // headers: {'auth-token': currentUser.getToken()},
      baseURL: requestData.baseUrl ? requestData.baseUrl : baseUrl,
      url: requestData.path,
      params: requestData.data,
      method: "GET",
    });
  },
  post: (requestData: NetworkRequest) => {
    return axiosInstance({
      // headers: {'auth-token': currentUser.getToken()},
      baseURL: requestData.baseUrl ? requestData.baseUrl : baseUrl,
      url: requestData.path,
      data: requestData.data,
      method: "POST",
    });
  },
  put: (requestData: NetworkRequest) => {
    return axiosInstance({
      // headers: {'auth-token': currentUser.getToken()},
      baseURL: requestData.baseUrl ? requestData.baseUrl : baseUrl,
      url: requestData.path,
      data: requestData.data,
      method: "PUT",
    });
  },
  delete: (requestData: NetworkRequest) => {
    return axiosInstance({
      // headers: {'auth-token': currentUser.getToken()},
      baseURL: requestData.baseUrl ? requestData.baseUrl : baseUrl,
      url: requestData.path,
      data: requestData.data,
      method: "DELETE",
    });
  },
};

export default http;
