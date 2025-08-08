import React from "react";

const Tabs = () => {
  return (
    <div class="order-2 xl:-order-1">
      <div class="flex items-center justify-between mb-12">
        <h4 class="mt-2 text-xl font-bold">Book List</h4>

        <div class="flex items-center space-x-4">
          <button class="lws-filter-btn active-filter">All</button>
          <button class="lws-filter-btn">Featured</button>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
