"use strict";
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, ShieldAlert, Cpu, Building2 } from "lucide-react";
import PageTransition from "@/components/PageTransition";

interface Industry {
  id: string;
  name: string;
  image: string;
  tagline: string;
  description: string;
  challenges: string;
  benefits: string[];
  specs: string;
}

const industriesList: Industry[] = [
  {
    id: "hospitals",
    name: "Hospitals & Healthcare",
    image: "/images/industry_hospital.png",
    tagline: "Life-supporting backup systems where failure is not an option.",
    description: "In critical healthcare units, surgical theaters, and ICUs, even a microsecond voltage drop can put lives at risk. We install high-speed AMF automatic start systems and custom generator sets designed to trigger in under 8 seconds.",
    challenges: "Zero tolerance for electricity disruption; strict requirements for low noise and vibration control.",
    benefits: [
      "Ultra-fast automated startup (under 8 seconds)",
      "Soundproofing acoustic wraps matching silent CPCB standards",
      "Regular testing reports for hospital boards",
    ],
    specs: "AMF panel synchronization, 125 kVA to 500 kVA configurations, redundant engine backups.",
  },
  {
    id: "factories",
    name: "Factories & Manufacturing",
    image: "/images/industry_factory.png",
    tagline: "Preventing expensive line stalls and raw material waste.",
    description: "Industrial plants run on strict schedules. Sudden voltage cuts cause expensive assembly line halts and damage automated machinery. Our robust heavy-duty generators support high inductive motor starting currents.",
    challenges: "Heavy starting current draws from machinery motors; dust and heat endurance requirements.",
    benefits: [
      "High surge capacity alternators to support inductive loads",
      "Rugged cooling systems engineered for hot production backyards",
      "Comprehensive AMC checklists ensure high engine runtime",
    ],
    specs: "320 kVA to 1010 kVA generator units, customized external fuel supply lines.",
  },
  {
    id: "commercial",
    name: "Commercial & Office Spaces",
    image: "/images/industry_commercial.png",
    tagline: "Keeping corporate offices, servers, and elevators active.",
    description: "High-rise business centers and IT parks depend heavily on computer server cooling and lighting. We install space-efficient silent diesel generators, rooftop placements, and sync multiple units for load-sharing capabilities.",
    challenges: "Limited floor space; rooftop crane logistics; clean aesthetic compliance.",
    benefits: [
      "Load-sharing synchronization grids optimize fuel burn",
      "Sound-reducing silencer enclosures prevent office disturbance",
      "Professional crane coordination for safe rooftop installation",
    ],
    specs: "250 kVA to 750 kVA synchronized multi-sets, remote control panel monitoring.",
  },
  {
    id: "residential",
    name: "Residential Townships",
    image: "/images/hero_generator.png",
    tagline: "Powering community elevators, water pumps, and households.",
    description: "Modern gated societies require cost-efficient generator sets to backup water pumps, lighting, and elevator elevators. Asmitha Power Tech offers tailored AMCs to residential welfare associations.",
    challenges: "High sensitivity to sound/smoke emission; budget limitations on community service fees.",
    benefits: [
      "Cost-effective non-comprehensive AMCs tailored for housing societies",
      "Low sound acoustic shells ensure peaceful residential nights",
      "Safety earthing lines prevent voltage surges in household wiring",
    ],
    specs: "40 kVA to 160 kVA automatic generators, standard CPCB-II emission compliance.",
  },
  {
    id: "hotels",
    name: "Hotels & Hospitality",
    image: "/images/industry_commercial.png",
    tagline: "Providing continuous luxury comfort for guests.",
    description: "Guest comfort relies on steady air-conditioning, kitchen cold storage, and bright lighting. A failure impacts reputation immediately. We install premium backup systems to keep guests happy.",
    challenges: "Strict aesthetic layouts; zero noise allowance near guest wings.",
    benefits: [
      "Advanced soundproofing prevents noise leaks into lobby/rooms",
      "Immediate cooling compressor backup support",
      "Preventative checkups schedule avoids holiday downtime",
    ],
    specs: "100 kVA to 320 kVA silent generator configurations.",
  },
  {
    id: "construction",
    name: "Construction Sites",
    image: "/images/service_installation.png",
    tagline: "Mobile power for cranes, welding, and field offices.",
    description: "Heavy construction occurs where grid access is sparse. We supply rugged mobile trailer-mounted generators designed to endure heavy weather conditions and debris.",
    challenges: "Rough site terrains; constant generator movement; harsh weather conditions.",
    benefits: [
      "Trailer-mounted generators for rapid site repositioning",
      "Heavy-duty air filtration prevents dust choke",
      "Flexible monthly rental sales or purchasing options",
    ],
    specs: "30 kVA to 200 kVA rugged portable configurations.",
  },
];

export default function Industries() {
  const [selectedIndustry, setSelectedIndustry] = useState<Industry | null>(null);

  return (
    <PageTransition>
      {/* 1. Hero */}
      <section className="relative py-24 bg-light-gray/20 border-b border-dark/5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 text-center space-y-4">
          <span className="text-xs uppercase font-extrabold tracking-widest text-primary font-heading">
            Sectors We Power
          </span>
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-dark">
            Industries We Serve
          </h1>
          <p className="text-sm md:text-base text-medium-gray max-w-xl mx-auto">
            From emergency hospitals to high-load automated factories, we deploy tailored, reliable backup grids.
          </p>
        </div>
      </section>

      {/* 2. Grid Cards */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industriesList.map((ind, idx) => (
              <motion.div
                key={ind.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => setSelectedIndustry(ind)}
                className="group cursor-pointer relative h-[380px] rounded-2xl overflow-hidden border border-dark/5 flex flex-col justify-end p-8 glassmorphism hover:border-primary/30 transition-all duration-300 shadow-xl"
              >
                {/* Image backdrop */}
                <Image
                  src={ind.image}
                  alt={ind.name}
                  fill
                  className="object-cover opacity-25 group-hover:scale-103 group-hover:opacity-35 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/75 to-transparent pointer-events-none" />

                <div className="relative z-10 space-y-3">
                  <div className="w-9 h-9 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center text-primary group-hover:scale-105 transition-transform duration-300">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-dark group-hover:text-primary transition-colors">
                    {ind.name}
                  </h3>
                  <p className="text-xs md:text-sm text-medium-gray/80 line-clamp-2">
                    {ind.tagline}
                  </p>
                  <span className="inline-block text-xs font-semibold text-primary pt-2">
                    Click to View Tech Specs & Benefits &rarr;
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Detail Popup Modal */}
      <AnimatePresence>
        {selectedIndustry && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-pure-black/80 z-50 flex items-center justify-center p-6 backdrop-blur-md"
          >
            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-white border border-dark/10 rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedIndustry(null)}
                className="absolute right-4 top-4 z-10 p-2 bg-light-gray hover:bg-primary text-dark hover:text-white rounded-full transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12">
                {/* Left image column */}
                <div className="md:col-span-5 relative h-[220px] md:h-auto min-h-[220px]">
                  <Image
                    src={selectedIndustry.image}
                    alt={selectedIndustry.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-white/50" />
                </div>

                {/* Right text detail column */}
                <div className="md:col-span-7 p-8 space-y-6">
                  <div>
                    <h3 className="font-heading font-extrabold text-2xl text-dark">
                      {selectedIndustry.name}
                    </h3>
                    <p className="text-xs text-primary font-bold tracking-wide uppercase mt-1">
                      {selectedIndustry.tagline}
                    </p>
                  </div>

                  <p className="text-xs md:text-sm text-medium-gray leading-relaxed">
                    {selectedIndustry.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-heading font-bold text-dark text-xs uppercase tracking-wider text-primary">
                      Why Choose Asmitha Power Tech?
                    </h4>
                    <ul className="space-y-1.5 text-xs md:text-sm text-medium-gray">
                      {selectedIndustry.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-dark/5 text-xs text-medium-gray">
                    <span className="font-semibold text-dark">Typical Specs: </span>
                    {selectedIndustry.specs}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
