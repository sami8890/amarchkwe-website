"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp, Search, MessageCircle } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function FAQSection() {
    // FAQ data with categorization
    const faqItems = [
        {
            question: "What services do you offer as a virtual assistant?",
            answer:
                "I offer a comprehensive range of services including customer support, administrative tasks, content creation, email management, calendar organization, social media management, research, and data entry. Each service can be tailored to meet your specific business needs.",
            category: "services",
        },
        {
            question: "How do we start working together?",
            answer:
                "Starting our collaboration is simple. First, we&apos;ll schedule a consultation call to discuss your needs. Then, I&apos;ll provide a customized service proposal based on your requirements. Once approved, I&apos;ll onboard with your systems and begin delivering results within days.",
            category: "process",
        },
        {
            question: "What are your working hours?",
            answer:
                "I offer flexible working hours to accommodate different time zones and business needs. Standard availability is Monday through Friday, 9 AM to 5 PM EST, but we can arrange alternative schedules to ensure timely support for your business operations.",
            category: "logistics",
        },
        {
            question: "How do you ensure data security and confidentiality?",
            answer:
                "I prioritize your business security. All client information is protected through strict confidentiality agreements, secure password management, two-factor authentication on all accounts, and regular security training. Your business data remains private and secure at all times.",
            category: "security",
        },
        {
            question: "What makes your virtual assistant service different?",
            answer:
                "My service stands out through personalized attention, professional communication, consistent reliability, and specialized skills developed over 5+ years of experience. I focus on becoming a valuable team member who understands your business goals rather than just completing tasks.",
            category: "services",
        },
        {
            question: "What is your pricing model?",
            answer:
                "I offer flexible pricing options including hourly rates, monthly retainer packages, and project-based pricing. Monthly packages start at 20 hours and include priority support. We&apos;ll discuss your specific needs during our consultation to find the most cost-effective solution for your business.",
            category: "pricing",
        },
        {
            question: "How do we communicate about daily tasks?",
            answer:
                "Communication is key to our success. We can use your preferred tools such as Slack, Asana, Trello, or email. I provide regular updates on task progress and am available for quick check-ins during business hours. We&apos;ll establish a communication protocol during onboarding that works best for your workflow.",
            category: "process",
        },
    ]

    // State to track which FAQ item is open and search query
    const [activeIndex, setActiveIndex] = useState<number | null>(null)
    const [searchQuery, setSearchQuery] = useState("")

    // Filter FAQs based on search query
    const filteredFAQs = faqItems.filter(
        (item) =>
            item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.answer.toLowerCase().includes(searchQuery.toLowerCase()),
    )

    const toggleItem = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    const handleBookCall = () => {
        if (typeof window !== "undefined") {
            window.open("https://calendly.com/claireozoagu/let-s-talk-about-your-need", "_blank")
        }
    }

    return (
        <section className="relative bg-zinc-950 py-16 md:py-24">
            <div className="absolute inset-0 bg-gradient-to-t from-violet-950/10 to-transparent" />

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 right-0 w-64 h-64 bg-violet-600/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-violet-600/10 rounded-full blur-[100px]" />
            </div>

            <div className="container px-4 md:px-6 mx-auto max-w-5xl relative z-10">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-10 md:mb-16"
                >
                    <div className="inline-block">
                        <span className="inline-block bg-violet-500/20 text-violet-300 text-sm font-medium px-4 py-1 rounded-full mb-4">
                            Got Questions?
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-100 mb-4">
                        Frequently Asked <span className="text-violet-300">Questions</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Everything you need to know about working with a professional virtual assistant. Can&apos;t find the answer
                        you&apos;re looking for? Feel free to contact me directly.
                    </p>
                </motion.div>

                {/* Search bar */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                    className="relative max-w-md mx-auto mb-10"
                >
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input
                            type="text"
                            placeholder="Search questions..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10 py-2 w-full bg-zinc-900/50 border-gray-800 text-gray-200 rounded-lg focus:ring-violet-500 focus:border-violet-500"
                        />
                    </div>
                </motion.div>

                {/* FAQ accordion */}
                <div className="space-y-4">
                    {filteredFAQs.length > 0 ? (
                        filteredFAQs.map((item, index) => (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                key={index}
                                className="border border-gray-800 rounded-xl overflow-hidden bg-zinc-900/20 hover:bg-zinc-900/30 transition-colors duration-200"
                            >
                                <button
                                    onClick={() => toggleItem(index)}
                                    className="flex justify-between items-center w-full px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:ring-inset transition-colors duration-200"
                                >
                                    <span className="text-lg font-medium text-gray-200">{item.question}</span>
                                    <span className="ml-6 flex-shrink-0 text-gray-400">
                                        {activeIndex === index ? (
                                            <ChevronUp className="h-5 w-5 text-violet-400" />
                                        ) : (
                                            <ChevronDown className="h-5 w-5" />
                                        )}
                                    </span>
                                </button>

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
                        ))
                    ) : (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-10">
                            <p className="text-gray-400">No questions found matching your search.</p>
                        </motion.div>
                    )}
                </div>

                {/* Contact CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="mt-16 text-center bg-gradient-to-r from-violet-900/20 to-purple-900/20 p-8 rounded-2xl border border-violet-800/20"
                >
                    <h3 className="text-xl md:text-2xl font-medium text-white mb-3">Still have questions?</h3>
                    <p className="text-gray-400 mb-6 max-w-lg mx-auto">
                        I&apos;m here to help! Schedule a free consultation call and let&apos;s discuss how I can support your
                        business needs.
                    </p>
                    <button
                        onClick={handleBookCall}
                        className="inline-flex items-center px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-full transition-colors duration-300 shadow-lg shadow-violet-900/30"
                    >
                        <MessageCircle className="mr-2 h-5 w-5" />
                        Schedule a Consultation
                    </button>
                </motion.div>
            </div>
        </section>
    )
}

