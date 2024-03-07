import React, { useEffect } from "react";
import TradingViewWidget from "./TradingViewWIdget";
import { useNameContext } from "../../context/NameContext";

const Charts = ({ coin }) => {
  // const { name } = useNameContext();
  const { name, setNameValue } = useNameContext();
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get("coins");
    setNameValue(name);
    // Do something with the name parameter
  }, []);
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get("coins");
    setNameValue(name);
    // Do something with the name parameter
  }, [name]);

  return (
    <div className="md:bg-white p-1 rounded-lg">
      <TradingViewWidget coins={coin} />
    </div>
  );
};

export default Charts;
