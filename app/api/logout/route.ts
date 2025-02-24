import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  (await cookies()).set("idToken", "", { path: "/", maxAge: 0 }); // Clear the cookie

  return NextResponse.json({ message: "Logged out successfully" });
}
