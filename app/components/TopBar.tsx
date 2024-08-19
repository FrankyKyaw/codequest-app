import React from "react";

const TopBar = () => {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Learn Python</h1>
        <div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Profile
          </button>
          <button className="ml-2 bg-gray-200 px-4 py-2 rounded">Logout</button>
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
