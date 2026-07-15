"use strict";
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  Shield,
  Settings,
  Hammer,
  Layers,
  CheckCircle,
  HelpCircle,
  Plus,
  Minus,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import PageTransition from "@/components/PageTransition";

const services = [
  {
    id: "sales",
    title: "Generator Sales & Sizing",
    image: "/images/hero_generator.png",
    icon: Zap,
    description: "Supply of authorized Kirloskar Diesel Generator Sets ranging from 5 kVA to 1010 kVA. We assist in calculating your total kVA requirements, ensuring optimal generator sizing for commercial, residential, and industrial sites.",
    features: [
      "Assistance in calculating electrical load parameters",
      "Kirloskar Green silent generator setups",
      "Soundproof and weather-proof acoustic enclosures",
      "Authorized factory warranties",
    ],
    benefits: [
      "Avoid cost overflows due to oversized generators",
      "Compliance with Central Pollution Control Board (CPCB) standards",
      "Highest fuel economy in class",
    ],
  },
  {
    id: "amc",
    title: "Annual Maintenance Contracts (AMC)",
    image: "/images/service_amc.png",
    icon: Shield,
    description: "Protect your investments and avoid downtime with custom Annual Maintenance Contracts. We offer comprehensive coverage (including parts, filters, and lubricants) and non-comprehensive contracts focusing on critical engine checkups.",
    features: [
      "Comprehensive & Non-Comprehensive AMC types",
      "Regular monthly inspections & battery diagnostics",
      "Priority 24x7 emergency callout support",
      "Genuine Kirloskar filters & oil replacements",
    ],
    benefits: [
      "Ensure instantaneous automatic backup activation",
      "Maximize lifespan of diesel engines & alternators",
      "Predictable maintenance budgets without surprise breakdown costs",
    ],
  },
  {
    id: "services",
    title: "Generator Repairs & Overhauling",
    image: "/images/service_repair.png",
    icon: Settings,
    description: "Prompt on-site diesel engine diagnostics, electrical repairs, and component overhauls. Our technicians diagnose alternator faults, sensor errors, and mechanical issues using advanced diagnostic tools.",
    features: [
      "Engine cylinder head rebuilding & piston changes",
      "Alternator rewinding & excitation tests",
      "Governor adjustments & control panel upgrades",
      "A-check, B-check, C-check, and D-check routine scheduling",
    ],
    benefits: [
      "Minimize facility downtime during critical failures",
      "Restore generator efficiency to original levels",
      "Certified repairs compliant with safety standards",
    ],
  },
  {
    id: "installation",
    title: "Acoustic & Site Installation",
    image: "/images/service_installation.png",
    icon: Hammer,
    description: "Full-scale mechanical site alignment and electrical cabling coordination. We execute concrete pad positioning, heavy crane coordination, custom exhaust piping, and earthing design setups.",
    features: [
      "Civil concrete foundation guidance",
      "Crane logistics coordination for rooftop positioning",
      "Acoustic exhaust piping & thermal wraps",
      "AMF panel cabling & automatic transfer integrations",
    ],
    benefits: [
      "Vibration isolation controls protect nearby structures",
      "Low sound emission compliant with regional noise limits",
      "Safety-certified earthing systems prevent voltage surges",
    ],
  },
  {
    id: "spares",
    title: "Genuine Spare Parts & Spares Sourcing",
    image: "/images/service_repair.png",
    icon: Layers,
    description: "Sourcing and supply of authentic Kirloskar Green components, high-grade filters, coolants, heavy-duty batteries, and synthetic lubricants. Ensure peak performance with authorized factory components.",
    features: [
      "KOEL Care certified fuel/oil filters",
      "Heavy-duty long-life generator batteries",
      "Genuine Kirloskar engine oil & coolants",
      "Spare relays, AVRs (Automatic Voltage Regulators), and sensors",
    ],
    benefits: [
      "Preserve engine warranty and prevent cylinder damage",
      "Optimum lubrication prevents hot runs",
      "Corrosion-resistant coolants reduce radiator blocks",
    ],
  },
];

const faqs = [
  {
    q: "What kVA capacity generator does my facility need?",
    a: "Generator sizing depends on your peak starting current requirements, total lighting and inductive motor load, and future expansions. Our technical team conducts electrical panel load assessments to recommend the exact capacity (e.g. 15kVA, 125kVA, or 500kVA) to prevent generator trips.",
  },
  {
    q: "What is the difference between Comprehensive and Non-Comprehensive AMCs?",
    a: "Comprehensive AMC includes both scheduled checkups and the cost of replacement parts, filters, lubricants, and gaskets during maintenance. Non-Comprehensive AMC covers technical labor charges, safety inspects, and routine tune-ups, while the cost of spare parts and fluids is billed separately based on actual usage.",
  },
  {
    q: "How often does a diesel generator set require servicing?",
    a: "Typically, a basic 'B-check' service (oil change, fuel filter and air filter cleaning/replacement) is recommended every 250 running hours or once every 6 months, whichever occurs first. Regular inspections maintain engine durability and ensure rapid cold starting.",
  },
  {
    q: "Do you supply genuine Kirloskar spare parts?",
    a: "Yes. Asmitha Power Tech only uses and supplies genuine Kirloskar Green spare parts, synthetic lubricants, and filters. Using unauthorized third-party parts can void factory warranties and cause internal engine damage.",
  },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-dark/5 pb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex justify-between items-center text-left text-dark hover:text-primary transition-colors focus:outline-none"
      >
        <span className="font-heading font-semibold text-sm md:text-base flex items-start space-x-3">
          <HelpCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <span>{question}</span>
        </span>
        <ChevronDown className={`w-5 h-5 text-medium-gray transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-xs md:text-sm text-medium-gray leading-relaxed pl-8 pb-4">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Services() {
  const [selectedService, setSelectedService] = useState("sales");

  return (
    <PageTransition>
      {/* 1. Hero */}
      <section className="relative py-24 bg-light-gray/20 border-b border-dark/5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 text-center space-y-4">
          <span className="text-xs uppercase font-extrabold tracking-widest text-primary font-heading">
            Our Offerings
          </span>
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-dark">
            DG Generator Services & Solutions
          </h1>
          <p className="text-sm md:text-base text-medium-gray max-w-xl mx-auto">
            Authorized supply, preventive maintenance, repair overhauling, and custom load integrations.
          </p>
        </div>
      </section>

      {/* 2. Interactive Navigation tabs & Content details */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Tabs Menu */}
          <div className="flex flex-wrap gap-2.5 justify-center mb-16 border-b border-dark/5 pb-8">
            {services.map((srv) => {
              const IconC = srv.icon;
              const isActive = selectedService === srv.id;
              return (
                <button
                  key={srv.id}
                  onClick={() => setSelectedService(srv.id)}
                  className={`px-6 py-3.5 rounded-lg border text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center space-x-2 cursor-pointer ${
                    isActive
                      ? "bg-primary border-primary text-white shadow-lg shadow-primary/20"
                      : "bg-white border-dark/10 text-medium-gray hover:text-dark hover:border-dark/25"
                  }`}
                >
                  <IconC className="w-4 h-4" />
                  <span>{srv.title.split(" & ")[0].split(" (")[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Display */}
          <div className="min-h-[500px]">
            {services.map((srv) => {
              if (srv.id !== selectedService) return null;
              return (
                <motion.div
                  key={srv.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"
                >
                  {/* Left Column: Image */}
                  <div className="lg:col-span-5 relative h-[380px] rounded-2xl overflow-hidden border border-dark/5 shadow-2xl">
                    <Image
                      src={srv.image}
                      alt={srv.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-pure-black/60 to-transparent" />
                  </div>

                  {/* Right Column: Descriptions & bullet list */}
                  <div className="lg:col-span-7 space-y-6">
                    <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-dark">
                      {srv.title}
                    </h2>
                    <div className="h-1 w-12 bg-primary" />
                    <p className="text-sm md:text-base text-medium-gray leading-relaxed">
                      {srv.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                      {/* Features */}
                      <div className="space-y-3">
                        <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-primary">
                          Scope of Service
                        </h4>
                        <ul className="space-y-2 text-xs md:text-sm text-medium-gray">
                          {srv.features.map((item, i) => (
                            <li key={i} className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Benefits */}
                      <div className="space-y-3">
                        <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-primary">
                          Client Advantages
                        </h4>
                        <ul className="space-y-2 text-xs md:text-sm text-medium-gray">
                          {srv.benefits.map((item, i) => (
                            <li key={i} className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-8">
                      <Link
                        href={`/contact?service=${srv.id}`}
                        className="px-8 py-3.5 bg-primary hover:bg-primary-dark text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors inline-flex items-center space-x-2"
                      >
                        <span>Inquire About This Service</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Accordion FAQ Section */}
      <section className="py-24 bg-light-gray/20 border-t border-dark/5 relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <span className="text-xs uppercase font-extrabold tracking-widest text-primary font-heading">
              Help Center
            </span>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-dark">
              Frequently Asked Questions
            </h2>
            <div className="h-1 w-12 bg-primary mx-auto" />
          </div>

          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <FaqItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
