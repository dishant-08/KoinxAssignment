import React, { useState, useEffect } from "react";
import TypeHeader from "./commonComponents/TypeHeader";
import Tax from "../assets/Tax.png";
import Investing from "../assets/Investing.png";
import Button from "./commonComponents/Button";
import { useNameContext } from "../context/NameContext";
const About = () => {
  const [bitcoinData, setBitcoinData] = useState(null);
  const [coin, setCoin] = useState("bitcoin");
  const { name } = useNameContext();

  // Use a single useEffect to handle both name and coin changes
  useEffect(() => {
    // Conditionally set name to "bitcoin" if it's not "ethereum"
    if (name !== "ethereum") {
      setCoin("bitcoin");
    } else {
      setCoin("ethereum");
    }
  }, [name]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data based on the dynamically set coin value
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${coin}`
        );
        const data = await response.json();
        setBitcoinData(data);
      } catch (error) {
        console.error("Error fetching Bitcoin data:", error);
      }
    };

    // Fetch data whenever the coin value changes
    fetchData();
  }, [coin]); // Include coin in the dependency array to trigger the effect when coin changes

  const sentence =
    bitcoinData &&
    `${name} ’s price today is US$${bitcoinData.market_data.current_price.usd.toFixed(
      2
    )}, with a 24-hour trading volume of $${
      bitcoinData.market_data.total_volume.usd
    } B. BTC is ${
      bitcoinData.market_data.price_change_percentage_24h
    }% in the last 24 hours. It is currently ${
      bitcoinData.market_data.current_price.usd -
      bitcoinData.market_data.ath.usd
    }% from its 7-day all-time high of $${
      bitcoinData.market_data.ath.usd
    }, and ${
      bitcoinData.market_data.current_price.usd -
      bitcoinData.market_data.atl.usd
    }% from its 7-day all-time low of $${
      bitcoinData.market_data.atl.usd
    }. BTC has a circulating supply of ${
      bitcoinData.market_data.circulating_supply
    } M BTC and a max supply of ${bitcoinData.market_data.max_supply} M BTC.`;

  return (
    <div className="flex flex-col gap-4 bg-white p-2 md:p-6 rounded-lg ">
      <TypeHeader text={`About ${coin} `} />
      <div>
        <h3 className="font-bold capitalize text-lg">What is {coin}? </h3>
        <p className="text-base font-medium ">{sentence || "Loading..."}</p>
      </div>
      <div>
        <h3 className="font-bold text-lg">Lorem ipsum dolor sit amet </h3>
        <p className="text-base font-medium ">
          {" "}
          Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis
          tristique pharetra. Diam id et lectus urna et tellus aliquam dictum
          at. Viverra diam suspendisse enim facilisi diam ut sed. Quam
          scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies
          urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque
          fermentum sapien morbi sodales odio sed rhoncus. Diam praesent massa
          dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque
          auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque
          interdum. Odio cursus phasellus velit in senectus enim dui. Turpis
          tristique placerat interdum sed volutpat. Id imperdiet magna eget eros
          donec cursus nunc. Mauris faucibus diam mi nunc praesent massa turpis
          a. Integer dignissim augue viverra nulla et quis lobortis phasellus.
          Integer pellentesque enim convallis ultricies at. Fermentum hendrerit
          imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis
          ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus.
          Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus
          ultrices tincidunt volutpat in eget. Ullamcorper dui{" "}
        </p>
      </div>
      <div>
        {/* <h3 className="font-bold text-lg">Lorem ipsum dolor sit amet </h3> */}
        <TypeHeader text={`Already Holding ${coin}?`} />
        <div className=" flex mt-4 md:justify-around flex-col md:flex-row gap-4 ">
          <div className="">
            <div className=" bg-gradient-to-r from-green-400 to-blue-800 max-w-96 p-4 rounded-md text-white text-center gap-2 flex ">
              <img src={Investing} alt="Investing" />

              <div className="flex flex-col items-center justify-center ">
                <h2 className="text-xl  font-bold mb-2">
                  Calculate your Profits
                </h2>
                {/* <p className="text-sm">Card Content</p>
                 */}
                <div className="flex justify-center items-center">
                  <Button variant="default" text="Check Now" />
                </div>{" "}
              </div>
            </div>
          </div>
          <div>
            <div className=" bg-gradient-to-r from-orange-500 max-w-96 to-red-600 p-4 rounded-md text-white text-center flex ">
              <img src={Tax} alt="tax" />

              <div className="flex flex-col">
                <h2 className="text-xl  font-bold mb-2">
                  Calculate your tax liability
                </h2>
                {/* <p className="text-sm">Card Content</p>
                 */}
                <div className="flex justify-center items-center">
                  <Button variant="default" text="Check Now" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-base mt-4 hidden md:block font-medium ">
          {" "}
          Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
          massa vel convallis duis ac. Mi adipiscing semper scelerisque
          porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
          congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
          eget. Ullamcorper dui{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
