import PropTypes from "prop-types";

const NewsItem = ({ item }) => {
  return (
    <a target="_blank" href={item.url || ""}>
      <div className="card card-compact bg-base-100 shadow-xl h-96 hover:shadow-2xl transition-shadow">
        <figure>
          <img className="min-h-[200px]" src={item.urlToImage ?? "/src/assets/default-news.avif"} alt="Shoes" />
        </figure>
        <div className="card-body my-2">
          <h2 className="card-title h-28 text-sm">{item.title || ""}</h2>
          <div className="flex">
            <span className="font-thin mr-5 text-sm">{item.date}</span>
            <span className="font-thin text-sm">{item.source.name}</span>
          </div>
        </div>
      </div>
    </a>
  );
};

NewsItem.propTypes = {
  item: PropTypes.object.isRequired, // Adjust the type and requirement based on your prop
};

export default NewsItem;
