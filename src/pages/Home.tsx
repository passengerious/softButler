import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Users, Shield, Zap, Clock, Target, AlertTriangle, CheckCircle } from 'lucide-react';
import Hero from '../components/Hero';
import ProcessSteps from '../components/ProcessSteps';
import IndustryGrid from '../components/IndustryGrid';
import FAQ from '../components/FAQ';
import InlineBookingCalendar from '../components/InlineBookingCalendar';
import SDLCSection from '../components/SDLCSection';

const Home = () => {

  const qaProblems = [
    {
      icon: Users,
      title: "Developer blindness",
      description: "\"It works perfectly!\" (Narrator: it didn't)"
    },
    {
      icon: AlertTriangle,
      title: "Offshore lottery",
      description: "Different tester every sprint, zero context"
    },
    {
      icon: CheckCircle,
      title: "Checkbox theater",
      description: "1000 test cases passed, but users still hate it"
    },
    {
      icon: Clock,
      title: "Last-minute panic",
      description: "\"Can you test this before tomorrow's release?\""
    },
    {
      icon: Target,
      title: "Tool obsession",
      description: "$100K spent on tools, still shipping bugs"
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero onBookConsultation={() => {
        const calendarSection = document.getElementById('booking-calendar');
        if (calendarSection) {
          calendarSection.scrollIntoView({ behavior: 'smooth' });
        }
      }} />
      
      {/* Why QA Breaks Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Why QA <span className="text-yellow-500">Breaks</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Let me guess: your devs are testing their own code. The offshore team is checking boxes but missing critical bugs. 
              You ship, users complain, and everyone scrambles. <span className="text-yellow-500">Sound familiar?</span>
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {qaProblems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-8 hover:border-yellow-500/50 transition-all duration-300 group"
              >
                <div className="mb-6">
                  <problem.icon className="w-12 h-12 text-yellow-500 group-hover:drop-shadow-[0_0_15px_#FFD700] transition-all duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{problem.title}</h3>
                <p className="text-gray-300 leading-relaxed">{problem.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps />
      <SDLCSection />
      <IndustryGrid preview={true} />
      
      {/* Impact Quote */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-yellow-500/10 rounded-2xl blur-3xl"></div>
            <div className="relative bg-gray-900/50 backdrop-blur-sm border border-yellow-500/30 rounded-2xl p-12">
              <blockquote className="text-3xl md:text-4xl font-bold leading-relaxed">
                "Your users won't give you a{' '}
                <span className="text-yellow-500 drop-shadow-[0_0_10px_#FFD700]">second chance</span>.
                <br />
                We make sure they never see the bugs."
              </blockquote>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Inline Booking Calendar */}
      <div id="booking-calendar">
        <InlineBookingCalendar />
      </div>

      <FAQ />
    </div>
  );
};

export default Home;