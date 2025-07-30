import React from 'react';
import { Link } from 'react-router-dom';

const AddJob = () => {
    return (
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8">
    <div className="sidebar">
      <nav>
        <ul className="space-y-4">
          <li>
            <a href="/jobs" className="main-menu menu-active" id="lws-alljobs-menu">
              <i className="fa-solid fa-briefcase"></i>
              <span> All Available Jobs</span>
            </a>
            <ul className="space-y-6 lg:space-y-2 ">
              <li>
                <a className="sub-menu" href="/jobs/internship" id="lws-internship-menu">
                  <i className="fa-solid fa-stop !text-[#FF5757]"></i>
                  Internship
                </a>
              </li>
              <li>
                <a className="sub-menu" href="/jobs/fulltime" id="lws-fulltime-menu">
                  <i className="fa-solid fa-stop !text-[#FF8A00]"></i>
                  Full Time
                </a>
              </li>
              <li>
                <a className="sub-menu" href="/jobs/remote" id="lws-remote-menu">
                  <i className="fa-solid fa-stop !text-[#56E5C4]"></i>
                  Remote
                </a>
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
    <div className="lg:pl-[14rem] mt-[5.8125rem]">
      <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
        <h1 className="mb-10 text-center lws-section-title">Add New Job</h1>

        <div className="max-w-3xl mx-auto">
          <form className="space-y-6">
            <div className="fieldContainer">
              <label for="lws-JobTitle" className="text-sm font-medium text-slate-300">Job Title</label>
              <select id="lws-JobTitle" name="lwsJobTitle" required>
                <option value="" hidden selected>Select Job</option>
                <option>Software Engineer</option>
                <option>Software Developer</option>
                <option>Full Stack Developer</option>
                <option>MERN Stack Developer</option>
                <option>DevOps Engineer</option>
                <option>QA Engineer</option>
                <option>Product Manager</option>
                <option>Social Media Manager</option>
                <option>Senior Executive</option>
                <option>Junior Executive</option>
                <option>Android App Developer</option>
                <option>IOS App Developer</option>
                <option>Frontend Developer</option>
                <option>Frontend Engineer</option>
              </select>
            </div>

            <div className="fieldContainer">
              <label for="lws-JobType">Job Type</label>
              <select id="lws-JobType" name="lwsJobType" required>
                <option value="" hidden selected>Select Job Type</option>
                <option>Full Time</option>
                <option>Internship</option>
                <option>Remote</option>
              </select>
            </div>

            <div className="fieldContainer">
              <label for="lws-JobSalary">Salary</label>
              <div className="flex border rounded-md shadow-sm border-slate-600">
                <span className="input-tag">BDT</span>
                <input type="number" name="lwsJobSalary" id="lws-JobSalary" required className="!rounded-l-none !border-0"
                  placeholder="20,00,000" />
              </div>
            </div>

            <div className="fieldContainer">
              <label for="lws-JobDeadline">Deadline</label>
              <input type="date" name="lwsJobDeadline" id="lws-JobDeadline" required />
            </div>

            <div className="text-right">
              <button type="submit" id="lws-submit" className="cursor-pointer btn btn-primary w-fit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
    </div>
    );
};

export default AddJob;