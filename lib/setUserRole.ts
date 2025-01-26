import { db } from "@/app/firebase/config";
import { doc, updateDoc } from "firebase/firestore";

export async function setUserRole(
  uid: string,
  role: "user" | "admin"
): Promise<void> {
  try {
    const userRef = doc(db, "users", uid);
    await updateDoc(userRef, { role });
    console.log("User role set successfully!");
  } catch (error) {
    console.error("Error setting user role: ", error);
  }
}
