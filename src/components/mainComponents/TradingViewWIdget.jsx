// TradingViewWidget.jsx
import React, { useEffect, useRef, memo, useState } from "react";

function TradingViewWidget({ coins }) {
  const [data, setData] = useState();
  const [price, setPrice] = useState();

  const getCoinsData = async () => {
    try {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coins}?community_data=false&developer_data=false&sparkline=true`
      );
      const temp = await res.json();
      setData(temp);
      //   console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  const getCoinsMarketData = async () => {
    try {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${coins}&vs_currencies=inr%2Cusd&include_24hr_change=true`
      );
      const temp = await res.json();
      setPrice(temp.bitcoin);
      //   console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  

  useEffect(() => {
    getCoinsData();
   
    getCoinsMarketData();
  }, []);

  console.log(data);
  const container = useRef();

  useEffect(() => {
    // Create a unique ID for each script to prevent duplication
    const scriptId = "tradingview-widget-script";
    if (document.getElementById(scriptId)) return;

    const script = document.createElement("script");
    script.id = scriptId;
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
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
        }`;
    container.current.appendChild(script);

    // Increase height and width
    // container.current.style.height = "500px"; // Adjust the height as needed
    // container.current.style.width = "800px"; // Adjust the width as needed

    // Cleanup function
    return () => {
      const scriptElement = document.getElementById(scriptId);
      if (scriptElement) {
        scriptElement.parentNode.removeChild(scriptElement);
      }
    };
  }, []);

  return (
    <div>
      <header className="flex flex-col space-y-4 ">
        <div className=" flex gap-5  ">
          <div className=" flex gap-3 ">
            <img src={data?.image?.thumb} alt={data?.name} />
            <h2>{data?.name} </h2>
            <h6> {data?.symbol} </h6>
          </div>
          <div>{data?.market_cap_rank} </div>
        </div>

        <div className=" flex flex-col ">
          <div className=" flex gap-4 ">
            <h2 className=" text-3xl font-bold ">
              {" "}
              ${price?.usd.toLocaleString()}{" "}
            </h2>

            <div>
              <button
                className={`${
                  price?.usd_24h_change > 0 ? "bg-green-500" : "bg-red-500"
                } text-white py-2 px-4 rounded-full`}
              >
                {price?.usd_24h_change > 0 ? "🔼" : "🔽"}
                {price?.usd_24h_change.toFixed(2)}
              </button>

              <div>(24H) </div>
            </div>
          </div>
          <div> ₹{price?.inr.toLocaleString()} </div>
        </div>
      </header>
      <div className=" h-screen max-h-96 " ref={container}>
        <div className=" "></div>
      </div>
    </div>
  );
}

export default TradingViewWidget;
