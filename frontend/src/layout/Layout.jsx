import { useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import Routers from "../routes/Routers";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  const location = useLocation();
  const isHomeScreen =
    location.pathname === "/" || location.pathname === "/home";

  return (
    <>
      <Header />
      <main>
        <Routers />
      </main>
      {!isHomeScreen && <Footer />}
    </>
  );
};

export default Layout;
