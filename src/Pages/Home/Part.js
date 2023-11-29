import React from "react";
import { useNavigate } from "react-router-dom";
import "./Part.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Part = ({ item }) => {
  const navigate = useNavigate();
  const { _id, productName, img, order, quantity, price, description } = item;
  const handleBuyNow = (_id) => {
    navigate(`/purchase/${_id}`);
  };
  return (
    <>
      {item ? (
        <>
          <div className="post">
            <figure>
              <img src={img} alt="" className="post-img " />
            </figure>
            <div className="post-content">
              <h1 className="text-2xl font-extrabold text-bold">
                {productName}
              </h1>
              <p>
                {description.length < 70
                  ? description
                  : description.slice(0, 70)}{" "}
                <span>...</span>
              </p>
              <p>Available: {quantity}</p>
              <p>Price: {price} tk</p>
              <span className="date">Min Order: {order}</span>
              <div className="card-actions justify-end">
                <button
                  onClick={() => handleBuyNow(_id)}
                  className="btn card-part-button btn-primary"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          {/* <div className="card card-part w-96 bg-base-100 shadow-xl">
            <figure className="card-part-image">
              <img src={img || <Skeleton />} alt="Shoes" />
            </figure>
            <div className="card-body card-part-content">
              <h2 className="card-title">{productName || <Skeleton />}</h2>
              <p>Price per unit: ${price || <Skeleton />}</p>
              <p>Min Order: {order || <Skeleton />}</p>
              <p>Available: {quantity || <Skeleton />}</p>
              <p>{description || <Skeleton />}</p>
              <div className="card-actions justify-end">
                <button
                  onClick={() => handleBuyNow(_id)}
                  className="btn card-part-button btn-primary"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div> */}
        </>
      ) : (
        <>
          <div className="card card-part w-96 bg-base-100 shadow-xl">
            <figure className="card-part-image">
              <p
                src={
                  <SkeletonTheme color="#202020" highlightColor="#444">
                    <section>
                      <Skeleton height={100} width={50} />
                    </section>
                  </SkeletonTheme>
                }
              />
            </figure>
            <div className="card-body card-part-content">
              <h2 className="card-title">{<Skeleton />}</h2>
              <p>{<Skeleton />}</p>
              <p>{<Skeleton />}</p>
              <p> {<Skeleton />}</p>
              <p>{<Skeleton />}</p>
              <div className="card-actions justify-end">
                <button className="btn card-part-button w-28 btn-primary">
                  <Skeleton />
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Part;
