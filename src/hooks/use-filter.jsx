import { useState } from "react";

const initialFilterState = { keyword: "", startDate: new Date(), category: "" };

export const useFilter = (defaultUrl, buildUrlFn, AuthKey) => {
  const [url, setUrl] = useState(defaultUrl);
  const [filterState, setFilterState] = useState(initialFilterState);

  const resetFilterState = () => {
    setFilterState(initialFilterState);
    setUrl(defaultUrl);
  };

  const addFilterState = (value) => {
    setFilterState(value);
    const url = `${buildUrlFn(value)}${AuthKey}`;
    setUrl(url);
  };

  return { url, filterState, resetFilterState, addFilterState };
};
