"use client";

import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Search,
  Calendar,
  Plane,
  ClipboardList,
  Headphones,
  Zap,
  ArrowRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function PortfolioSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleBookConsultation = () => {
    window.open(
      "https://calendly.com/claireozoagu/let-s-talk-about-your-need",
      "_blank"
    );
  };

  const portfolioItems = [
    {
      title: "Email Management",
      icon: <Mail className="w-6 h-6" />,
      client: "Tech Startup CEO",
      metric: "75% less time on email",
      color: "from-indigo-900 to-blue-800",
    },
    {
      title: "Medical Research",
      icon: <Search className="w-6 h-6" />,
      client: "Fertility Clinic",
      metric: "30% better consultation rate",
      color: "from-blue-900 to-cyan-800",
    },
    {
      title: "Travel Planning",
      icon: <Plane className="w-6 h-6" />,
      client: "Business Consultant",
      metric: "$1,200 in travel savings",
      color: "from-emerald-900 to-teal-800",
    },
    {
      title: "Event Management",
      icon: <ClipboardList className="w-6 h-6" />,
      client: "Professional Association",
      metric: "35% increase in attendance",
      color: "from-amber-900 to-orange-800",
    },
    {
      title: "Customer Support",
      icon: <Headphones className="w-6 h-6" />,
      client: "E-commerce Startup",
      metric: "Response time: 72h → 4h",
      color: "from-rose-900 to-pink-800",
    },
    {
      title: "Business Automation",
      icon: <Zap className="w-6 h-6" />,
      client: "Marketing Agency",
      metric: "85% reduction in manual work",
      color: "from-violet-900 to-purple-800",
    },
    {
      title: "Calendar Optimization",
      icon: <Calendar className="w-6 h-6" />,
      client: "Serial Entrepreneur",
      metric: "15+ hours saved weekly",
      color: "from-blue-900 to-indigo-800",
    },
  ];

  // Determine which items to display
  const displayedItems = isExpanded
    ? portfolioItems
    : portfolioItems.slice(0, 3);

  return (
    <section
      id="services"
      className="w-full py-16 md:py-24 bg-gradient-to-b from-[#111936] via-[#0A0F29] to-[#111936] text-white overflow-hidden relative"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-full md:w-[800px] h-[500px] md:h-[800px] bg-blue-600/10 rounded-full blur-[80px] md:blur-[120px] opacity-70" />
        <div className="absolute bottom-0 left-0 w-full md:w-[800px] h-[500px] md:h-[800px] bg-purple-600/10 rounded-full blur-[80px] md:blur-[120px] opacity-70" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] md:opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px", maxWidth: "50%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-indigo-700 to-blue-600 mx-auto mb-4 md:mb-6"
          ></motion.div>

          <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
            My Services
          </h2>

          <p className="text-blue-300 text-base md:text-lg max-w-2xl mx-auto">
            Real results for real clients
          </p>
        </motion.div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          <AnimatePresence>
            {displayedItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative overflow-hidden rounded-xl h-64"
              >
                {/* Gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-80`}
                ></div>

                {/* Pattern overlay */}
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-lg"></div>

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl w-fit">
                    {React.cloneElement(item.icon, {
                      className: "w-6 h-6 text-white",
                    })}
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/80 mb-3">
                      Client: {item.client}
                    </p>

                    <div className="inline-block px-3 py-1 rounded-full bg-black/20 backdrop-blur-sm">
                      <p className="text-sm font-medium text-white">
                        {item.metric}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* See More / See Less button */}
        <div className="flex justify-center mt-8">
          <motion.button
            onClick={toggleExpand}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center px-6 py-3 bg-white/10 hover:bg-white/15 backdrop-blur-sm rounded-full border border-white/10 transition-colors duration-300"
          >
            <span className="text-white font-medium mr-2">
              {isExpanded ? "See Less" : "See More"}
            </span>
            {isExpanded ? (
              <ChevronUp className="h-4 w-4 text-white" />
            ) : (
              <ChevronDown className="h-4 w-4 text-white" />
            )}
          </motion.button>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 md:mt-20 text-center"
        >
          <motion.button
            onClick={handleBookConsultation}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="relative overflow-hidden group px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-indigo-800 to-blue-700 text-white rounded-xl transition-all duration-300 shadow-lg shadow-indigo-900/20 text-sm md:text-base"
          >
            <span className="relative z-10 font-medium flex items-center justify-center">
              Let&apos;s Work Together
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>

            {/* Animated shine effect */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-30 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
          </motion.button>
        </motion.div>
      </div>

      <style jsx global>{`
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(255, 255, 255, 0.05) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.05) 1px,
              transparent 1px
            );
          background-size: 30px 30px;
        }

        .skew-x-30 {
          transform: skewX(30deg);
        }

        @media (max-width: 768px) {
          .bg-grid-pattern {
            background-size: 20px 20px;
          }
        }
      `}</style>
    </section>
  );
}
