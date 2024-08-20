import { useQuery } from "@tanstack/react-query";
import { getData } from "../utils/fetch";
import { formatDate } from "../utils/utils";

export const useGetQuery = (queryKey, path, page, pageSize) => {
  return useQuery({
    queryKey: [queryKey, path, page],
    queryFn: async () => {
      const result = await getData(path, page, pageSize);

      const articles = result.articles.map((e) => {
        return { date: formatDate(e.publishedAt), ...e, id: Math.floor(Math.random() * 100000) };
      });
      return articles;
    },
    enabled: !!path,
    staleTime: 600,
  });
};

export const useGuardianApiGetQuery = (queryKey, path, page, pageSize) => {
  return useQuery({
    queryKey: [queryKey, path, page],
    queryFn: async () => {
      const result = await getData(path, page, pageSize);
      console.log(result.response.results);
      return result.response.results;
    },
    staleTime: 600,
  });
};

