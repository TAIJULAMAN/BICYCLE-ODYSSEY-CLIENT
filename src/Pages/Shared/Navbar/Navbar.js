import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../Loading/Loading";

const Navbar = () => {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loading />;
  }
  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };

  const links = (
    <>
      <li>
        <Link className="btn btn-ghost" to="/home">Home</Link>
      </li>
      <li>
        <Link className="btn btn-ghost" to="/parts">Parts</Link>
      </li>
      <li>
        <Link className="btn btn-ghost" to="/reviews">Reviews</Link>
      </li>
      <li>
        <Link className="btn btn-ghost" to="/blogs">Blogs</Link>
      </li>
      {user && (
        <li>
          <Link className="btn btn-ghost" to="/dashboard">Dashboard</Link>
        </li>
      )}
      <li>
        {user ? (
          <button className="btn btn-ghost" onClick={logout}>Log Out</button>
        ) : (
          <Link className="btn btn-ghost" to="/login">Login</Link>
        )}
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-200">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Bicycle Odyssey
          </Link>
        </div>
        <div className="lg:navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal">{links}</ul>
          
        </div>
        <div className="sm:navbar-end lg:hidden">
          <label
            htmlFor="dashboard-sidebar"
            tabIndex="1"
            className="btn btn-ghost "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
