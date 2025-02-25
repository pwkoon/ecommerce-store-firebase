"use client";

import React from "react";
import { motion } from "framer-motion";
import ReviewForm from "./ReviewForm";
import { useUser } from "@/lib/useUser";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

function DirectReview() {
  const { user } = useUser();
  const t = useTranslations("DirectReview");

  return (
    <>
      {/* Background Image Section */}
      {/* <div className="h-[300px] md:h-[500px] w-full bg-review bg-center bg-cover"></div> */}

      {/* Overlay & Content Section */}
      <div className="relative h-100 p-20 lg:h-screen w-full bg-review bg-center flex items-center justify-center px-4 md:px-10">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative z-10 text-center text-introWhite px-4 md:px-6"
        >
          {/* Sign Up / Sign In Button */}
          {user && user.username === "Guest" ? (
            <>
              <h1 className="text-xl md:text-4xl font-inria font-bold drop-shadow-lg">
                {t("info-1")} <span className="text-yellow">{t("info-2")}</span>
              </h1>
              <p className="text-sm md:text-lg mt-3 opacity-80">
                {t("info-3")}
              </p>
              <button className="mt-6 bg-yellow text-black font-bold py-2 px-4 md:py-3 md:px-6 rounded-xl shadow-lg hover:bg-opacity-90 transition-all duration-300">
                <Link href="/sign-up">{t("sign-up")}</Link> /{" "}
                <Link href="/sign-in">{t("sign-in")}</Link>
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
