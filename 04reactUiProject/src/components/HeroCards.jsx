import React from "react";
import Cards from "./Cards";

const HeroCards = (props) => {
  return (
    <div className="w-full md:w-2/3 h-80% px-5 gap-8 flex justify-between shrink-0">
      {props.users.map(function (elem, idx) {
        return (
          <Cards
            key={idx}
            color={elem.color}
            id={idx}
            img={elem.img}
            buttonText={elem.buttonText}
          />
        );
      })}

      {/* <Cards />
      <Cards />
      <Cards /> */}
    </div>
  );
};

export default HeroCards;
