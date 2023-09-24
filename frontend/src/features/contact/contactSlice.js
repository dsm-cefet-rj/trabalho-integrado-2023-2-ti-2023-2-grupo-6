import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import contactService from "./contactService";

const initialState = {
  message: "",
  isError: null,
};

export const sendContactMessage = createAsyncThunk(
  "contact/sendContactMessage",
  async (contactData) => {
    const response = await contactService.sendContactMessage(contactData);
    return response.data;
  }
);

export const getContacts = createAsyncThunk("contact/getContacts", async () => {
  const response = await contactService.getContacts();

  return response.data;
});

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    setMessage: (state, action) => {
      state.message = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendContactMessage.pending, (state) => {
        state.message = "loading";
      })
      .addCase(sendContactMessage.fulfilled, (state) => {
        state.message = "message_sent";
      })
      .addCase(sendContactMessage.rejected, (state, action) => {
        state.message = "error";
        state.isError = action.error.message;
      })
      .addCase(getContacts.fulfilled, (state, action) => {
        state.contacts = action.payload;
      });
  },
});

export const { setMessage } = contactSlice.actions;

export default contactSlice.reducer;
