import React from "react";
import TradingViewWIdget from "./TradingViewWIdget";

const Charts = () => {
  return (
    <div>
      <div className=" md:bg-white p-1 rounded-lg ">
        <TradingViewWIdget coins={"bitcoin"} />
      </div>
    </div>
  );
};

export default Charts;
