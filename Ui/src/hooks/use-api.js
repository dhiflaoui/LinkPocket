import { useState } from "react";
import axios from "axios";

const apiBase = import.meta.env.VITE_API_URL;

export const useApi = () => {
  const [loading, setLoading] = useState(false);

  const defaultOptions = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  const apiRequest = async (method, path, data = null, options = {}) => {
    setLoading(true);
    try {
      const config = {
        method,
        url: `${apiBase}${path}`,
        headers: { ...defaultOptions, ...options },
        ...(data && { data }),
      };
      const response = await axios(config);
      return response;
    } catch (error) {
      console.error("API request failed:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    postRequest: (path, data, options) =>
      apiRequest("post", path, data, options),
    getRequest: (path, options) => apiRequest("get", path, null, options),
    putRequest: (path, data, options) => apiRequest("put", path, data, options),
    deleteRequest: (path, options) => apiRequest("delete", path, null, options),
  };
};
