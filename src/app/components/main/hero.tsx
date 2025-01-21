import React from "react"
import { ArrowRight, Clock, Mail, Mic } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const HeroSection = () => {
    return (
        <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 min-h-screen">
            {/* Background overlay pattern */}
            <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Main Content */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                                Transform Your Productivity,
                                <span className="text-blue-400"> Reclaim Your Time</span>
                            </h1>
                            <p className="text-xl text-slate-300 leading-relaxed">
                                Are you drowning in a sea of tasks, with no end in sight? Imagine the freedom to focus solely on your
                                goals, without the weight of a cluttered inbox or never-ending to-do list.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/get-started"
                                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Get Started
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                            <Link
                                href="/learn-more"
                                className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 text-base font-medium rounded-lg text-slate-300 hover:bg-slate-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
                            >
                                Learn More
                            </Link>
                        </div>

                        {/* Service Highlights */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
                            <motion.div
                                className="flex items-center space-x-3 bg-slate-800/50 p-4 rounded-lg"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Clock className="h-6 w-6 text-blue-400" />
                                <span className="text-slate-200">Virtual Assistant</span>
                            </motion.div>
                            <motion.div
                                className="flex items-center space-x-3 bg-slate-800/50 p-4 rounded-lg"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Mic className="h-6 w-6 text-blue-400" />
                                <span className="text-slate-200">Voiceover Artist</span>
                            </motion.div>
                            <motion.div
                                className="flex items-center space-x-3 bg-slate-800/50 p-4 rounded-lg"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Mail className="h-6 w-6 text-blue-400" />
                                <span className="text-slate-200">Public Speaker</span>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Column - Stats/Social Proof */}
                    <motion.div
                        className="bg-slate-800/30 p-8 rounded-2xl backdrop-blur-sm"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold text-white">Services Overview</h3>
                            <div className="space-y-4">
                                {[
                                    "Email Management",
                                    "Calendar Management",
                                    "Data Entry",
                                    "Research",
                                    "Project Coordination",
                                    "Voiceover Services",
                                ].map((service, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-center space-x-2"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                    >
                                        <div className="h-2 w-2 rounded-full bg-blue-400" />
                                        <span className="text-slate-300">{service}</span>
                                    </motion.div>
                                ))}
                            </div>
                            <div className="pt-4 border-t border-slate-700">
                                <p className="text-slate-400 text-sm">Let's work together to achieve what's possible</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection