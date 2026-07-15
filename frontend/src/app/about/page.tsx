"use strict";
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Cpu, Target, Award, ShieldAlert, BadgeCheck, CheckCircle2, AwardIcon } from "lucide-react";
import PageTransition from "@/components/PageTransition";

const milestones = [
  {
    year: "2011",
    title: "Founding & Launch",
    desc: "Asmitha Power Tech was established in Telangana, offering localized diesel generator repairs.",
  },
  {
    year: "2015",
    title: "Kirloskar Authorized Alignment",
    desc: "Achieved official channel service partner status, granting full access to genuine Kirloskar spare parts.",
  },
  {
    year: "2019",
    title: "100+ AMC Clients Milestone",
    desc: "Expanded into comprehensive industrial Annual Maintenance Contracts, supporting factories and hospitals.",
  },
  {
    year: "2023",
    title: "Service Lab Expansion",
    desc: "Established a dedicated breakdown response facility at Roshanodwala, Saroornagar.",
  },
  {
    year: "2026",
    title: "Leading Regional Partner",
    desc: "Now supporting 500+ successful site installations with a roster of certified technicians and 24x7 service.",
  },
];

const team = [
  {
    name: "Mr. Manas",
    role: "Founder & Chief Operations Director",
    desc: "Over 15 years of technical leadership in large-scale industrial diesel engine systems and site coordination.",
  },
  {
    name: "T. Ramesh",
    role: "Lead Electrical Engineer",
    desc: "Expert in generator sizing, automated transfer switches (AMF panels), and testing commissioning.",
  },
  {
    name: "K. Shiva",
    role: "Senior Service Specialist",
    desc: "Specializes in diesel engine breakdown troubleshooting, overhaul services, and generator diagnostics.",
  },
];

export default function About() {
  return (
    <PageTransition>
      {/* 1. Hero Banner */}
      <section className="relative py-24 bg-light-gray/20 border-b border-dark/5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 text-center space-y-4">
          <span className="text-xs uppercase font-extrabold tracking-widest text-primary font-heading">
            Who We Are
          </span>
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-dark">
            About Asmitha Power Tech
          </h1>
          <p className="text-sm md:text-base text-medium-gray max-w-xl mx-auto">
            A trusted team of power engineers dedicated to protecting commercial assets with premium generator integration.
          </p>
        </div>
      </section>

      {/* 2. Company Story, Mission, Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Text block */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-heading font-extrabold text-2xl md:text-4xl text-dark">
              The Journey of Asmitha Power Tech
            </h2>
            <div className="h-1 w-12 bg-primary" />
            <p className="text-sm md:text-base text-medium-gray leading-relaxed">
              Founded on the pillars of engineering integrity and customer responsiveness, Asmitha Power Tech has grown into a leading supplier and maintenance center for high-performance Kirloskar Diesel Generators.
            </p>
            <p className="text-sm md:text-base text-medium-gray/80 leading-relaxed">
              We specialize in the full lifecycle of diesel generators—from initially assessing your facility&apos;s load capacity requirements to precise mechanical installation, scheduled comprehensive AMC upkeep, and genuine filter/oil logistics.
            </p>

            {/* Mission / Vision Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              <div className="p-6 bg-white/80 border border-dark/5 rounded-xl space-y-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/20">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-heading font-semibold text-dark">Our Mission</h4>
                <p className="text-xs text-medium-gray leading-relaxed">
                  Eliminate blackouts in industrial production, critical healthcare, and high-rise commercial structures.
                </p>
              </div>

              <div className="p-6 bg-white/80 border border-dark/5 rounded-xl space-y-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/20">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-heading font-semibold text-dark">Our Vision</h4>
                <p className="text-xs text-medium-gray leading-relaxed">
                  Be recognized as the standard-setting channel partner for diesel generator AMCs and sales in southern India.
                </p>
              </div>
            </div>
          </div>

          {/* Badge Display */}
          <div className="lg:col-span-5 relative bg-light-gray/50 border border-dark/5 p-8 rounded-2xl glassmorphism text-center space-y-6">
            <div className="w-20 h-20 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center mx-auto shadow-lg">
              <BadgeCheck className="w-10 h-10 text-primary" />
            </div>
            <div className="space-y-2">
              <h3 className="font-heading font-bold text-dark text-xl">Authorized Channel Partner</h3>
              <p className="text-xs text-medium-gray uppercase tracking-widest font-semibold">Kirloskar Green Sets</p>
            </div>
            <p className="text-xs text-medium-gray/80 leading-relaxed">
              Our partner badge represents strict compliance with Kirloskar Green maintenance directives, ensuring warranty validation and optimal engine life.
            </p>
            <div className="flex justify-center space-x-6 pt-4 border-t border-dark/5 text-[10px] uppercase font-bold tracking-wider text-medium-gray">
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                <span>Genuine Spares</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                <span>KOEL Certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Milestone Timeline */}
      <section className="py-24 bg-white border-t border-dark/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="text-xs uppercase font-extrabold tracking-widest text-primary font-heading">
              Our Milestones
            </span>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-dark">
              Milestones & Achievements
            </h2>
            <div className="h-1 w-12 bg-primary mx-auto" />
          </div>

          {/* Timeline track */}
          <div className="relative border-l border-dark/5 ml-4 md:ml-0 md:left-1/2 md:-translate-x-1/2 max-w-3xl space-y-12">
            {milestones.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className={`relative pl-8 md:pl-0 md:w-1/2 ${
                    isEven ? "md:pr-12 md:text-right md:ml-0" : "md:pl-12 md:ml-auto"
                  }`}
                >
                  {/* Circle dot on track */}
                  <div className="absolute left-[-5px] md:left-auto md:right-[-9px] top-1.5 w-4.5 h-4.5 bg-primary border-4 border-white rounded-full" style={isEven ? {right: '-9px'} : {left: '-9px'}} />
                  
                  <div className="p-6 bg-white/80 border border-dark/5 rounded-xl glassmorphism space-y-2">
                    <span className="font-heading font-extrabold text-primary text-xl">
                      {item.year}
                    </span>
                    <h4 className="font-heading font-bold text-dark text-base">
                      {item.title}
                    </h4>
                    <p className="text-xs md:text-sm text-medium-gray leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Team Section */}
      <section className="py-24 border-t border-dark/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="text-xs uppercase font-extrabold tracking-widest text-primary font-heading">
              Our Leadership
            </span>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-dark">
              Experienced Power Team
            </h2>
            <div className="h-1 w-12 bg-primary mx-auto" />
            <p className="text-xs md:text-sm text-medium-gray">
              Meet the specialists coordinating generator deployments and AMC support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-white/80 border border-dark/5 flex flex-col space-y-4 text-center card-glow-hover glassmorphism"
              >
                <div className="w-16 h-16 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center mx-auto mb-2 text-primary">
                  <Cpu className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-heading font-bold text-lg text-dark">
                    {member.name}
                  </h3>
                  <p className="text-xs text-primary font-semibold uppercase tracking-wider">
                    {member.role}
                  </p>
                </div>
                <p className="text-xs md:text-sm text-medium-gray/80 leading-relaxed">
                  {member.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
