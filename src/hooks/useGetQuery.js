import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getData, getGuardianData, getNYTData } from "../utils/fetch";
import { formatDate } from "../utils/utils";

export const useGetQuery = (queryKey, path, page, pageSize) => {
  return useQuery({
    queryKey: [queryKey, path, page],
    queryFn: async () => {
      const result = await getData(path, page, pageSize);

      const articles = result.data.articles.map((e) => {
        return { date: formatDate(e.publishedAt), ...e, id: Math.floor(Math.random() * 100000) };
      });
      console.log(result);
      return articles;
    },
    enabled: !!path,
    staleTime: 600,
  });
};

export const useQueryWithLoadMore = (queryKey, path, pageSize) => {
  return useInfiniteQuery({
    queryKey: [queryKey, path],
    queryFn: async ({ pageParam = 1 }) => await getData(path, pageParam, pageSize),
    getNextPageParam: (lastPage, allPages) => {
      const totalFetched = allPages.flat().length;
      return totalFetched < lastPage.totalResults ? lastPage.nextPage : undefined;
    },
    staleTime: 600,
  });
};

export const useQueryWithLoadMoreGuardianApi = (queryKey, path, pageSize) => {
  return useInfiniteQuery({
    queryKey: [queryKey, path],
    queryFn: async ({ pageParam = 1 }) => await getGuardianData(path, pageParam, pageSize),
    getNextPageParam: (lastPage, allPages) => {
      const totalFetched = allPages.flat().length;
      return totalFetched < lastPage.totalResults ? lastPage.nextPage : undefined;
    },
    staleTime: 600,
  });
};

export const useQueryWithLoadMoreNYTApi = (queryKey, path, pageSize) => {
  return useInfiniteQuery({
    queryKey: [queryKey, path],
    queryFn: async ({ pageParam = 1 }) => await getNYTData(path, pageParam, pageSize),
    getNextPageParam: (lastPage, allPages) => {
      const totalFetched = allPages.flat().length;
      return totalFetched < lastPage.totalResults ? lastPage.nextPage : undefined;
    },
    staleTime: 600,
  });
};
