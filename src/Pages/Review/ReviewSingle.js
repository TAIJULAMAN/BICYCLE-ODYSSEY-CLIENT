import React from "react";
// import { AiFillStar } from "react-icons/ai";
import ReactStars from "react-rating-stars-component";

const ReviewSingle = ({ item }) => {
  const { productName, review, email, img, rating } = item;
  const  value = parseInt(rating);
  return (
    <>
      <div className="pt-6 px-8 mt-16 bg-slate-200 rounded-lg shadow-lg dark:bg-gray-800">
        <div className="flex justify-center -mt-16 md:justify-end">
          <img
            className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400"
            alt="Testimonial avatar"
            src={img}
          />
        </div>
        <h2 className="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl">
          {productName}
        </h2>
        <p className="mt-2 text-gray-700 dark:text-gray-200">{email}</p>
        <p className="mt-2 text-gray-700 dark:text-gray-200">{review}</p>
        <div className="flex justify-end mt-4">
          <ReactStars count={5} size={24} edit={false} value={value} activeColor="#ff8c00" />
        </div>
      </div>
    </>
  );
};

export default ReviewSingle;
