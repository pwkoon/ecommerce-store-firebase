"use client";

import { useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "./firebase/config";
import Loader from "@/components/Loader";
import AdminDashboard from "@/components/AdminDashboard";
import UserDashboard from "@/components/UserDashboard";

export default function Home() {
  const [role, setRole] = useState(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const userId = localStorage.getItem("userId");
        if (!userId) {
          throw new Error("User ID not found in localStorage");
        }

        const userDoc = doc(db, "users", userId);
        const docSnap = await getDoc(userDoc);

        if (docSnap.exists()) {
          setRole(docSnap.data().role);
        } else {
          throw new Error("User document does not exist");
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      }
    };

    fetchUserRole();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (role === "admin") {
    return <AdminDashboard />;
  } else if (role === "user") {
    return <UserDashboard />;
  } else {
    return <Loader />;
  }
}
