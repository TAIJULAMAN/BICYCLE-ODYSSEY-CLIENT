import React from "react";
import Skeleton from "react-loading-skeleton";

const CardLoading = () => {
  const cardCount = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <h1 className="text-4xl text-zinc-400 mt-16 font-extrabold text-bold text-center">
        Parts are loading
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 mt-16">
        {cardCount.map((item, index) => (
          <div key={index} className="card w-96 bg-base-100 shadow-xl">
            <section className="flex justify-center mt-4">
              <Skeleton height={200} width={342} />
            </section>
            <div className="card-body">
              <h2 className="card-title">
                {<Skeleton height={40} width={320} />}
              </h2>
              <p>{<Skeleton />}</p>
              <p>{<Skeleton />}</p>
              <p> {<Skeleton />}</p>
              <p>{<Skeleton />}</p>
              <div className="card-actions justify-end">
                <button className="w-28">
                  <Skeleton height={50} width={112} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardLoading;
