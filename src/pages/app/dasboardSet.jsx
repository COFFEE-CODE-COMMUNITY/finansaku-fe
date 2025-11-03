import React from "react";
import DashboardContent from "./dashboard"; // file chart kamu
import DefaultPage from "../../components/defDashboard"; // file default dashboard kamu

// UNTUK ATUR YANG DITAMPILIN DI DASHBOARD
export default function ProtectedDashboard() {
  const sudahSurvey = localStorage.getItem("hasilSurvey") === "true";

  return (
    <>
      {sudahSurvey ? <DashboardContent /> : <DefaultPage />}
    </>
  );
}
