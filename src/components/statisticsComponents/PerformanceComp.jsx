import React, { useEffect, useState } from "react";
import Slider from "./Slider";
import StatCard from "./StatCard";

const PerformanceComp = () => {
  const [data, setData] = useState({});
  const [test, setTest] = useState({});
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    try {
      const [chartResponse, additionalResponse] = await Promise.all([
        fetch(
          "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=365"
        ),
        fetch("https://api.coingecko.com/api/v3/coins/bitcoin"),
      ]);

      const [chartData, additionalData] = await Promise.all([
        chartResponse.json(),
        additionalResponse.json(),
      ]);

      console.log(additionalData);

      setTest({
        ans: additionalData?.market_data?.total_market_cap?.usd,
      });

      setData({
        last24h: chartData.prices?.[chartData.prices.length - 1]?.[1],
        sevenDayLow: Math.min(
          ...(chartData.prices
            ?.reverse()
            ?.slice(0, 7)
            ?.map((p) => p?.[1]) || [])
        ),
        sevenDayHigh: Math.max(
          ...(chartData.prices
            ?.slice(0, 7)

            ?.map((p) => p?.[1]) || [])
        ),

        tradingVolume: additionalData.market_data?.total_volume?.usd,
        marketCapRank: additionalData.market_data?.market_cap_rank,
        last24hLow: additionalData.market_data?.low_24h?.usd,
        last24hHigh: additionalData.market_data?.high_24h?.usd,
        marketCap: additionalData.market_data?.market_cap?.usd,
        marketCapDominance:
          (additionalData.market_data?.market_cap?.usd || 0) /
          (additionalData.market_data?.total_volume?.usd || 1),
        volumeMarketCap:
          (additionalData.market_data?.total_volume?.usd || 0) /
          (additionalData.market_data?.market_cap?.usd || 1),
        allTimeHigh: additionalData.market_data?.ath?.usd,
        allTimeLow: additionalData.market_data?.atl?.usd,
      });

      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  console.log(data);
  console.log(test);
  return (
    <div>
      <h1 className="font-bold text-3xl"> Performance </h1>

      <div className=" flex flex-col ">
        <div>
          {/* <input type="range" min="0" max="150" /> */}
          <Slider />
        </div>
        <div className="flex items-end gap-5">
          <h2 className=" font-bold text-2xl ">Fundamentals</h2>
          <div className=" mb-1 ">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.04 0.463623C4.44 0.463623 0.706665 4.19696 0.706665 8.79696C0.706665 13.397 4.44 17.1303 9.04 17.1303C13.64 17.1303 17.3733 13.397 17.3733 8.79696C17.3733 4.19696 13.64 0.463623 9.04 0.463623ZM9.87333 12.9636H8.20667V7.96362H9.87333V12.9636ZM9.87333 6.29696H8.20667V4.63029H9.87333V6.29696Z"
                fill="#ABB9BF"
              />
            </svg>
          </div>
        </div>
        <div className=" flex flex-col md:flex-row md:gap-10 ">
          <div className="w-full md:w-1/2">
            <StatCard
              text="Bitcoin Price"
              price={`$${data.last24h.toFixed(2)}`}
            />
            <StatCard
              text="24h Low / 24h High"
              price={`$${data.last24hLow} / $${data.last24hHigh}`}
            />
            {/* <StatCard text="24h High" price={`${data.last24hHigh}`} /> */}
            <StatCard
              text="7d Low / 7d High"
              price={`$${data.sevenDayLow.toFixed(
                2
              )} / $${data.sevenDayHigh.toFixed(2)}`}
            />
            {/* <StatCard text="7d High" price={`${data.sevenDayHigh}`} /> */}
            <StatCard
              text="Trading Volume"
              price={`$${data.tradingVolume.toLocaleString()}`}
            />
            <StatCard text="Market Cap Rank" price={`#${data.marketCapRank}`} />
          </div>
          <div className="w-full md:w-1/2">
            <StatCard
              text="Market Cap"
              price={`$${data.marketCap.toLocaleString()}`}
            />
            {data.marketCapDominance !== undefined && (
              <StatCard
                text="Market Cap Dominance (%)"
                price={`${data.marketCapDominance.toFixed(2)}%`}
              />
            )}
            {data.volumeMarketCap !== undefined && (
              <StatCard
                text="Volume / Market Cap"
                price={`${data.volumeMarketCap.toFixed(4)}`}
              />
            )}
            <StatCard text="All-Time High" price={`${data.allTimeHigh}`} />
            <StatCard text="All-Time Low" price={`${data.allTimeLow}`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceComp;
