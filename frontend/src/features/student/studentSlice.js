import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import studentService from "./studentService";

const studentAdapter = createEntityAdapter();

const initialState = studentAdapter.getInitialState({
  message: "",
  isError: null,
});

export const getStudents = createAsyncThunk("student/getStudents", async () => {
  const response = await studentService.getStudents();
  return response.data;
});

export const getStudentsDetails = createAsyncThunk(
  "student/getStudentsDetails",
  async (id) => {
    const response = await studentService.getStudentsDetails(id);
    return response.data;
  }
);

export const createStudent = createAsyncThunk(
  "student/createStudent",
  async (student) => {
    const response = await studentService.createStudent(student);
    return response.data;
  }
);

export const studentSlice = createSlice({
  name: "student",
  initialState: initialState,
  reducers: {
    setMessage: (state, action) => {
      state.message = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStudents.pending, (state) => {
        state.message = "loading";
      })
      .addCase(getStudents.fulfilled, (state, action) => {
        state.message = "loaded";
        studentAdapter.setAll(state, action.payload);
      })
      .addCase(getStudents.rejected, (state, action) => {
        state.message = "error";
        state.isError = action.error.message;
      })
      .addCase(createStudent.pending, (state) => {
        state.message = "loading";
      })
      .addCase(createStudent.fulfilled, (state, action) => {
        state.message = "saved";
        studentAdapter.addOne(state, action.payload);
      })
      .addCase(createStudent.rejected, (state, action) => {
        state.message = "error";
        state.isError = action.error.message;
      })
      .addCase(getStudentsDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getStudentsDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.selectedStudent = action.payload;
      })
      .addCase(getStudentsDetails.rejected, (state, action) => {
        state.status = "failed";
        state.isError = action.error.message;
      });
  },
});

export const { selectAll: selectAllStudents, selectById: selectStudentById } =
  studentAdapter.getSelectors((state) => state?.student);

export const { setMessage } = studentSlice.actions;

export default studentSlice.reducer;
