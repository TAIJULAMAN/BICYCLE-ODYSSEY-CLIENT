import React from "react";
import { Link } from "react-router-dom";

const OrderTable = ({ item, index, setDeleteOrder }) => {
  const { partName, price, orderQuantity, _id, paid , transactionId} = item;

  return (
    <tr key={item._id}>
      <th>{index + 1}</th>
      <th>{partName}</th>
      <th>{price}</th>
      <th>{orderQuantity}</th>
      <th>
        {!paid && !transactionId ? (
          <>
            <Link to={`/dashboard/payment/${_id}`}>
              <button className="btn btn-success btn-xs mr-2">Pay</button>
            </Link>
            <label
              htmlFor="deleteModalConfirm"
              onClick={() => setDeleteOrder(item)}
              className="btn btn-error btn-xs"
            >
              Delete Order
            </label>
          </>
        ) : (
          <p>transactionId: {transactionId}</p>
        )}
      </th>
    </tr>
  );
};

export default OrderTable;
