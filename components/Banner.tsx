"use client";

import useIntersectionObserver from "@/lib/useIntersectionObserver";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

function Banner() {
  const activeSection = useIntersectionObserver([
    "banner",
    "about",
    "fruits",
    "contact",
  ]);
  const [showNavbar, setShowNavbar] = useState(false); // Initially false to hide navbar on intro
  const [lastScrollY, setLastScrollY] = useState(0); // To track last scroll position

  // Handle the visibility of navbar based on scroll position
  useEffect(() => {
    const introSection = document.getElementById("banner"); // Assuming 'intro' is the ID of your intro section
    const bannerSection = document.getElementById("about");

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Detect if we're scrolling up or down
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        if (introSection && window.scrollY >= introSection.offsetHeight) {
          setShowNavbar(true); // Show navbar when you scroll past the intro
        }
      } else {
        // Scrolling up
        if (currentScrollY <= (introSection?.offsetHeight ?? 0)) {
          setShowNavbar(false); // Hide navbar when in intro section
        }
      }

      // Always show navbar once you scroll past the banner section
      if (bannerSection && window.scrollY >= bannerSection.offsetTop) {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY); // Update the last scroll position
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]); // Add `lastScrollY` dependency to re-run the effect when scroll changes

  return (
    <>
      <Navbar activeSection={activeSection} showNavbar={showNavbar} />
      <div id="banner" className="bg-introWhite relative">
        <div className="bg-banner w-2/3 h-screen bg-cover bg-center shadow-md flex justify-center items-center">
          <div
            className="absolute right-20 bg-cover bg-start bg-no-repeat text-white px-4"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1596404815741-adf337d685f0?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            <p>STORY OF</p>
            <h1 className="font-inria text-8xl font-bold">Guardian of</h1>
            <h1 className="text-end font-inria text-8xl font-bold">
              the Fields
            </h1>
            <p className="flex justify-end pb-4">
              <a href="#about">Read more</a>
            </p>
            <hr className="flex float-right w-2/3" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
