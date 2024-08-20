import Divider from "../../../components/Divider";
import NewsList from "../../../components/News/NewsList";
import { API_SOURCES, QUERYKEYS } from "../../../constants";
import { useQueryWithLoadMore } from "../../../hooks/useGetQuery";
import moment from "moment";
import { buildQueryString } from "../../../utils/utils";
import FilterList from "../../../components/Filter";
import { useFilter } from "../../../hooks/use-filter";
const pageOptions = 10;

const buildUrl = (form) => {
  const params = {
    q: form.keyword || "",
    sources: form.source || "",
    category: form.category || "",
    from: moment(form.startDate).format("YYYY-MM-DD") || "",
  };

  const queryString = buildQueryString(params);
  return `${API_SOURCES.NYTIMES.URL}articlesearch.json${queryString}`;
};

const defaultUrl = `${API_SOURCES.NEWS_API.URL}everything?q=bitcoin?${API_SOURCES.NEWS_API.KEY}`;

const NewsApi = () => {
  const { url, resetFilterState, addFilterState } = useFilter(defaultUrl, buildUrl, API_SOURCES.NEWS_API.KEY);

  const { isPending, data, fetchNextPage, hasNextPage, isFetchingNextPage } = useQueryWithLoadMore(
    QUERYKEYS.NEWS,
    url,
    pageOptions
  );

  return (
    <section id="topics">
      <div className="flex justify-between w-full items-center">
        <Divider title="News Api" />
        <FilterList addFilterSate={addFilterState} resetFilterState={resetFilterState} disableFieldsDependency={true} />
      </div>
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
