import React from "react";
import auth from "./../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "./../Shared/Loading/Loading";

const BusinessSummary = () => {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="mt-10  px-12">
      <h1 className="text-4xl font-extrabold text-bold text-center">
        Business Summary
      </h1>

      <div className="my-5 w-full stats stats-vertical lg:stats-horizontal shadow">
        <div className="stat bg-slate-200 place-items-center">
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Total Parts</div>
          <div className="stat-value text-primary">2.6K</div>
          <div className="stat-desc">19% more than last year</div>
        </div>

        <div className="stat bg-slate-200 place-items-center">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Product Views</div>
          <div className="stat-value text-secondary">645K</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat bg-slate-200 place-items-center">
          <div className="stat-figure text-secondary">
            {user?.photoURL ? (
              <>
                <div className="avatar online">
                  <div className="w-16 rounded-full">
                    <img alt="user" src={user?.photoURL} />
                  </div>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
          <div className="stat-value">86%</div>
          <div className="stat-title">Orders done</div>
          <div className="stat-desc text-secondary">3 orders pending</div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
