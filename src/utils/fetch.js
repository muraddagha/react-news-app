import axios from "axios";
import { formatDate } from "./utils";

export const getData = async (path, page, pageSize) => {
  const response = await axios.get(path, {
    params: {
      page: page,
      pageSize: pageSize,
    },
  });
  const data = response.data;
  return {
    data: data.articles.map((e) => ({
      ...e,
      date: formatDate(e.publishedAt), // Format date if needed
      id: Math.floor(Math.random() * 100000), // Generate a unique ID
    })),
    nextPage: page + 1,
    totalResults: data.totalResults,
  };
};

export const getGuardianData = async (path, page, pageSize) => {
  const result = await axios.get(path + `&page=${page}&pageSize=${pageSize}`);
  const data = result.data.response;
  return { data: data.results, nextPage: page + 1, totalResults: data.total };
};

export const getNYTData = async (path, page, pageSize) => {
  const result = await axios.get(path + `&page=${page}&pageSize=${pageSize}`);
  console.log(result);
  const data = result.data.response;
  return { data: data.docs, nextPage: page + 1, totalResults: data.meta.hits };
};
