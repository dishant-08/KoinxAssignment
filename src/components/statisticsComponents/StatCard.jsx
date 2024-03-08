import React from "react";

const StatCard = ({ text, price }) => {
  return (
    <div className="flex w-full h-16 border-b p-3 border-gray-300 justify-between">
      <div className=" text-statText capitalize font-semibold ">{text}</div>
      <div className=" text-black  font-sans text-md leading-6 font-semibold ml-2 ">
        {price}
      </div>
    </div>
  );
};

export default StatCard;
