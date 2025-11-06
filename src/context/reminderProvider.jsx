import React, { useState, useEffect } from "react";
import { ReminderContext } from "./reminderContext";

export const ReminderProvider = ({ children }) => {
  const [reminders, setReminders] = useState(() => {
    // 🔹 Ambil data dari localStorage saat pertama kali load
    const saved = localStorage.getItem("reminders");
    return saved ? JSON.parse(saved) : [];
  });

  // 🔹 Simpan setiap kali reminders berubah
  useEffect(() => {
    localStorage.setItem("reminders", JSON.stringify(reminders));
  }, [reminders]);

  // 🔹 Tambah reminder baru
  const addReminder = (reminder) => {
    setReminders((prev) => [...prev, reminder]);
  };

  // 🔹 Hapus semua reminder
  const clearReminders = () => setReminders([]);

  return (
    <ReminderContext.Provider
      value={{ reminders, addReminder, clearReminders, setReminders }}
    >
      {children}
    </ReminderContext.Provider>
  );
};
