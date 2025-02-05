"use client";

import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "@/firebase/firebase-client";

const useLogout = () => {
  const router = useRouter();

  const logout = async () => {
    try {
      await signOut(auth); // Sign out from Firebase

      // Call API route to clear cookie
      const response = await fetch("/api/logout", { method: "POST" });

      if (!response.ok) {
        throw new Error("Failed to clear session");
      }

      router.push("/"); // Redirect to sign-in
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return logout;
};

export default useLogout;
