import Header from "../components/Header/Header";
import Routers from "../routes/Routers";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Routers />
      </main>
    </>
  );
};

export default Layout;
