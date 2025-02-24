"use client";

import React, { useState, useEffect } from "react";
import { onAuthStateChanged, reload, User } from "firebase/auth";
import { auth } from "../../firebase/firebase-client";
import { useRouter } from "next/navigation";

const VerifyEmailPage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isVerified, setIsVerified] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setIsVerified(currentUser.emailVerified);
      } else {
        router.push("/sign-in");
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleCheckVerification = async () => {
    if (user) {
      await reload(user);
      setIsVerified(user.emailVerified);
      if (user.emailVerified) {
        router.push("/");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Verify Your Email</h1>
        <p className="mb-6">
          Please check your email inbox and click the verification link to
          confirm your account.
        </p>
        {!isVerified && (
          <button
            onClick={handleCheckVerification}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md"
          >
            Check Verification Status
          </button>
        )}
        {isVerified && (
          <p className="text-green-500 mt-4">Your email has been verified!</p>
        )}
      </div>
    </div>
  );
};

export default VerifyEmailPage;
