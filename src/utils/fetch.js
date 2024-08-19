import axios from "axios";

export const getData = async (path, page, pageSize) => {
  const response = await axios.get(path + `&page=${page}&pageSize=${pageSize}`);
  const data = response.data;
  return data;
};
