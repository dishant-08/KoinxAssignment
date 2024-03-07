import React, { useState, useEffect } from "react";
import PriceArrowButton from "./commonComponents/PriceArrowButton";

const MayLike = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        const data = await response.json();
        setTrendingCoins(data.coins.slice(0, 10));
      } catch (error) {
        console.error("Error fetching trending coins:", error);
      }
    };

    fetchTrendingCoins();
  }, []);

  console.log(trendingCoins);

  return (
    <div className="my-8  ">
      <h2 className="text-2xl font-bold mb-4">You May Also Like</h2>
      <div className="flex gap-[10px] overflow-x-auto ">
        {trendingCoins.map((coin, index) => (
          <div
            key={index}
            className=" p-4 min-w-[14.75rem]  h-40 rounded-[10px] border border-slate-300 "
          >
            <div className="flex flex-col gap-3 ">
              <div className="flex gap-1">
                <img
                  className=" w-6 h-6 mb-2"
                  src={coin.item.small}
                  alt={coin.item.name}
                />
                <p className="text-lg font-semibold">{coin.item.name}</p>

                <div className=" ">
                  <PriceArrowButton
                    value={coin.item.data.price_change_percentage_24h.usd}
                    plus={true}
                  />
                </div>
              </div>

              <p className="text-xl font-medium ">{coin.item.data.price}</p>
            </div>
            <img
              className=" mt-1 "
              src={coin.item.data.sparkline}
              alt="Price Graph"
            />
          </div>
        ))}
      </div>
      <h2 className="text-2xl font-bold mb-4">Trending Coins</h2>
      <div className="flex gap-[10px] overflow-x-auto ">
        {trendingCoins.map((coin, index) => (
          <div
            key={index}
            className=" p-4 min-w-[14.75rem]  h-40 rounded-[10px] border border-slate-300 "
          >
            <div className="flex flex-col gap-3 ">
              <div className="flex gap-1">
                <img
                  className=" w-6 h-6 mb-2"
                  src={coin.item.small}
                  alt={coin.item.name}
                />
                <p className="text-lg font-semibold">{coin.item.name}</p>

                <div className=" ">
                  <PriceArrowButton
                    value={coin.item.data.price_change_percentage_24h.usd}
                    plus={true}
                  />
                </div>
              </div>

              <p className="text-xl font-medium ">{coin.item.data.price}</p>
            </div>
            <img
              className=" mt-1 "
              src={coin.item.data.sparkline}
              alt="Price Graph"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MayLike;
