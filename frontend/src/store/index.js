import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import teacherReducer from "../features/teacher/teacherSlice";
import contactReducer from "../features/contact/contactSlice";
import blogReducer from "../features/blog/blogSlice";
import studentReducer from "../features/student/studentSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    student: studentReducer,
    teacher: teacherReducer,
    contact: contactReducer,
    blog: blogReducer,
  },
});

export default store;
