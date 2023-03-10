import React from "react";
import Filter from "./Filter";
import Sort from "./Sort";

const Aside = () => {
  return (
    <aside>
      <div class="sidebar-items">
        <Sort />
        <Filter />
      </div>
    </aside>
  );
};

export default Aside;
