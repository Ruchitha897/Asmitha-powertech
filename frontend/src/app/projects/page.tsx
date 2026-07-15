"use strict";
"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, Eye, MoveLeft, MoveRight } from "lucide-react";
import PageTransition from "@/components/PageTransition";

interface GalleryItem {
  id: number;
  title: string;
  category: "commercial" | "industrial" | "hospitals" | "hotels" | "construction";
  image: string;
  location: string;
  date: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "125 kVA Silent DG Installation",
    category: "hospitals",
    image: "/images/industry_hospital.png",
    location: "Saroornagar Multispecialty Hospital",
    date: "March 2026",
  },
  {
    id: 2,
    title: "500 kVA Synchronized Plant Setup",
    category: "industrial",
    image: "/images/industry_factory.png",
    location: "Kothur Industrial Estate",
    date: "January 2026",
  },
  {
    id: 3,
    title: "Rooftop Generator Crane Lifting",
    category: "commercial",
    image: "/images/service_installation.png",
    location: "IT Tech Park, Madhapur",
    date: "December 2025",
  },
  {
    id: 4,
    title: "Routine AMC B-Check Overhaul",
    category: "industrial",
    image: "/images/service_amc.png",
    location: "Gaganpahad Metal Factory",
    date: "November 2025",
  },
  {
    id: 5,
    title: "Hotel Silent Canopy Assembly",
    category: "hotels",
    image: "/images/industry_commercial.png",
    location: "Grand Regency Hotel",
    date: "October 2025",
  },
  {
    id: 6,
    title: "250 kVA Commissioning Site Check",
    category: "construction",
    image: "/images/service_repair.png",
    location: "Residential Complex Site",
    date: "September 2025",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState<string>("all");
  const [lightboxImage, setLightboxImage] = useState<GalleryItem | null>(null);

  // Before/After Slider state
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const isDragging = useRef<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging.current) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleMouseUp);
    };
  }, []);

  const filteredItems =
    filter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  return (
    <PageTransition>
      {/* 1. Hero */}
      <section className="relative py-24 bg-light-gray/20 border-b border-dark/5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 text-center space-y-4">
          <span className="text-xs uppercase font-extrabold tracking-widest text-primary font-heading">
            Our Work
          </span>
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-dark">
            Projects & Installation Gallery
          </h1>
          <p className="text-sm md:text-base text-medium-gray max-w-xl mx-auto">
            Explore photos of our generator installations, site preparation checklists, and technician maintenance checks.
          </p>
        </div>
      </section>

      {/* 2. Before/After Interactive Comparison */}
      <section className="py-24 max-w-5xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-primary font-heading">
            Site Progression
          </span>
          <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-dark">
            Before & After Installation
          </h2>
          <div className="h-1 w-12 bg-primary mx-auto" />
          <p className="text-xs md:text-sm text-medium-gray max-w-md mx-auto">
            Drag the handle to view the concrete pad foundation before deployment and the fully completed silent generator setup.
          </p>
        </div>

        {/* Comparison Slider Container */}
        <div
          ref={containerRef}
          className="slider-container h-[350px] md:h-[500px] rounded-2xl border border-dark/10 overflow-hidden relative cursor-ew-resize select-none"
          onMouseDown={(e) => {
            isDragging.current = true;
            handleMove(e.clientX);
          }}
          onTouchStart={(e) => {
            isDragging.current = true;
            handleMove(e.touches[0].clientX);
          }}
        >
          {/* Before Image (Back layer) */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/images/project_before.png"
              alt="Site Before Generator Installation"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute top-4 left-4 bg-white/80 px-3 py-1.5 rounded-md text-xs font-bold text-dark tracking-widest uppercase shadow-sm">
              Before Setup
            </div>
          </div>

          {/* After Image (Front sliding layer) */}
          <div
            className="absolute inset-0 w-full h-full border-r-2 border-primary"
            style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
          >
            <Image
              src="/images/project_after.png"
              alt="Site After Generator Installation"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute top-4 right-4 bg-primary px-3 py-1.5 rounded-md text-xs font-bold text-white tracking-widest uppercase">
              After Commission
            </div>
          </div>

          {/* Sliding Divider Bar & Drag Indicator */}
          <div
            className="absolute top-0 bottom-0 w-1.5 bg-primary cursor-ew-resize flex items-center justify-center"
            style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
          >
            <div className="w-10 h-10 bg-primary border-4 border-dark-gray rounded-full flex items-center justify-center shadow-lg pointer-events-none">
              <span className="text-white text-[10px] font-bold flex space-x-0.5">
                <MoveLeft className="w-3.5 h-3.5" />
                <MoveRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Masonry Filterable Gallery */}
      <section className="py-24 border-t border-dark/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <span className="text-xs uppercase font-extrabold tracking-widest text-primary font-heading">
              Case Folders
            </span>
            <h2 className="font-heading font-extrabold text-2xl md:text-4xl text-dark">
              Installation Catalog
            </h2>
            <div className="h-1 w-12 bg-primary mx-auto" />
          </div>

          {/* Filters Row */}
          <div className="flex flex-wrap gap-2.5 justify-center mb-12">
            {["all", "hospitals", "industrial", "commercial", "hotels", "construction"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 rounded-lg border text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                  filter === cat
                    ? "bg-primary border-primary text-white"
                    : "bg-white border-dark/10 text-medium-gray hover:text-dark"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid Layout */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative h-[320px] rounded-2xl overflow-hidden border border-dark/5 flex flex-col justify-end p-6 cursor-pointer"
                  onClick={() => setLightboxImage(item)}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover opacity-30 group-hover:scale-103 group-hover:opacity-45 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent" />
                  
                  {/* Zoom indicator on hover */}
                  <div className="absolute top-4 right-4 w-9 h-9 bg-white/80 rounded-full flex items-center justify-center text-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
                    <ZoomIn className="w-4 h-4" />
                  </div>

                  <div className="relative z-10 space-y-1">
                    <span className="text-[10px] text-primary font-bold uppercase tracking-widest font-heading">
                      {item.category}
                    </span>
                    <h3 className="font-heading font-bold text-dark text-lg leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs text-medium-gray/80 mt-1">
                      📍 {item.location}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* 4. Lightbox Overlay */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-pure-black/90 z-50 flex items-center justify-center p-6"
            onClick={() => setLightboxImage(null)}
          >
            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-4xl w-full max-h-[80vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute right-[-15px] top-[-45px] text-white hover:text-primary transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-8 h-8" />
              </button>

              <div className="relative w-full h-[60vh] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src={lightboxImage.image}
                  alt={lightboxImage.title}
                  fill
                  className="object-contain bg-pure-black"
                />
              </div>

              <div className="text-center mt-6 space-y-1 text-white">
                <h3 className="font-heading font-bold text-lg">{lightboxImage.title}</h3>
                <p className="text-xs text-medium-gray">
                  📍 {lightboxImage.location} | {lightboxImage.date}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
