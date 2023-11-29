import React from 'react';
import { useQuery } from 'react-query';
import ReviewSingle from '../Review/ReviewSingle';
import ReviewLoading from '../Shared/Loading/ReviewLoading';

const ReviewsHome = () => {
    const {isLoading, data: reviews } = useQuery(["reviews"], () =>
    fetch(`https://bicycle-odyssey-server.onrender.com/reviews`).then((res) => res.json())
  );
  if(isLoading){
      return <ReviewLoading />
  }
    return (
        <div>
             <h1 className="text-4xl font-extrabold text-bold text-center">
        Reviews
      </h1>
      <div className="grid grid-cols-1 mx-12 lg:grid-cols-3 md:grid-cols-2 gap-10 mt-16">
        {reviews?.slice(0,6).map((item) => (
          <ReviewSingle key={item._id} item={item}></ReviewSingle>
        ))}
      </div>
        </div>
    );
};

export default ReviewsHome;