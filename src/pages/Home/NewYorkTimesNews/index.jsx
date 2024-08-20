import Divider from "../../../components/Divider";
import { API_SOURCES, QUERYKEYS } from "../../../constants";
import NewsList from "../../../components/News/NewsList";
import { useQueryWithLoadMoreNYTApi } from "../../../hooks/useGetQuery";
import FilterList from "../../../components/Filter";
import moment from "moment";
import { buildQueryString } from "../../../utils/utils";
import { useFilter } from "../../../hooks/use-filter";

const defaultUrl = `${API_SOURCES.NYTIMES.URL}articlesearch.json?q=election${API_SOURCES.NYTIMES.KEY}`;
const pageSize = 10;

const buildUrl = (form) => {
  const params = {
    q: form.keyword || "",
    begin_date: moment(form.startDate).format("YYYYMMDD") || "",
    facet_fields: "source,section_name",
  };

  if (form.source) {
    params.fq = `source:${form.source}`;
  }
  if (form.category) {
    params.fq = `${params.fq ? params.fq + "," : ""}section_name:${form.category}`;
  }

  const queryString = buildQueryString(params);
  return `${API_SOURCES.NYTIMES.URL}articlesearch.json${queryString}`;
};

const NewYorkTimesNews = () => {
  const { url, resetFilterState, addFilterState } = useFilter(defaultUrl, buildUrl, API_SOURCES.NYTIMES.KEY);

  const { hasNextPage, fetchNextPage, isFetchingNextPage, data, isPending } = useQueryWithLoadMoreNYTApi(
    QUERYKEYS.NYT_NEWS,
    url,
    pageSize
  );

  return (
    <section id="guardian">
      <div className="flex justify-between w-full items-center">
        <Divider title="New York Times News Api" />
        <FilterList addFilterSate={addFilterState} resetFilterState={resetFilterState} />
      </div>
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
