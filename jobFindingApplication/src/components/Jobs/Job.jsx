import React from "react";
import { activeEditing, removeJobs} from "../../Redux/Features/Jobs/jobsSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Job = ({ jobs }) => {
  const dispatch = useDispatch()
  const { title, type, salary, deadline,id } = jobs || {};
  const navigate = useNavigate()
  const handleEdit = () =>{
    dispatch(activeEditing(jobs))
    navigate("/addJobs")
  }

  const handleDelete = () =>{
    dispatch(removeJobs(id))
  }
  return (
    <div className="jobs-list">
      {/* <!-- Single Job 1--> */}
      <div className="lws-single-job">
        <div className="flex-1 min-w-0">
          <h2 className="lws-title">{title}</h2>
          <div className="job-footers">
            <div className="lws-type">
              <i
                className={`fa-solid fa-stop text-lg mr-1.5 ${
                  type === "Full Time"
                    ? "text-[#FF8A00]"
                    : type === "Internship"
                    ? "text-[#FF5757]"
                    : type === "Remote"
                    ? "text-[#56E5C4]"
                    : ""
                }`}
              >
                {type}
              </i>
            </div>
            <div className="lws-salary">
              <i className="fa-solid fa-bangladeshi-taka-sign text-slate-400 text-lg mr-1.5"></i>
              {salary}
            </div>
            <div className="lws-deadline">
              <i className="fa-regular fa-calendar text-slate-400 text-lg mr-1.5"></i>
              Closing on {deadline}
            </div>
          </div>
        </div>
        <div className="mt-5 flex lg:mt-0 lg:ml-4">
          <span className="hidden sm:block">
            <button type="button" className="lws-edit btn btn-primary" onClick={handleEdit}>
              <i className="fa-solid fa-pen text-gray-300 -ml-1 mr-2"></i>
              Edit
            </button>
          </span>

          <span className="sm:ml-3">
            <button type="button" className="lws-delete btn btn-danger" onClick={handleDelete}>
              <i className="fa-solid fa-trash text-gray-300 -ml-1 mr-2"></i>
              Delete
            </button>
          </span>
        </div>
      </div>
      {/* <!-- Single Job 1--> */}
    </div>
  );
};

export default Job;
