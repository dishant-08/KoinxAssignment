import React from "react";
import AsideLogo from "../assets/asideImage.png";
import Button from "../components/commonComponents/Button";
import TrendingCoins from "../components/asideComp/TrendingCoins";
const Aside = () => {
  return (
    <div className=" flex flex-col gap-5 px-5 my-4 ">
      <div className="flex flex-col justify-center items-center rounded-lg bg-primary p-5 ">
        <div className="flex flex-col justify-center">
          <div className="font-bold flex flex-col items-center justify-center  text-white text-lg leading-10">
            <p> Get Started with KoinX </p>
            <p> for FREE</p>
          </div>
          <p className=" font-medium text-sm text-slate-100 ">
            With our range of features that you can equip for free, KoinX allows
            you to be more educated and aware of your tax reports.
          </p>
        </div>
        <img className=" w-44 h-42 " src={AsideLogo} alt="AsideLogo" />
        <Button variant="defaultBig" text="Get Started For FREE" />
      </div>
      <TrendingCoins />
    </div>
  );
};

export default Aside;
