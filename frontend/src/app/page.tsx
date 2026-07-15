"use strict";
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Cpu,
  Clock,
  Shield,
  BadgePercent,
  CheckCircle,
  Users,
  ChevronRight,
  TrendingUp,
  Star,
  ArrowRight,
  Zap,
  Hammer,
  Settings,
  Sparkles,
} from "lucide-react";
import PageTransition from "@/components/PageTransition";

// Stats Data
const stats = [
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 200, suffix: "+", label: "AMC Clients" },
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 24, suffix: "/7", label: "Technical Support" },
];

// Why Choose Us Data
const features = [
  {
    icon: Users,
    title: "Experienced Technical Team",
    desc: "Our Kirloskar-certified engineers have deep expertise in sizing, testing, and troubleshooting.",
  },
  {
    icon: Clock,
    title: "Prompt Service Support",
    desc: "Minimizing downtime with quick emergency response, round-the-clock technician dispatch.",
  },
  {
    icon: Shield,
    title: "Genuine Spare Parts",
    desc: "We supply only original Kirloskar components, filters, and lubricants to maintain performance.",
  },
  {
    icon: BadgePercent,
    title: "Cost Effective AMC",
    desc: "Customizable comprehensive and non-comprehensive contracts tailored to your budget.",
  },
  {
    icon: CheckCircle,
    title: "Reliable Power Solutions",
    desc: "Top-tier diesel generator installations engineered for seamless automated power transfers.",
  },
  {
    icon: Sparkles,
    title: "Customer First Approach",
    desc: "End-to-end customer support, clear communication, and professional site inspect services.",
  },
];

// Services Overview Data
const services = [
  {
    title: "Generator Sales",
    image: "/images/hero_generator.png",
    icon: Zap,
    desc: "Premium Kirloskar DG sets ranging from 5 kVA to 1010 kVA with standard acoustic enclosures.",
  },
  {
    title: "Annual Maintenance Contracts (AMC)",
    image: "/images/service_amc.png",
    icon: Shield,
    desc: "Comprehensive and preventative checkups to guarantee generator efficiency during failures.",
  },
  {
    title: "Generator Services",
    image: "/images/service_repair.png",
    icon: Settings,
    desc: "On-site troubleshooting, engine rebuilds, alternator servicing, and general breakdown maintenance.",
  },
  {
    title: "Acoustic & Site Installation",
    image: "/images/service_installation.png",
    icon: Hammer,
    desc: "Accurate physical installation, mechanical alignments, cabling, and exhaust setups.",
  },
];

// Industries Grid
const industries = [
  { name: "Hospitals & Medical Care", desc: "Uninterrupted power for life-saving machinery.", image: "/images/industry_hospital.png" },
  { name: "Manufacturing & Factories", desc: "Keeping production lines humming with backup systems.", image: "/images/industry_factory.png" },
  { name: "Commercial & Office Spaces", desc: "Premium backup for high-rises and data systems.", image: "/images/industry_commercial.png" },
];

// Brand Partner logos (Infinite slider simulation)
const brands = [
  "KIRLOSKAR GREEN",
  "ASMITHA POWER TECH",
  "KOEL CARE",
  "KIRLOSKAR OIL ENGINES",
  "KIRLOSKAR PUMPS",
  "KIRLOSKAR GREEN",
  "ASMITHA POWER TECH",
  "KOEL CARE",
  "KIRLOSKAR OIL ENGINES",
  "KIRLOSKAR PUMPS",
];

// Animated Stat Counter Component
function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    const totalDuration = 2000; // 2 seconds
    const incrementTime = Math.max(Math.floor(totalDuration / end), 20);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="text-center p-6 bg-light-gray/50 border border-dark/5 rounded-2xl glassmorphism-light">
      <div className="font-heading font-extrabold text-4xl md:text-5xl text-primary mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-xs md:text-sm font-semibold tracking-wider text-medium-gray uppercase">
        {label}
      </div>
    </div>
  );
}

// Testimonials Data
const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Facility Manager, Star Hospitals",
    stars: 5,
    comment: "Asmitha Power Tech has been handling our generator AMC for over 5 years. Their preventive checkups are incredibly thorough, and during a recent grid outage, the generator took over seamlessly.",
  },
  {
    name: "Srinivas Rao",
    role: "Director, Apex Textiles Pvt Ltd",
    stars: 5,
    comment: "We purchased a 250 kVA Kirloskar generator from them. The delivery, structural alignment, and electrical integration were fast and highly professional. Highly recommended partner.",
  },
  {
    name: "Anita Deshmukh",
    role: "Society President, Green Meadows Residency",
    stars: 5,
    comment: "Excellent breakdown support. Our residential generator stopped working late at night, and their service technician was on-site within an hour to resolve the sensor issue.",
  },
];

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Auto rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <PageTransition>
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-24">
        {/* Parallax Background */}
        <div className="absolute inset-0 z-0 bg-dark">
          <Image
            src="/images/hero_generator.png"
            alt="Kirloskar Diesel Generator"
            fill
            priority
            className="object-cover opacity-50 md:opacity-70 select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/60 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-8 space-y-6 text-left"
          >
            <div className="inline-flex items-center space-x-2 bg-primary/20 border border-primary/50 rounded-full px-4 py-1.5 text-xs text-primary font-bold uppercase tracking-wider">
              <Cpu className="w-3.5 h-3.5 animate-pulse" />
              <span>Authorized Kirloskar DG Partner</span>
            </div>

            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
              Authorized Kirloskar <br />
              <span className="text-primary bg-clip-text bg-gradient-to-r from-primary to-accent">
                Diesel Generator
              </span>{" "}
              Sales & AMC Services
            </h1>

            <p className="text-lg md:text-xl text-light-gray max-w-2xl leading-relaxed font-normal">
              Empowering factories, hospitals, and commercial spaces with Kirloskar Diesel Generator sets, comprehensive maintenance AMCs, and prompt support services.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold uppercase tracking-wider text-xs rounded-lg transition-all duration-300 shadow-lg shadow-primary/20 flex items-center justify-center space-x-2"
              >
                <span>Request Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 border border-white/30 hover:border-white text-white font-bold uppercase tracking-wider text-xs rounded-lg transition-all duration-300 hover:bg-white/10 flex items-center justify-center"
              >
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Stats Section */}
      <section className="py-12 border-y border-dark/10 bg-white relative z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <StatCounter key={i} value={stat.value} suffix={stat.suffix} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. About Preview Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left side content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6"
            >
              <span className="text-xs uppercase font-extrabold tracking-widest text-primary font-heading">
                About Asmitha Power Tech
              </span>
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-dark leading-tight">
                Ensuring Uninterrupted Operations For Over A Decade
              </h2>
              <div className="h-1 w-16 bg-primary" />
              <p className="text-base md:text-lg leading-relaxed text-medium-gray">
                Asmitha Power Tech, established in Telangana, is a recognized authorized provider of high-capacity Kirloskar Diesel Generator Sets, AMC support contracts, professional installation engineering, and genuine replacement spare parts.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-medium-gray/80">
                Our mission is simple: shield industrial, commercial, and residential estates from crippling power grid cuts. With standard soundproofing acoustic enclosures, robust alignments, and 24x7 service response, we keep Telangana powered.
              </p>

              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center space-x-2 text-primary font-bold text-sm hover:text-accent transition-colors"
                >
                  <span>Learn More About Our Journey</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Right side Image display */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 relative h-[380px] rounded-2xl overflow-hidden border border-dark/5 group shadow-2xl"
            >
              <Image
                src="/images/service_amc.png"
                alt="DG Installation Site"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent flex items-end p-8">
                <div>
                  <h4 className="font-heading font-bold text-lg text-white">Kirloskar Green Partner</h4>
                  <p className="text-xs text-medium-gray mt-1">Saroornagar, Telangana Operations Hub</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us Section */}
      <section className="py-24 bg-light-gray/20 border-t border-dark/5 relative overflow-hidden">
        {/* Glow & BG Image effects */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image
            src="/images/industry_factory.png"
            alt="Factory Background"
            fill
            className="object-cover opacity-[0.03] mix-blend-overlay"
          />
          {/* Animated floating glow balls */}
          <motion.div
            animate={{
              x: [0, 35, -20, 0],
              y: [0, -25, 35, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/10 rounded-full filter blur-[100px]"
          />
          <motion.div
            animate={{
              x: [0, -40, 25, 0],
              y: [0, 35, -25, 0],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full filter blur-[100px]"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="text-xs uppercase font-extrabold tracking-widest text-primary font-heading">
              Our Core Strengths
            </span>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-dark">
              Why Corporate Clients Choose Us
            </h2>
            <div className="h-1 w-12 bg-primary mx-auto" />
            <p className="text-base text-medium-gray/80">
              We leverage certified engineering methodologies and premium spares to optimize your power systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feat, index) => {
              const IconComp = feat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ 
                    y: -8,
                    scale: 1.02,
                    boxShadow: "0 20px 40px -15px rgba(255, 94, 20, 0.2)"
                  }}
                  className="p-8 rounded-2xl bg-white/80 border border-dark/5 card-glow-hover glassmorphism flex flex-col space-y-4 cursor-default relative overflow-hidden group"
                >
                  {/* Subtle hover gradient slide */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 relative z-10">
                    <IconComp className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-dark relative z-10">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-medium-gray leading-relaxed relative z-10">
                    {feat.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Services Overview Grid */}
      <section className="py-24 border-t border-dark/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
            <div className="space-y-4">
              <span className="text-xs uppercase font-extrabold tracking-widest text-primary font-heading">
                What We Do
              </span>
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-dark">
                Power Engineering Services
              </h2>
              <div className="h-1 w-12 bg-primary" />
            </div>
            <Link
              href="/services"
              className="mt-6 md:mt-0 px-6 py-3 bg-white hover:bg-primary text-dark hover:text-white border border-dark/10 hover:border-primary text-xs font-semibold uppercase tracking-wider rounded-lg transition-all flex items-center space-x-2"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((srv, idx) => {
              const IconC = srv.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="group relative h-[300px] rounded-2xl overflow-hidden border border-dark/5 shadow-xl"
                >
                  <Image
                    src={srv.image}
                    alt={srv.title}
                    fill
                    className="object-cover opacity-40 group-hover:scale-102 group-hover:opacity-50 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent flex flex-col justify-end p-8">
                    <div className="w-10 h-10 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center mb-4">
                      <IconC className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-white mb-2 group-hover:text-primary transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-sm text-medium-gray/80 line-clamp-2 max-w-md">
                      {srv.desc}
                    </p>
                    <Link
                      href="/services"
                      className="mt-4 flex items-center space-x-1 text-xs font-semibold text-primary group-hover:translate-x-1 transition-all"
                    >
                      <span>Read More Details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Industries Served Preview */}
      <section className="py-24 bg-light-gray/20 border-t border-dark/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="text-xs uppercase font-extrabold tracking-widest text-primary font-heading">
              Sectors We Support
            </span>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-dark">
              Securing Mission-Critical Sectors
            </h2>
            <div className="h-1 w-12 bg-primary mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industries.map((ind, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative h-[380px] rounded-2xl overflow-hidden border border-dark/5 flex flex-col justify-end p-8"
              >
                <Image
                  src={ind.image}
                  alt={ind.name}
                  fill
                  className="object-cover opacity-30 group-hover:scale-105 group-hover:opacity-40 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent pointer-events-none" />
                <div className="relative z-10 space-y-3">
                  <h3 className="font-heading font-bold text-lg text-white group-hover:text-primary transition-colors">
                    {ind.name}
                  </h3>
                  <p className="text-sm text-medium-gray/80 leading-relaxed">
                    {ind.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/industries"
              className="inline-flex items-center space-x-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
            >
              <span>Explore All 10+ Sectors We Serve</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Brands Infinite Marquee */}
      <section className="py-12 bg-white border-y border-dark/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-4">
          <p className="text-center text-[10px] uppercase font-bold tracking-widest text-medium-gray/40">
            Trusted Authorized Channel Alliances
          </p>
        </div>
        <div className="flex select-none overflow-hidden">
          <div className="flex space-x-12 shrink-0 animate-marquee min-w-full justify-around">
            {brands.map((brand, idx) => (
              <span
                key={idx}
                className="font-heading text-lg md:text-xl font-extrabold text-medium-gray/20 tracking-wider whitespace-nowrap"
              >
                ⚡ {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Testimonials Section */}
      <section className="py-24 relative border-t border-dark/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Header info */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase font-extrabold tracking-widest text-primary font-heading">
                Client Success
              </span>
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-dark">
                What Our Clients Say
              </h2>
              <div className="h-1 w-12 bg-primary" />
              <p className="text-base text-medium-gray leading-relaxed">
                Over 200+ companies, hospitals, and institutions rely on Asmitha Power Tech to secure continuous electricity during power failures. Read feedback from our client network.
              </p>
            </div>

            {/* Testimonials Switcher */}
            <div className="lg:col-span-7 relative bg-white/80 border border-dark/5 rounded-2xl p-8 md:p-12 glassmorphism min-h-[250px] flex flex-col justify-between">
              <div className="space-y-6">
                {/* Stars */}
                <div className="flex space-x-1 text-yellow-500">
                  {Array.from({ length: testimonials[activeTestimonial].stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                {/* Quote */}
                <p className="italic text-base leading-relaxed text-medium-gray">
                  &ldquo;{testimonials[activeTestimonial].comment}&rdquo;
                </p>
              </div>

              {/* Author profile */}
              <div className="mt-8 flex justify-between items-center border-t border-dark/5 pt-6">
                <div>
                  <h4 className="font-heading font-bold text-dark text-sm">
                    {testimonials[activeTestimonial].name}
                  </h4>
                  <p className="text-xs text-medium-gray mt-0.5">
                    {testimonials[activeTestimonial].role}
                  </p>
                </div>
                {/* Indicator dots */}
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        index === activeTestimonial ? "bg-primary scale-125" : "bg-dark/10 hover:bg-dark/30"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CTA Consultation Banner */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent relative overflow-hidden text-center text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.1),transparent)]" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-6">
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl">
            Need Uninterrupted Power Backup Solutions?
          </h2>
          <p className="text-base max-w-xl mx-auto leading-relaxed text-white/80">
            Reach out to our engineering office today. Get a free site inspection and generator sizing recommendations.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-primary font-bold uppercase tracking-wider text-xs rounded-lg transition-transform hover:scale-102 shadow-lg"
            >
              Get Free Consultation
            </Link>
            <a
              href="tel:9010201749"
              className="px-8 py-4 border border-white/30 hover:bg-white/10 text-white font-bold uppercase tracking-wider text-xs rounded-lg transition-all"
            >
              Call +91 9010201749
            </a>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
