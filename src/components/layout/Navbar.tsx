"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Qualifications", href: "/qualifications" },
  { label: "Impact", href: "/impact" },
  { label: "Foryoh4APCYOUTH", href: "/foryoh4apcyouth" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    window.location.href = href;
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 bg-white/95 border-b border-[#d6d0c4] shadow-[0_2px_12px_0_rgba(30,30,44,0.06)] transition-all duration-300`}
      >
        <div className="w-full h-1 bg-gradient-to-r from-[#7c2235] via-[#2d3142] to-[#bfa76a]" />
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="font-display text-3xl font-bold tracking-tight flex items-center gap-2 select-none text-[#2d3142]">
            <span>Sheku</span>
            <span className="text-[#7c2235] text-4xl pb-1">·</span>
            <span>Foryoh</span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="text-lg font-semibold text-[#2d3142] hover:text-[#7c2235] focus:text-[#bfa76a] transition-colors px-3 py-1 rounded-md focus:outline-none tracking-wide"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            className="md:hidden text-[#2d3142] p-2 rounded-full hover:bg-[#f7fafc] focus:bg-[#ede9e3] transition"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-white/98 flex flex-col items-center justify-center border-t border-[#d6d0c4]"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.2 }}
          >
            <button
              className="absolute top-5 right-6 text-[#2d3142] p-2 rounded-full hover:bg-[#f7fafc] focus:bg-[#ede9e3] transition"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <nav className="flex flex-col items-center gap-10 mt-8">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="font-display text-3xl text-[#2d3142] hover:text-[#7c2235] focus:text-[#bfa76a] transition-colors px-2 py-1 rounded-md focus:outline-none"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
