import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

const ManageProductTable = ({ item, index, refetch, setDeleteProduct }) => {
  const { _id, productName, img, quantity } = item;
  const updateQuantity = async (e) => {
    e.preventDefault();
    const newQuantity = e.target.quantity.value;
    const deliveredQuantity = parseInt(quantity) + parseInt(newQuantity);
    const url = `https://bicycle-odyssey-server.onrender.com/parts/${_id}`;
    const { data } = await axios.put(url, { deliveredQuantity });
    if (data.acknowledged) {
      toast.success("Updated Successfully");
      e.target.reset();
      refetch();
    }
  };
  return (
    <tr key={item._id}>
      <th>{index + 1}</th>
      <th>
        <div className="avatar">
          <div className="w-20 rounded">
            <img src={img} alt="Tailwind-CSS-Avatar-component" />
          </div>
        </div>
      </th>
      <th>{productName}</th>
      <th>{quantity}</th>
      <th>
        <form onSubmit={updateQuantity} action="">
          <input
            type="number"
            name="quantity"
            required
            placeholder="Quantity"
            className="input input-bordered w-25 max-w-md"
          />

          <input
            className="btn w-25 max-w-md btn-accent"
            type="submit"
            value="Add Item"
          />
        </form>
        <label
              htmlFor="deleteProductModalConfirm"
              onClick={() => setDeleteProduct(item)}
              className="btn btn-error btn-xs"
            >
              Delete Product
            </label>
      </th>
    </tr>
  );
};

export default ManageProductTable;
