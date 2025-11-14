import React from "react";
import DashboardContent from "./dashboard";
import DefaultPage from "../../components/defDashboard";    

function DashboardSet() {
    const sudahSurvey = localStorage.getItem("hasilSurvey") === "true";

    return (
        <>
            {sudahSurvey ? <DashboardContent /> : <DefaultPage />}
        </>
    );
}

export default DashboardSet