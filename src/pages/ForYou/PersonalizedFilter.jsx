import { useEffect, useState } from "react";
import React from "react";
import { API_SOURCES, authors, categories, sources } from "../../constants";
import Divider from "../../components/Divider";
import { useDispatch, useSelector } from "react-redux";
import { addFilter, clearFilter } from "../../store/personalizedFeedFilterSlice";
import { buildQueryString } from "../../utils/utils";

const PersonalizedFilter = () => {
  const dispatch = useDispatch();
  const currentFormState = useSelector((state) => state.personalizedFeedFilter.filter);
  const [formData, setFormData] = useState(currentFormState);

  const buildUrl = (form) => {
    const params = {
      facet_fields: "source,section_name,author",
    };

    if (form.source) {
      params.fq = `source:${form.source}`;
    }
    if (form.category) {
      params.fq = `${params.fq ? params.fq + "," : ""}section_name:${form.category}`;
    }
    if (form.author) {
      params.fq = `${params.fq ? params.fq + "," : ""}author:${form.author}`;
    }

    const queryString = buildQueryString(params);
    return `${API_SOURCES.NYTIMES.URL}articlesearch.json${queryString}${API_SOURCES.NYTIMES.KEY}`;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onClear = () => {
    dispatch(clearFilter());
    setFormData(currentFormState);
  };
  const isFormDataEmpty = () => {
    return !formData.author && !formData.category && !formData.source;
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const url = buildUrl(formData);
    const storeData = {
      ...formData,
      url,
    };
    dispatch(addFilter(storeData));
  };
  useEffect(() => {
    setFormData(currentFormState);
  }, [currentFormState]);
  return (
    <div>
      <Divider title="Personalize your feed" />
      <form onSubmit={onSubmit}>
        <div className="flex flex-wrap md:flex-nowrap gap-4">
          <select
            className="select select-bordered w-full select-sm"
            placeholder="Select author"
            name="author"
            onChange={handleChange}
            value={formData.author}
          >
            <option value="">Select Author</option>
            {authors.map((author) => (
              <React.Fragment key={author.id}>
                <option value={author.name}>{author.name}</option>
              </React.Fragment>
            ))}
          </select>
          <select
            className="select select-bordered w-full select-sm"
            placeholder="Select category"
            name="category"
            onChange={handleChange}
            value={formData.category}
          >
            <option value="">Select category</option>
            {categories.map((category) => (
              <React.Fragment key={category.id}>
                <option value={category.name}>{category.name}</option>
              </React.Fragment>
            ))}
          </select>
          <select
            className="select select-bordered w-full select-sm"
            placeholder="Select source"
            name="source"
            onChange={handleChange}
            value={formData.source}
          >
            <option value="">Select source</option>

            {sources.map((source) => (
              <React.Fragment key={source.id}>
                <option value={source.name}>{source.name}</option>
              </React.Fragment>
            ))}
          </select>
          <div className="w-full">
            <button disabled={isFormDataEmpty()} type="submit" className="btn btn-sm btn-primary w-full">
              Add
            </button>
            <button
              disabled={isFormDataEmpty()}
              onClick={onClear}
              type="button"
              className="btn btn-ghost btn-outline btn-sm w-full mt-4"
            >
              Clear
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PersonalizedFilter;
