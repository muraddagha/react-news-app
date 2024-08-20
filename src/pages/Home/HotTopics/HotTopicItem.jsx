import moment from "moment";
const HotTopicItem = ({ item }) => {
  return (
    <div className="relative rounded-md text-white">
      <img
        className="h-full md:max-h-96 w-full aspect-square md:object-cover rounded-md"
        src={item.fields.thumbnail ?? "/src/assets/default-news.avif"}
        alt=""
      />
      <div className="absolute h-full bg-black w-full opacity-50 rounded-md top-0"></div>
      <div className="absolute bottom-0  max-w-xl m-5 md:m-10">
        <a target="_blank" href={item.webUrl} className="underline">
          <h1 className="text-2xl text-white z-10 relative mb-5">{item.webTitle}</h1>
        </a>

        <span className="font-thin mr-5 text-sm">
          {moment(item.webPublicationDate).format("YYYY-MM-DD").toString()}
        </span>
        <span className="font-thin text-sm">{item.pillarId}</span>
      </div>
    </div>
  );
};

export default HotTopicItem;
