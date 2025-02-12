import { Outlet } from "react-router-dom";
import Footer from "../compoonents/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Navbar from "../compoonents/Navbar/Navbar";

const MainLayout = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="dark:bg-[#15202b] bg-[#f9fafb]  dark:text-white ">
      <div className="sticky top-0  bg-base z-50 dark:border-gray-700 border border-x-0 border-t-0 border-b">
        <Navbar></Navbar>
      </div>
      <div className="px-2 lg:p-0">
        <Outlet></Outlet>
      </div>
      <div className="" id="footer">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
