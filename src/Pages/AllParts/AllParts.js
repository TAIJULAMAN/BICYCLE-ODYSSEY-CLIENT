import React from "react";
import useParts from "../../hooks/useParts";
import Part from "./../Home/Part";
import Footer from './../Shared/Footer/Footer';
// import Loading from './../Shared/Loading/Loading';
// import Skeleton from 'react-loading-skeleton';
import CardLoading from "../Shared/Loading/CardLoading";

const AllParts = () => {
  const [isLoading,part] = useParts();
  if(isLoading){
    return <CardLoading/>
  }
  return (
    <>
    <div className="bg-slate-100">
      <h1 className="text-4xl font-extrabold text-bold text-center">
        All Parts
      </h1>
      <div className="grid grid-cols-1 blog-posts lg:grid-cols-3 md:grid-cols-2 mt-16">
        {part.map((item) => (
          <Part key={item._id} item={item}></Part>
        ))}
      </div>
    </div>
      <Footer/>
    </>
  );
};

export default AllParts;
