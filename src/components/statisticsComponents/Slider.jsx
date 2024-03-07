import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

const Slider = ({ max, min, value }) => {
  const [sliderValue, setSliderValue] = useState(value);

  useEffect(() => {
    setSliderValue(value);
  }, [value]);

  return (
    <div className="mt-8 flex items-center justify-center">
      <div
        className={` w-screen max-w-[108px] md:max-w-[537px]  h-[4.63px] bg-gradient-to-r from-red-500 to-green-500 rounded-full relative ${
          value ? "mb-4" : "" // Add margin-bottom if value exists
        }`}
        style={{ borderRadius: "10px" }}
      >
        {value && (
          <div className="relative">
            <div
              className="absolute top-0 w-4 h-4 "
              style={{
                left: `calc(${
                  ((sliderValue - min) / (max - min)) * 100
                }% - 8px)`,
              }}
            >
              <FontAwesomeIcon icon={faCaretUp} className="mr-2" />
            </div>
            <div
              className="absolute top-4 flex items-center"
              style={{
                left: `calc(${
                  ((sliderValue - min) / (max - min)) * 100
                }% - 18px)`,
              }}
            >
              <div className="text-sm font-sfpro flex items-center justify-center">
                ${sliderValue.toLocaleString()}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Slider;
