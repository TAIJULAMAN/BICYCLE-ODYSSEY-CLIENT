import React from "react";
import { toast } from "react-toastify";

const UserTable = ({ item, index, refetch }) => {
  const { email, role } = item;
  const makeAdmin = () => {
    const url = `https://bicycle-odyssey-server.onrender.com/user/admin/${email}`;
    fetch(url, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.result.modifiedCount > 0) {
          refetch();
          toast.success(`Admin Added ${email}`);
        }
      });
  };
  return (
    <tr  key={item._id}>
      <th>{index + 1}</th>
      <th>{email}</th>
      <th>
        {role !== "admin" ? (
          <button onClick={makeAdmin} className="btn btn-success btn-xs">
            Make Admin
          </button>
        ): "Admin"}
      </th>
    </tr>
  );
};

export default UserTable;
