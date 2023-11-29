import React from "react";
import { useQuery } from "react-query";
import ReviewLoading from "../Shared/Loading/ReviewLoading";
import ReviewSingle from "./ReviewSingle";

const Review = () => {
  const { isLoading, data: reviews } = useQuery(["reviews"], () =>
    fetch(`https://bicycle-odyssey-server.onrender.com/reviews`).then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <ReviewLoading />;
  }
  return (
    <div className="mx-12">
      <h1 className="text-4xl font-extrabold text-bold text-center">
        All Reviews
      </h1>
      <div className="grid grid-cols-1 justify-around gap-4 lg:grid-cols-4 md:grid-cols-2  my-16">
        {reviews.reverse().map((item) => (
          <ReviewSingle key={item._id} item={item}></ReviewSingle>
        ))}
      </div>
    </div>
  );
};

export default Review;
