import HotTopics from "./HotTopics";
import GuardianNews from "./GuardiansNews";
import NewsApi from "./NewsApi";
import NewYorkTimesNews from "./NewYorkTimesNews";

const Home = () => {
  return (
    <>
      <HotTopics />
      <NewsApi />
      <GuardianNews />
      <NewYorkTimesNews />
    </>
  );
};

export default Home;
