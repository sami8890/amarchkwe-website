"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Calendar,
  Database,
  Search,
  ListTodo,
  Headphones,
  Mic,
  BookOpen,
  Radio,
  Video,
  Users,
  Star,
} from "lucide-react";

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState(0);
  const categories = [
    { id: 0, name: "Virtual Support" },
    { id: 1, name: "Voiceover Services" },
    { id: 2, name: "Public Speaking" },
  ];

  const serviceContent = [
    {
      title: "Virtual Support Solutions",
      description:
        "Avoid the overwhelm and burnout, delegate and buy yourself the freedom to take the big growth goals.",
      items: [
        {
          icon: <Mail className="w-5 h-5" />,
          text: "Email management and correspondence",
        },
        {
          icon: <Calendar className="w-5 h-5" />,
          text: "Scheduling appointments and managing calendars",
        },
        {
          icon: <Database className="w-5 h-5" />,
          text: "Data entry and management",
        },
        { icon: <Search className="w-5 h-5" />, text: "Research" },
        {
          icon: <ListTodo className="w-5 h-5" />,
          text: "Task management and project coordination",
        },
        {
          icon: <Headphones className="w-5 h-5" />,
          text: "IT & Customer Support",
        },
      ],
    },
    {
      title: "Voiceover Services",
      description:
        "Your brand needs a voice to share its brand message and with an excellent and attention grabbing voiceover service.",
      items: [
        {
          icon: <Mic className="w-5 h-5" />,
          text: "Commercial voiceovers for advertisements and promotions",
        },
        {
          icon: <Video className="w-5 h-5" />,
          text: "Explainer video voiceovers for tutorials and demonstrations",
        },
        {
          icon: <BookOpen className="w-5 h-5" />,
          text: "Audiobook narration for authors and publishers",
        },
        {
          icon: <Radio className="w-5 h-5" />,
          text: "Podcasting voiceovers for introductions and outros",
        },
        {
          icon: <Video className="w-5 h-5" />,
          text: "Corporate video voiceovers for training and presentations",
        },
      ],
    },
    {
      title: "Public Speaking Services",
      description:
        "Engage, impact and inspire your audience with my public speaking services.",
      items: [
        {
          icon: <Users className="w-5 h-5" />,
          text: "Workshop facilitation on topics such as time management",
        },
        {
          icon: <Star className="w-5 h-5" />,
          text: "Goal setting workshops and training sessions",
        },
        {
          icon: <Users className="w-5 h-5" />,
          text: "Motivational speaking to inspire and empower audiences",
        },
      ],
    },
  ];

  const handleBookCall = () => {
    window.open(
      "https://calendly.com/claireozoagu/let-s-talk-about-your-need",
      "_blank"
    );
  };

  return (
    <section className="w-full py-24 bg-zinc-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="bg-[#0002AF] text-violet-300 text-sm font-medium rounded-full px-4 py-1.5 inline-block mb-4">
            Expert Services
          </div>
          <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
            Professional Solutions Tailored For You
          </h2>
          <p className="text-gray-400 text-lg">
            Choose from a range of specialized services designed to elevate your
            business and help you achieve your goals.
          </p>
        </motion.div>

        {/* Service Category Navigation */}
        <div className="flex flex-wrap justify-center mb-12 gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-600/20"
                  : "bg-[#0002AF] text-gray-300 hover:bg-zinc-700"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Service Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-2xl p-8 md:p-10 shadow-xl border border-zinc-700">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {serviceContent[activeCategory].title}
              </h3>
              <p className="text-gray-400 text-lg mb-8">
                {serviceContent[activeCategory].description}
              </p>

              {/* Service Items Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {serviceContent[activeCategory].items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start bg-zinc-800/50 rounded-xl p-4 hover:bg-zinc-800 transition-colors duration-300"
                  >
                    <div className="mr-4 p-2 bg-violet-600/20 rounded-lg text-violet-400">
                      {item.icon}
                    </div>
                    <p className="text-gray-300">{item.text}</p>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="flex justify-center mt-10">
                <button
                  onClick={handleBookCall}
                  className="group px-8 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-full transition-all duration-300 flex items-center shadow-lg shadow-violet-600/20"
                >
                  Get Started With {categories[activeCategory].name}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Service Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {[
            {
              number: "01",
              title: "Personalized Service",
              desc: "Tailored solutions designed to meet your specific business needs.",
            },
            {
              number: "02",
              title: "Professional Quality",
              desc: "Expert-level work delivered with precision and attention to detail.",
            },
            {
              number: "03",
              title: "Responsive Support",
              desc: "Quick communication and fast turnaround on all projects.",
            },
          ].map((highlight, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 + 0.3 }}
              className="border border-zinc-800 rounded-xl p-6 bg-zinc-900/50"
            >
              <div className="text-violet-400 font-bold text-xl mb-4">
                {highlight.number}
              </div>
              <h4 className="text-xl font-bold text-white mb-2">
                {highlight.title}
              </h4>
              <p className="text-gray-400">{highlight.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
