import React from "react";
import DashboardContent from "./dashboard";
import DefaultPage from "../../components/defDashboard";    

function DashboardSet() {
    const sudahSurvey = localStorage.getItem("hasilSurvey") === "true";
    console.log(sudahSurvey)
    return (
        <>
            {sudahSurvey ? <DashboardContent /> : <DefaultPage />}
        </>
    );
}

export default DashboardSet