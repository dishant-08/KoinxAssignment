import React from "react";
import TradingViewWIdget from "./TradingViewWIdget";

const Charts = () => {
  return (
    <div>
      Charts
      <div className=" ">
        <TradingViewWIdget coins={"bitcoin"} />
      </div>
    </div>
  );
};

export default Charts;
