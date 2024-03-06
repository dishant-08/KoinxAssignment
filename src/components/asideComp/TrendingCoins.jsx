import React, { useEffect, useState } from "react";

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

  console.log(trendingCoins);

  return (
    <div>
      <h2>Trending Coins (24h)</h2>
      <ul>
        {trendingCoins.map((coin, index) => (
          <li key={index}>
            {coin.item.name} - {coin.item.symbol}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingCoins;
