import Navbar from '../compoonents/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../compoonents/Footer/Footer';

const MainLayout = () => {
    return (
        <div className='max-w-[1440px] mx-auto '>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;