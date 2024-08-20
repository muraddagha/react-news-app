import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <div className="max-w-[90%] lg:max-w-[75%] mx-auto">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
