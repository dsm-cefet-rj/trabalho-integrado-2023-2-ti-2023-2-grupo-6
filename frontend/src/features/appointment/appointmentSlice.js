import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import appointmentService from "./appointmentService";

const appointmentAdapter = createEntityAdapter();

const initialState = appointmentAdapter.getInitialState({
  message: "",
  isError: null,
});


export const getAppointments = createAsyncThunk(
  "appointment/",
  async (id) => {
    const response = await appointmentService.getAppointments(id);

    return response.data;
  }
);


export const createAppointment = createAsyncThunk(
  "appointment/createAppointment",
  async (appointment) => {
    const response = await appointmentService.createAppointment(appointment);

    return response.data;
  }
);

export const appointmentSlice = createSlice({
  name: "appointment",
  initialState: initialState,
  reducers: {
    setMessage: (state, action) => {
      state.message = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder


      .addCase(getAppointments.pending, (state) => {
        state.message = "loading";
      })

      .addCase(getAppointments.fulfilled, (state, action) => {
        state.message = "loaded";
        appointmentAdapter.setAll(state, action.payload);
      })

      .addCase(getAppointments.rejected, (state, action) => {
        state.message = "error";
        state.isError = action.error.message;
      })

      .addCase(createAppointment.pending, (state) => {
        state.message = "loading";
      })

      .addCase(createAppointment.fulfilled, (state, action) => {
        state.message = "saved";
        appointmentAdapter.addOne(state, action.payload);
      })

      .addCase(createAppointment.rejected, (state, action) => {
        state.message = "error";
        state.isError = action.error.message;
      })
  },
});

export const { selectAll: selectAllAppointments } =
  appointmentAdapter.getSelectors((state) => state?.appointment);

export const { setMessage } = appointmentSlice.actions;

export default appointmentSlice.reducer;
