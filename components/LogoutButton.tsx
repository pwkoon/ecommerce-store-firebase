"use client";

import React from "react";
import useLogout from "@/lib/useLogout";

const LogoutButton = () => {
  const logout = useLogout(); // Client-side logout function

  return (
    <button
      onClick={logout} // Call logout function on click
      className="bg-aboutDark hover:underline hover:underline-offset-4 text-darkYellow px-4 py-2 rounded transition"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
