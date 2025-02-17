import logo from "../../../assets/queryNest_logo.png";
import googleLogo from "../../../assets/google.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
const Login = () => {
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { logInUser, createUserWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  let from = location.state?.pathname || "/";
  const handleLoginWithGoogle = () => {
    createUserWithGoogle()
      .then((res) => {
        if (res.user) {
          navigate(from, { replace: true });

          const user = { email: res.user.email };
          axios.post(
            "https://b10a11-server-side-abdullah107189.vercel.app/jwt-singIn",
            user,
            { withCredentials: true }
          );
          toast.success("Log-in With Google successfully done !");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    logInUser(email, password)
      .then((res) => {
        if (res.user) {
          toast.success("Log-in successfully done !");
          navigate(from, { replace: true });
          const user = { email: res.user.email };
          axios
            .post(
              "https://b10a11-server-side-abdullah107189.vercel.app/jwt-singIn",
              user,
              { withCredentials: true }
            )
            .then(() => {});
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div>
      <div className="flex p-4 py-10 bgP items-center justify-center">
        <div className="md:w-2/3 p-4 dark:border-gray-700 border shadow-xl bgS w-full h-full rounded-lg flex flex-col items-center ">
          <div className="flex flex-col items-center ">
            <img
              className="w-[150px] object-contain dark:bg-gray-400 rounded-lg"
              src={logo}
              alt=""
            />
            <p className="text-lg mb-3 text-center">
              A place to share knowledge and get to know the world better.
            </p>
          </div>

          <div className="lg:flex gap-10 items-center">
            <div className="flex flex-col space-y-4 lg:w-1/2">
              <p>
                By continuing, you agree to QueryNest{" "}
                <span className="text-blue-500 cursor-pointer">
                  Terms of Use
                </span>{" "}
                and{" "}
                <span className="text-blue-500 cursor-pointer">
                  Privacy Policy
                </span>{" "}
                .
              </p>
              <button
                onClick={handleLoginWithGoogle}
                className="actionBtn flex items-center justify-center gap-2"
              >
                <img className="w-8 h-8" src={googleLogo} alt="" /> Continue
                with Google
              </button>
            </div>

            <div className="lg:w-1/2 mt-8">
              <p className="border-b border-gray-700 mb-5 text-2xl font-bold pb-1">
                Login
              </p>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm text-gray-400 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bgP px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-sm text-gray-400 mb-1"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bgP px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Enter your password"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <button className="actionBtn w-full">Login</button>
              </form>
              <p className="my-2 text-center">
                If you are new user then,{" "}
                <Link className="text-blue-600" to={"/reg"}>
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
