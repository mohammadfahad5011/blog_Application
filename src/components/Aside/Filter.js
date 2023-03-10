import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterd } from "../../features/Filter/FilterSlice";

const Filter = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const dispatch = useDispatch();
  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
    dispatch(filterd(event.target.value));
  };
  console.log(selectedFilter);

  return (
    <div className="sidebar-content">
      <h4>Filter</h4>
      <div className="radio-group">
        {/* <!-- handle filter on button click --> */}
        <div>
          <input
            type="radio"
            name="filter"
            id="lws-all"
            value="all"
            checked={selectedFilter === "all"}
            className="radio"
            onChange={handleFilterChange}
          />
          <label htmlFor="lws-all">All</label>
        </div>
        <div>
          <input
            type="radio"
            name="filter"
            id="lws-saved"
            value="saved"
            checked={selectedFilter === "saved"}
            className="radio"
            onChange={handleFilterChange}
          />
          <label htmlFor="lws-saved">Saved</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
