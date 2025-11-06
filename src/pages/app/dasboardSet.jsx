import React from "react";
import Register from "../auth/signUpPage";
import DashboardContent from "./dashboard";
import DefaultPage from "../../components/defDashboard";    

function DashboardSet(){
    const sudahSurvey = localStorage.getItem("hasilSurvey")

    return(
        <>
            {sudahSurvey? <DashboardContent/> : <DefaultPage/>}
        </>
    )
}

export default DashboardSet