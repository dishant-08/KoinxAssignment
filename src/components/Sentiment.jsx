import React, { useEffect, useRef, useState } from "react";
import SentimentCard from "./sentimentComponents/SentimentCard";
import NewsLogo from "../assets/newlogo.png";
import NextBtn from "../assets/nextbtn.png";
import TrendingLogo from "../assets/TrendingLogo.png";
import ProgressBar from "./sentimentComponents/ProgressBar";
import TypeHeader from "./commonComponents/TypeHeader";

const Sentiment = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);

  const handleNextClick = () => {
    // Update the scroll position by 50px
    if (scrollPosition <= 1050)
      setScrollPosition((prevPosition) => prevPosition + 50);
  };

  useEffect(() => {
    // Scroll to the updated position
    containerRef.current.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
  }, [scrollPosition]);
  console.log(scrollPosition);
  return (
    <div className=" p-6 flex flex-col bg-white rounded-lg ">
      {/* <h2>Sentiment</h2>
       */}
      <TypeHeader text="Sentiment" />
      <div className="flex items-center gap-3 ">
        <h3 className=" text-lg font-semibold text-statText">Key Events </h3>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.04 0.463623C4.44 0.463623 0.706665 4.19696 0.706665 8.79696C0.706665 13.397 4.44 17.1303 9.04 17.1303C13.64 17.1303 17.3733 13.397 17.3733 8.79696C17.3733 4.19696 13.64 0.463623 9.04 0.463623ZM9.87333 12.9636H8.20667V7.96362H9.87333V12.9636ZM9.87333 6.29696H8.20667V4.63029H9.87333V6.29696Z"
            fill="#00BFBF"
          />
        </svg>
      </div>
      <div
        className="flex w-full overflow-x-hidden relative"
        ref={containerRef}
      >
        <div className="flex space-x-4">
          {" "}
          {/* Adjust space as needed */}
          <SentimentCard backgroundColor="#E8F4FD" imageSrc={NewsLogo} />
          <SentimentCard backgroundColor="#EBF9F4" imageSrc={TrendingLogo} />
          <SentimentCard backgroundColor="#EBF9F4" imageSrc={TrendingLogo} />
        </div>

        {/* Set the scroll position based on state */}
        <div
          className="absolute top-1/2 right-2 transform -translate-y-1/2"
          style={{ transform: `translateX(${scrollPosition}px)` }}
        >
          <img src={NextBtn} alt="next-btn" onClick={handleNextClick} />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-3 ">
          <h3 className=" text-lg font-semibold text-statText ">
            Analyst Estimates{" "}
          </h3>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.04 0.463623C4.44 0.463623 0.706665 4.19696 0.706665 8.79696C0.706665 13.397 4.44 17.1303 9.04 17.1303C13.64 17.1303 17.3733 13.397 17.3733 8.79696C17.3733 4.19696 13.64 0.463623 9.04 0.463623ZM9.87333 12.9636H8.20667V7.96362H9.87333V12.9636ZM9.87333 6.29696H8.20667V4.63029H9.87333V6.29696Z"
              fill="#00BFBF"
            />
          </svg>
        </div>

        <div className="flex items-center gap-2  md:gap-10 ">
          <div className=" w-40 h-32 rounded-full bg-bgGreen flex justify-center items-center ">
            <div className="flex items-center text-AbsoluteGreen ">
              <p className=" text-5xl">76</p>
              <p className="text-xl">%</p>
            </div>
          </div>
          <div className=" w-full flex gap-y-5 flex-col ">
            <ProgressBar text="Buy" value={76} color="#00B386" />
            <ProgressBar text="Hold" value={8} color="#C7C8CE" />
            <ProgressBar text="Sell" value={16} color="#F7324C" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sentiment;
