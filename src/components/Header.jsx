import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4">
      <h1 className="font-bold">
        Free<span className="text-blue-500 bold">Scribe</span>
      </h1>
      <button className="text-blue-500 p-2 rounded-lg shadow-lg hover:scale-110 duration-100">
        New <i className="ri-add-line"></i>
      </button>
    </header>
  );
};

export default Header;
