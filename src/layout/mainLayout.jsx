import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
import Topbar from "../components/topBar";
import SidebarSetting from '../components/sidebarSetting'
// import { useLocation } from "react-router-dom";

function MainLayout() {

  // const location = useLocation();

  // const isSettingPage =
  //   location.pathname.startsWith("/setting") ||
  //   location.pathname.startsWith("/account-information") ||
  //   location.pathname.startsWith("/change-password") ||
  //   location.pathname.startsWith("/change-email");
  return (
    <div className="flex h-screen w-full overflow-hidden"> 
        <div className="h-screen w-[300px]">
            <Sidebar />
        </div>
{/* 
        {isSettingPage && (
              <div className="w-[250px] border-r border-gray-700">
                <SidebarSetting />
              </div>
        )} */}
    

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
