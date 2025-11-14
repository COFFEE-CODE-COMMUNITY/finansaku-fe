import React, { useState, useEffect } from "react";
import { UserContext } from "./userContext.jsx";
import { verify, logout } from "../api/authApi.js"

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // menandai proses verifikasi

  // Simpan data user secara manual (misal setelah login)
  const saveUser = (userData) => {
    setUser(userData);
  };

  // Logout user
  const clearUser = async () => {
    try {
      await logout()
    } catch (error) {
      console.error("Logout gagal:", error);
    } finally {
      setUser(null)
    }
  };


  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await verify();

        if (res.ok) {
          const data = await res.json()
          console.log(data)
          setUser(data.data);
        } else {
          setUser(null); // token tidak valid
        }
      } catch (err) {
        console.error("Verifikasi token gagal:", err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, saveUser, clearUser, loading }}>
      {children}
    </UserContext.Provider>
  );
};

/*
  Tidak ada cara langsung di frontend, tapi bisa redirect user ke halaman lain dan set state user = null.

Risiko: cookie tetap ada, jadi user masih bisa diakses backend. Ini tidak aman, karena token masih valid.
*/

