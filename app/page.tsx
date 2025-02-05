import Homepage from "@/components/Homepage";
import LogoutButton from "@/components/LogoutButton";
import { firestore, admin } from "@/firebase/firebase-admin"; // Firebase Admin initialized here
import { cookies } from "next/headers"; // Access cookies from next/headers
// import AdminDashboard from "@/components/AdminDashboard";
// import UserDashboard from "@/components/UserDashboard";

interface User {
  uid: string;
  email: string;
  username: string;
  role: string;
}

async function getUserDataFromToken(): Promise<User | null> {
  const cookieStore = await cookies(); // Access cookies using next/headers

  // Extract the value of the 'idToken' cookie
  const idToken = cookieStore.get("idToken")?.value;
  console.log("idToken", idToken);

  if (!idToken) {
    return null; // If no idToken, return null
  }

  try {
    // Verify ID token with Firebase Admin SDK
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const uid = decodedToken.uid;
    // console.log("uid", uid);

    // Fetch user data from Firestore
    const userDoc = await firestore.collection("users").doc(uid).get();
    if (!userDoc.exists) {
      return null; // If no user document, return null
    }

    const userData = userDoc.data();
    // console.log("userData", userData);

    // Ensure userData contains all necessary fields
    if (userData?.email && userData?.username && userData?.role) {
      return {
        uid,
        email: userData.email,
        username: userData.username,
        role: userData.role,
      }; // Return the user data including the uid
    } else {
      return null; // Return null if required fields are missing
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    // console.error("Error verifying ID token:", error);
    return null; // Return null in case of an error
  }
}

export default async function Home() {
  const user = await getUserDataFromToken(); // Retrieve user data

  return (
    <div className="bg-gray-900 h-screen text-white flex flex-col">
      {/* Top Right Buttons */}
      <div className="absolute top-4 right-4 flex gap-4">
        {!user ? (
          <>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition">
              <a href="/sign-in">Sign In</a>
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition">
              <a href="/sign-up">Sign Up</a>
            </button>
          </>
        ) : (
          <LogoutButton />
        )}
      </div>

      {/* Centered Content */}
      <div className="flex flex-grow justify-center items-center text-center">
        {!user && <Homepage />}
        {/* {user && user.role === "admin" && <AdminDashboard />}
        {user && user.role === "user" && <UserDashboard />} */}
      </div>
    </div>
  );
}
