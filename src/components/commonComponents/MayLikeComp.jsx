import React, { useState, useEffect, useRef } from "react";
// import PriceArrowButton from "./commonComponents/PriceArrowButton";
import RightArrow from "../../assets/next.png";
import LeftArrow from "../../assets/prev.png";
import PriceArrowButton from "./PriceArrowButton";

const MayLikeComp = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (direction) => {
    const container = containerRef.current;
    const scrollAmount = 20; // Adjust the scroll amount as needed

    if (direction === "left") {
      container.scrollLeft -= scrollAmount;
      setScrollPosition(container.scrollLeft);
    } else if (direction === "right") {
      container.scrollLeft += scrollAmount;
      setScrollPosition(container.scrollLeft);
    }
  };

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
    <div
      ref={containerRef}
      className="flex gap-[10px] relative   overflow-x-hidden scrollbar-hide "
    >
      <div
        className="absolute top-1/2 left-2"
        onClick={() => handleScroll("left")}
        style={{ transform: `translateX(${scrollPosition}px)` }}
      >
        <img src={LeftArrow} alt="LeftArrow" />
      </div>

      <div
        className="flex space-x-4"
        // onScroll={(e) => setScrollPosition(e.target.scrollLeft)}
      >
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

      <div
        className="absolute top-1/2 right-2"
        onClick={() => handleScroll("right")}
        style={{ transform: `translateX(${scrollPosition}px)` }}
      >
        <img src={RightArrow} alt="RightArrow" />
      </div>
    </div>
  );
};

export default MayLikeComp;
