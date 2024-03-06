import React from "react";

const SentimentCard = ({ backgroundColor, imageSrc }) => {
  return (
    <div
      className={`flex rounded-xl min-w-[456px]   gap-2 px-18 pt-18 pb-9`}
      style={{ backgroundColor }}
    >
      <div>
        <img className=" w-44 h-11 " src={imageSrc} alt="heading" />
      </div>
      <div className="flex flex-col gap-2 ">
        <h3 className="text-sm font-semibold font-sfpro ">
          Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis
          enim tincidunt.
        </h3>
        <p className="text-sm  font-sfpro ">
          Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
          faucibus metus quis. Amet sapien quam viverra adipiscing condimentum.
          Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra
          natoque lacinia libero enim.
        </p>
      </div>
    </div>
  );
};

export default SentimentCard;
