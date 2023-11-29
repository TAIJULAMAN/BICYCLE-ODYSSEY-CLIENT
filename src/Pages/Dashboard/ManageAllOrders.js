import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading/Loading";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import ManageOrderTable from "./ManageOrderTable";

const ManageAllOrders = () => {
  const [deleteOrder, setDeleteOrder] = useState(null);
  const {
    isLoading,
    data: ordered,
    refetch,
  } = useQuery(["orderd"], () =>
    fetch(`https://bicycle-odyssey-server.onrender.com/ordered`).then((res) => res.json())
  );
  if(isLoading){
      return <Loading />
  }
  return (
    <div className='m-5'>
    <h1 className="text-4xl font-extrabold text-bold text-center">
      Manage All Orders
    </h1>
   
    <table className="table mt-5  w-full">
      {/* <!-- head --> */}
      <thead>
        <tr>
          <th></th>
          <th>User Email</th>
          <th>Parts Name</th>
          <th>Ordered Quantity</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
      {ordered.map((item, index) => (
        <ManageOrderTable key={item._id} setDeleteOrder={setDeleteOrder} refetch={refetch} index={index} item={item}></ManageOrderTable>
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

export default ManageAllOrders;
