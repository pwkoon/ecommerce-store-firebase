import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase-client";

// Define the default user object type
interface UserData {
  uid: string;
  email: string;
  username: string;
  role: string;
}

// Default user data (prevents null checks in components)
const defaultUser: UserData = {
  uid: "",
  email: "",
  username: "Guest",
  role: "visitor",
};

export function useUser() {
  const [user, setUser] = useState<UserData>(defaultUser);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(
      auth,
      async (firebaseUser: User | null) => {
        if (firebaseUser) {
          const userDoc = await getDoc(doc(db, "users", firebaseUser.uid));
          setUser({
            uid: firebaseUser.uid,
            email: firebaseUser.email || "",
            username: userDoc.exists()
              ? userDoc.data().username || "Guest"
              : "Guest",
            role: userDoc.exists()
              ? userDoc.data().role || "visitor"
              : "visitor",
          });
        } else {
          setUser(defaultUser); // Reset to default user instead of null
        }
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  return { user, loading };
}
