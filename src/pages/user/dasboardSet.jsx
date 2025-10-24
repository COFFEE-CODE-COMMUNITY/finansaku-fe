import React, { useEffect, useState } from "react";
import DashboardContent from "./DashboardContent";
import DefaultPage from "./DefaultPage";

export default function Dashboard() {
  const [surveyFilled, setSurveyFilled] = useState(false);

  useEffect(() => {
    // Cek status dari localStorage
    const filled = localStorage.getItem("surveyFilled");

    // Jika belum pernah isi survey (akun baru)
    if (filled === null || filled === "false") {
      setSurveyFilled(false);
    } else {
      setSurveyFilled(true);
    }
  }, []);

  return (
    <div className="w-full h-full">
      {surveyFilled ? <DashboardContent /> : <DefaultPage />}
    </div>
  );
}
