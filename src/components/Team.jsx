import React from "react";
import TypeHeader from "./commonComponents/TypeHeader";

import John from "../assets/John.png";
import NewJohn from "../assets/newjohn.png";
import ELina from "../assets/elina.png";
import TeamCard from "./TeamComp/TeamCard";

const Team = () => {
  return (
    <div>
      <TypeHeader text="Team" />
      <p className="text-base font-medium ">
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
        nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
        quam. Facilisis purus convallis quam augue.
      </p>
      <TeamCard photo={John} name="John Smith" />
      <TeamCard photo={ELina} name="Elina Williams" />
      <TeamCard photo={NewJohn} name="John Smith" />
    </div>
  );
};

export default Team;