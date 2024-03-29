// TradingViewWidget.jsx
import React, { useEffect, useRef, memo, useState } from "react";
import PriceArrowButton from "../commonComponents/PriceArrowButton";

function TradingViewWidget({ coins }) {
  const [data, setData] = useState();
  const [price, setPrice] = useState();
  console.log(coins);
  // useEffect(() => {
  //   // Declare a variable to track whether the component is mounted
  //   let isMounted = true;

  //   const getCoinsData = async () => {
  //     try {
  //       const res = await fetch(
  //         `https://api.coingecko.com/api/v3/coins/${coins}?community_data=false&developer_data=false&sparkline=true`
  //       );

  //       if (isMounted) {
  //         const temp = await res.json();
  //         setData(temp);
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   const getCoinsMarketData = async () => {
  //     try {
  //       const res = await fetch(
  //         `https://api.coingecko.com/api/v3/simple/price?ids=${coins}&vs_currencies=inr%2Cusd&include_24hr_change=true`
  //       );

  //       if (isMounted) {
  //         const temp = await res.json();
  //         setPrice(temp[coins]);
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   getCoinsData();
  //   getCoinsMarketData();

  //   // Run cleanup when the component is unmounted
  //   return () => {
  //     isMounted = false;
  //   };

  //   // Run the initial fetch
  // }, [coins]);

  useEffect(() => {
    // Declare a variable to track whether the component is mounted
    let isMounted = true;

    const fetchData = async () => {
      try {
        const [coinsDataRes, marketDataRes] = await Promise.all([
          fetch(
            `https://api.coingecko.com/api/v3/coins/${coins}?community_data=false&developer_data=false&sparkline=true`
          ),
          fetch(
            `https://api.coingecko.com/api/v3/simple/price?ids=${coins}&vs_currencies=inr%2Cusd&include_24hr_change=true`
          ),
        ]);

        if (isMounted) {
          const coinsData = await coinsDataRes.json();
          const marketData = await marketDataRes.json();

          setData(coinsData);
          setPrice(marketData[coins]);
        }
      } catch (error) {
        console.error(error);
      }
    };

    // Run the initial fetch
    fetchData();

    // Run cleanup when the component is unmounted
    return () => {
      isMounted = false;
    };
  }, [coins]);

  const container = useRef();

  useEffect(() => {
    const scriptId = "tradingview-widget-script";
    if (document.getElementById(scriptId)) return;

    const script = document.createElement("script");
    script.id = scriptId;
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;

    if (coins === "ethereum") {
      script.innerHTML = `
          {
              "autosize": true,
              "symbol": "COINBASE:ETHUSD",
              "timeframes": ["1", "5", "15", "30", "60", "D", "W"],
              "interval": "D",
              "timezone": "Etc/UTC",
              "theme": "light",
              "style": "3",
              "locale": "en",
              "enable_publishing": true,
              "hide_top_toolbar": true,
              "allow_symbol_change": true,
              "save_image": false,
              "calendar": true,
              "hide_volume": true,
              "support_host": "https://www.tradingview.com"
          }
      `;
    } else {
      script.innerHTML = `
      {
          "autosize": true,
          "symbol": "BITSTAMP:BTCUSD",
          "timeframes": ["1", "5", "15", "30", "60", "D", "W"],
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "3",
          "locale": "en",
          "enable_publishing": true,
          "hide_top_toolbar": true,
          "allow_symbol_change": true,
          "save_image": false,
          "calendar": true,
          "hide_volume": true,
          "support_host": "https://www.tradingview.com"
      }
    `;
    }

    if (container.current) {
      container.current.appendChild(script);
    }

    // Cleanup function
    return () => {
      const scriptElement = document.getElementById(scriptId);
      if (scriptElement) {
        scriptElement.parentNode.removeChild(scriptElement);
      }
    };
  }, [coins]);

  return (
    <div className="   ">
      <header className="flex flex-col space-y-4  ">
        <div className=" flex gap-10  ">
          <div className=" flex gap-1 items-center ">
            <img src={data?.image?.thumb} alt={data?.name} />
            <h2 className="text-xl font-semibold">{data?.name} </h2>
            <h6 className=" uppercase text-statText "> {data?.symbol} </h6>
          </div>
          <div className=" border rounded-lg p-2 bg-statText text-white ">
            Rank #{data?.market_cap_rank}{" "}
          </div>
        </div>

        <div className=" flex flex-col p-2     bg-white ">
          <div className=" flex gap-4 ">
            <h2 className=" text-3xl text-black font-bold ">
              {" "}
              ${price?.usd?.toLocaleString()}{" "}
            </h2>

            <div className="flex items-center gap-2">
              {/* <button
                className={`${
                  price?.usd_24h_change > 0 ? "bg-green-500" : "bg-red-500"
                } text-white py-2 px-4 rounded-full`}
              >
                {price?.usd_24h_change > 0 ? "🔼" : "🔽"}
                {price?.usd_24h_change.toFixed(2)}
              </button> */}
              <PriceArrowButton value={price?.usd_24h_change || 0} />

              <div className=" text-statText text-sm">(24H) </div>
            </div>
          </div>
          <div className="font-semibold text-base text-black ">
            {" "}
            ₹{price?.inr.toLocaleString()}{" "}
          </div>
          <div className=" px-2 my-2 ">
            <div className="border-b border-statText"></div>
          </div>
        </div>
      </header>
      <div
        className=" h-screen bg-white  md:p-0 overflow-x-hidden max-h-[400px] "
        ref={container}
      >
        <div className=" "></div>
      </div>
    </div>
  );
}

export default TradingViewWidget;
