// src/components/Header.jsx
import React, { useState, useEffect } from "react";

const navLinks = [
  { id: "about", label: "About" },
  { id: "certificates", label: "Certificates" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 10);
  };

  const handleLinkClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black bg-opacity-80 backdrop-blur-md shadow-md" : "bg-black/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between text-white font-pixel">
        <h1 className="text-lg font-bold">4rdy.Dev</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm tracking-widest">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className="hover:text-amber-400 transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden z-50">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none flex flex-col justify-center items-center space-y-1"
          >
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 w-3/4 h-full bg-[#0f0f0f] border-l border-gray-700 text-white px-6 py-20 transform transition-transform duration-500 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-6 text-lg tracking-widest">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleLinkClick(link.id)}
                className="w-full text-left hover:text-amber-400 transition-colors"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
