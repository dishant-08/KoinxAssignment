import React, { useState, useEffect, useRef } from "react";
import PriceArrowButton from "./commonComponents/PriceArrowButton";
import RightArrow from "../assets/next.png";
import LeftArrow from "../assets/prev.png";
import MayLikeComp from "./commonComponents/MayLikeComp";

const MayLike = () => {
  return (
    <div className="my-8  ">
      <h2 className="text-2xl font-bold mb-4">You May Also Like</h2>
      <MayLikeComp />
      <h2 className="text-2xl font-bold mb-4">Trending Coins</h2>
      <MayLikeComp />
    </div>
  );
};

export default MayLike;
