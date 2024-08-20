import moment from "moment";
const NewYorkTimesNewsItem = ({ item }) => {
  const imgBaseUrl = "https://www.nytimes.com/";
  return (
    <a target="_blank" href={item.web_url || ""}>
      <div className="card card-compact bg-base-100 shadow-xl h-96 hover:shadow-2xl transition-shadow">
        <figure>
          <img
            className="min-h-[200px]"
            src={item?.multimedia[0]?.url ? imgBaseUrl + item.multimedia[0].url : "/src/assets/default-news.avif"}
            alt="News Photo"
          />
        </figure>
        <div className="card-body my-2">
          <h2 className="card-title h-28 text-sm">{item.headline.main || ""}</h2>
          <div className="flex">
            <span className="font-thin mr-5 text-sm">{moment(item.pub_date).format("YYYY-MM-DD").toString()}</span>
            <span className="font-thin text-sm">{item.source}</span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default NewYorkTimesNewsItem;
