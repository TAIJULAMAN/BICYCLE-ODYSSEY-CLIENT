import React, { useState } from "react";
import useParts from "./../../hooks/useParts";
import AddAReviewForm from './AddAReviewForm';
import ReviewModal from "./ReviewModal";
import Loading from './../Shared/Loading/Loading';

const AddReviews = () => {
  const [isLoading,part] = useParts();
  const [reviewItem, setReviewItem] = useState(null)
  if(isLoading){
    return <Loading />
  }
  return (
    <div className='m-5'>
      <h1 className="text-4xl font-extrabold text-bold text-center">
        Add A Review
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-10 mt-16">
        {part.map((item) => (
          <AddAReviewForm key={item._id} setReviewItem={setReviewItem} item={item}></AddAReviewForm>
        ))}
      </div>
      {
        reviewItem && <ReviewModal setReviewItem={setReviewItem} reviewItem={reviewItem}></ReviewModal>
      }
    </div>
  );
};

export default AddReviews;
