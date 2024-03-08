import React, { useEffect, useState } from "react";
import PriceArrowButton from "../commonComponents/PriceArrowButton";
import TypeHeader from "../commonComponents/TypeHeader";

const TrendingCoins = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/search/trending"
      );
      const data = await response.json();
      setTrendingCoins(data.coins.slice(0, 3));
    };

    fetchTrendingCoins();
  }, []);

  // console.log(trendingCoins);

  return (
    <div className="bg-white p-6 rounded-md ">
      {/* <h2 className="" >Trending Coins (24h)</h2> */}
      <TypeHeader text="Trending Coins (24h)" />
      <ul className=" flex flex-col py-4 space-y-4 ">
        {trendingCoins.map((coin, index) => (
          <li className=" flex justify-between " key={index}>
            <div className="flex items-center text-base gap-1 font-medium ">
              <img
                className=" w-6 h-6  rounded-full  "
                src={coin.item.small}
                alt={coin.item.name}
              />
              <p>
                {coin.item.name}({coin.item.symbol})
              </p>
            </div>
            <div className=" ">
              <PriceArrowButton
                value={coin.item.data.price_change_percentage_24h.usd}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingCoins;
