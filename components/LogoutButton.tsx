"use client";

import React from "react";
import useLogout from "@/lib/useLogout";

const LogoutButton = () => {
  const logout = useLogout(); // Client-side logout function

  return (
    <button
      onClick={logout} // Call logout function on click
      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
