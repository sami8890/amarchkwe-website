"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Star, Zap, Award, Clock, Target, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function AboutMeSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [isMobile])

  const handleContactClick = () => {
    if (typeof window !== "undefined") {
      window.open("https://calendly.com/claireozoagu/let-s-talk-about-your-need", "_blank")
    }
  }

  return (
    <section className=" w-full py-16 md:py-24 bg-gradient-to-b from-[#0A0F29] via-[#111936] to-[#0A0F29] text-white overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 right-0 w-full md:w-[800px] h-[500px] md:h-[800px] bg-purple-600/10 rounded-full blur-[80px] md:blur-[120px] opacity-70"
          style={{
            transform: !isMobile
              ? `translate(${(mousePosition.x - (typeof window !== "undefined" ? window.innerWidth : 0)) * 0.02}px, ${(mousePosition.y - (typeof window !== "undefined" ? window.innerHeight : 0)) * 0.02}px)`
              : "none",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-full md:w-[800px] h-[500px] md:h-[800px] bg-blue-600/10 rounded-full blur-[80px] md:blur-[120px] opacity-70"
          style={{
            transform: !isMobile
              ? `translate(${(mousePosition.x - (typeof window !== "undefined" ? window.innerWidth : 0)) * -0.02}px, ${(mousePosition.y - (typeof window !== "undefined" ? window.innerHeight : 0)) * -0.02}px)`
              : "none",
          }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] md:opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section header with animated underline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px", maxWidth: "50%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-4 md:mb-6"
          ></motion.div>

          <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
            About Me
          </h2>

          <p className="text-blue-300 text-base md:text-lg max-w-2xl mx-auto">
            Get to know the person behind the exceptional virtual assistance services
          </p>
        </motion.div>

        {/* Main content with improved layout */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
          {/* Image column with creative framing */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-5/12 relative"
          >
            <div className="relative max-w-sm mx-auto lg:max-w-none">
              {/* Decorative frame */}
              <div className="absolute -inset-3 md:-inset-4 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl opacity-30 blur-md md:blur-lg"></div>

              {/* Main image container - Added padding at the bottom to ensure stats card is visible */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border-2 border-white/10 shadow-2xl pb-16 md:pb-20">
                <Image src="/mmm.png" alt="Claire - Virtual Assistant" fill className="object-cover" priority />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F29]/80 to-transparent"></div>

                {/* Experience badge */}
                <div className="absolute top-3 md:top-6 left-3 md:left-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium shadow-lg backdrop-blur-sm">
                  Professional VA
                </div>

                {/* Stats cards with glass effect - Adjusted positioning */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="absolute bottom-4 md:bottom-5 right-4 md:right-6 left-4 md:left-6 bg-white/10 backdrop-blur-md rounded-xl p-3 md:p-4 border border-white/20 shadow-xl"
                >
                  <div className="flex items-center justify-around">
                    <div className="text-center">
                      <p className="text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                        100%
                      </p>
                      <p className="text-[10px] md:text-xs text-gray-300">Satisfaction</p>
                    </div>
                    <div className="h-8 md:h-10 w-px bg-white/20"></div>
                    <div className="text-center">
                      <p className="text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                        24/7
                      </p>
                      <p className="text-[10px] md:text-xs text-gray-300">Support</p>
                    </div>
                    <div className="h-8 md:h-10 w-px bg-white/20"></div>
                    <div className="text-center">
                      <p className="text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                        20+
                      </p>
                      <p className="text-[10px] md:text-xs text-gray-300">Projects</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Floating elements - hidden on small mobile, visible on larger screens */}
              <div className="hidden md:block">
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                  className="absolute -top-8 -right-8 bg-gradient-to-br from-purple-500/80 to-blue-500/80 p-4 rounded-2xl shadow-lg backdrop-blur-sm"
                >
                  <Star className="w-6 h-6 text-white" />
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 10, 0],
                    rotate: [0, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    delay: 1,
                  }}
                  className="absolute -bottom-8 -left-8 bg-gradient-to-br from-blue-500/80 to-purple-500/80 p-4 rounded-2xl shadow-lg backdrop-blur-sm"
                >
                  <Zap className="w-6 h-6 text-white" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Content column with improved typography and concise content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full lg:w-7/12"
          >
            <div className="space-y-4 md:space-y-6">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-purple-500/30">
                <Award className="w-4 h-4 md:w-5 md:h-5 text-purple-400" />
                <span className="text-xs md:text-sm font-medium text-blue-300">
                  Virtual Assistant & Customer Support
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                I&apos;m
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                  Claire
                </span>
                , Your Dedicated Virtual Assistant
              </h2>

              <div className="h-1 w-16 md:w-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>

              {/* Concise content with bullet points instead of paragraphs */}
              <div className="space-y-4">
                <p className="text-gray-300 text-base md:text-lg">
                  I help ambitious entrepreneurs reclaim their time and energy by providing exceptional virtual
                  assistance and customer support services.
                </p>

                <div className="space-y-2">
                  <p className="text-gray-300 text-base md:text-lg font-medium">How I can help you:</p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-300">
                    <li>Free you from overwhelming administrative tasks</li>
                    <li>Provide professional customer support for your business</li>
                    <li>Manage your inbox and organize your digital workspace</li>
                    <li>Support your business growth with strategic assistance</li>
                  </ul>
                </div>
              </div>

              {/* Value propositions with animated cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mt-6 md:mt-8">
                {[
                  {
                    icon: <Clock className="w-5 h-5" />,
                    title: "Time Freedom",
                    description: "Reclaim your valuable time",
                  },
                  {
                    icon: <Target className="w-5 h-5" />,
                    title: "Growth Focus",
                    description: "Focus on strategic growth",
                  },
                  {
                    icon: <CheckCircle className="w-5 h-5" />,
                    title: "Peace of Mind",
                    description: "Tasks handled professionally",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(139, 92, 246, 0.3)" }}
                    className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl p-4 md:p-5 border border-white/10 transition-all duration-300"
                  >
                    <div className="bg-gradient-to-br from-purple-500 to-blue-500 w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mb-3 md:mb-4 shadow-lg">
                      {item.icon}
                    </div>
                    <h4 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">{item.title}</h4>
                    <p className="text-sm md:text-base text-gray-400">{item.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* CTA with animated button */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-6 md:mt-8">
                <motion.button
                  onClick={handleContactClick}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="relative overflow-hidden group px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/20 text-sm md:text-base"
                >
                  <span className="relative z-10 font-medium flex items-center justify-center">
                    Let&apos;s Work Together
                    <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>

                  {/* Animated shine effect */}
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-30 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                </motion.button>

                <motion.a
                  href="#services"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-6 md:px-8 py-3 md:py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white rounded-xl transition-all duration-300 flex items-center justify-center text-sm md:text-base"
                >
                  Explore My Services
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quote section with creative styling - simplified */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 md:mt-24 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl md:rounded-2xl blur-lg"></div>

          <div className="relative bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-10 border border-white/10 shadow-xl">
            <div className="max-w-3xl mx-auto text-center">
              <div className="text-purple-400 mb-4 md:mb-6">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  <path
                    d="M9.5 8.5H6.5C5.4 8.5 4.5 9.4 4.5 10.5V13.5C4.5 14.6 5.4 15.5 6.5 15.5H8.5C9.6 15.5 10.5 14.6 10.5 13.5V11.5H6.5V10.5H10.5V8.5H9.5ZM19.5 8.5H16.5C15.4 8.5 14.5 9.4 14.5 10.5V13.5C14.5 14.6 15.4 15.5 16.5 15.5H18.5C19.6 15.5 20.5 14.6 20.5 13.5V11.5H16.5V10.5H20.5V8.5H19.5Z"
                    fill="currentColor"
                  />
                </svg>
              </div>

              <p className="text-xl md:text-2xl lg:text-3xl font-medium text-white italic mb-4 md:mb-6">
                Let&apos;s work together to achieve what&apos;s possible.
              </p>

              <div className="h-1 w-16 md:w-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto"></div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
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
  )
}

