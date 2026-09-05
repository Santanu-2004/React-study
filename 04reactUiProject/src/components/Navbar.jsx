import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-6 px-16">
      <h1 className="bg-black text-white uppercase px-6 py-2 rounded-full cursor-pointer hover:bg-gray-900">
        Target Audience
      </h1>
      <h1 className="bg-gray-200 hover:bg-gray-300 uppercase px-6 py-2 rounded-full tracking-wider cursor-pointer">
        Digital Banking Platform
      </h1>
    </div>
  );
};

export default Navbar;
