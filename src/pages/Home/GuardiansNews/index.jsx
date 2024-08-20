import { useEffect, useState } from "react";
import Divider from "../../../components/Divider";
import FilterList from "../../../components/Filter";
import NewsList from "../../../components/News/NewsList";
import { API_SOURCES, QUERYKEYS } from "../../../constants";
import { useQueryWithLoadMoreGuardianApi } from "../../../hooks/useGetQuery";
import moment from "moment";
import { buildQueryString } from "../../../utils/utils";
import { useFilter } from "../../../hooks/use-filter";
const pageSize = 10;
const defaultUrl = `${API_SOURCES.GUARDIAN_API.URL}/search?${API_SOURCES.GUARDIAN_API.KEY}&show-fields=thumbnail`;

const buildUrl = (form) => {
  const params = {
    q: form.keyword || "",
    section: form.category || "",
    "from-date": moment(form.startDate).format("YYYY-MM-DD") || "",
  };
  const queryString = buildQueryString(params);
  return `${API_SOURCES.GUARDIAN_API.URL}search${queryString}&show-fields=thumbnail`;
};
const GuardianNews = () => {
  const { url, resetFilterState, addFilterState } = useFilter(defaultUrl, buildUrl, API_SOURCES.GUARDIAN_API.KEY);
  const guardianApiNewsList = useQueryWithLoadMoreGuardianApi(QUERYKEYS.GUARDIAN_NEWS, url, pageSize);

  return (
    <section id="guardian">
      <div className="flex justify-between w-full items-center">
        <Divider title="Guardians News Api" />
        <FilterList addFilterSate={addFilterState} resetFilterState={resetFilterState} hideSource={true} />
      </div>
      <NewsList
        hasNextPage={guardianApiNewsList.hasNextPage}
        fetchNextPage={guardianApiNewsList.fetchNextPage}
        isFetchingNextPage={guardianApiNewsList.isFetchingNextPage}
        data={guardianApiNewsList.data}
        isPending={guardianApiNewsList.isPending}
        apiName={API_SOURCES.GUARDIAN_API.NAME}
      />
    </section>
  );
};

export default GuardianNews;
