import { Route, Routes } from "react-router-dom";

import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Blog from "../pages/Blog/Blog";
import BlogPost from "../pages/Blog/BlogPost";
import TeacherDetails from "../pages/Teachers/TeacherDetails";
import Teachers from "../pages/Teachers/Teachers";
import TeachersProfile from "../pages/Teachers/TeachersProfile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StudentsProfile from "../pages/Students/StudentsProfile";
import ContactList from "../components/ContactList/ContactList";
import Working from "../components/Working/Working";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contactList" element={<ContactList />} />
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/blog/:id" element={<BlogPost />}></Route>
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/teachers/:id" element={<TeacherDetails />} />
        <Route path="/teachers/profile/:id" element={<TeachersProfile />} />
        <Route path="/users/profile/:id" element={<StudentsProfile />} />
        <Route path="/working" element={<Working />} />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default Routers;
