"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"
import MagneticCursor from "@/components/ui/magnetic-curdor"
import MagneticButton from "@/components/ui/magnetic-butt"

export default function FAQSection() {
    // FAQ data
    const faqItems = [
        {
            question: "What services do you offer as a virtual assistant?",
            answer:
                "I offer a comprehensive range of services including customer support, administrative tasks, content creation, email management, calendar organization, social media management, research, and data entry. Each service can be tailored to meet your specific business needs.",
        },
        {
            question: "How do we start working together?",
            answer:
                "Starting our collaboration is simple. First, we'll schedule a consultation call to discuss your needs. Then, I'll provide a customized service proposal based on your requirements. Once approved, I'll onboard with your systems and begin delivering results within days.",
        },
        {
            question: "What are your working hours?",
            answer:
                "I offer flexible working hours to accommodate different time zones and business needs. Standard availability is Monday through Friday, 9 AM to 5 PM EST, but we can arrange alternative schedules to ensure timely support for your business operations.",
        },
        {
            question: "How do you ensure data security and confidentiality?",
            answer:
                "I prioritize your business security. All client information is protected through strict confidentiality agreements, secure password management, two-factor authentication on all accounts, and regular security training. Your business data remains private and secure at all times.",
        },
        {
            question: "What makes your virtual assistant service different?",
            answer:
                "My service stands out through personalized attention, professional communication, consistent reliability, and specialized skills developed over 5+ years of experience. I focus on becoming a valuable team member who understands your business goals rather than just completing tasks.",
        },
    ]

    // State to track which FAQ item is open
    const [activeIndex, setActiveIndex] = useState<number | null>(null)

    const toggleItem = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    const handleBookCall = () => {
        window.open("https://calendly.com/claireozoagu/let-s-talk-about-your-need", "_blank");
    };

    return (
        <MagneticCursor>
            <div className="relative bg-zinc-950 py-24">
                <div className="absolute inset-0 bg-gradient-to-t from-violet-950/10 to-transparent" />

                <div className="container px-4 md:px-6 mx-auto max-w-5xl">
                    {/* Section header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-100 mb-4">
                            Frequently Asked <span className="text-violet-300">Questions</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Everything you need to know about working with a professional virtual assistant. Can&apos;t find the answer
                            you&apos;re looking for? Feel free to contact me directly.
                        </p>
                    </motion.div>

                    {/* FAQ accordion */}
                    <div className="space-y-4">
                        {faqItems.map((item, index) => (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                key={index}
                                className="border border-gray-800 rounded-xl overflow-hidden"
                            >
                                <MagneticButton
                                    onClick={() => toggleItem(index)}
                                    className="flex justify-between items-center w-full px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:ring-inset transition-colors duration-200 hover:bg-violet-950/20"
                                    cursorText="Click to expand"
                                >
                                    <span className="text-lg font-medium text-gray-200">{item.question}</span>
                                    <span className="ml-6 flex-shrink-0 text-gray-400">
                                        {activeIndex === index ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                                    </span>
                                </MagneticButton>

                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden border-t border-gray-800"
                                        >
                                            <div className="px-6 py-5 bg-violet-950/10">
                                                <p className="text-gray-300">{item.answer}</p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>

                    {/* Contact CTA */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="mt-16 text-center"
                    >
                        <p className="text-gray-400 mb-4">Still have questions?</p>
                        <MagneticButton
                            onClick={handleBookCall}
                            className="px-8 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-full transition-colors duration-300"
                            cursorText="Book a Call"
                        >
                            Get in Touch
                        </MagneticButton>
                    </motion.div>
                </div>
            </div>
        </MagneticCursor>
    )
}