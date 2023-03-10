import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sorted } from "../../features/Filter/FilterSlice";

const Sort = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const dispatch = useDispatch();
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
    dispatch(sorted(event.target.value));
  };
  console.log(selectedValue);

  return (
    <div class="sidebar-content">
      <h4>Sort</h4>
      <select
        name="sort"
        id="lws-sort"
        class="w-full max-w-[150px] border-2 rounded-md text-gray-500"
        value={selectedValue}
        onChange={handleSelectChange}
      >
        <option value="">Default</option>
        <option value="newest">Newest</option>
        <option value="most_liked">Most Liked</option>
      </select>
    </div>
  );
};

export default Sort;
