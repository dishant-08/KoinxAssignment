import React from "react";

const Button = ({ variant, text }) => {
  const baseClass = "font-semibold text-base rounded-lg  flex items-center";
  const variantType = {
    default: "bg-white text-black p-1",
    defaultBig: "bg-white text-black px-6 py-2 leading-7",
    solidBlue:
      "bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] leading-5 text-white p-3 ",
  };

  const classes = `${variantType[variant]} ${baseClass}`;

  return (
    <button type="button" className={classes}>
      {text}
      {(variant === "default" || variant === "defaultBig") && (
        <span className="ml-2  ">
          <svg
            width="15"
            height="12"
            viewBox="0 0 15 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.9583 5.9952L1.45834 5.9952"
              stroke="#0F1629"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.91684 0.974793L13.9585 5.99479L8.91684 11.0156"
              stroke="#0F1629"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      )}
    </button>
  );
};

export default Button;
