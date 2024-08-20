import Loading from "../Loading";
import GuardianNewsItem from "./GuardianNewsItem";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
const loadingSkelton = (
  <>
    {Array.from({ length: 10 }, (_, index) => (
      <div key={index} className="skeleton h-96 w-full"></div>
    ))}
  </>
);

const LatestNews = ({ data = [], isPending = true, isGuardianApi = false }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8">
      <Loading isPending={isPending} loadingSkelton={loadingSkelton}>
        {Array.isArray(data) && data.length > 0 ? (
          data.map((item) =>
            !isGuardianApi ? <NewsItem key={item.id} item={item} /> : <GuardianNewsItem key={item.id} item={item} />
          )
        ) : (
          <p>No news available</p>
        )}
      </Loading>
    </div>
  );
};

LatestNews.propTypes = {
  data: PropTypes.array,
  isPending: PropTypes.bool,
  isGuardianApi: PropTypes.bool,
};

export default LatestNews;
