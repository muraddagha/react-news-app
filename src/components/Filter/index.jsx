import { useState, useRef } from "react";
import { categories, sources } from "../../constants";
import React from "react";
import DatePicker from "react-datepicker";
const FilterList = ({ addFilterSate, resetFilterState, hideSource = false, disableFieldsDependency = false }) => {
  const initialFormState = { keyword: "", startDate: new Date(), category: "", source: "" };
  const [formData, setFormData] = useState(initialFormState);

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
    resetFilterState();
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addFilterSate(formData);
    setIsOpen(false);
  };

  return (
    <div className="dropdown dropdown-end relative" ref={dropdownRef}>
      <div role="button" className="btn btn-ghost btn-circle" onClick={toggleDropdown}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
          height="20px"
          width="20px"
          version="1.1"
          viewBox="0 0 210.68 210.68"
        >
          <path d="M205.613,30.693c0-10.405-10.746-18.149-32.854-23.676C154.659,2.492,130.716,0,105.34,0  C79.965,0,56.021,2.492,37.921,7.017C15.813,12.544,5.066,20.288,5.066,30.693c0,3.85,1.476,7.335,4.45,10.479l68.245,82.777v79.23  c0,2.595,1.341,5.005,3.546,6.373c1.207,0.749,2.578,1.127,3.954,1.127c1.138,0,2.278-0.259,3.331-0.78l40.075-19.863  c2.55-1.264,4.165-3.863,4.169-6.71l0.077-59.372l68.254-82.787C204.139,38.024,205.613,34.542,205.613,30.693z M44.94,20.767  C61.467,17.048,82.917,15,105.34,15s43.874,2.048,60.399,5.767c18.25,4.107,23.38,8.521,24.607,9.926  c-1.228,1.405-6.357,5.819-24.607,9.926c-16.525,3.719-37.977,5.767-60.399,5.767S61.467,44.338,44.94,40.62  c-18.249-4.107-23.38-8.521-24.607-9.926C21.56,29.288,26.691,24.874,44.94,20.767z M119.631,116.486  c-1.105,1.341-1.711,3.023-1.713,4.761l-0.075,57.413l-25.081,12.432v-69.835c0-1.741-0.605-3.428-1.713-4.771L40.306,54.938  C58.1,59.1,81.058,61.387,105.34,61.387c24.283,0,47.24-2.287,65.034-6.449L119.631,116.486z" />
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
                  disabled={disableFieldsDependency && formData.source}
                  value={formData.category}
                >
                  <option value="">
                    {disableFieldsDependency && formData.source
                      ? "Can't mix with source (NewsAPI)."
                      : "Select category"}
                  </option>
                  {categories.map((category) => (
                    <React.Fragment key={category.id}>
                      <option value={category.name}>{category.name}</option>
                    </React.Fragment>
                  ))}
                </select>
                {!hideSource ? (
                  <select
                    className="select select-bordered w-full max-w-xs select-sm"
                    placeholder="Select source"
                    name="source"
                    onChange={handleChange}
                    disabled={disableFieldsDependency && formData.category}
                    value={formData.source}
                  >
                    <option value="">
                      {disableFieldsDependency && formData.category
                        ? "Can't mix with category (NewsAPI)."
                        : "Select source"}
                    </option>

                    {sources.map((source) => (
                      <React.Fragment key={source.id}>
                        <option value={source.name}>{source.name}</option>
                      </React.Fragment>
                    ))}
                  </select>
                ) : (
                  ""
                )}

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

export default FilterList;
