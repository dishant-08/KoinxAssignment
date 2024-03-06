import React from "react";

const TeamCard = ({ photo, name }) => {
  return (
    <div className="flex gap-4 bg-blue-100 items-center p-4 ">
      <div className="flex p-1 flex-col">
        <img src={photo} alt="name" />
        <div className="text-base font-bold">{name}</div>
        <div className="text-statText font-medium text-xs">
          Designation here{" "}
        </div>
      </div>
      <p className="text-sm text-black">
        Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
        fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in
        nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque
        sed pellentesque viverra. Consectetur proin amet ut id facilisi quis
        consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est
        ipsum. Malesuada etiam mi gravida praesent interdu
      </p>
    </div>
  );
};

export default TeamCard;
