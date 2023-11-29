import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading/Loading";
import UserTable from "./UserTable";
// http://https://bicycle-odyssey-server.onrender.com/
const Users = () => {
  const url = `https://bicycle-odyssey-server.onrender.com/users`;
  const { isLoading, data: webUser, refetch } = useQuery("users", () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
    .then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="m-3">
      <h2 className="text-2xl  pb-5 text-bold text-secondary">All Users</h2>
      <table className="table  w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th></th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {webUser?.map((item, index) => (
            <UserTable key={item._id} index={index} refetch={refetch} item={item}></UserTable>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
