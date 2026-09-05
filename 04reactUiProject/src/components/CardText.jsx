import React from "react";

const CardText = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">
      <h1 className="bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center">
        {props.id + 1}
      </h1>
      <div>
        <p className="mb-8 text-xl font-medium text-white">
          Lorem ipsum dolor <br /> sit amet consectetur adipisicing elit. Hic,
          distinctio. Eveniet doloremque deleniti iusto maiores quibusdam.
        </p>
        <div className="flex justify-between">
          <button
            className="text-white rounded-full px-7 text-xl font-medium w-40"
            style={{ backgroundColor: props.color }}
          >
            {props.buttonText}
          </button>
          <i
            className="ri-arrow-right-line text-white font-semibold rounded-full h-12 w-12 flex justify-center items-center"
            style={{ backgroundColor: props.color }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default CardText;
