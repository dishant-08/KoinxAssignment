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
    <div className="flex items-center w-full mx-auto  scrollbar-hide overflow-x-scroll ">
      {tabs.map((tab, index) => (
        <a
          key={index}
          href="#"
          onClick={() => handleClick(index)}
          className={`px-5 py-1  border-b-2 ${
            activeTab === index
              ? "border-violet-400 text-violet-400"
              : "border-gray-700"
          }`}
        >
          {tab}
        </a>
      ))}
    </div>
  );
}

export default ActiveTab;
