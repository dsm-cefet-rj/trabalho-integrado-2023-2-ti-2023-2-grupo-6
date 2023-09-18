import { useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import Routers from "../routes/Routers";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  const location = useLocation();
  const isHomeScreenOrLogin =
    location.pathname === "/" ||
    location.pathname === "/home" ||
    location.pathname === "/login";

  return (
    <>
      <Header />
      <main>
        <Routers />
      </main>
      {!isHomeScreenOrLogin && <Footer />}
    </>
  );
};

export default Layout;
