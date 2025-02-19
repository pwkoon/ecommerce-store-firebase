"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

function DirectGallery() {
  return (
    <>
      <div className="grid grid-cols-2">
        <motion.div
          className="flex justify-around h-auto items-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="relative h-[500px] w-full bg-gallery bg-center flex items-center justify-center">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Content */}
            <div className="relative z-10 text-center text-introWhite px-6">
              <h1 className="text-5xl font-inria font-bold drop-shadow-lg">
                <Link href={"/gallery"}>GALLERY</Link>
              </h1>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="h-[500px] w-full bg-gallery bg-center bg-cover"
        ></motion.div>
      </div>
    </>
  );
}

export default DirectGallery;
