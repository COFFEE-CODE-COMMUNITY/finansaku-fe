import React from "react";
import { useEffect, useState } from "react";
import { UserContext } from "./userContext.jsx";
import { Jwt } from "../utils/jwt";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const saveUser = (payload) => {
    setUser(payload);
  };

  const clearUser = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const payload = Jwt(token);
      setUser(payload);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, saveUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
};
