import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteJob, getJobs, postJob, updateJob } from "./jobsSliceApi";


// declaring InitialState

const initialState = {
  jobs: [],
  isLoading: false,
  isError: false,
  error: "",
  editing:{},
  editMode: false
};

// declaring async thunks

// get all jobs

export const fetchJobs = createAsyncThunk("Jobs/fetchJobs", async ({sort="" , search="" , types=""} = {}) => {
  const jobs = await getJobs({types ,sort, search });
  return jobs;
});

// post single job

export const createJobs = createAsyncThunk("Jobs/createJobs", async (data) => {
  const job = await postJob(data);
  return job;
});

// update single job

export const modifyJobs = createAsyncThunk("Jobs/modifyJobs",async ({ id, data }) => {
    const job = await updateJob(id, data);
    return job;
  }
);

// delete single job

export const removeJobs = createAsyncThunk("Jobs/removeJobs", async (id) => {
  const job = await deleteJob(id);
  return job;
});

const jobsSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers:{
    activeEditing: (state , action) =>{
      state.editMode= true
      state.editing = action.payload
    },
    inActiveEditing: (state) =>{
        state.editMode = false
        state.editing = {}
    }
    },
    extraReducers: (builder) =>{
        builder

        // fetch

        .addCase(fetchJobs.pending, (state) =>{
            state.isLoading = true;
            state.isError = false;
        })
        .addCase(fetchJobs.fulfilled, (state, action) =>{
            state.isLoading = false;
            state.isError = false;
            state.jobs = action.payload;
        })
        .addCase(fetchJobs.rejected, (state, action) =>{
            state.isLoading = false;
            state.isError = true;
            state.error = action.error.message;
            state.jobs = [];
        })

        // post

        .addCase(createJobs.pending, (state) =>{
            state.isLoading = true;
            state.isError = false;
        })
        .addCase(createJobs.fulfilled, (state, action) =>{
            state.isLoading = false;
            state.isError = false;
            state.jobs.push(action.payload);
        })
        .addCase(createJobs.rejected, (state, action) =>{
            state.isLoading = false;
            state.isError = true;
            state.error = action.error.message;
           
        })

        // update

        .addCase(modifyJobs.pending, (state) =>{
            state.isLoading = true;
            state.isError = false;
        })
        .addCase(modifyJobs.fulfilled, (state, action) =>{
            state.isLoading = false;
            state.isError = false;
            const indexToUpdate = state.jobs.findIndex(j => j.id === action.payload.id);
            state.jobs[indexToUpdate] = action.payload;
        })
        .addCase(modifyJobs.rejected, (state, action) =>{
            state.isLoading = false,
            state.isError = true,
            state.error = action.error.message
           
        })

        // delete

        .addCase(removeJobs.pending, (state) =>{
            state.isLoading = true;
            state.isError = false;
        })
        .addCase(removeJobs.fulfilled, (state, action) =>{
            state.isLoading = false;
            state.isError = false;
            state.jobs = state.jobs.filter(j => j.id !== action.meta.arg)
        })
        .addCase(removeJobs.rejected, (state, action) =>{
            state.isLoading = false;
            state.isError = true;
            state.error = action.error.message;
           
        })

    }
})

export const {activeEditing , inActiveEditing} = jobsSlice.actions

export default jobsSlice.reducer