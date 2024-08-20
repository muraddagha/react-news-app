import PersonalizedFilter from "./PersonalizedFilter";
import Divider from "../../components/Divider";
import { API_SOURCES, QUERYKEYS } from "../../constants";
import { useGetQuery, useQueryWithLoadMore } from "../../hooks/useGetQuery";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import NewsList from "../../components/News/NewsList";
const pageOptions = {
  page: 1,
  pageSize: 10,
};
const ForYou = () => {
  const { url } = useSelector((state) => state.personalizedFeedFilter);
  const { isPending, data, fetchNextPage, hasNextPage, isFetchingNextPage } = useQueryWithLoadMore(
    QUERYKEYS.PERSONALIZED_FEED,
    url + API_SOURCES.NEWS_API.KEY,
    pageOptions.pageSize
  );

  useEffect(() => {
    console.log("effect", data);
  }, [data]);
  return (
    <>
      <PersonalizedFilter />
      <section id="feed">
        <Divider title="Feed" />
        <NewsList
          hasNextPage={hasNextPage}
          fetchNextPage={fetchNextPage}
          isFetchingNextPage={isFetchingNextPage}
          data={data}
          isPending={isPending}
        />
      </section>
    </>
  );
};

export default ForYou;
