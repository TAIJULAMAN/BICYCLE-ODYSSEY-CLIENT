import React, { useState } from "react";
import auth from "./../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import Loading from "./../Shared/Loading/Loading";
import OrderTable from "./OrderTable";
import DeleteConfirmationModal from "./DeleteConfirmationModal";

const MyOrder = () => {
  const [user] = useAuthState(auth);

  const [deleteOrder, setDeleteOrder] = useState(null);
  const email = user?.email;
  const url = `https://bicycle-odyssey-server.onrender.com/ordered?email=${email}`;
  const {
    isLoading,
    data: part,
    refetch,
  } = useQuery("myOrders", () => fetch(url).then((res) => res.json()));
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="m-3">
      <h2 className="text-2xl  pb-5 text-bold text-secondary">My Orders</h2>
      <table className="table  w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Process</th>
          </tr>
        </thead>
        <tbody>
          {part.map((item, index) => (
            <OrderTable
              key={item._id}
              setDeleteOrder={setDeleteOrder}
              index={index}
              item={item}
            ></OrderTable>
          ))}
        </tbody>
      </table>
      {deleteOrder && (
        <DeleteConfirmationModal
          setDeleteOrder={setDeleteOrder}
          refetch={refetch}
          deleteOrder={deleteOrder}
        ></DeleteConfirmationModal>
      )}
    </div>
  );
};

export default MyOrder;
