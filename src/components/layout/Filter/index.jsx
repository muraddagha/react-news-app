import React, { useContext } from "react";
import DatePicker from "react-datepicker";
import { useState, useRef } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { API_SOURCES, categories, sources } from "../../../constants";
import { FilterContext } from "../../../store/filter-context";
import moment from "moment";
import { buildQueryString } from "../../../utils/utils";

const Filter = () => {
  const initialFormState = { keyword: "", startDate: new Date(), category: "", source: "" };
  const [formData, setFormData] = useState(initialFormState);

  const { addFilterUrl, resetFilterUrl } = useContext(FilterContext);

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const formRef = useRef(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleDateChange = (date) => {
    setFormData((prevState) => ({
      ...prevState,
      startDate: date,
    }));
  };
  const clearFilter = () => {
    setFormData(initialFormState);
    resetFilterUrl();
  };

  const buildUrl = (form) => {
    const params = {
      q: form.keyword || "",
      sources: form.source || "",
      category: form.category || "",
      from: moment(form.startDate).format("YYYY/MM/DD") || "",
    };

    const queryString = buildQueryString(params);
    return `${API_SOURCES.NEWS_API.URL}top-headlines${queryString}`;
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const url = `${buildUrl(formData)}${API_SOURCES.NEWS_API.KEY}`;
    addFilterUrl(url);
    setIsOpen(false);
  };

  // const handleClickOutside = (event) => {
  //   if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //     setIsOpen(false);
  //   }
  // };
  // useEffect(() => {
  //   if (!isOpen) resetFilter();
  // }, [isOpen]);
  return (
    <div className="dropdown dropdown-end relative" ref={dropdownRef}>
      <div role="button" className="btn btn-ghost btn-circle" onClick={toggleDropdown}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      {isOpen && (
        <div
          className="card card-compact absolute bg-base-100 z-[1] mt-3 w-80 shadow p-0 visible opacity-100"
          style={{ insetInlineEnd: "0px" }}
        >
          <div className="card-body">
            <form onSubmit={onSubmit} ref={formRef}>
              <div className="flex flex-col gap-4">
                <label className="input input-bordered flex items-center gap-2 input-sm">
                  <input
                    onChange={handleChange}
                    value={formData.keyword}
                    type="text"
                    className="grow"
                    placeholder="Search keyword"
                    name="keyword"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </label>
                <select
                  className="select select-bordered w-full max-w-xs select-sm"
                  placeholder="Select category"
                  name="category"
                  onChange={handleChange}
                  disabled={formData.source}
                  value={formData.category}
                >
                  <option value="">{!formData.source ? "Select category" : "Can't mix with source (NewsAPI)."}</option>
                  {categories.map((category) => (
                    <React.Fragment key={category.id}>
                      <option value={category.name}>{category.name}</option>
                    </React.Fragment>
                  ))}
                </select>
                <select
                  className="select select-bordered w-full max-w-xs select-sm"
                  placeholder="Select source"
                  name="source"
                  onChange={handleChange}
                  disabled={formData.category}
                  value={formData.source}
                >
                  <option value="">
                    {!formData.category ? "Select source" : "Can't mix with category (NewsAPI)."}
                  </option>

                  {sources.map((source) => (
                    <React.Fragment key={source.id}>
                      <option value={source.name}>{source.name}</option>
                    </React.Fragment>
                  ))}
                </select>
                <label className="input input-bordered flex items-center gap-2 input-sm">
                  <DatePicker
                    name="startDate"
                    dateFormat="yyyy/MM/dd"
                    selected={formData.startDate}
                    onChange={handleDateChange}
                  />
                </label>
              </div>
              <div className="flex justify-end mt-4 gap-2">
                <button onClick={clearFilter} type="button" className="btn btn-ghost btn-outline btn-sm">
                  Clear
                </button>
                <button type="submit" className="btn btn-sm btn-primary">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
