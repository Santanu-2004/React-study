import React from "react";
import CardText from "./CardText";

const Cards = (props) => {
  return (
    <div className="flex flex-col w-1/3 justify-between bg-lime-400 h-137.5 mt-5 mb-7 rounded-3xl overflow-hidden relative">
      <img
        className="h-full w-full object-cover"
        src={props.img}
        alt=""
      />
      <CardText color={props.color} id={props.id} buttonText={props.buttonText} />
    </div>
  );
};

export default Cards;
