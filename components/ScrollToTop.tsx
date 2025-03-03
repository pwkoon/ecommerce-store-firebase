"use client";

import { useState, useEffect } from "react";
import { FaCircleChevronUp } from "react-icons/fa6";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-24 right-3 md:right-30">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`p-2 text-3xl z-50 ${isVisible ? "fade-in" : "fade-out"}`}
        >
          <FaCircleChevronUp />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
