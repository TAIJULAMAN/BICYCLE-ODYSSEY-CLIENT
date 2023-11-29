import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

const ManageOrderTable = ({ item, index,refetch, setDeleteOrder }) => {
  const { _id, partName, email, orderQuantity, paid, deliveredText } = item;

  const handleDeliver = () => {
    const delivertext = true;
    const updateProcessing = async () => {
      const url = `https://bicycle-odyssey-server.onrender.com/ordered/${_id}`;
      const { data } = await axios.put(url, { delivertext });
      if (data.acknowledged) {
        toast.success("Deliver processing, Successfully");
        refetch();
      }
    };
    updateProcessing();
  };
  return (
    <tr key={_id}>
      <th>{index + 1}</th>
      <th>{email}</th>

      <th>{partName}</th>
      <th>{orderQuantity}</th>
      <th>
        {paid ? (
          <>
            <span className="mr-2">Paid</span>
            {deliveredText ? <p className="btn btn-success btn-xs">Processing</p> :  <button
              onClick={() => handleDeliver(_id)}
              className="btn btn-warning btn-xs"
            >
              Deliver Order
             
            </button>}
           
          </>
        ) : (
          <>
            <span className="mr-2">Not Paid</span>
            <label
              htmlFor="deleteModalConfirm"
              onClick={() => setDeleteOrder(item)}
              className="btn btn-error btn-xs"
            >
              Delete Order
            </label>
          </>
        )}
      </th>
    </tr>
  );
};

export default ManageOrderTable;
