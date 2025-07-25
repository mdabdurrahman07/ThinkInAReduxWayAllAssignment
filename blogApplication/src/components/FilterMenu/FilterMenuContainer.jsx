import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../Redux/features/blogs/blogsSlice";
import {
  filterCheck,
  sortCheck,
} from "../../Redux/features/filters/filtersSlice";

const FilterMenuContainer = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.filter);
  const sort = useSelector((state) => state.filters.sort);
  // triggering the api for changes
  useEffect(() => {
    dispatch(fetchBlogs({ filter, sort }));
  }, [dispatch, filter, sort]);

  const handleFiler = (e) => {
    dispatch(filterCheck(e.target.value));
  };

  const handleSort = (e) => {
    dispatch(sortCheck(e.target.value));
  };
  return (
    <div>
      <aside>
        <div className="sidebar-items">
          <div className="sidebar-content">
            <h4>Sort</h4>
            <select
              name="sort"
              id="lws-sort"
              className="w-full max-w-[150px] border-2 rounded-md text-gray-500"
              onChange={handleSort}
            >
              <option value="">Default</option>
              <option value="newest">Newest</option>
              <option value="most_liked">Most Liked</option>
            </select>
          </div>
          <div className="sidebar-content">
            <h4>Filter</h4>
            <div className="radio-group" onChange={handleFiler}>
              {/* <!-- handle filter on button click --> */}
              <div>
                <input
                  type="radio"
                  name="filter"
                  id="lws-all"
                  defaultChecked
                  className="radio"
                  value="all"
                />
                <label htmlFor="lws-all">All</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="filter"
                  id="lws-saved"
                  className="radio"
                  value="saved"
                />
                <label htmlFor="lws-saved">Saved</label>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default FilterMenuContainer;
