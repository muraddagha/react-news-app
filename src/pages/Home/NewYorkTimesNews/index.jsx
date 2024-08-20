import Divider from "../../../components/Divider";
import { API_SOURCES, QUERYKEYS } from "../../../constants";
import NewsList from "../../../components/News/NewsList";
import { useQueryWithLoadMoreNYTApi } from "../../../hooks/useGetQuery";

const pageSize = 10;
const url = `${API_SOURCES.NYTIMES.URL}articlesearch.json?q=election${API_SOURCES.NYTIMES.KEY}`;

const NewYorkTimesNews = () => {
  const { hasNextPage, fetchNextPage, isFetchingNextPage, data, isPending } = useQueryWithLoadMoreNYTApi(
    QUERYKEYS.NYT_NEWS,
    url,
    pageSize
  );

  return (
    <section id="guardian">
      <Divider title="New York Times News Api" />
      <NewsList
        hasNextPage={hasNextPage}
        fetchNextPage={fetchNextPage}
        isFetchingNextPage={isFetchingNextPage}
        data={data}
        isPending={isPending}
        apiName={API_SOURCES.NYTIMES.NAME}
      />
    </section>
  );
};

export default NewYorkTimesNews;
