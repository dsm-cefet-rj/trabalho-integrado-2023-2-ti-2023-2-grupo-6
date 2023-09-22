import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import teacherReducer from "../features/teacher/teacherSlice";

const store = configureStore({
  reducer: { auth: authReducer, teacher: teacherReducer },
});

export default store;
