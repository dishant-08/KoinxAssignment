import React, { useState, useEffect } from "react";

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

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">You May Also Like</h2>
      <div className="flex overflow-x-auto space-x-4">
        {trendingCoins.map((coin, index) => (
          <div key={index} className="bg-white p-4 rounded-md shadow-md">
            <img
              className=" mx-auto mb-2"
              src={coin.item.small}
              alt={coin.item.name}
            />
            <p className="text-lg font-semibold">
              {coin.item.name} ({coin.item.symbol})
            </p>
            <p className="text-sm">Price: ${coin.item.data.price}</p>
            <p
              className={`text-sm ${
                coin.item.data.price_change_percentage_24h.usd > 0
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              Price Change: {coin.item.data.price_change_percentage_24h.usd}%
            </p>
            <img
              className="w-full mt-2"
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
