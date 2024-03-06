import React from "react";
import Charts from "../components/mainComponents/Charts";
import StatComp from "../components/mainComponents/StatComp";
import Sentiment from "../components/Sentiment";

const Main = () => {
  return (
    <main className="flex flex-col max-w-4xl w-screen ">
      <div>BreadCrumbs</div>
      <div>
        <Charts />
      </div>
      <div>
        <StatComp />
      </div>

      <div>Performance</div>
      <div>
        <Sentiment />
      </div>
      <div>About Topic</div>
      <div>Tokenomics</div>
      <div>Team</div>
      <div className=" bg-blue-600 md:hidden ">You May Also Like </div>
    </main>
  );
};

export default Main;
