// import { NextResponse } from "next/server";
// import { admin } from "@/firebase/firebase-admin"; // Ensure Firebase Admin is initialized

// export const dynamic = "force-dynamic"; // Ensure the API runs at request time

// export async function GET(req: Request) {
//   const authHeader = req.headers.get("Authorization");

//   if (!authHeader?.startsWith("Bearer ")) {
//     return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//   }

//   const idToken = authHeader.split("Bearer ")[1];

//   try {
//     const decodedToken = await admin.auth().verifyIdToken(idToken);
//     const uid = decodedToken.uid;

//     const userDoc = await admin.firestore().collection("users").doc(uid).get();
//     console.log("userDoc from api", userDoc);

//     if (!userDoc.exists) {
//       return NextResponse.json({ error: "User not found" }, { status: 404 });
//     }

//     const userData = userDoc.data();
//     return NextResponse.json({
//       uid,
//       email: userData?.email,
//       username: userData?.username,
//       role: userData?.role,
//     });
//   } catch (error) {
//     console.error("Error verifying ID token:", error);
//     return NextResponse.json({ error: "Invalid token" }, { status: 401 });
//   }
// }
