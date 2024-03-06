import React from "react";
import Charts from "../components/mainComponents/Charts";
import StatComp from "../components/mainComponents/StatComp";
import Sentiment from "../components/Sentiment";
import About from "../components/About";
import Tokenomics from "../components/Tokenomics";
import Team from "../components/Team";
import MayLike from "../components/MayLike";

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
      <div>
        <About />
      </div>
      <div>
        <Tokenomics />
      </div>
      <div>
        {" "}
        <Team />{" "}
      </div>
      <div className="  md:hidden ">
        <MayLike />
      </div>
    </main>
  );
};

export default Main;
