"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ModalProps = {
  title: string;
  subtitle: string;
  descriptions: string[];
};

export default function GreenFlowModal({
  title,
  subtitle,
  descriptions,
}: ModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex items-center justify-center h-100 font-inria">
      {/* Clickable Div */}
      <div
        className="p-16 sm:p-20 bg-green rounded-full mx-auto text-xl text-center text-lightWhite cursor-pointer 
       transition-transform duration-[2000ms] ease-out bg-center bg-cover bg-green 
       hover:bg-[url(/images/guavas.avif)] hover:bg-no-repeat hover:brightness-110"
        onClick={() => setIsOpen(true)}
      >
        {title}
      </div>

      {/* Background Expansion Effect */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Expanding Color Flow Effect */}
            <motion.div
              className="fixed inset-0 bg-green"
              initial={{ scale: 0, opacity: 1, borderRadius: "50%" }}
              animate={{ scale: 10, opacity: 1, borderRadius: "0%" }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }} // Slower expansion
            />

            {/* Modal Content */}
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }} // Slightly slower fade-in
              onClick={() => setIsOpen(false)} // Close modal when clicking outside
            >
              <motion.div
                className="bg-lightWhite p-10 sm:p-20 md:p-28 rounded-lg shadow-lg text-center max-w-[500px] max-h-[600px] rounded-2xl relative z-20"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }} // Slower modal pop-in
              >
                <button
                  className="absolute top-2 right-2 text-gray-600 text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  ✖
                </button>
                <h2 className="text-2xl font-bold text-green">{subtitle}</h2>
                <ul className="text-start list-disc">
                  {descriptions.map((description, index) => (
                    <li key={index} className="text-gray-700 mt-4">
                      {description}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
