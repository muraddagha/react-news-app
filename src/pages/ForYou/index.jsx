import PersonalizedFilter from "./PersonalizedFilter";
import Divider from "../../components/Divider";
import LatestNews from "../../components/News/NewsList";
import { API_SOURCES, QUERYKEYS } from "../../constants";
import { useGetQuery } from "../../hooks/useGetQuery";
import { useSelector } from "react-redux";
import { useEffect } from "react";
const pageOptions = {
  page: 1,
  pageSize: 10,
};
const ForYou = () => {
  const { filter, url } = useSelector((state) => state.personalizedFeedFilter);
  const { isPending, data } = useGetQuery(
    QUERYKEYS.PERSONALIZED_FEED,
    url + API_SOURCES.NEWS_API.KEY,
    pageOptions.page,
    pageOptions.pageSize
  );

  useEffect(() => {
    console.log(filter);
    console.log(url);
  }, [filter, url]);

  return (
    <>
      <PersonalizedFilter />
      <section id="feed">
        <Divider title="Feed" />
        <LatestNews data={data} isPending={isPending} />
      </section>
    </>
  );
};

export default ForYou;
