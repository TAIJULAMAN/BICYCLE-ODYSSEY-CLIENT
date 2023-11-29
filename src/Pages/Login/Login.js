import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "./../../firebase.init";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import Loading from "../Shared/Loading/Loading";
import useToken from "./../../hooks/useToken";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let loginError;
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
  const [token] = useToken(user || user1);
  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;
    await signInWithEmailAndPassword(email, pass);
  };
  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [from, navigate, token, user, user1]);
  if (error || error1) {
    loginError = (
      <p className="text-red-500">
        <small>{error?.message || error1?.message}</small>
      </p>
    );
  }
  if (loading || loading1) {
    return <Loading></Loading>;
  }
  const handleNewAccount = () => {
    navigate("/signup");
  };
  return (
    <>
      <div>
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row">
            <section className="h-screen">
              <div className="container px-6 py-6 h-full">
                <div className="flex justify-center items-center flex-wrap  g-6 text-gray-800">
                  <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                      className="w-full"
                      alt="PhoneImage"
                    />
                  </div>
                  <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                    <h1 className="text-center font-bold mb-3 text-3xl">
                      Please Login
                    </h1>
                    <form onSubmit={handleSubmitLogin}>
                      <div className="mb-6">
                        <input
                          type="text"
                          name="email"
                          className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          placeholder="Email address"
                        />
                      </div>

                      <div className="mb-6">
                        <input
                          type="password"
                          name="password"
                          className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          placeholder="Password"
                        />
                      </div>

                      <div className="flex justify-between items-center mb-6">
                        <a
                          href="#!"
                          className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                        >
                          Forgot password?
                        </a>
                      </div>
                      {loginError}
                      <input
                        type="submit"
                        value="Login"
                        className="inline-block px-7 btn py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                      ></input>
                    </form>
                    <p className="pt-2">
                      <span>New to Bicycle Odyssey? </span>
                      <span
                        onClick={handleNewAccount}
                        className="text-secondary cursor-pointer"
                      >
                        Create new account
                      </span>
                    </p>
                    <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                      <p className="text-center font-semibold mx-4 mb-0">OR</p>
                    </div>
                    <button
                      onClick={() => signInWithGoogle()}
                      type="button"
                      style={{ backgroundColor: "#A07228" }}
                      className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
                    >
                      <div className="flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xlink="http://www.w3.org/1999/xlink"
                          className="w-3.5 h-3.5 mr-2"
                          viewBox="0 0 48 48"
                        >
                          <defs>
                            <path
                              id="a"
                              d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                            />
                          </defs>
                          <clipPath id="b">
                            <use href="#a" overflow="visible" />
                          </clipPath>
                          <path
                            clip-path="url(#b)"
                            fill="#FBBC05"
                            d="M0 37V11l17 13z"
                          />
                          <path
                            clip-path="url(#b)"
                            fill="#EA4335"
                            d="M0 11l17 13 7-6.1L48 14V0H0z"
                          />
                          <path
                            clip-path="url(#b)"
                            fill="#34A853"
                            d="M0 37l30-23 7.9 1L48 0v48H0z"
                          />
                          <path
                            clip-path="url(#b)"
                            fill="#4285F4"
                            d="M48 48L17 24l-4-3 35-10z"
                          />
                        </svg>
                        <span className="ml-4 text-white">Log in with Google</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      {/* yguygj */}
      {/* <div className="card h-screen w-screen bg-base-100 shadow-xl p-8 mx-auto my-4">
        <div className="text-center">
          <h1 className="text-5xl mb-9 font-bold">Login</h1>
        </div>
        <form
          onSubmit={handleSubmitLogin}
          className="grid grid-cols-1 pt-2.5 justify-items-center gap-3"
          action=""
        >
          <div className="w-full max-w-md">
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full max-w-md"
            />
          </div>
          <div className="w-full max-w-md">
            <label className="label">
              <span className="label-text">Your Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input w-full max-w-md input-bordered "
            />
          </div>
          <div className="w-full max-w-md">
            <p className="cursor-pointer">Forgot Password ?</p>
          </div>
          {loginError}
          <input
            className="btn w-full max-w-md text-white btn-accent"
            type="submit"
            value="Login"
          />
        </form>
        <div className="grid grid-cols-1  justify-items-center">
          <p className="pt-2">
            <span>New to Bicycle Odyssey? </span>
            <span
              onClick={handleNewAccount}
              className="text-secondary cursor-pointer"
            >
              Create new account
            </span>
          </p>
          <div className="divider w-full max-w-md">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn w-full max-w-md text-white btn-accent"
          >
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div> */}
    </>
  );
};

export default Login;
