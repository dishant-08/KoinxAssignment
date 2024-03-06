import React from "react";

const StatCard = ({ text, price }) => {
  return (
    <div className="flex w-full border-b p-3 border-gray-300 justify-between">
      <div className=" text-statText capitalize font-semibold ">{text}</div>
      <div className=" text-black capitalize font-semibold ml-2 ">{price}</div>
    </div>
  );
};

export default StatCard;
