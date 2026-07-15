"use strict";
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Phone, Cpu } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true); // scrolling down
    } else {
      setHidden(false); // scrolling up
    }

    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  // Close mobile menu on navigate
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "glassmorphism py-4 shadow-xl" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo Left */}
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-xl tracking-tight text-dark group-hover:text-primary transition-colors duration-300">
              ASMITHA
            </span>
            <span className="text-[10px] uppercase font-semibold text-medium-gray tracking-[0.2em] -mt-1">
              Power Tech
            </span>
          </div>
        </Link>

        {/* Desktop Menu Right */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-sm font-medium tracking-wide uppercase transition-colors duration-300"
              >
                <span className={isActive ? "text-primary font-semibold" : "text-medium-gray hover:text-dark"}>
                  {item.name}
                </span>
                {isActive && (
                  <motion.span
                    layoutId="activeNavBorder"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button Right */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/contact"
            className="px-6 py-2.5 bg-primary hover:bg-primary-dark text-white text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-dark hover:text-primary transition-colors focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 top-[70px] bg-white z-40 flex flex-col px-8 py-10 md:hidden"
          >
            <nav className="flex flex-col space-y-6 text-xl font-heading font-medium tracking-wide uppercase">
              {navItems.map((item, idx) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block py-2 transition-colors ${
                        isActive ? "text-primary font-bold" : "text-medium-gray hover:text-dark"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-12 pt-8 border-t border-dark/5 flex flex-col space-y-4"
            >
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 bg-primary text-center text-white text-sm font-semibold uppercase tracking-wider rounded-lg shadow-lg"
              >
                Get Quote
              </Link>
              <a
                href="tel:9010201749"
                className="flex items-center justify-center space-x-2 text-medium-gray hover:text-primary transition-colors py-3"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold">+91 9010201749</span>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
