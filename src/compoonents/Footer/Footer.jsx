import logo from '../../assets/queryNest_logo.png'
import { FaFacebook, FaLinkedin } from "react-icons/fa6";
const Footer = () => {
    return (
        <div className="bg-base-200">
            <footer className="footer mxw text-base-content p-10 justify-between">
                <aside>
                    <a href="/"><img className='w-32 dark:bg-gray-400 rounded-lg' src={logo} alt="" /></a>
                </aside>
                <nav>
                    <h6 className="footer-title dark:text-white">Services</h6>
                    <a href='/#queries' className="link link-hover">Queries</a>
                    <a href='/#popularProducts' className="link link-hover">Popular Products</a>
                </nav>
                <nav>
                    <h6 className="footer-title dark:text-white">About Us</h6>
                    <a href='/#blogs' className="link link-hover">Blogs</a>
                    <a href='/#contact' className="link link-hover">Contact</a>
                    <a href='/#subscription' className="link link-hover">Subscription</a>
                </nav>
                <nav>
                    <h6 className="footer-title dark:text-white">Social Media</h6>
                    <div className="grid grid-flow-col gap-4">
                        <a href='https://www.linkedin.com/in/abdullah107189/' target='_blank'>
                            <FaLinkedin className='w-8 h-8 hover:textS' />
                        </a>
                        <a href='https://www.facebook.com/abdullah.shamem.5' target='_blank'>
                            <FaFacebook className='w-8 h-8 hover:textS' />
                        </a>
                    </div>
                </nav>
            </footer>
            <div className="footer footer-center bg-base-200 text-base-content p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by abdullah107189</p>
                </aside>
            </div>
        </div>
    );
};

export default Footer;