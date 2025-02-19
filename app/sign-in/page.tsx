"use client";

import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase-client"; // Import Firebase config
import Head from "next/head";
import { useRouter } from "next/navigation";

const SignInPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      // Get the user's ID token
      const idToken = await userCredential.user.getIdToken();

      // ✅ Send ID token to API route to set the cookie
      const response = await fetch("/api/set-cookie", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken }),
      });

      if (!response.ok) {
        throw new Error("Failed to set cookie");
      }

      // // Fetch username from Firestore
      // const docSnap = await getDoc(doc(db, "users", user.uid));
      // if (docSnap.exists()) {
      //   // Store the username in local storage or use it directly in the UI
      //   localStorage.setItem("userId", user.uid);
      // }

      // Redirect to the homepage after successful sign-in
      router.push("/");
    } catch (error: unknown) {
      const err = error as Error;
      console.error("Error signing in:", err.message);
      setError(err.message);
    }
  };

  return (
    <>
      <Head>
        <title>Sign In</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-signUp bg-center text-white">
        <div className="bg-lightWhite bg-opacity-25 w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-md">
          <h1 className="text-6xl text-green font-inria font-bold mb-6 text-center">
            Sign In
          </h1>
          <form onSubmit={handleSignIn} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 bg-gray-700 text-green border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 bg-gray-700 text-green border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && (
              <div className="p-4 text-white bg-red-600">
                Not a existing user? Please sign up <a href="/sign-up">here</a>
              </div>
            )}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-green bg-opacity-75 hover:bg-opacity-100 text-yellow font-semibold rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
