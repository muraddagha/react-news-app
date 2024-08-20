import HotTopics from "./HotTopics";
import LatestNews from "../../components/News/NewsList";
import Divider from "../../components/Divider";
import { API_SOURCES, QUERYKEYS } from "../../constants";
import { useGetQuery, useGuardianApiGetQuery } from "../../hooks/useGetQuery";
import { useContext } from "react";
import { FilterContext } from "../../store/filter-context";
const pageOptions = {
  page: 1,
  pageSize: 10,
};

const url = `${API_SOURCES.GUARDIAN_API.URL}/search?api-key=${API_SOURCES.GUARDIAN_API.KEY}`;

const Home = () => {
  const mockGuardian = [
    {
      id: "world/live/2024/aug/20/sicily-yacht-sinking-mike-lynch-search-bayesian-latest-live-news",
      type: "liveblog",
      sectionId: "world",
      sectionName: "World news",
      webPublicationDate: "2024-08-20T11:45:16Z",
      webTitle:
        "Sicily yacht sinking: diving teams attempt to access stern and say huge volume of water entered Bayesian in short time in storm – live",
      webUrl:
        "https://www.theguardian.com/world/live/2024/aug/20/sicily-yacht-sinking-mike-lynch-search-bayesian-latest-live-news",
      apiUrl:
        "https://content.guardianapis.com/world/live/2024/aug/20/sicily-yacht-sinking-mike-lynch-search-bayesian-latest-live-news",
      isHosted: false,
      pillarId: "pillar/news",
      pillarName: "News",
    },
    {
      id: "global-development/article/2024/aug/20/women-afghanistan-manizha-talash-breakdancing-on-her-protest-at-the-olympics",
      type: "article",
      sectionId: "global-development",
      sectionName: "Global development",
      webPublicationDate: "2024-08-20T11:40:22Z",
      webTitle:
        "‘What’s more important, my dream or the women of Afghanistan?’: breakdancer Manizha Talash on her Olympic protest",
      webUrl:
        "https://www.theguardian.com/global-development/article/2024/aug/20/women-afghanistan-manizha-talash-breakdancing-on-her-protest-at-the-olympics",
      apiUrl:
        "https://content.guardianapis.com/global-development/article/2024/aug/20/women-afghanistan-manizha-talash-breakdancing-on-her-protest-at-the-olympics",
      isHosted: false,
      pillarId: "pillar/news",
      pillarName: "News",
    },
    {
      id: "world/live/2024/aug/20/israel-gaza-war-live-benjamin-netanyahu-antony-blinken-hamas-iran-latest-news",
      type: "liveblog",
      sectionId: "world",
      sectionName: "World news",
      webPublicationDate: "2024-08-20T11:38:51Z",
      webTitle:
        "Israel-Gaza war live: at least 10 Palestinians killed in Israeli airstrike on school, say Gaza defence authorities",
      webUrl:
        "https://www.theguardian.com/world/live/2024/aug/20/israel-gaza-war-live-benjamin-netanyahu-antony-blinken-hamas-iran-latest-news",
      apiUrl:
        "https://content.guardianapis.com/world/live/2024/aug/20/israel-gaza-war-live-benjamin-netanyahu-antony-blinken-hamas-iran-latest-news",
      isHosted: false,
      pillarId: "pillar/news",
      pillarName: "News",
    },
    {
      id: "world/live/2024/aug/20/russia-ukraine-war-live-latest-news-pokrovsk-kursk",
      type: "liveblog",
      sectionId: "world",
      sectionName: "World news",
      webPublicationDate: "2024-08-20T11:36:08Z",
      webTitle:
        "Russia-Ukraine war live: civilians flee Pokrovsk as Russia’s army bears down on key eastern Ukraine city",
      webUrl: "https://www.theguardian.com/world/live/2024/aug/20/russia-ukraine-war-live-latest-news-pokrovsk-kursk",
      apiUrl:
        "https://content.guardianapis.com/world/live/2024/aug/20/russia-ukraine-war-live-latest-news-pokrovsk-kursk",
      isHosted: false,
      pillarId: "pillar/news",
      pillarName: "News",
    },
    {
      id: "world/article/2024/aug/20/israel-bodies-hostages-recovered-gaza",
      type: "article",
      sectionId: "world",
      sectionName: "World news",
      webPublicationDate: "2024-08-20T11:32:31Z",
      webTitle: "Israel says bodies of six hostages have been recovered from Gaza",
      webUrl: "https://www.theguardian.com/world/article/2024/aug/20/israel-bodies-hostages-recovered-gaza",
      apiUrl: "https://content.guardianapis.com/world/article/2024/aug/20/israel-bodies-hostages-recovered-gaza",
      isHosted: false,
      pillarId: "pillar/news",
      pillarName: "News",
    },
    {
      id: "sport/article/2024/aug/20/dan-lawrence-england-opener-sri-lanka-surrey-essex-the-spin-cricket",
      type: "article",
      sectionId: "sport",
      sectionName: "Sport",
      webPublicationDate: "2024-08-20T11:30:12Z",
      webTitle: "The Spin | Dan Lawrence: from cricket-mad kid to England’s new Test opener",
      webUrl:
        "https://www.theguardian.com/sport/article/2024/aug/20/dan-lawrence-england-opener-sri-lanka-surrey-essex-the-spin-cricket",
      apiUrl:
        "https://content.guardianapis.com/sport/article/2024/aug/20/dan-lawrence-england-opener-sri-lanka-surrey-essex-the-spin-cricket",
      isHosted: false,
      pillarId: "pillar/sport",
      pillarName: "Sport",
    },
    {
      id: "food/article/2024/aug/20/get-rich-17-surprising-and-delicious-cheesecakes-from-sweet-potato-to-gin-and-tonic",
      type: "article",
      sectionId: "food",
      sectionName: "Food",
      webPublicationDate: "2024-08-20T11:30:12Z",
      webTitle: "Get rich! 17 surprising and delicious cheesecakes – from sweet potato to gin and tonic ",
      webUrl:
        "https://www.theguardian.com/food/article/2024/aug/20/get-rich-17-surprising-and-delicious-cheesecakes-from-sweet-potato-to-gin-and-tonic",
      apiUrl:
        "https://content.guardianapis.com/food/article/2024/aug/20/get-rich-17-surprising-and-delicious-cheesecakes-from-sweet-potato-to-gin-and-tonic",
      isHosted: false,
      pillarId: "pillar/lifestyle",
      pillarName: "Lifestyle",
    },
    {
      id: "us-news/live/2024/aug/20/election-dnc-donald-trump-kamala-harris-barack-michelle-obama-updates",
      type: "liveblog",
      sectionId: "us-news",
      sectionName: "US news",
      webPublicationDate: "2024-08-20T11:29:18Z",
      webTitle: "Obamas to address Democratic National Convention following rousing Biden speech – US politics live",
      webUrl:
        "https://www.theguardian.com/us-news/live/2024/aug/20/election-dnc-donald-trump-kamala-harris-barack-michelle-obama-updates",
      apiUrl:
        "https://content.guardianapis.com/us-news/live/2024/aug/20/election-dnc-donald-trump-kamala-harris-barack-michelle-obama-updates",
      isHosted: false,
      pillarId: "pillar/news",
      pillarName: "News",
    },
    {
      id: "politics/live/2024/aug/20/keir-starmer-wales-visit-great-british-energy-uk-politics-live",
      type: "liveblog",
      sectionId: "politics",
      sectionName: "Politics",
      webPublicationDate: "2024-08-20T11:25:34Z",
      webTitle:
        "Starmer highlights green measures on Welsh visit and attacks Tories’ ‘incoherent’ energy policies – UK politics live",
      webUrl:
        "https://www.theguardian.com/politics/live/2024/aug/20/keir-starmer-wales-visit-great-british-energy-uk-politics-live",
      apiUrl:
        "https://content.guardianapis.com/politics/live/2024/aug/20/keir-starmer-wales-visit-great-british-energy-uk-politics-live",
      isHosted: false,
      pillarId: "pillar/news",
      pillarName: "News",
    },
    {
      id: "business/live/2024/aug/20/global-markets-rally-soft-landing-hopes-oil-low-uk-insolvencies-business-live",
      type: "liveblog",
      sectionId: "business",
      sectionName: "Business",
      webPublicationDate: "2024-08-20T11:24:23Z",
      webTitle:
        "Company insolvencies in England and Wales higher than during financial crisis; Gold price hits record high – business live",
      webUrl:
        "https://www.theguardian.com/business/live/2024/aug/20/global-markets-rally-soft-landing-hopes-oil-low-uk-insolvencies-business-live",
      apiUrl:
        "https://content.guardianapis.com/business/live/2024/aug/20/global-markets-rally-soft-landing-hopes-oil-low-uk-insolvencies-business-live",
      isHosted: false,
      pillarId: "pillar/news",
      pillarName: "News",
    },
  ];

  const mockNewsApi = [
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
        name: "ReadWrite",
      },
      author: "Alvin Hemedez",
      title:
        "Experts Predict Pepe Will Surge 10x in the Coming Months – Should You Buy PEPE or Consider This Layer 2 Meme Coin?",
      description:
        "Experts predict a big surge for Pepe (PEPE), leading many investors to believe now is the best time to buy… Continue reading Experts Predict Pepe Will Surge 10x in the Coming Months – Should You Buy PEPE or Consider This Layer 2 Meme Coin?\nThe post Experts Pr…",
      url: "https://readwrite.com/experts-predict-pepe-will-surge-10x-in-the-coming-months-should-you-buy-pepe-or-consider-this-layer-2-meme-coin/",
      urlToImage: "https://readwrite.com/wp-content/uploads/2024/07/pepe-price-prediction-1.jpg",
      publishedAt: "2024-07-31T12:32:20Z",
      content:
        "Experts predict a big surge for Pepe (PEPE), leading many investors to believe now is the best time to buy in.\r\nThe cryptocurrency market is on the rise. Market volume has jumped by 62%, and the Fear… [+5122 chars]",
    },
    {
      source: {
        id: null,
        name: "ReadWrite",
      },
      author: "Alvin Hemedez",
      title: "Top Altcoins to Invest in Ahead of Bitcoin’s Next Bull Run – $BTC, $SOL, $ETH, $BNB, $XRP, and $99BTC",
      description:
        "With Bitcoin (BTC) surging and the market exhibiting greed according to the Fear and Greed Index, it’s an opportune time… Continue reading Top Altcoins to Invest in Ahead of Bitcoin’s Next Bull Run – $BTC, $SOL, $ETH, $BNB, $XRP, and $99BTC\nThe post Top Altco…",
      url: "https://readwrite.com/top-altcoins-to-invest-in-ahead-of-bitcoins-next-bull-run-btc-sol-eth-bnb-xrp-and-99btc/",
      urlToImage:
        "https://readwrite.com/wp-content/uploads/2024/07/top-altcoins-to-invest-in-ahead-of-bitcoin-next-bull-run.jpg",
      publishedAt: "2024-07-31T19:36:05Z",
      content:
        "With Bitcoin (BTC) surging and the market exhibiting greed according to the Fear and Greed Index, it’s an opportune time to consider diversifying your portfolio with altcoin investments.\r\nWhile meme … [+6891 chars]",
    },
    {
      source: {
        id: null,
        name: "Xataka.com",
      },
      author: "Enrique Pérez",
      title:
        'Trump promete convertir Estados Unidos en la cuna de las criptomonedas: "nunca vendáis vuestros bitcoins"',
      description:
        "La conferencia Bitcoin 2024 ha estado marcada por el discurso de Donald Trump. El candidato republicano ha aprovechado su intervención para posicionarse como un claro defensor de las criptomonedas. Y ha ido más allá. Si resulta elegido, ha prometido que conve…",
      url: "https://www.xataka.com/criptomonedas/trump-promete-convertir-estados-unidos-cuna-criptomonedas-nunca-vendais-vuestros-bitcoins",
      urlToImage: "https://i.blogs.es/488af4/bitcoin2024-trump/840_560.jpeg",
      publishedAt: "2024-07-29T07:55:14Z",
      content:
        "La conferencia Bitcoin 2024 ha estado marcada por el discurso de Donald Trump. El candidato republicano ha aprovechado su intervención para posicionarse como un claro defensor de las criptomonedas. Y… [+2523 chars]",
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: "Yousra Anwar Ahmed",
      title: "What Happened in Crypto Today: Bullish Signals Are Finally Emerging!",
      description:
        "From Bitcoin bouncing back above 56K to permanent holders quietly scooping up BTCs, here is a 3-minute breakdown of everything important that happened in...",
      url: "https://finance.yahoo.com/news/happened-crypto-today-bullish-signals-101605599.html",
      urlToImage: "https://media.zenfs.com/en/coinmarketcap_783/872d2769b8fc1e2c4b485faa1bfad75c",
      publishedAt: "2024-08-07T10:16:05Z",
      content:
        "What Happened in Crypto Today: Bullish Signals Are Finally Emerging!\r\nIt's been an interesting week in crypto, to put it mildly.\r\nJust four days ago, when Bitcoin was hovering around $62K, we hinted … [+7004 chars]",
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: "Hope C",
      title: "BlackRock's IBIT Bitcoin ETF Sees Highest Inflows Since March",
      description:
        "BlackRock’s spot Bitcoin exchange-traded fund (ETF) has experienced its largest inflow in over four months.",
      url: "https://finance.yahoo.com/news/blackrocks-ibit-bitcoin-etf-sees-081039300.html",
      urlToImage: "https://media.zenfs.com/en/coinmarketcap_783/861990b4d3f801375723f75ec322858e",
      publishedAt: "2024-07-23T08:10:39Z",
      content:
        "BlackRock's IBIT Bitcoin ETF Sees Highest Inflows Since March\r\nBlackRocks spot Bitcoin exchange-traded fund (ETF) has experienced its largest inflow in over four months. The iShares Bitcoin Trust (IB… [+1249 chars]",
    },
    {
      source: {
        id: null,
        name: "Xataka.com",
      },
      author: "Javier Pastor",
      title:
        "Unos criptomineros usaron su estancia en Airbnb para ganar 100.000 dólares. Se descubrió cuando llegó la factura de la luz",
      description:
        "Una de las anfitrionas que tienen un piso en alquiler en esta plataforma se llevó un buen disgusto recientemente. Unos chicos alquilaron su piso durante tres semanas y todo pareció ir perfecto, pero unos días más tarde se encontró con una factura de la luz de…",
      url: "https://www.xataka.com/criptomonedas/unos-criptomineros-usaron-su-estancia-airbnb-para-ganar-100-000-dolares-se-descubrio-cuando-llego-factura-luz",
      urlToImage: "https://i.blogs.es/1b5bdc/cripto/840_560.jpeg",
      publishedAt: "2024-08-16T14:31:49Z",
      content:
        "Una de las anfitrionas que tienen un piso en alquiler en esta plataforma se llevó un buen disgusto recientemente. Unos chicos alquilaron su piso durante tres semanas y todo pareció ir perfecto, pero … [+2457 chars]",
    },
    {
      source: {
        id: null,
        name: "Genbeta.com",
      },
      author: "Antonio Vallejo",
      title:
        "Webs que regalaban hasta cinco bitcoins por resolver captchas: los 'faucets' en 2010 no tenían nada que ver con los de ahora",
      description:
        "El mundo de las criptomonedas ha cambiado drásticamente en los últimos 15 años. Y es que tras la adopción del bitcoin y otras criptodivisas por múltiples plataformas y usuarios, eventos recurrentes como el ‘halving’ y otros factores externos del mercado, el v…",
      url: "https://www.genbeta.com/web/webs-que-regalaban-cinco-bitcoins-resolver-captchas-faucets-2010-no-tenian-nada-que-ver-ahora",
      urlToImage: "https://i.blogs.es/0123b2/erling-loken-andersen-7fiieouobtu-unsplash/840_560.jpeg",
      publishedAt: "2024-07-27T14:01:56Z",
      content:
        "El mundo de las criptomonedas ha cambiado drásticamente en los últimos 15 años. Y es que tras la adopción del bitcoin y otras criptodivisas por múltiples plataformas y usuarios, eventos recurrentes c… [+2703 chars]",
    },
    {
      source: {
        id: null,
        name: "Bitcoinhaber.net",
      },
      author: null,
      title: "Bitcoin Investors Buy Puts Aggressively",
      description:
        "Recent movements in the cryptocurrency market have drawn significant attention, particularly Bitcoin's volatility. After Bitcoin's price fell below $50,000, a",
      url: "https://en.bitcoinhaber.net/bitcoin-investors-buy-puts-aggressively",
      urlToImage: "https://en.bitcoinhaber.net/wp-content/uploads/2024/08/bitcoin-news-277.jpg",
      publishedAt: "2024-08-07T08:28:23Z",
      content:
        "Recent movements in the cryptocurrency market have drawn significant attention, particularly Bitcoins volatility. After Bitcoins price fell below $50,000, a key volatility indicator for the cryptocur… [+2403 chars]",
    },
  ];
  const { filterUrl } = useContext(FilterContext);

  // const { isPending, data } = useGetQuery(QUERYKEYS.NEWS, filterUrl, pageOptions.page, pageOptions.pageSize);
  // const { isPending: guardianApiLoading, data: guardianApiData } = useGuardianApiGetQuery(
  //   QUERYKEYS.GUARDIAN_NEWS,
  //   url,
  //   pageOptions.page,
  //   pageOptions.pageSize
  // );

  return (
    <>
      <section id="hot-topics">
        <Divider title="Hot topics" />
        <HotTopics />
      </section>
      <section id="topics">
        <Divider title="News Api" />
        <LatestNews data={mockNewsApi} isPending={false} />
      </section>
      <section id="guardian">
        <Divider title="Guardian News Api" />
        <LatestNews data={mockGuardian} isPending={false} isGuardianApi={true} />
      </section>
    </>
  );
};

export default Home;
