import api from "./axios";

export const uploadJD =
  async (formData) => {

    const response =
      await api.post(
        "/jd/upload",
        formData,
        {
          headers: {
            "Content-Type":
              "multipart/form-data",
          },
        }
      );

    return response.data;
  };

export const getJobs =
  async () => {

    const response =
      await api.get("/jd");

    return response.data;
  };