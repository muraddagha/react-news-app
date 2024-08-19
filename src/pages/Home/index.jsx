import HotTopics from "./HotTopics";
import LatestNews from "../../components/News/NewsList";
import Divider from "../../components/Divider";
import { QUERYKEYS } from "../../constants";
import { useGetQuery } from "../../hooks/useGetQuery";
import { useContext } from "react";
import { FilterContext } from "../../store/filter-context";
const pageOptions = {
  page: 1,
  pageSize: 10,
};

const Home = () => {
  const { filterUrl } = useContext(FilterContext);

  const { isPending, data } = useGetQuery(QUERYKEYS.NEWS, filterUrl, pageOptions.page, pageOptions.pageSize);

  return (
    <>
      <section id="hot-topics">
        <Divider title="Hot topics" />
        <HotTopics />
      </section>
      <section id="topics">
        <Divider title="Latest News" />
        <LatestNews data={data} isPending={isPending} />
      </section>
    </>
  );
};

export default Home;
