"use client";

import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/firebase-client"; // Import Firebase config
import Head from "next/head";
import { useRouter } from "next/navigation";
import Link from "next/link";

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
      setError(err.message);
    }
  };

  return (
    <>
      <Head>
        <title>Sign In</title>
      </Head>
      <div className="bg-signUp bg-center ">
        <div className="font-inria font-bold text-xl md:text-3xl p-2 text-green">
          <Link href={"/"}>Guava Farm</Link>
        </div>
        <div className="min-h-screen flex items-center justify-center p-5 text-white">
          <div className="bg-lightWhite bg-opacity-75 w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-md">
            <h1 className="text-4xl md:text-6xl text-green font-inria font-bold mb-6 text-center">
              Sign In
            </h1>
            <form onSubmit={handleSignIn} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
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
                  Not a existing user? Please sign up{" "}
                  <Link href="/sign-up">here</Link>
                </div>
              )}
              <button
                type="submit"
                className="w-full py-2 px-4 bg-green bg-opacity-75 hover:bg-opacity-100 text-yellow font-semibold rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              >
                Sign In
              </button>
              <p className="text-center text-green font-inria font-bold">
                Not an user yet? Sign up{" "}
                <Link href="/sign-up" className="underline underline-offset-4">
                  here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
