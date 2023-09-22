import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import teacherService from "./teacherService";

const teacherAdapter = createEntityAdapter();

const initialState = teacherAdapter.getInitialState({
  message: "",
  isError: null,
});

export const getTeachers = createAsyncThunk("teacher/getTeachers", async () => {
  const response = await teacherService.getTeachers();

  return response.data;
});

export const updateTeacher = createAsyncThunk(
  "teacher/updateTeacher",
  async (teacher) => {
    const response = await teacherService.updateTeacher(teacher);

    return response.data;
  }
);

export const createTeacher = createAsyncThunk(
  "teacher/createTeacher",
  async (teacher) => {
    const response = await teacherService.createTeacher(teacher);

    return response.data;
  }
);

export const deleteTeacher = createAsyncThunk(
  "teacher/deleteTeacher",
  async (id) => {
    const response = await teacherService.deleteTeacher(id);

    return response.data;
  }
);

export const teacherSlice = createSlice({
  name: "teacher",
  initialState: initialState,
  reducers: {
    setMessage: (state, action) => {
      state.message = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTeachers.pending, (state) => {
      state.message = "loading";
    });

    builder.addCase(getTeachers.fulfilled, (state, action) => {
      state.message = "loaded";
      teacherAdapter.setAll(state, action.payload);
    });

    builder.addCase(getTeachers.rejected, (state, action) => {
      state.message = "error";
      state.isError = action.error.message;
    });

    builder.addCase(updateTeacher.pending, (state) => {
      state.message = "loading";
    });

    builder.addCase(updateTeacher.fulfilled, (state, action) => {
      state.message = "saved";
      teacherAdapter.upsertOne(state, action.payload);
    });

    builder.addCase(updateTeacher.rejected, (state, action) => {
      state.message = "error";
      state.isError = action.error.message;
    });

    builder.addCase(createTeacher.pending, (state) => {
      state.message = "loading";
    });

    builder.addCase(createTeacher.fulfilled, (state, action) => {
      state.message = "saved";
      teacherAdapter.addOne(state, action.payload);
    });

    builder.addCase(createTeacher.rejected, (state, action) => {
      state.message = "error";
      state.isError = action.error.message;
    });

    builder.addCase(deleteTeacher.pending, (state) => {
      state.message = "loading";
    });

    builder.addCase(deleteTeacher.fulfilled, (state, action) => {
      state.message = "deleted";
      teacherAdapter.removeOne(state, action.payload);
    });

    builder.addCase(deleteTeacher.rejected, (state, action) => {
      state.message = "error";
      state.isError = action.error.message;
    });
  },
});

export const { selectAll: selectAllTeachers } = teacherAdapter.getSelectors(
  (state) => state?.teacher
);

export const { setMessage } = teacherSlice.actions;

export default teacherSlice.reducer;
