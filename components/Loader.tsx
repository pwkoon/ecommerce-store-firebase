"use client";

import { useEffect, useState } from "react";

function Loader() {
  const [isVisible, setIsVisible] = useState(true);

  const [isFading, setIsFading] = useState(false);
  useEffect(() => {
    // Start fading out after 2 seconds
    const timer = setTimeout(() => {
      setIsFading(true);
      // Hide the loader completely after fade-out
      setTimeout(() => setIsVisible(false), 500); // Matches Tailwind duration-500
    }, 3000); // Show loader for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed w-100 inset-0 bg-aboutDark bg-opacity-95 z-50 flex items-center justify-center transition-opacity duration-700 ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="absolute right-20 text-gray-200 opacity-0 animate-fade-in p-6">
        {/* <span className="bg-yellow-500 px-10"></span> */}
        <div></div>
        <h1 className="font-inria text-8xl font-bold">Guardian of</h1>
        <h1 className="text-end font-inria text-8xl font-bold">the Fields</h1>
        {/* <div className="flex-end bg-yellow-500 px-5 py-2 w-1/2"></div> */}
        <div></div>

        {/* <hr className="flex float-right w-2/3" /> */}
      </div>
    </div>
  );
}

export default Loader;
