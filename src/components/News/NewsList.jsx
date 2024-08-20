import React from "react";
import Loading from "../Loading";
import GuardianNewsItem from "./GuardianNewsItem";
import NewsItem from "./NewsItem";
import { API_SOURCES } from "../../constants";
import NewYorkTimesNewsItem from "./NewYorkTimesNewsItem";
const loadingSkelton = (
  <>
    {Array.from({ length: 10 }, (_, index) => (
      <div key={index} className="skeleton h-96 w-full"></div>
    ))}
  </>
);

const LoadMoreButton = ({ hasNextPage, isFetchingNextPage, fetchNextPage }) => {
  return (
    hasNextPage && (
      <div className="flex w-full justify-center mt-10">
        <button className="btn btn-accent" onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
          {isFetchingNextPage ? "Loading more..." : "Load More"}
        </button>
      </div>
    )
  );
};

const NewsListItems = ({ data, apiName }) => {
  return data && Array.isArray(data.pages) && data.pages.length > 0 ? (
    data.pages.map((page, index) => (
      <React.Fragment key={index}>
        {page.data.length > 0 ? (
          page.data.map((item) =>
            apiName === API_SOURCES.NEWS_API.NAME ? (
              <NewsItem key={item.id} item={item} />
            ) : apiName === API_SOURCES.GUARDIAN_API.NAME ? (
              <GuardianNewsItem key={item.id} item={item} />
            ) : apiName === API_SOURCES.NYTIMES.NAME ? (
              <NewYorkTimesNewsItem key={item._id} item={item} />
            ) : (
              <p>No matching API source</p>
            )
          )
        ) : (
          <p>No views available!</p>
        )}
      </React.Fragment>
    ))
  ) : (
    <p>No views available!</p>
  );
};

const NewsList = ({ data = {}, isPending = true, apiName, hasNextPage, isFetchingNextPage, fetchNextPage }) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        <Loading isPending={isPending} loadingSkelton={loadingSkelton}>
          <NewsListItems data={data} apiName={apiName} />
        </Loading>
      </div>
      <LoadMoreButton hasNextPage={hasNextPage} isFetchingNextPage={isFetchingNextPage} fetchNextPage={fetchNextPage} />
    </>
  );
};

export default NewsList;
