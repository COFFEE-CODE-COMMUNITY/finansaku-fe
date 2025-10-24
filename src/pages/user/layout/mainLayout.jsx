import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
import Topbar from "../components/topBar";

function MainLayout() {
  return (
    <div className="flex h-screen w-full overflow-hidden"> 
      <div className="h-screen w-[20%]">
        <Sidebar />
      </div>

      {/*yang bakalan ganti ganti*/}
      <div className="flex flex-col w-[80%] h-scren">
        <Topbar />
        
        <div className="flex-grow bg-[#1B263B] p-8 overflow-hidden">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
