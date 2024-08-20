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
  arrows: false,
};
const url = `${API_SOURCES.NEWS_API.URL}everything?q=bitcoin${API_SOURCES.NEWS_API.KEY}`;
const pageOptions = {
  page: 1,
  pageSize: 5,
};
const loadingSkelton = <div className="skeleton h-96 w-full"></div>;

const HotTopics = () => {
  const mockData = [
    {
      source: {
        id: "wired",
        name: "Wired",
      },
      author: "Jessica Klein",
      title: "Bitcoin Bros Go Wild for Donald Trump",
      description:
        "At Bitcoin 2024 conference in Nashville, Trump is finally telling crypto enthusiasts what they want to hear.",
      url: "https://www.wired.com/story/bitcoin-bros-go-wild-for-donald-trump/",
      urlToImage:
        "https://media.wired.com/photos/66a56f21bf2909f08a634953/191:100/w_1280,c_limit/Crypto-Bros-Business-2162975355.jpg",
      publishedAt: "2024-07-28T12:43:07Z",
      content:
        "Trumps speech is an hour behind. A half hour into the wait, restless attendees start chanting Trump. The woman sitting in front of me murmurs her own chant:\r\nBitcoin, bitcointhats what they should be… [+3147 chars]",
    },
    {
      source: {
        id: "wired",
        name: "Wired",
      },
      author: "Steven Levy",
      title: "Trump's Crypto Embrace Could Be a Disaster for Bitcoin",
      description:
        "At the Bitcoin 2024 conference in Nashville, Donald Trump promised the crypto community the moon. They'd better hope they don't get it.",
      url: "https://www.wired.com/story/donald-trump-bitcoin-reserve-promises/",
      urlToImage:
        "https://media.wired.com/photos/66ab594d0c0cc4819f595db4/191:100/w_1280,c_limit/073024_Crypto%20get%20rich%20quick.jpg",
      publishedAt: "2024-08-02T13:00:00Z",
      content:
        "Donald Trump is an unlikely crypto ally. The power of bitcoin, embodied in Satoshi Nakamotos founding document, is that it frees participants from murky assessments of trust, instead relying on the b… [+4248 chars]",
    },
    {
      source: {
        id: null,
        name: "Gizmodo.com",
      },
      author: "Harri Weber",
      title: "Trump Promises to Make U.S. the ‘Crypto Capital of the Planet and the Bitcoin Superpower’",
      description:
        'The former president drew cheers at the 2024 Bitcoin Conference after saying he\'ll "fire" Biden-nominated SEC Chair Gary Gensler.',
      url: "https://gizmodo.com/trump-promises-to-make-u-s-the-crypto-capital-of-the-planet-and-the-bitcoin-superpower-2000480037",
      urlToImage: "https://gizmodo.com/app/uploads/2024/07/Screenshot-2024-07-27-at-1.02.37 PM.jpg",
      publishedAt: "2024-07-27T20:59:48Z",
      content:
        "Speaking to a crowd of supporters at the Bitcoin 2024 Conference in Nashville, Tennessee, former president and Republican nominee Donald Trump said he would make the U.S. the “crypto capital of the p… [+2326 chars]",
    },
    {
      source: {
        id: null,
        name: "Slashdot.org",
      },
      author: "Slashdot Staff",
      title: "RFK Jr. Says He'd Direct the Government to Buy $615 Billion in Bitcoin or 4 Million Bitcoins",
      description:
        "US presidential candidate, Robert F. Kennedy Jr., announced during his keynote Friday at the Bitcoin Conference that he would direct the US government to buy Bitcoin until the size of its Bitcoin reserves matched its gold reserves. At current prices, that equ…",
      url: "https://news.slashdot.org/story/24/07/26/239214/rfk-jr-says-hed-direct-the-government-to-buy-615-billion-in-bitcoin-or-4-million-bitcoins",
      urlToImage: "https://a.fsdn.com/sd/topics/bitcoin_64.png",
      publishedAt: "2024-07-26T23:03:00Z",
      content:
        '... a position of dominance that no other country will be able to usurp.\r\nWhy and who cares? Trading money for a different kind of money give us "dominance"? What part of your brain did that worm eat… [+237 chars]',
    },
    {
      source: {
        id: null,
        name: "Gizmodo.com",
      },
      author: "Passant Rabie",
      title: "Crypto Bro Charters Private SpaceX Mission to Earth’s Poles",
      description: "Fram2 could fly as early as this year, marking SpaceX's seventh private crew of astronauts.",
      url: "https://gizmodo.com/crypto-bro-charters-private-spacex-mission-to-earths-poles-2000486329",
      urlToImage: "https://gizmodo.com/app/uploads/2024/08/SpaceX-Private-Mission.jpeg",
      publishedAt: "2024-08-13T16:05:37Z",
      content:
        "A private crew of astronauts that includes a cinematographer and an explorer, and commanded by a wealthy bitcoin entrepreneur, will be the first human spaceflight to go over Earth’s polar region.\r\nSp… [+2136 chars]",
    },
  ];

  // const { isPending, data } = useGetQuery(QUERYKEYS.HOT_TOPICS, url, pageOptions.page, pageOptions.pageSize);

  return (
    <Loading isPending={false} loadingSkelton={loadingSkelton}>
      <Slider {...settings}>
        {mockData
          ? mockData.map((item) => (
              <div key={item.id} className="relative rounded-md text-white">
                <img
                  className="h-full md:max-h-96 w-full aspect-square md:object-cover rounded-md"
                  src={item.urlToImage}
                  alt=""
                />
                <div className="absolute h-full bg-black w-full opacity-50 rounded-md top-0"></div>
                <div className="absolute bottom-0  max-w-xl m-5 md:m-10">
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
