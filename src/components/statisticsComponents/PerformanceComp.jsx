import React, { useEffect, useState } from "react";
import Slider from "./Slider";
import StatCard from "./StatCard";
import TypeHeader from "../commonComponents/TypeHeader";
// const moment = require('moment');
import moment from "moment";
//ethereum
const PerformanceComp = ({ crypto = "bitcoin" }) => {
  const [data, setData] = useState({});
  const [test, setTest] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const [chartResponse, additionalResponse] = await Promise.all([
        fetch(
          `https://api.coingecko.com/api/v3/coins/${crypto}/market_chart?vs_currency=usd&days=365`
        ),
        fetch(`https://api.coingecko.com/api/v3/coins/${crypto}`),
      ]);

      const [chartData, additionalData] = await Promise.all([
        chartResponse.json(),
        additionalResponse.json(),
      ]);

      console.log(additionalData);

      const currentPrice = additionalData.market_data?.current_price?.usd;

      const allTimeHighChange = (
        ((additionalData.market_data?.ath?.usd - currentPrice) / currentPrice) *
        100
      ).toFixed(1);
      const allTimeLowChange = (
        ((currentPrice - additionalData.market_data?.atl?.usd) /
          additionalData.market_data?.atl?.usd) *
        100
      ).toFixed(1);
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
          ...(chartData.prices?.slice(0, 7)?.map((p) => p?.[1]) || [])
        ),
        tradingVolume: additionalData.market_data?.total_volume.usd,
        marketCapRank: additionalData.market_data?.market_cap_rank,
        last24hLow: additionalData.market_data.low_24h.usd,
        last24hHigh: additionalData.market_data.high_24h.usd,
        marketCap: additionalData.market_data.market_cap.usd,
        marketCapDominance:
          (additionalData.market_data.market_cap.usd || 0) /
          (additionalData.market_data.total_volume.usd || 1),
        volumeMarketCap:
          (additionalData.market_data.total_volume.usd || 0) /
          (additionalData.market_data.market_cap.usd || 1),
        allTimeHigh: additionalData.market_data.ath.usd,
        allTimeLow: additionalData.market_data.atl.usd,
        allTimeLowDate: additionalData.market_data?.atl_date?.usd,
        allTimeHighDate: additionalData.market_data?.ath_date?.usd,
        allTimeHighChange: allTimeHighChange,
        allTimeLowChange: allTimeLowChange,
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

  const [priceData, setPriceData] = useState(null);

  useEffect(() => {
    const fetchPriceData = async () => {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${crypto}/market_chart?days=365&vs_currency=usd`
      );
      const data = await response.json();

      const prices = data.prices.map((price) => price[1]);

      const todayLow = Math.min(...prices.slice(-24)); // Today's low is within the last 24 hours
      const todayHigh = Math.max(...prices.slice(-24)); // Today's high is within the last 24 hours

      const fiftyTwoWeekLow = Math.min(...prices); // 52-week low is the overall minimum price in the last year
      const fiftyTwoWeekHigh = Math.max(...prices); // 52-week high is the overall maximum price in the last year

      const currentPrice = prices[prices.length - 1]; // Current price is the latest price available
      // const currentPrice = data.prices[data.prices.length - 1][1];

      setPriceData({
        todayLow: todayLow,
        todayHigh: todayHigh,
        fiftyTwoWeekLow: fiftyTwoWeekLow,
        fiftyTwoWeekHigh: fiftyTwoWeekHigh,
        currentPrice: currentPrice,
      });
    };

    fetchPriceData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  console.log(data?.allTimeHighDate);
  // console.log(test);
  return (
    <div className=" p-3 ">
      {/* <h1 className="font-bold text-3xl p-2"> Performance </h1> */}
      <TypeHeader text="Performance" />
      <div className=" flex flex-col ">
        <div className="flex flex-col ">
          <div className="flex items-center gap-4   justify-center ">
            <div className="flex flex-col gap-y-2  ">
              <p className="text-sm mt-4 ">Today's Low</p>
              <p className=" font-medium text-base">
                ${priceData?.todayLow?.toFixed(2)}{" "}
              </p>
            </div>

            <Slider
              min={priceData?.todayLow?.toFixed(2)}
              max={priceData?.todayHigh?.toFixed(2)}
              value={priceData?.currentPrice?.toFixed(2)}
            />

            <div className="flex flex-col gap-y-2  ">
              <p className="text-sm  mt-4 ">Today's High</p>
              <p className=" font-medium text-base">
                $ {priceData?.todayHigh?.toFixed(2)}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center ">
            <div className="flex flex-col gap-y-2  ">
              <p className="text-sm mt-4 ">52W Low</p>
              <p className=" font-medium text-base">
                $ {priceData?.fiftyTwoWeekLow?.toFixed(2)}
              </p>
            </div>

            <Slider
              min={priceData?.fiftyTwoWeekLow?.toFixed(2)}
              max={priceData?.fiftyTwoWeekHigh?.toFixed(2)}
            />

            <div className="flex flex-col gap-y-2  ">
              <p className="text-sm  mt-4 ">52W High</p>
              <p className=" font-medium text-base">
                $ {priceData?.fiftyTwoWeekHigh?.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-end p-2 gap-5">
          {/* <h2 className=" font-bold text-2xl ">Fundamentals</h2> */}
          <TypeHeader text="Fundamentals" />
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
              text={`${crypto} Price`}
              price={`$${data.last24h?.toFixed(2)}`}
            />
            <StatCard
              text="24h Low / 24h High"
              price={`$${data.last24hLow} / $${data.last24hHigh}`}
            />
            {/* <StatCard text="24h High" price={`${data.last24hHigh}`} /> */}
            <StatCard
              text="7d Low / 7d High"
              price={`$${data?.sevenDayLow?.toFixed(
                2
              )} / $${data?.sevenDayHigh?.toFixed(2)}`}
            />
            {/* <StatCard text="7d High" price={`${data.sevenDayHigh}`} /> */}
            <StatCard
              text="Trading Volume"
              price={`$${data?.tradingVolume?.toLocaleString()}`}
            />
            <StatCard
              text="Market Cap Rank"
              price={`#${data?.marketCapRank}`}
            />
          </div>
          <div className="w-full md:w-1/2">
            <StatCard
              text="Market Cap"
              price={`$${data.marketCap?.toLocaleString()}`}
            />
            {data.marketCapDominance !== undefined && (
              <StatCard
                text="Market Cap Dominance (%)"
                price={`${data.marketCapDominance?.toFixed(2)}%`}
              />
            )}
            {data.volumeMarketCap !== undefined && (
              <StatCard
                text="Volume / Market Cap"
                price={`${data.volumeMarketCap?.toFixed(4)}`}
              />
            )}
            {/* <StatCard text="All-Time High" price={`${data?.allTimeHigh}`} /> */}
            <div className="flex w-full border-b p-3 border-gray-300 justify-between">
              <div className=" text-statText capitalize font-semibold ">
                All-Time High
              </div>
              <div className=" text-black  font-sans text-sm flex flex-col items-end leading-6 font-semibold ml-2 ">
                <p>
                  {`$${data?.allTimeHigh}`}{" "}
                  <span className=" text-red-400 ">
                    {" "}
                    -{`${data?.allTimeHighChange}%`}{" "}
                  </span>
                </p>
                {/* <p>{` (${getFormattedDate(data?.allTimeHighDate)}) `}</p> */}
                <p>
                  {` ${moment(data?.allTimeHighDate).format(
                    "MMM DD, YYYY"
                  )} (Over ${moment().diff(
                    moment(data?.allTimeHighDate),
                    "years"
                  )} years ) `}{" "}
                </p>
              </div>
            </div>
            <div className="flex w-full border-b p-3 border-gray-300 justify-between">
              <div className=" text-statText capitalize font-semibold ">
                All-Time Low
              </div>
              <div className=" text-black flex flex-col items-end  font-sans text-sm leading-6 font-semibold ml-2 ">
                <p>
                  {`$${data?.allTimeLow}`}{" "}
                  <span className=" text-AbsoluteGreen ">
                    {" "}
                    +{`${data?.allTimeLowChange}%`}{" "}
                  </span>
                </p>
                {/* <p>{` (${getFormattedDate(data?.allTimeLowDate)}) `}  </p> */}
                <p>
                  {` ${moment(data?.allTimeLowDate).format(
                    "MMM DD, YYYY"
                  )} (Over ${moment().diff(
                    moment(data?.allTimeLowDate),
                    "years"
                  )} years ) `}{" "}
                </p>
              </div>
            </div>
            {/* <StatCard text="All-Time Low" price={`${data?.allTimeLow}`} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceComp;
