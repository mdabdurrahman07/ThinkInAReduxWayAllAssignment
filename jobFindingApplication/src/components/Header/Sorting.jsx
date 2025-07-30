import { useEffect } from "react";
import Job from "../Jobs/Job";
import {useDispatch, useSelector} from "react-redux"
import { fetchJobs } from "../../Redux/Features/Jobs/jobsSlice";
import Loading from "../Loading/Loading";
const Sorting = () => {
  const dispatch = useDispatch()
  useEffect(() =>{
    dispatch(fetchJobs())
  },[dispatch])
  const {jobs , isLoading , isError , error} = useSelector((state) => state.jobs)

  let content;

  if (isLoading) {
    content = <Loading />;
  } else if (!isLoading && isError) {
    content = <div className="col-span-12">{error}</div>;
  } else if (!isError && !isLoading && jobs?.length === 0) {
    content = <div className="col-span-12">No jobs found</div>;
  } else {
    content = jobs.map((job) => (
     <Job key={job?.id} jobs={job}/>
    ));
  }

  return (
    <div className="lg:pl-[14rem]  mt-[5.8125rem]">
      <main className="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
        <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
          <h1 className="lws-section-title">All Available Jobs</h1>
          <div className="flex gap-4">
            <div className="search-field group flex-1">
              <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
              <input
                type="text"
                placeholder="Search Job"
                className="search-input"
                id="lws-searchJob"
              />
            </div>
            <select
              id="lws-sort"
              name="sort"
              autocomplete="sort"
              className="flex-1"
            >
              <option>Default</option>
              <option>Salary (Low to High)</option>
              <option>Salary (High to Low)</option>
            </select>
          </div>
        </div>
        {/* Single Jobs */}
        {content}
        {/* Single Jobs */}
      </main>
    </div>
  );
};

export default Sorting;
