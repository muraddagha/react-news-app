import PropTypes from "prop-types";
import moment from "moment";

const GuardianNewsItem = ({ item }) => {
  return (
    <a target="_blank" href={item.webUrl || ""}>
      <div className="card card-compact bg-base-100 shadow-xl h-96 hover:shadow-2xl transition-shadow">
        <figure>
          <img
            className="min-h-[200px]"
            src={item.fields.thumbnail ?? "/src/assets/default-news.avif"}
            alt="News Photo"
          />
        </figure>
        <div className="card-body my-2">
          <h2 className="card-title h-28 text-sm">{item.webTitle || ""}</h2>
          <div className="flex">
            <span className="font-thin mr-5 text-sm">
              {moment(item.webPublicationDate).format("YYYY-MM-DD").toString()}
            </span>
            <span className="font-thin text-sm">{item.pillarId}</span>
          </div>
        </div>
      </div>
    </a>
  );
};

GuardianNewsItem.propTypes = {
  item: PropTypes.object.isRequired, // Adjust the type and requirement based on your prop
};

export default GuardianNewsItem;
