import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

const PriceArrowButton = ({ value, plus }) => {
  return (
    <button
      className={`${
        value > 0 ? "text-green-500 bg-bgGreen" : "text-red-500 bg-red-200"
      } rounded-sm font-medium   leading-5 flex items-center ${
        plus ? " p-0.5 text-xs " : " text-base  p-2 "
      } `}
    >
      {plus ? (
        value > 0 ? (
          "+"
        ) : (
          "-"
        )
      ) : (
        <FontAwesomeIcon
          icon={value > 0 ? faCaretUp : faCaretDown}
          className="mr-2"
        />
      )}
      {Math.abs(value).toFixed(2) || 0}%
    </button>
  );
};

export default PriceArrowButton;
