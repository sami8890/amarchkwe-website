"use client";
import { motion } from "framer-motion";
import { Play, Calendar, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

// Define TypeScript interface for Calendly
interface CalendlyInterface {
    initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement | null;
        prefill?: object;
        utm?: object;
    }) => void;
}

// Declare Calendly as a global variable
declare global {
    interface Window {
        Calendly?: CalendlyInterface;
    }
}

export default function VideoMeetingSection() {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const [showCalendly, setShowCalendly] = useState(false);

    // Function to open Calendly
    const openCalendly = () => {
        setShowCalendly(true);
        // Initialize Calendly inline widget
        if (typeof window !== 'undefined' && window.Calendly) {
            window.Calendly.initInlineWidget({
                url: 'https://calendly.com/your-username/30min',
                parentElement: document.getElementById('calendlyWidget'),
                prefill: {},
                utm: {}
            });
        }
    };

    // Add Calendly script dynamically
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://calendly.com/claireozoagu/let-s-talk-about-your-need';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <section className="relative bg-black text-white py-24 overflow-hidden">
            {/* Background Effects */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(124,58,237,0.1),transparent_60%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(99,102,241,0.1),transparent_60%)]" />

            <div className="relative mx-auto max-w-7xl px-6">
                {/* Section Header */}
                <motion.div
                    className="text-center space-y-4 mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-600/10 border border-violet-600/20"
                        whileHover={{ scale: 1.02 }}
                    >
                        <span className="text-sm font-medium text-violet-400">
                            Watch & Connect
                        </span>
                    </motion.div>

                    <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                        See Our{" "}
                        <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                            Expertise
                        </span>
                        {" "}in Action
                    </h2>

                    <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
                        Watch our showcase video and schedule a personalized consultation to discuss your project.
                    </p>
                </motion.div>

                {/* Video Section */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Video Player */}
                    <motion.div
                        className="relative aspect-video rounded-2xl overflow-hidden group"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-indigo-600/20 mix-blend-overlay" />

                        {!isVideoPlaying ? (
                            <>
                                <Image
                                    src="/video-thumbnail.jpg"
                                    alt="Video thumbnail"
                                    className="w-full h-full object-cover"
                                />
                                <motion.button
                                    className="absolute inset-0 flex items-center justify-center group"
                                    onClick={() => setIsVideoPlaying(true)}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="w-20 h-20 rounded-full bg-violet-600 flex items-center justify-center shadow-lg shadow-violet-600/50">
                                        <Play className="w-8 h-8 text-white" />
                                    </div>
                                </motion.button>
                            </>
                        ) : (
                            <iframe
                                src="https://www.youtube.com/embed/your-video-id?autoplay=1"
                                className="absolute inset-0 w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        )}
                    </motion.div>

                    {/* Calendly Section */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-black/40 border border-white/10 backdrop-blur-sm p-8 rounded-xl">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="p-3 bg-violet-600/20 rounded-lg">
                                    <Calendar className="w-6 h-6 text-violet-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Schedule a Free Consultation</h3>
                                    <p className="text-neutral-400">
                                        Book a 30-minute session to discuss your project needs and explore how we can help.
                                    </p>
                                </div>
                            </div>

                            {!showCalendly ? (
                                <motion.button
                                    onClick={openCalendly}
                                    className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium hover:shadow-lg hover:shadow-violet-600/25 transition-all duration-300 flex items-center justify-center gap-2"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span>Schedule Now</span>
                                    <ArrowRight className="w-4 h-4" />
                                </motion.button>
                            ) : (
                                <div id="calendlyWidget" className="min-h-[500px]" />
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}