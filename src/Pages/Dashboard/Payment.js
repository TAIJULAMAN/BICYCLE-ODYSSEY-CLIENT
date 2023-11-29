import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Loading from "./../Shared/Loading/Loading";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51NxnBwLmYXVao92XhFGVpN4RAnDB1ch7s07FecMAl0y9TGwmYAlqUOKFikSTGgM5MNDw1QCPw0d9ShnUGyuvY9tz00DuaXxqH6"
);

const Payment = () => {
  const { id } = useParams();
  const [user, loading] = useAuthState(auth);
  const url = `https://bicycle-odyssey-server.onrender.com/ordered/${id}`;
  const { data: part, isLoading } = useQuery(["orderId", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading || loading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div className="card-body">
          <p className="text-success font-bold">Hello, {user.displayName}</p>
          <h2 className="card-title">
            Please Pay for{" "}
            <span className="text-gray-400">{part?.partName}</span>
          </h2>
          <p>Ordered Quantity: {part?.orderQuantity}</p>
          <p>Please pay: ${part?.price}</p>
        </div>
      </div>
      <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm part={part} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
