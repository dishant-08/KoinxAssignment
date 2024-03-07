import React from "react";
import Circle from "../assets/circle.png";
import TypeHeader from "./commonComponents/TypeHeader";
const Tokenomics = () => {
  return (
    <div className="flex flex-col gap-4 bg-white p-3 rounded-lg ">
      <TypeHeader text=" Tokenomics" />
      <h3 className=" font-semibold text-xl  leading-9 ">
        Initial Distribution
      </h3>
      <div className=" flex gap-10 items-center ">
        <img src={Circle} alt="piechart" />
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <div className=" bg-blue-500 w-3 h-3  "></div>
            <div> Crowdsale investors: 80% </div>
          </div>
          <div className="flex items-center gap-2">
            <div className=" bg-orange-500 w-3 h-3  "></div>
            <div>Foundation: 20% </div>
          </div>
        </div>
      </div>
      <p className="text-base font-medium ">
        Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare
        vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum
        amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus
        eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna
        felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet
        aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at
        curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu
        ut. Vulputate ipsum aliquet odio nisi eu ac risus.
      </p>
    </div>
  );
};

export default Tokenomics;
