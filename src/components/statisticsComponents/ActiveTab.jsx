import React, { useState } from "react";

function ActiveTab() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    "Overview",
    "Fundamentals",
    "News ",
    "Sentiments",
    "Team",
    "Technicals",
    "Tokenomics",
  ];

  const handleClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="flex items-center font-semibold text-base w-full mx-auto border-b border-gray-300 scrollbar-hide overflow-x-scroll ">
      {tabs.map((tab, index) => (
        <a
          key={index}
          href="#"
          onClick={() => handleClick(index)}
          className={`px-5 py-1 border-b-2  ${
            activeTab === index ? "border-primary z-10 text-primary" : ""
          }`}
        >
          {tab}
        </a>
      ))}
    </div>
  );
}

export default ActiveTab;
