import React from "react";
import Skeleton from "react-loading-skeleton";
import ReactStars from "react-rating-stars-component";

const ReviewLoading = () => {
  const reviewCount = [1, 2, 3, 4, 5, 6];
  return (
    <>
     <h1 className="text-4xl text-zinc-400 mt-16 font-extrabold text-bold text-center">
        Reviews are loading
      </h1>
    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4 my-16">
      {reviewCount.map((item) => (
        <>
        <div className="pt-6 px-8 mt-16 bg-slate-200 rounded-lg shadow-lg dark:bg-gray-800">
          <div className="flex justify-center -mt-16 md:justify-end">
            <section className="object-cover w-20 h-20 ">
              <Skeleton circle={50} height={100} width={100} />
            </section>
          </div>
          <h2 className="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl">
            {<Skeleton height={34} width={250} />}
          </h2>
          <p className="mt-2 text-gray-700 dark:text-gray-200">
            {<Skeleton height={25} width={250} />}
          </p>
          <p className="mt-2 text-gray-700 dark:text-gray-200">
            {<Skeleton height={25} width={250} />}
          </p>
          <div className="flex justify-end mt-4">
            <ReactStars count={5} size={24} value="0" activeColor="#ff8c00" />
          </div>
        </div>
      </>
      ))}
    </div>
    </>
  );
};
export default ReviewLoading;
