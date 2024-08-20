import axios from "axios";
import { formatDate } from "./utils";

export const getData = async (path, page, pageSize) => {
  try {
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
  } catch (error) {
    console.error("Error fetching articles:", error);
    return {
      data: [],
      nextPage: page,
      totalResults: 0,
    };
  }
};

export const getGuardianData = async (path, page, pageSize) => {
  try {
    const result = await axios.get(path + `&page=${page}&pageSize=${pageSize}`);
    const data = result.data.response;
    return { data: data.results, nextPage: page + 1, totalResults: data.total };
  } catch (error) {
    console.error("Error fetching articles:", error);
    return {
      data: [],
      nextPage: page,
      totalResults: 0,
    };
  }
};

export const getNYTData = async (path, page, pageSize) => {
  try {
    const result = await axios.get(path + `&page=${page}&limit=${pageSize}`);
    const data = result.data.response;
    return { data: data.docs, nextPage: page + 1, totalResults: data.meta.hits };
  } catch (error) {
    console.error("Error fetching articles:", error);
    return { data: [], nextPage: page, totalResults: 0 };
  }
};
