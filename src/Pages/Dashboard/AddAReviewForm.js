import React from "react";

const AddAReviewForm = ({ item , setReviewItem}) => {
  const {productName, img, order, quantity, price, description } = item;
  

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{productName}</h2>
        <p>Price per unit: ${price}</p>
        <p>Min Order: {order}</p>
        <p>Available: {quantity}</p>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <label
            htmlFor="review-modal"
            onClick={() => setReviewItem(item)}
            className="btn bg-gradient-to-r from-secondary to-primary border-primary text-white font-bold"
          >
            Add Review
          </label>
        </div>
      </div>
    </div>
  );
};

export default AddAReviewForm;
