import { createJobs, modifyJobs } from "../../Redux/Features/Jobs/jobsSlice";
import SideBar from "../Header/SideBar";
import { useDispatch, useSelector } from "react-redux";
const AddJob = () => {
  const { editMode, editing, isLoading } = useSelector((state) => state.jobs);

  const dispatch = useDispatch();

  const handlePostJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.lwsJobTitle.value;
    const type = form.lwsJobType.value;
    const salary = form.lwsJobSalary.value;
    const deadline = form.lwsJobDeadline.value;

    dispatch(
      createJobs({
        title,
        type,
        salary: Number(salary),
        deadline,
      })
    );
    form.reset();
  };

  const handleUpdateJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.lwsJobTitle.value;
    const type = form.lwsJobType.value;
    const salary = form.lwsJobSalary.value;
    const deadline = form.lwsJobDeadline.value;

    dispatch(
      modifyJobs({
        id: editing?.id,
        data: {
          title: title,
          type: type,
          salary: salary,
          deadline: deadline,
        },
      })
    );
    form.reset()
  };

  return (
    <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8">
      <SideBar />
      <div className="lg:pl-[14rem] mt-[5.8125rem]">
        <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
          <h1 className="mb-10 text-center lws-section-title">
            {editMode === true ? "Update Job Post" : "Add New Job"}
          </h1>

          <div className="max-w-3xl mx-auto">
            <form
              className="space-y-6"
              onSubmit={editMode ? handleUpdateJob : handlePostJob}
            >
              <div className="fieldContainer">
                <label className="text-sm font-medium text-slate-300">
                  Job Title
                </label>
                <select
                  id="lws-JobTitle"
                  name="lwsJobTitle"
                  required
                  defaultValue={editing?.title}
                >
                  <option value="" hidden selected>
                    Select Job
                  </option>
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
                <label>Job Type</label>
                <select
                  id="lws-JobType"
                  name="lwsJobType"
                  required
                  defaultValue={editing?.type}
                >
                  <option value="" hidden selected>
                    Select Job Type
                  </option>
                  <option>Full Time</option>
                  <option>Internship</option>
                  <option>Remote</option>
                </select>
              </div>

              <div className="fieldContainer">
                <label>Salary</label>
                <div className="flex border rounded-md shadow-sm border-slate-600">
                  <span className="input-tag">BDT</span>
                  <input
                    type="number"
                    name="lwsJobSalary"
                    id="lws-JobSalary"
                    required
                    className="!rounded-l-none !border-0"
                    placeholder="20,00,000"
                    defaultValue={editing?.salary}
                  />
                </div>
              </div>

              <div className="fieldContainer">
                <label>Deadline</label>
                <input
                  type="date"
                  name="lwsJobDeadline"
                  id="lws-JobDeadline"
                  required
                  defaultValue={editing?.deadline}
                />
              </div>

              <div className="text-right">
                <button
                  disabled={isLoading}
                  type="submit"
                  id="lws-submit"
                  className="cursor-pointer btn btn-primary w-fit"
                >
                  {editMode ? "Update" : "Submit"}
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
