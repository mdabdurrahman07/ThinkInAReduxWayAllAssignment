import publicApi from "../../../utils/publicApi";

export const getJobs = async () => {
  const response = await publicApi.get("/jobs");

  return response?.data;
};

export const postJob = async (data) => {
  const response = await publicApi.post("/jobs", data);
  return response?.data;
};

export const updateJob = async (id, data) => {
  const response = await publicApi.put(`/jobs/${id}`, data);
  return response?.data;
};

export const deleteJob = async (id) => {
  const response = await publicApi.delete(`/jobs/${id}`);
  return response?.data;
};
