import logo from '../../assets/queryNest_logo.png'
import { FaFacebook, FaLinkedin } from "react-icons/fa6";
const Footer = () => {
    return (
        <div className="">
            <footer className="footer bg-base-200 text-base-content p-10">
                <aside>
                    <a href="/"><img className='w-32' src={logo} alt="" /></a>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social Media</h6>
                    <div className="grid grid-flow-col gap-4">
                        <a href='https://www.linkedin.com/in/abdullah107189/' target='_blank'>
                            <FaLinkedin className='w-8 h-8' />
                        </a>
                        <a href='https://www.facebook.com/abdullah.shamem.5' target='_blank'>
                            <FaFacebook className='w-8 h-8' />
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