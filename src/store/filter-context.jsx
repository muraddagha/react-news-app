import { createContext, useState } from "react";
import { API_SOURCES } from "../constants";
export const FilterContext = createContext();

const FilterContextProvider = ({ children }) => {
  const defaultUrl = `${API_SOURCES.NEWS_API.URL}everything?q=bitcoin?${API_SOURCES.NEWS_API.KEY}`;

  const [filterUrl, setFilterUrl] = useState(defaultUrl);

  const resetFilterUrl = () => setFilterUrl(defaultUrl);
  const addFilterUrl = (value) => {
    if (value) setFilterUrl(value);
  };
  return <FilterContext.Provider value={{ filterUrl, addFilterUrl, resetFilterUrl }}>{children}</FilterContext.Provider>;
};

export default FilterContextProvider;
