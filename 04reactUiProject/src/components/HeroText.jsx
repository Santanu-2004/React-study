import React from "react";
import 'remixicon/fonts/remixicon.css';
import TextMain from "./TextMain";
import Arrow from "./Arrow";

const HeroText = () => {
  return (
    <div className="flex flex-col md:w-1/3 justify-between h-80% px-5 mx-3">
      <TextMain/>
      <Arrow />
    </div>
  );
};

export default HeroText;
