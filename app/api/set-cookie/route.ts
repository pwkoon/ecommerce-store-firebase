import { NextResponse } from "next/server";
import { admin } from "@/firebase/firebase-admin";

export async function POST(req: Request) {
  try {
    const { idToken } = await req.json();
    if (!idToken) {
      return NextResponse.json({ error: "ID Token missing" }, { status: 400 });
    }

    // Verify Firebase ID token
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const uid = decodedToken.uid;

    // ✅ Create a response and set the cookie in headers
    const response = NextResponse.json({
      message: "Token set successfully",
      uid,
    });

    console.log("res from sign in", response);

    // ✅ Properly set HTTP-only cookie in the response headers
    response.headers.append(
      "Set-Cookie",
      `idToken=${idToken}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=${
        60 * 60 * 24 * 7
      }`
    );

    return response;
  } catch (error) {
    console.error("Error verifying token:", error);
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
}
