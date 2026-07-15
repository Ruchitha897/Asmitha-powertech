"use strict";
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Cpu, Phone, Mail, MapPin, Send } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-dark border-t border-dark/5 pt-20 pb-8 text-medium-gray/80 font-sans relative overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {/* Company Info */}
        <div className="space-y-6">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-9 h-9 bg-primary flex items-center justify-center rounded-lg shadow-lg">
              <Cpu className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-lg tracking-tight text-white">
                ASMITHA
              </span>
              <span className="text-[9px] uppercase font-semibold text-medium-gray tracking-[0.2em] -mt-1">
                Power Tech
              </span>
            </div>
          </Link>
          <p className="text-sm leading-relaxed text-medium-gray/80">
            Authorized Sales, AMC, Installation, & Service Partner for Kirloskar Diesel Generator sets. Ensuring your operations never stop since 2011.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-9 h-9 bg-dark-gray text-light-gray hover:bg-primary hover:text-white flex items-center justify-center rounded-lg transition-colors duration-300" aria-label="Facebook">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
            <a href="#" className="w-9 h-9 bg-dark-gray text-light-gray hover:bg-primary hover:text-white flex items-center justify-center rounded-lg transition-colors duration-300" aria-label="X">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="w-9 h-9 bg-dark-gray text-light-gray hover:bg-primary hover:text-white flex items-center justify-center rounded-lg transition-colors duration-300" aria-label="LinkedIn">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" className="w-9 h-9 bg-dark-gray text-light-gray hover:bg-primary hover:text-white flex items-center justify-center rounded-lg transition-colors duration-300" aria-label="Instagram">
              <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h4 className="font-heading text-white font-semibold text-sm uppercase tracking-wider relative after:absolute after:bottom-[-6px] after:left-0 after:w-8 after:h-[2px] after:bg-primary">
            Quick Links
          </h4>
          <ul className="space-y-3.5 text-sm">
            <li>
              <Link href="/" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">About Us</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Our Services</Link>
            </li>
            <li>
              <Link href="/industries" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Industries Served</Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Project Gallery</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Office Contact Info */}
        <div className="space-y-6">
          <h4 className="font-heading text-white font-semibold text-sm uppercase tracking-wider relative after:absolute after:bottom-[-6px] after:left-0 after:w-8 after:h-[2px] after:bg-primary">
            Get In Touch
          </h4>
          <ul className="space-y-4 text-sm text-medium-gray/95">
            <li className="flex items-start space-x-3.5">
              <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span>
                H.No. 9-10-3/33SP, Surya Township, Roshanodwala, Saroornagar, Telangana - 500035
              </span>
            </li>
            <li className="flex items-center space-x-3.5">
              <Phone className="w-5 h-5 text-primary shrink-0" />
              <a href="tel:9010201749" className="hover:text-white transition-colors">+91 9010201749</a>
            </li>
            <li className="flex items-center space-x-3.5">
              <Mail className="w-5 h-5 text-primary shrink-0" />
              <a href="mailto:asmithapowertech@gmail.com" className="hover:text-white transition-colors">asmithapowertech@gmail.com</a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-6">
          <h4 className="font-heading text-white font-semibold text-sm uppercase tracking-wider relative after:absolute after:bottom-[-6px] after:left-0 after:w-8 after:h-[2px] after:bg-primary">
            Newsletter
          </h4>
          <p className="text-sm leading-relaxed text-medium-gray/80">
            Subscribe to our newsletter for insights on power backup, maintenance tips, and special offers.
          </p>
          <form onSubmit={handleSubscribe} className="relative flex items-center">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-pure-black border border-white/5 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-all duration-300 pr-12"
            />
            <button
              type="submit"
              className="absolute right-1 top-1 bottom-1 px-3 bg-primary hover:bg-primary-dark text-white rounded-md transition-colors"
              aria-label="Subscribe"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
          {subscribed && (
            <span className="text-xs text-green-500 font-semibold block transition-all">
              Successfully subscribed to newsletters!
            </span>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs space-y-4 md:space-y-0">
        <div>
          © {new Date().getFullYear()} Asmitha Power Tech. All Rights Reserved.
        </div>
        <div className="flex space-x-6">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
