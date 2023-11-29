import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";
import useAdmin from "./../../hooks/useAdmin";

const Dashboard = () => {
  const [user, loading] = useAuthState(auth);
  const [admin] = useAdmin(user);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="drawer lg:px-12 h-fit drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        {/* <!-- Page content here --> */}
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-60 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard" className="link link-hover">
              My Profile
            </Link>
          </li>
          {!admin && (
            <li>
              <Link to="/dashboard/myOrder" className="link link-hover">
                My Orders
              </Link>
            </li>
          )}

          {!admin && (
            <li>
              <Link to="/dashboard/myReview" className="link link-hover">
                Add Reviews
              </Link>
            </li>
          )}

          
          {admin && (
            <li>
              <Link to="/dashboard/orders" className="link link-hover">
                Manage All Orders
              </Link>
            </li>
          )}
          {admin && (
            <li>
              <Link to="/dashboard/addProducts" className="link link-hover">
                Add Product
              </Link>
            </li>
          )}
          {admin && (
            <li>
              <Link to="/dashboard/users" className="link link-hover">
                Make Admin
              </Link>
            </li>
          )}
          {admin && (
            <li>
              <Link to="/dashboard/manageProducts" className="link link-hover">
                Manage Products
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
