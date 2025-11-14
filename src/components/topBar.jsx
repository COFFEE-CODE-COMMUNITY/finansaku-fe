import React from "react";
import { Bell } from "react-feather";
import {NavLink, useLocation} from 'react-router-dom'


function TopBar(){
    const location = useLocation()

    const titles = {
        "/": "Dashboard",
        "/survey": "Survey",
        "/calendar": "Calendar",
        "/history" : "History",
        "/notification" : "Notification",
        "/setting" : "Setting",
        "/account-information": "Setting",
        "/change-password": "Change Password",
        "/change-email": "Change Email"
    };

    const currentTitle = titles[location.pathname] || "DashBoard";

    return(
        <div className="flex justify-start items-center w-[864px] h-[200px] px-12 z-1 bg-white/0 text-black">
            <div>
                <h1 className="text-3xl font-bold text-white">{currentTitle}</h1>
            </div>

            {/* <div className="flex items-center justify-center gap-6">
                <NavLink className="bg-white rounded-full w-[8vh] h-[8vh] flex items-center justify-center hover:shadow-[0_0_5px_rgba(255,255,255,0.8)] transition-all duration-50"><Bell/></NavLink>
                <NavLink> <img src={ImagePerson} alt="Image Profile" className="w-[8vh] rounded-full hover:shadow-[0_0_5px_rgba(255,255,255,0.8)] transition-all duration-50" /></NavLink>
            </div> */}
        </div>
    )
}

export default TopBar