import api from "./axios";

export const getJobs =
  async () => {

    const response =
      await api.get("/jobs");

    return response.data;
  };