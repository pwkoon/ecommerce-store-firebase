"use client";

import React from "react";
import { motion } from "framer-motion";
import ReviewForm from "./ReviewForm";
import { useUser } from "@/lib/useUser";

function DirectReview() {
  const { user } = useUser();

  return (
    <>
      {/* <motion.div
        className="flex justify-around h-auto items-center"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.0, ease: "easeOut" }}
        viewport={{ once: true }}
      > */}
      <div className="h-[500px] w-full bg-review bg-center bg-cover"></div>
      {/* </motion.div> */}
      <div className="relative h-[500px] w-full bg-review bg-center flex items-center justify-center">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative z-10 text-center text-introWhite px-6"
        >
          {/* Sign Up / Sign In Button */}
          {!user ? (
            <>
              <h1 className="text-4xl font-inria font-bold drop-shadow-lg">
                Wish to leave a review on{" "}
                <span className="text-yellow">GUAVA FARM</span>?
              </h1>
              <p className="text-lg mt-3 opacity-80">
                Join our community and share your experience!
              </p>
              <button className="mt-6 bg-yellow text-black font-bold py-3 px-6 rounded-xl shadow-lg hover:bg-opacity-90 transition-all duration-300">
                <a href="/sign-up">Sign Up </a>/ <a href="/sign-in">Sign In</a>
              </button>
            </>
          ) : (
            <ReviewForm username={user.username} />
          )}
        </motion.div>
      </div>
    </>
  );
}

export default DirectReview;
