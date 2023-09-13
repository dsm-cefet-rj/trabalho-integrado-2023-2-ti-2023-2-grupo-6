import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Blog from "../pages/Blog/index";
import BlogId from "../pages/BlogId";

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
      <Route path="/blog/:id" element={<BlogId />}></Route>
    </Routes>
  );
};

export default Routers;
