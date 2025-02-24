"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // Import icons from lucide-react
import LogoutButton from "./LogoutButton";
import { useUser } from "@/lib/useUser";
import { useTranslations } from "next-intl";

interface NavbarProps {
  activeSection: string;
  showNavbar: boolean; // New prop to control navbar visibility
}

export default function Navbar({ activeSection, showNavbar }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser();
  const [isUserButtonOpen, setIsUserButtonOpen] = useState(false);

  const t = useTranslations("Navbar");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false); // Close mobile menu when switching to desktop
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!showNavbar) return null;

  return (
    <>
      {/* Sidebar for large screens */}
      <div className="w-full flex justify-end">
        <nav className="z-50 fixed top-0 items-center bg-green-800 text-introWhite p-6 hidden md:flex gap-6 font-bold">
          <a
            href="#about"
            className={`relative text-yellow-400 transition-colors duration-500 animated-underline ${
              activeSection === "about" ? "active" : ""
            }`}
          >
            {t("about")}
          </a>
          <a
            href="#fruits"
            className={`relative text-yellow-400 transition-colors duration-500 animated-underline ${
              activeSection === "fruits" ? "active" : ""
            }`}
          >
            {t("fruits")}
          </a>
          <a
            href="#contact"
            className={`relative text-yellow-400 transition-colors duration-500 animated-underline ${
              activeSection === "contact" ? "active" : ""
            }`}
          >
            {t("contact")}
          </a>
          {user && user.username != "Guest" ? (
            <div className="relative inline-block">
              <button
                className="bg-darkYellow p-2 text-green rounded transition hover:bg-darkYellow/90"
                onClick={() => setIsUserButtonOpen((prev) => !prev)}
              >
                {t("hello")}
                {user.username}
              </button>
              <div
                className={`absolute right-0 mt-2 w-24 bg-aboutDark rounded shadow-lg transition-all duration-300 transform ${
                  isUserButtonOpen
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                <LogoutButton />
              </div>
            </div>
          ) : (
            ""
          )}
        </nav>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-green-800 p-4 flex justify-between items-center z-50">
        <span className="text-white font-bold text-lg">Guava Farm</span>
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="z-50 fixed top-14 left-0 w-full bg-green-800 text-white flex flex-col gap-4 p-6 shadow-lg md:hidden">
          <a
            href="#about"
            className="hover:text-yellow-400"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#fruits"
            className="hover:text-yellow-400"
            onClick={() => setIsOpen(false)}
          >
            Fruits
          </a>
          <a
            href="#contact"
            className="hover:text-yellow-400"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </>
  );
}
