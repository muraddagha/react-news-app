import Divider from "../../../components/Divider";
import NewsList from "../../../components/News/NewsList";
import { API_SOURCES, QUERYKEYS } from "../../../constants";
import { useQueryWithLoadMore } from "../../../hooks/useGetQuery";
import { useContext } from "react";
import { FilterContext } from "../../../store/filter-context";
const pageOptions = 10;
const NewsApi = () => {
  const { filterUrl } = useContext(FilterContext);

  const { isPending, data, fetchNextPage, hasNextPage, isFetchingNextPage } = useQueryWithLoadMore(
    QUERYKEYS.NEWS,
    filterUrl + API_SOURCES.NEWS_API.KEY,
    pageOptions
  );

  return (
    <section id="topics">
      <Divider title="News Api" />
      <NewsList
        hasNextPage={hasNextPage}
        fetchNextPage={fetchNextPage}
        isFetchingNextPage={isFetchingNextPage}
        data={data}
        isPending={isPending}
        apiName={API_SOURCES.NEWS_API.NAME}
      />
    </section>
  );
};

export default NewsApi;
