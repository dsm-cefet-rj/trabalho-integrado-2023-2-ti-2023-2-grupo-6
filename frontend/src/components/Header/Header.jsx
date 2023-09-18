import { useRef, useEffect } from "react";
import logo from "../../assets/images/logo.svg";
import userImg from "../../assets/images/logo.svg";
import { NavLink, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";

const navLinks = [
  { path: "/home", display: "Home" },
  { path: "/professores", display: "Ache um professor!" },
  { path: "/blog", display: "Trilhas de Conhecimento" },
  { path: "/contact", display: "Contatos" },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const hadleStickyHeader = () => {
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
    hadleStickyHeader();

    return () => window.removeEventListener("scroll", hadleStickyHeader);
  });

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container mt-3">
        <div className="flex items-center justify-between">
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

          {/*Nav Right*/}
          <div className="flex items-center gap-4">
            <div className="hidden">
              <Link to="/">
                <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                  <img src={userImg} className="w-full rounded-full" alt="" />
                </figure>
              </Link>
            </div>

            <Link to="/login">
              <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
                Login
              </button>
            </Link>

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
