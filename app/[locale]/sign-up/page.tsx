"use client";

import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, db } from "../../../firebase/firebase-client";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { setUserRole } from "@/lib/setUserRole";
import Image from "next/image";
import { Link } from "@/i18n/routing";

const SignUpPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

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

      // ✅ Store userId immediately in localStorage before Firestore operations
      localStorage.setItem("userId", user.uid);

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

      // Retrieve user role from Firestore
      const docSnap = await getDoc(doc(db, "users", user.uid));
      if (docSnap.exists()) {
        const email = docSnap.data().email;

        // ✅ Assign role properly
        const role =
          email === process.env.NEXT_PUBLIC_ADMIN_EMAIL ? "admin" : "user";
        await setUserRole(user.uid, role);
      }

      // Redirect to email verification page
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
      <div className="relative min-h-screen flex items-center justify-center bg-signUp bg-center bg-cover text-white">
        <div className="bg-black w-full h-screen flex items-center justify-around bg-opacity-50">
          {/* Moving Images */}
          <div
            className="relative w-[500px] h-[380px] border-2 flex justify-center items-center overflow-hidden transition-all duration-500"
            style={{
              clipPath: "polygon(0% 5%, 100% 0%, 100% 90%, 40% 100%, 0% 100%)",
            }}
          >
            <div className="relative w-[300px] h-[150px] flex justify-center items-center">
              <Image
                src="/images/guava-3.jpg"
                alt="Piece 1"
                width={300}
                height={300}
                className={`absolute w-[250px] h-[250px] left-0 clip-part-1 -rotate-[10deg] transition-all duration-500 ${
                  isTyping ? "translate-x-7" : ""
                }`}
              />
              <Image
                src="/images/guava-3.jpg"
                alt="Piece 3"
                width={300}
                height={300}
                className={`absolute w-[250px] h-[250px] right-0 clip-part-2 -rotate-[10deg] transition-all duration-500 ${
                  isTyping ? "-translate-x-6" : ""
                }`}
              />
            </div>
          </div>

          <div className="w-full max-w-md p-6 bg-gray-900 rounded-lg shadow-xl">
            <h1 className="text-6xl text-yellow font-inria font-bold mb-6 text-center">
              Sign Up
            </h1>
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
                  className="w-full px-3 py-2 bg-gray-700 text-green font-inria border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    setIsTyping(e.target.value.length > 0);
                  }}
                  required
                />
              </div>
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
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setIsTyping(e.target.value.length > 0);
                  }}
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
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setIsTyping(e.target.value.length > 0);
                  }}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-green bg-opacity-75 hover:bg-opacity-100 text-yellow font-semibold rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              >
                Sign Up
              </button>
              <p className="text-center font-inria font-bold">
                Already an existing user? Sign in{" "}
                <Link href="/sign-in" className="underline underline-offset-4">
                  here
                </Link>
              </p>
              {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
              {successMessage && (
                <p className="mt-2 text-sm text-green-500">{successMessage}</p>
              )}
            </form>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
