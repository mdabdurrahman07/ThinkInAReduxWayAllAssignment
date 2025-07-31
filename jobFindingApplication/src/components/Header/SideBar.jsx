import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../../Redux/Features/Jobs/jobsSlice";
import { typesCheck } from "../../Redux/Features/Filters/FiltersSlice";

const SideBar = () => {
  const dispatch = useDispatch();
  const {types , search , sort} = useSelector((state) => state.filters)
  useEffect(() => {
    if (types) {
      dispatch(fetchJobs({ types }));
    }
  }, [dispatch, types]);
  const handleTypesChange = (Types) => {
    dispatch(typesCheck(Types))
     dispatch(fetchJobs({ types: Types, sort, search }));
  };

  return (
    <div className="sidebar">
      <nav>
        <ul className="space-y-4 cursor-pointer">
          <li>
            <div className="main-menu menu-active" id="lws-alljobs-menu" onClick={() => handleTypesChange("")}>
              <i className="fa-solid fa-briefcase"></i>
              <span> All Available Jobs</span>
            </div>
            <ul className="space-y-6 lg:space-y-2 ">
              <li>
                <div
                  className="sub-menu"
                  id="lws-internship-menu"
                  onClick={() => handleTypesChange("Internship")}
                >
                  <i className="fa-solid fa-stop !text-[#FF5757]"></i>
                  Internship
                </div>
              </li>
              <li>
                <div
                  className="sub-menu"
                  id="lws-fulltime-menu"
                  onClick={() => handleTypesChange("Full Time")}
                >
                  <i className="fa-solid fa-stop !text-[#FF8A00]"></i>
                  Full Time
                </div>
              </li>
              <li>
                <div
                  className="sub-menu"
                  id="lws-remote-menu"
                  onClick={() => handleTypesChange("Remote")}
                >
                  <i className="fa-solid fa-stop !text-[#56E5C4]"></i>
                  Remote
                </div>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/addJobs" className="main-menu" id="lws-addJob-menu">
              <i className="fa-solid fa-file-circle-plus"></i>
              <span>Add NewJob</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
