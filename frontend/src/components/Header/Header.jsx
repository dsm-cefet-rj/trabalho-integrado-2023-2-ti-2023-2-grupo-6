import { useRef, useEffect } from "react";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import logo from "../../assets/images/logo.svg";
import userImg from "../../assets/images/logo.svg";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../../features/auth/authSlice";

const navLinks = [
  { path: "/home", display: "Home" },
  { path: "/teachers", display: "Ache um professor!" },
  { path: "/blog", display: "Trilhas de Conhecimento" },
  { path: "/contact", display: "Contatos" },
];

const Header = () => {
  // Refs para elementos DOM
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  // Hooks do React
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  // Função para lidar com o evento de logout
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/login");
  };

  // Função para tornar o cabeçalho menor
  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };

  useEffect(() => {
    // Ativar o cabeçalho menor quando montado e limpar quando desmontado
    handleStickyHeader();
    return () => window.removeEventListener("scroll", handleStickyHeader);
  }, []);

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
                  <img src={userImg} className="w-full rounded-full" alt="" />
                </figure>
              </Link>
            </div>

            {user ? (
              <button
                onClick={onLogout}
                className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px] hover:bg-green-900"
              >
                Logout <FaSignOutAlt className="ml-2" />
              </button>
            ) : (
              <Link to="/login">
                <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px] hover:bg-green-900">
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
