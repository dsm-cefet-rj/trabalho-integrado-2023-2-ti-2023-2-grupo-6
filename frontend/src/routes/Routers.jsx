import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

import { Route, Routes } from "react-router-dom";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Routers;
