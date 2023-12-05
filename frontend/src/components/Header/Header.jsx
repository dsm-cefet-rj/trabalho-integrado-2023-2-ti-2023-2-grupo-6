import { useRef, useEffect, useState } from "react";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import logo from "../../assets/images/logo.svg";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { logout, reset } from "../../features/auth/authSlice";
import axios from "axios";

const navLinks = [
  { path: "/home", display: "Home" },
  { path: "/teachers", display: "Ache um professor!" },
  { path: "/blog", display: "Trilhas de Conhecimento" },
  { path: "/contact", display: "Contatos" },
];

const Header = () => {
  const userId = localStorage.getItem("id");
  const userRole = localStorage.getItem("role");
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    setProfilePic("");
    navigate("/login");
  };

  const [profilePic, setProfilePic] = useState();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const id = localStorage.getItem("id");
        const role = localStorage.getItem("role");

        if (!id || !role) {
          // Lógica para lidar com id ou role ausentes no localStorage
          return;
        }

        let url;
        if (role === "TEACHER") {
          url = `http://localhost:3300/teachers/${id}`;
        } else if (role === "STUDENT") {
          url = `http://localhost:3300/students/${id}`;
        }

        const response = await axios.get(url);
        const userProfile = response.data;

        // Se a resposta contiver a URL da imagem de perfil, defina no state
        if (userProfile && userProfile.profilePicture) {
          setProfilePic(userProfile.profilePicture);
        }
      } catch (error) {
        console.error("Erro ao buscar perfil do usuário:", error);
        // Lógica para lidar com erros na requisição
      }
    };

    fetchUserProfile();
  });

  // Função para alternar o menu móvel
  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  return (
    <header className="header flex items-center " ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between max-lg:my-3">
          {/*Logo*/}
          <Link to="/">
            <div>
              <img src={logo} alt="" />
            </div>
          </Link>

          {/*menu*/}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-[16px] leading-7 font-[600]"
                        : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor "
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden">
              <Link to="/">
                <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                  <img
                    src={profilePic}
                    className="w-full rounded-full"
                    alt=""
                  />
                </figure>
              </Link>
            </div>

            {localStorage.getItem("id") ? (
              <div className="flex items-center gap-5">
                <Link
                  to={
                    userRole === "STUDENT"
                      ? `/students/${userId}`
                      : `/teachers/profile/${userId}`
                  }
                >
                  <figure className="max-w-[40px] max-h-[40px] ">
                    <img
                      src={profilePic}
                      alt=""
                      className="w-[40px] h-[40px] object-cover mb-2 rounded-full shadow-lg border-[2px] border-primaryColor"
                    />
                  </figure>
                </Link>
                <button
                  onClick={onLogout}
                  className="bg-primaryColor py-2 mb-[10px] px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px] hover:bg-green-900"
                >
                  Logout <FaSignOutAlt className="ml-2" />
                </button>
              </div>
            ) : (
              <Link to="/login">
                <button className="bg-primaryColor py-2 mb-[10px] px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px] hover:bg-green-900">
                  Login <FaSignInAlt className="ml-2" />
                </button>
              </Link>
            )}

            <span className="lg:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
