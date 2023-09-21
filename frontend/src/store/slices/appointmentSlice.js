import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

import {
  createAppointment,
  deleteAppointment,
  getClientAppointments,
  getProfessionalAppointments,
  updateAppointment,
} from "../thunks";

const appointmentAdapter = createEntityAdapter();

const initialState = appointmentAdapter.getInitialState({
  status: "not_loaded",
  error: null,
});

export const appointmentSlice = createSlice({
  name: "appointment",
  initialState: initialState,
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getClientAppointments.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(getClientAppointments.fulfilled, (state, action) => {
      state.status = "loaded";
      appointmentAdapter.setAll(state, action.payload);
    });

    builder.addCase(getClientAppointments.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    });

    builder.addCase(getProfessionalAppointments.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(getProfessionalAppointments.fulfilled, (state, action) => {
      state.status = "loaded";
      appointmentAdapter.setAll(state, action.payload);
    });

    builder.addCase(getProfessionalAppointments.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    });

    builder.addCase(updateAppointment.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(updateAppointment.fulfilled, (state, action) => {
      state.status = "saved";
      appointmentAdapter.upsertOne(state, action.payload);
    });

    builder.addCase(updateAppointment.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    });

    builder.addCase(createAppointment.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(createAppointment.fulfilled, (state, action) => {
      state.status = "saved";
      appointmentAdapter.addOne(state, action.payload);
    });

    builder.addCase(createAppointment.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    });

    builder.addCase(deleteAppointment.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(deleteAppointment.fulfilled, (state, action) => {
      state.status = "deleted";
      appointmentAdapter.removeOne(state, action.payload);
    });

    builder.addCase(deleteAppointment.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    });
  },
});

export const {
  selectAll: selectAllAppointments,
  selectById: selectAppointmentById,
} = appointmentAdapter.getSelectors((state) => state?.appointment);

export const selectAppointmentsThunksStatus = (state) =>
  state?.appointment.status;

export const selectAppointmentsThunksError = (state) =>
  state?.appointment.error;

export const { setStatus } = appointmentSlice.actions;

export default appointmentSlice.reducer;
