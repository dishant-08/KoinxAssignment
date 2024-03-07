import React from "react";
import ActiveTab from "../statisticsComponents/ActiveTab";
import PerformanceComp from "../statisticsComponents/PerformanceComp";
import { useNameContext } from "../../context/NameContext";

const StatComp = () => {
  const { name } = useNameContext();
  return (
    <div>
      <ActiveTab />
      {name == "ethereum" ? (
        <PerformanceComp crypto={name} />
      ) : (
        <PerformanceComp />
      )}
    </div>
  );
};

export default StatComp;
