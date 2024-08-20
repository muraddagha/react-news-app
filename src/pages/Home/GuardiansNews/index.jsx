import Divider from "../../../components/Divider";
import NewsList from "../../../components/News/NewsList";
import { API_SOURCES, QUERYKEYS } from "../../../constants";
import { useQueryWithLoadMoreGuardianApi } from "../../../hooks/useGetQuery";

const pageSize = 10;
const url = `${API_SOURCES.GUARDIAN_API.URL}/search?api-key=${API_SOURCES.GUARDIAN_API.KEY}`;

const GuardianNews = () => {
  const guardianApiNewsList = useQueryWithLoadMoreGuardianApi(QUERYKEYS.GUARDIAN_NEWS, url, pageSize);

  return (
    <section id="guardian">
      <Divider title="Guardians News Api" />
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
