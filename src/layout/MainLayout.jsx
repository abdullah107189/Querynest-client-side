import { Outlet } from 'react-router-dom';
import Footer from '../compoonents/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Navbar from '../compoonents/Navbar/Navbar';
const MainLayout = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className=''>
            <div className="sticky top-0 backdrop-blur-lg bg-[#f9fafb] z-50 border-b">
                <Navbar></Navbar>
            </div>
            <div className='px-4 lg:p-0'>
                <Outlet></Outlet>
            </div>
            <div className="">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;