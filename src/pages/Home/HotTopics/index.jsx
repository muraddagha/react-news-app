import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { API_SOURCES, QUERYKEYS } from "../../../constants";
import Loading from "../../../components/Loading";
import { useGetQuery } from "../../../hooks/useGetQuery";
import Divider from "../../../components/Divider";
import HotTopicItem from "./HotTopicItem";
import { useEffect } from "react";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};
const url = `${API_SOURCES.NEWS_API.URL}everything?q=bitcoin${API_SOURCES.NEWS_API.KEY}`;
const pageOptions = {
  page: 1,
  pageSize: 5,
};
const loadingSkelton = <div className="skeleton h-96 w-full"></div>;

const HotTopics = () => {
  const { isPending, data, status, error } = useGetQuery(
    QUERYKEYS.HOT_TOPICS,
    url,
    pageOptions.page,
    pageOptions.pageSize
  );

  return (
    <section id="hot-topics">
      <Divider title="Hot topics" />
      {status === error ? (
        <p>No views available</p>
      ) : (
        <Loading isPending={isPending} loadingSkelton={loadingSkelton}>
          <Slider {...settings}>
            {data ? data.map((item) => <HotTopicItem key={item.id} item={item} />) : <p>No views available</p>}
          </Slider>
        </Loading>
      )}
    </section>
  );
};

export default HotTopics;
