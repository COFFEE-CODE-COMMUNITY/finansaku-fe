import React from "react";
import { Bell, User } from "react-feather";

function Topbar({ title }) {
  return (
    <div className="flex  items-center w-[80%] h-[20%] justify-end px-8 py-4 bg-[#102542] text-white shadow-md">
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="flex gap-4 items-center">
        <button className="bg-white/10 p-3 rounded-full hover:bg-white/20">
          <Bell size={20} />
        </button>
        <button className="bg-blue-600 text-white font-bold p-3 rounded-full w-10 h-10 flex items-center justify-center">
        </button>
      </div>
    </div>
  );
}

export default Topbar;
