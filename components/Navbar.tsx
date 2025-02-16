import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // Import icons from lucide-react

interface NavbarProps {
  activeSection: string;
  showNavbar: boolean; // New prop to control navbar visibility
}

export default function Navbar({ activeSection, showNavbar }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
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
      <nav className="z-50 fixed top-0 right-0 h-screen w-60 bg-green-800 text-introWhite p-6 hidden md:flex gap-6 font-bold">
        <a
          href="#about"
          className={`relative text-yellow-400 transition-colors duration-500 animated-underline ${
            activeSection === "about" ? "active" : ""
          }`}
        >
          About
        </a>
        <a
          href="#gallery"
          className={`relative text-yellow-400 transition-colors duration-500 animated-underline ${
            activeSection === "fruits" ? "active" : ""
          }`}
        >
          Fruits
        </a>
        <a
          href="#review"
          className={`relative text-yellow-400 transition-colors duration-500 animated-underline ${
            activeSection === "contact" ? "active" : ""
          }`}
        >
          Contact
        </a>
      </nav>

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
            href="#gallery"
            className="hover:text-yellow-400"
            onClick={() => setIsOpen(false)}
          >
            Fruits
          </a>
          <a
            href="#review"
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
