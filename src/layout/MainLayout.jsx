import Navbar from '../compoonents/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../compoonents/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const MainLayout = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className='max-w-[1440px] mx-auto '>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;