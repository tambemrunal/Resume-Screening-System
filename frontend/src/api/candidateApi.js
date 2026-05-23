import api from "./axios";

export const getCandidates =
  async () => {

    const response = await api.get(
      "/candidates"
    );

    return response.data;
  };