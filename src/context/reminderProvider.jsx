import React from "react"
import { useState, useEffect } from "react"
import { ReminderContext } from "./reminderContext"
import { useUser } from "../hooks/useUser"

export const ReminderProvider = ({children}) => {
    const {user} = useUser()
    const userId = user?.email

    const [reminders, setReminders] = useState(() => {
        const saved = localStorage.getItem(`reminders_${userId}`);
        return saved ? JSON.parse(saved) : [];
    })

    // Simpan ke localStorage tiap kali reminders berubah
    useEffect(() => {
        if (userId) {
          localStorage.setItem(`reminders_${userId}`, JSON.stringify(reminders));
        }
    }, [reminders, userId]);
    
    const addReminder = (reminder) => {
        setReminders((prev) => [...prev, reminder]);
    };

    const clearReminders = () => setReminders([]);

     return (
        <ReminderContext.Provider value={{ reminders, addReminder, clearReminders, setReminders }}>
          {children}
        </ReminderContext.Provider>
      );
}
