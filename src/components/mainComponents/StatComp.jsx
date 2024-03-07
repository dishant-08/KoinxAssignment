import React from "react";
import ActiveTab from "../statisticsComponents/ActiveTab";
import PerformanceComp from "../statisticsComponents/PerformanceComp";

const StatComp = () => {
  return (
    <div>
      <ActiveTab />
      <PerformanceComp crypto="bitcoin" />
    </div>
  );
};

export default StatComp;
