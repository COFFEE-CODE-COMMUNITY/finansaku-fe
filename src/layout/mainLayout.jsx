import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
import Topbar from "../components/topBar";

function MainLayout() {
  return (
    <div className="flex h-screen w-full overflow-hidden"> 
      <div className="h-screen w-[300px]">
        <Sidebar />
      </div>

      {/*yang bakalan ganti ganti*/}
      <div className="flex flex-col w-[1200px] h-scren">
        <Topbar />
        
        <div className="flex-grow ml-12 bg-[#1B263B] h-[920px] overflow-hidden">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
