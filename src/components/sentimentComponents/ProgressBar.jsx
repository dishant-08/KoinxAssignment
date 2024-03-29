import React from "react";

const ProgressBar = ({ text, value, color }) => {
  return (
    <div className="flex h-2.5 w-full items-center gap-3 rounded-full  ">
      <span className="text-base font-medium text-statText">{text}</span>
      <div
        className="h-2.5 rounded-full "
        style={{ width: `${value}%`, backgroundColor: `${color}` }}
      ></div>
      <div className="text-sm flex justify-center items-center font-medium text-statText">
        {value}%
      </div>
    </div>
  );
};

export default ProgressBar;
