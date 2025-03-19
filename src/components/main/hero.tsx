"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin } from "lucide-react";
import Link from "next/link";

export default function MinimalHero() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="relative min-h-screen bg-zinc-950 pt-16 ">
            {/* Minimal gradient background */}
            <div
                className="absolute inset-0 bg-gradient-to-b from-violet-950/20 to-transparent"
                aria-hidden="true"
            />

            <div className="container relative px-4 md:px-6">
                <div className="grid lg:grid-cols-2 min-h-screen items-center gap-8 pb-8 pt-10 md:pb-12 md:pt-12 lg:py-0">
                    {/* Content Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col gap-6"
                    >
                        {/* Main heading with minimal animation */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-4"
                        >
                            <h1 className="text-3xl font-medium tracking-tight sm:text-5xl xl:text-6xl/none">
                                <span className="block text-gray-100">
                                    Virtual Assistant for
                                </span>
                                <span className="block text-violet-300">Modern Business</span>
                            </h1>
                            <p className="text-base sm:text-lg text-gray-400 max-w-[600px]">
                                Streamline your operations with professional virtual assistance.
                                Focus on growth while I handle the details.
                            </p>
                        </motion.div>

                        {/* Service tags with subtle hover effect */}
                        <div className="flex flex-wrap gap-3">
                            {["Virtual Assistance", "Admin Tasks", "Content Creation"].map(
                                (service) => (
                                    <div
                                        key={service}
                                        className="px-4 py-1.5 text-sm text-gray-300 border border-gray-800 rounded-full 
                           transition-colors duration-200 hover:border-violet-500/50 hover:bg-violet-950/30"
                                    >
                                        {service}
                                    </div>
                                )
                            )}
                        </div>

                        {/* Clean, focused CTA with LinkedIn Link */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-2">
                            <Button
                                size="lg"
                                className="relative group bg-[#0002AF] hover:bg-violet-700 text-white rounded-full 
                         transition-all duration-300 ease-out"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                Start Collaboration
                                <ArrowRight
                                    className={`ml-2 h-4 w-4 transition-transform duration-300 ${isHovered ? "translate-x-1" : ""
                                        }`}
                                />
                            </Button>

                            {/* LinkedIn Link Button */}
                            <Link
                                href="https://www.linkedin.com/in/ozoagu-amarachukwu-claire-virtual-assistant/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="rounded-full border-gray-800 hover:bg-violet-950/50 hover:text-violet-400 hover:border-violet-500/50 flex items-center gap-2"
                                >
                                    <Linkedin className="h-4 w-4" />
                                    LinkedIn
                                </Button>
                            </Link>
                        </div>

                        {/* Simple stats display */}
                        <div className="flex items-center gap-8 pt-4">
                            <div className="space-y-1">
                                <p className="text-2xl font-semibold text-gray-100">2+</p>
                                <p className="text-sm text-gray-400">Years Experience</p>
                            </div>
                            <div className="h-8 w-px bg-gray-800" />
                            <div className="space-y-1">
                                <p className="text-2xl font-semibold text-gray-100">100%</p>
                                <p className="text-sm text-gray-400">Client Satisfaction</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Rest of the code remains the same */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="relative lg:ml-auto"
                    >
                        <div className="relative w-full h-[500px] mx-auto overflow-hidden rounded-xl block">
                            {/* Subtle gradient behind image */}
                            <div
                                className="absolute inset-0 rounded-full bg-gradient-to-tr from-violet-500/10 to-transparent 
                         blur-2xl"
                                aria-hidden="true"
                            />

                            {/* Fixed Image component implementation */}
                            <div className="relative w-full h-full">
                                <Image
                                    src="/new.png"
                                    alt="Virtual Assistant Professional"
                                    width={600}
                                    height={600}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    priority
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Minimal scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block"
            >
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    className="flex flex-col items-center gap-2"
                >
                    <div className="h-10 w-[1px] bg-gray-800" />
                    <span className="text-xs text-gray-500">Scroll</span>
                </motion.div>
            </motion.div>
        </div>
    );
}
