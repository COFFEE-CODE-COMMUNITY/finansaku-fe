import React from "react";
import CalendarPage from "./calendar";
import DefaultCalendar from "../../components/defCalendar";    

function CalendardSet() {
    const sudahSurvey = localStorage.getItem("hasilSurvey"); // ambil flag

    return (
        <>
            {sudahSurvey === "true" ? <CalendarPage /> : <DefaultCalendar />}
        </>
    );
}

export default CalendardSet;

// tidak digunakan