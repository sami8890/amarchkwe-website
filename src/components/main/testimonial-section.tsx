"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EnhancedTestimonialSection() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechVision Inc.",
      screenshot: "/test1.png",
      quote:
        "Working with this virtual assistant transformed our workflow. The level of professionalism and attention to detail exceeded all expectations.",
      stats: {
        improvement: "42% increase in team productivity",
        timeframe: "3 months",
      },
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Startup Founder",
      company: "Innovate Solutions",
      screenshot: "/test2.png",
      quote:
        "As a founder, delegating tasks was always difficult until I found this service. Now I can focus on growth while knowing the day-to-day operations are in capable hands.",
      stats: {
        improvement: "20+ hours saved per week",
        timeframe: "6 months",
      },
      rating: 5,
    },
    {
      id: 3,
      name: "Olivia Rodriguez",
      role: "E-commerce Manager",
      company: "StyleHouse",
      screenshot: "/test3.png",
      quote:
        "The content creation and customer support assistance has been game-changing for our online presence. Our engagement metrics have improved significantly.",
      stats: {
        improvement: "68% growth in customer engagement",
        timeframe: "4 months",
      },
      rating: 5,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  // Autoplay functionality
  useEffect(() => {
    if (!isAutoplay) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 8000);

    return () => clearInterval(interval);
  }, [isAutoplay, testimonials.length]);

  // Pause autoplay on hover
  const handleMouseEnter = () => setIsAutoplay(false);
  const handleMouseLeave = () => setIsAutoplay(true);

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -200 : 200,
      opacity: 0,
    }),
  };


  return (
    <div className="relative bg-zinc-950 py-20 overflow-hidden">
      {/* Subtle gradient background with animated particles */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-violet-950/20 to-transparent overflow-hidden"
        aria-hidden="true"
      >
        {/* Decorative elements that mimic stars/particles */}
        {[...Array(20)].map((_, i) => {
          const animationDuration = `${Math.random() * 10 + 10}s`;
          const animationDelay = `${Math.random() * 5}s`;

          return (
            <div
              key={i}
              className="absolute rounded-full bg-violet-500/10"
              style={{
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationName: "pulse",
                animationDuration,
                animationDelay,
                animationIterationCount: "infinite",
                animationTimingFunction: "ease-in-out",
              }}
            />
          );
        })}
      </div>

      <style jsx global>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.5);
          }
        }
      `}</style>

      <div className="container px-4 md:px-6">
        {/* Section heading with enhanced typography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-medium tracking-tight text-gray-100 sm:text-4xl mb-4">
            Client <span className="text-violet-300">Success Stories</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-violet-300 mx-auto mb-6 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-gray-400">
            See the real impact of professional virtual assistance through these
            client transformations.
          </p>
        </motion.div>

        {/* Enhanced testimonials with screenshots */}
        <div
          className="max-w-6xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative">
            {/* Testimonial card with improved animations */}
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={testimonials[activeIndex].id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "tween", duration: 0.5 }}
                className="bg-zinc-900/60 backdrop-blur-sm border border-gray-800 rounded-xl p-6 md:p-10 relative overflow-hidden"
              >
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-20 h-20 bg-violet-500/10 rotate-45 transform origin-bottom-left"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
                  {/* Screenshot container with floating animation */}
                  <div className="order-2 md:order-1">
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="relative rounded-lg overflow-hidden border border-gray-800 shadow-2xl"
                    >
                      {/* Subtle glow behind screenshot */}
                      <div
                        className="absolute inset-0 bg-gradient-to-tr from-violet-500/20 to-transparent blur-md"
                        aria-hidden="true"
                      />
                      <div className="relative aspect-video overflow-hidden rounded-lg">
                        <Image
                          src={testimonials[activeIndex].screenshot}
                          alt={`Work sample for ${testimonials[activeIndex].company}`}
                          width={600}
                          height={338}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                          }}
                          className="rounded-lg transition-transform duration-500 hover:scale-105"
                          priority
                        />
                      </div>
                    </motion.div>

                    {/* Key stats callout */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="bg-zinc-800/50 border border-gray-700 rounded-lg px-4 py-3 mt-4 shadow-lg"
                    >
                      <div className="flex justify-between items-center">
                        <div className="text-violet-300 font-medium">
                          {testimonials[activeIndex].stats.improvement}
                        </div>
                        <div className="text-sm text-gray-400">
                          in {testimonials[activeIndex].stats.timeframe}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Testimonial content with enhanced styling */}
                  <div className="order-1 md:order-2">
                    <Quote className="h-8 w-8 text-violet-500/80 mb-4" />
                    <blockquote className="text-gray-300 text-lg md:text-xl italic mb-8 leading-relaxed">
                     &quot; {testimonials[activeIndex].quote}&quot;
                    </blockquote>

                    {/* Rating stars */}
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < testimonials[activeIndex].rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-600"
                          }`}
                        />
                      ))}
                    </div>

                    <div className="border-t border-gray-800 pt-4">
                      <p className="font-medium text-gray-100 text-lg">
                        {testimonials[activeIndex].name}
                      </p>
                      <p className="text-violet-300">
                        {testimonials[activeIndex].role}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {testimonials[activeIndex].company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Enhanced navigation buttons */}
            <div className="absolute top-1/2 left-0 right-0 -mt-5 flex justify-between px-2 md:px-6 pointer-events-none">
              <Button
                onClick={handlePrev}
                size="icon"
                variant="outline"
                className="h-10 w-10 rounded-full border-gray-700 bg-zinc-900/70 text-white hover:bg-violet-950/70 hover:border-violet-500/70 shadow-lg backdrop-blur-sm pointer-events-auto transform transition hover:scale-110"
              >
                <ChevronLeft className="h-5 w-5" />
                <span className="sr-only">Previous testimonial</span>
              </Button>
              <Button
                onClick={handleNext}
                size="icon"
                variant="outline"
                className="h-10 w-10 rounded-full border-gray-700 bg-zinc-900/70 text-slate-50 hover:bg-violet-950/70 hover:border-violet-500/70 shadow-lg backdrop-blur-sm pointer-events-auto transform transition hover:scale-110"
              >
                <ChevronRight className="h-5 w-5" />
                <span className="sr-only">Next testimonial</span>
              </Button>
            </div>

            {/* Improved testimonial indicators */}
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > activeIndex ? 1 : -1);
                    setActiveIndex(index);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "w-10 bg-violet-500"
                      : "w-2 bg-gray-700 hover:bg-violet-500/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
