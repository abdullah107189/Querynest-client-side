import { useContext, useState } from 'react';
import logo from '../../../assets/queryNest_logo.png';
import googleLogo from '../../../assets/google.png';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import toast from 'react-hot-toast';
import axios from 'axios';

const Register = () => {
    const { createUser, updateName, createUserWithGoogle } = useContext(AuthContext)

    const [name, setName] = useState('');
    const [photoUrl, setPhotoUrl] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault();

        if (password.length < 6) {
            return toast.error("Password must be at least 6 characters long.");

        }
        if (!/[A-Z]/.test(password)) {
            return toast.error("Password must contain at least one uppercase letter.");

        }
        if (!/[a-z]/.test(password)) {
            return toast.error("Password must contain at least one lowercase letter.");
        }

        createUser(email, password)
            .then(res => {
                if (res.user) {
                    updateName(name, photoUrl)
                        .then(() => {
                            toast.success('Register Success!')
                            navigate('/')
                            const user = { email: res.user.email }
                            axios.post('https://b10a11-server-side-abdullah107189.vercel.app/jwt-singIn', user, { withCredentials: true })
                                .then(() => {
                                })
                        })
                        .catch(error => {
                            toast.error(error.message)
                        })
                }
            })
            .catch(error => {
                toast.error(error.message)
            })
    };

    const handleLoginWithGoogle = () => {
        createUserWithGoogle()
            .then(res => {
                if (res.user) {
                    toast.success('Register With Google successfully done !')
                    navigate('/')
                    const user = { email: res.user.email }
                    axios.post('https://b10a11-server-side-abdullah107189.vercel.app/jwt-singIn', user, { withCredentials: true })
                        .then(() => {
                        })
                }
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    return (
        <div className="flex md:py-10 py-5 items-center justify-center bg-gray-50">
            <div className="w-2/3 h-full p-5 bg-gray-100 rounded-lg shadow-lg flex flex-col items-center">
                <div className='flex flex-col items-center'>
                    <img className='w-[150px] object-contain' src={logo} alt="" />
                    <p className="text-lg mb-3 text-center">
                        A place to share knowledge and get to know the world better.
                    </p>
                </div>

                <div className='lg:flex gap-10 items-center'>
                    <div className="flex flex-col space-y-4 lg:w-1/2">
                        <p>By continuing, you agree to QueryNest <span className='text-blue-500 cursor-pointer'>Terms of Use</span> and <span className='text-blue-500 cursor-pointer'>Privacy Policy</span> .</p>
                        <button onClick={() => handleLoginWithGoogle()} className="bg-blue-400 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md flex items-center justify-center gap-3">
                            <img className='w-8 h-8' src={googleLogo} alt="" /> Continue with Google
                        </button>
                    </div>

                    <div className="lg:w-1/2 mt-8">
                        <p className='border-b border-gray-700 mb-5 text-2xl font-bold pb-1'>Register</p>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm text-gray-400 mb-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="photoUrl" className="block text-sm text-gray-400 mb-1">
                                    Photo URL
                                </label>
                                <input
                                    type="text"
                                    id="photoUrl"
                                    value={photoUrl}
                                    onChange={(e) => setPhotoUrl(e.target.value)}
                                    className="w-full px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
                                    placeholder="Enter your photo URL"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm text-gray-400 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-sm text-gray-400 mb-1">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
                                    placeholder="Enter your password"
                                />
                            </div>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md w-full">
                                Register
                            </button>
                        </form>
                        <p className='my-2 text-center'>Already have an account <Link className='text-blue-600' to={'/login'}>Log-in</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;