"use client";

import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebase/firebase-client";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { setUserRole } from "@/lib/setUserRole";

const SignUpPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    try {
      // Create the user account
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Save user data to Firestore
      await setDoc(doc(db, "users", user.uid), {
        username,
        email,
        createdAt: serverTimestamp(),
      });

      // Send email verification
      await sendEmailVerification(user);
      setSuccessMessage(
        "Account created successfully. A verification email has been sent to your email address."
      );

      const docSnap = await getDoc(doc(db, "users", user.uid));
      if (docSnap.exists()) {
        const email = docSnap.data().email;

        // Store the username in local storage or use it directly in the UI
        if (email === process.env.NEXT_PUBLIC_ADMIN_EMAIL) {
          setUserRole(user.uid, "admin");
        } else {
          setUserRole(user.uid, "user");
        }

        // Store the username in local storage or use it directly in the UI
        localStorage.setItem("userId", user.uid);
      }

      // Optionally redirect to a "check your email" page
      router.push("/verify-email");
    } catch (error: unknown) {
      if (typeof error === "object" && error !== null && "code" in error) {
        const firebaseError = error as { code: string; message: string };

        if (firebaseError.code === "auth/email-already-in-use") {
          setError("The email is already in use. Please try another one.");
        } else {
          setError(
            firebaseError.message || "An error occurred. Please try again."
          );
        }
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <>
      <Head>
        <title>Sign Up</title>
      </Head>
      <div className="relative min-h-screen flex items-center justify-center bg-gray text-white">
        <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
          <form onSubmit={handleSignUp} className="space-y-4">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium mb-1"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
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
                className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            >
              Sign Up
            </button>
            {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
            {successMessage && (
              <p className="mt-2 text-sm text-green-500">{successMessage}</p>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
