import PersonalizedFilter from "./PersonalizedFilter";
import Divider from "../../components/Divider";
import { API_SOURCES, QUERYKEYS } from "../../constants";
import { useQueryWithLoadMoreNYTApi } from "../../hooks/useGetQuery";
import { useSelector } from "react-redux";
import NewsList from "../../components/News/NewsList";

const pageSize = 10;
const ForYou = () => {
  const { url } = useSelector((state) => state.personalizedFeedFilter);
  const { hasNextPage, fetchNextPage, isFetchingNextPage, data, isPending } = useQueryWithLoadMoreNYTApi(
    QUERYKEYS.NYT_NEWS,
    url + API_SOURCES.NEWS_API.KEY,
    pageSize
  );
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
          apiName={API_SOURCES.NYTIMES.NAME}
        />
      </section>
    </>
  );
};

export default ForYou;
