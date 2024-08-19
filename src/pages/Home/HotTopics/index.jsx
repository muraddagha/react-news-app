import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { API_SOURCES, QUERYKEYS } from "../../../constants";
import Loading from "../../../components/Loading";
import { useGetQuery } from "../../../hooks/useGetQuery";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const url = `${API_SOURCES.NEWS_API.URL}everything?q=bitcoin${API_SOURCES.NEWS_API.KEY}`;
const pageOptions = {
  page: 1,
  pageSize: 5,
};
const loadingSkelton = <div className="skeleton h-96 w-full"></div>;

const HotTopics = () => {
  const { isPending, data } = useGetQuery(QUERYKEYS.HOT_TOPICS, url, pageOptions.page, pageOptions.pageSize);

  return (
    <Loading isPending={isPending} loadingSkelton={loadingSkelton}>
      <Slider {...settings}>
        {data
          ? data.map((item) => (
              <div key={item.id} className="relative rounded-md text-white">
                <img className="max-h-96 w-full object-cover rounded-md" src={item.urlToImage} alt="" />
                <div className="absolute h-full bg-black w-full opacity-50 rounded-md top-0"></div>
                <div className="absolute bottom-0  max-w-xl m-10">
                  <a target="_blank" href={item.url} className="underline">
                    <h1 className="text-2xl text-white z-10 relative mb-5">{item.title}</h1>
                  </a>

                  <span className="font-thin mr-5 text-sm">{item.date}</span>
                  <span className="font-thin text-sm">{item.source.name}</span>
                </div>
              </div>
            ))
          : "No Data"}
      </Slider>
    </Loading>
  );
};

export default HotTopics;
