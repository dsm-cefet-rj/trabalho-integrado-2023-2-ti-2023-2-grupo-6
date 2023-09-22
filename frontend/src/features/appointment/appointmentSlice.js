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

export const getStudentAppointments = createAsyncThunk(
  "appointment/getStudentAppointments",
  async (token) => {
    const response = await appointmentService.getStudentAppointments(token);
    return response.data;
  }
);

export const getTeacherAppointments = createAsyncThunk(
  "appointment/getTeacherAppointments",
  async (id) => {
    const response = await appointmentService.getTeacherAppointments(id);

    return response.data;
  }
);

export const updateAppointment = createAsyncThunk(
  "appointment/updateAppointment",
  async (appointment) => {
    const response = await appointmentService.updateAppointment(appointment);

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

export const deleteAppointment = createAsyncThunk(
  "appointment/deleteAppointment",
  async (id, token) => {
    const response = await appointmentService.deleteAppointment(id, token);

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
      .addCase(getStudentAppointments.pending, (state) => {
        state.message = "loading";
      })

      .addCase(getStudentAppointments.fulfilled, (state, action) => {
        state.message = "loaded";
        appointmentAdapter.setAll(state, action.payload);
      })

      .addCase(getStudentAppointments.rejected, (state, action) => {
        state.message = "error";
        state.isError = action.error.message;
      })

      .addCase(getTeacherAppointments.pending, (state) => {
        state.message = "loading";
      })

      .addCase(getTeacherAppointments.fulfilled, (state, action) => {
        state.message = "loaded";
        appointmentAdapter.setAll(state, action.payload);
      })

      .addCase(getTeacherAppointments.rejected, (state, action) => {
        state.message = "error";
        state.isError = action.error.message;
      })

      .addCase(updateAppointment.pending, (state) => {
        state.message = "loading";
      })

      .addCase(updateAppointment.fulfilled, (state, action) => {
        state.message = "saved";
        appointmentAdapter.upsertOne(state, action.payload);
      })

      .addCase(updateAppointment.rejected, (state, action) => {
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

      .addCase(deleteAppointment.pending, (state) => {
        state.message = "loading";
      })

      .addCase(deleteAppointment.fulfilled, (state, action) => {
        state.message = "deleted";
        appointmentAdapter.removeOne(state, action.payload);
      })
      .addCase(deleteAppointment.rejected, (state, action) => {
        state.message = "error";
        state.isError = action.error.message;
      });
  },
});

export const { selectAll: selectAllAppointments } =
  appointmentAdapter.getSelectors((state) => state?.appointment);

export const { setMessage } = appointmentSlice.actions;

export default appointmentSlice.reducer;
