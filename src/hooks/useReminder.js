import { useContext } from "react";
import { ReminderContext } from "../context/reminderContext";

export const useReminders = () => useContext(ReminderContext);
