import React, { useState } from "react";
import auth from "./../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "./../Shared/Loading/Loading";
import { toast } from "react-toastify";
import  ReactStars  from "react-rating-stars-component";

const ReviewModal = ({ reviewItem, setReviewItem }) => {
  const { productName, img } = reviewItem;
  const [rating, setRating] = useState(0);
  const ratingChanged = (rating) => {
    setRating(rating);
  };
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loading />;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const review = e.target.review.value;
    const reviews = {
      productName,
      img,
      email: user.email,
      review,
      rating,
    };
    console.log(reviews);
    fetch("https://bicycle-odyssey-server.onrender.com/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Review Added");
          setReviewItem(null);
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="review-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="review-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">{productName}</h3>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 pt-2.5 justify-items-center gap-5"
            action=""
          >
            <input
              type="text"
              name="name"
              value={productName}
              readOnly
              placeholder="Full Name"
              className="input input-bordered w-full max-w-md"
            />
            <input
              type="email"
              name="email"
              readOnly
              value={user?.email || ""}
              placeholder="Email"
              className="input input-bordered w-full max-w-md"
            />
            <input
              type="text"
              name="review"
              required
              placeholder="Add a review"
              className="input input-bordered w-full max-w-md"
            />
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={40}
              activeColor="#ff8c00"
            />

            <input
              className="btn w-full max-w-md btn-accent"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;
