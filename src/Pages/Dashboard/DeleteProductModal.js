import React from 'react';
import { toast } from 'react-toastify';

const DeleteProductModal = ({ deleteProduct, refetch, setDeleteProduct}) => {
    const { _id,  productName } = deleteProduct;
    const handleDelete = (_id) => {
        const url = `https://bicycle-odyssey-server.onrender.com/parts/${_id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              toast(`Deleted ${productName} Product`);
              refetch();
              setDeleteProduct(null)
            }
          });
      };
    return (
        <div>
      <input type="checkbox" id="deleteProductModalConfirm" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Wanted to delete {productName}
          </h3>
         
          <div className="modal-action">
            <label onClick={()=>handleDelete(_id)} htmlFor="deleteProductModalConfirm" className="btn btn-error">
              Delete
            </label>
            <label htmlFor="deleteProductModalConfirm" className="btn">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
    );
};

export default DeleteProductModal;