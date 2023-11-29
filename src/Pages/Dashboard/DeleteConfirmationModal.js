import React from "react";
import { toast } from "react-toastify";

const DeleteConfirmationModal = ({deleteOrder, refetch, setDeleteOrder}) => {
    const { _id, partName } = deleteOrder;
    const handleDelete = (_id) => {
        const url = `https://bicycle-odyssey-server.onrender.com/ordered/${_id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              toast(`Deleted ${partName} Order`);
              refetch();
              setDeleteOrder(null)
            }
          });
      };
  return (
    <div>
      <input type="checkbox" id="deleteModalConfirm" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Wanted to delete {partName}
          </h3>
         
          <div className="modal-action">
            <label onClick={()=>handleDelete(_id)} htmlFor="deleteModalConfirm" className="btn btn-error">
              Delete
            </label>
            <label htmlFor="deleteModalConfirm" className="btn">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
