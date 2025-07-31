import publicApi from "../../../utils/publicApi";

export const getJobs = async ({ sort, search, types }) => {
  const params = new URLSearchParams();

  if (types) params.append("type", types);
  if (search) params.append("q", search);
  if(sort === "asc" || sort === "desc"){
    params.append("_sort" , "salary")
    params.append("_order", sort === "asc" ? "asc" : "desc" )
  }
  const query = params.toString();

  const response = await publicApi.get(`/jobs${query ? `?${query}` : ""}`);
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
