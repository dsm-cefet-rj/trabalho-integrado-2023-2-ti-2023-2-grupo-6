import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Blog from "../pages/Blog/Blog";
import BlogPost from "../pages/Blog/BlogPost";
import TeacherDetails from "../pages/Teachers/TeacherDetails";
import Teachers from "../pages/Teachers/Teachers";

import { Route, Routes } from "react-router-dom";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />}></Route>
      <Route path="/blog/:id" element={<BlogPost />}></Route>
      <Route path="/professores" element={<Teachers />} />
      <Route path="/professores/:id" element={<TeacherDetails />} />
    </Routes>
  );
};

export default Routers;
