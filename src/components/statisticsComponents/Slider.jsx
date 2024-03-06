import React, { useState } from "react";

const Slider = () => {
  const [sliderValue, setSliderValue] = useState(100); // Set the default value

  return (
    <div className="mt-8  flex items-center justify-center">
      <div className="w-96 h-4 bg-gradient-to-r from-red-500 to-green-500 rounded-full relative">
        <div className="relative">
          <div
            className="absolute  top-0 w-4 h-4 rounded-full border-2 border-green-500  bg-white"
            style={{
              left: `calc(${(sliderValue / 150) * 100}% - 8px)`, // Adjust the size of the arrow
            }}
          >
            a
          </div>
          <div
            className="absolute  top-10  flex items-center"
            style={{
              left: `calc(${(sliderValue / 150) * 100}% - 8px)`, // Adjust the size of the arrow
            }}
          >
            <div className=" text-violet-900 text-xs flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full">
              {sliderValue}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
