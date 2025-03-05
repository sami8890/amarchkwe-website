// "use client";

// import React from 'react';
// import { motion } from "framer-motion";
// import { Shield, Zap, HeartHandshake, Clock } from "lucide-react";

// const ANIMATION_DURATION = 0.5;
// const HOVER_SCALE = 1.02;

// type Feature = {
//     icon: React.ReactNode;
//     title: string;
//     description: string;
//     ariaLabel: string;
// }

// const features: Feature[] = [
//     {
//         icon: <Shield className="w-8 h-8" />,
//         title: "Trusted Excellence",
//         description: "Our proven track record of delivering high-quality solutions has earned us the trust of clients across industries.",
//         ariaLabel: "Trusted Excellence feature"
//     },
//     {
//         icon: <Zap className="w-8 h-8" />,
//         title: "Rapid Innovation",
//         description: "We stay ahead of technological trends to provide cutting-edge solutions that drive your business forward.",
//         ariaLabel: "Rapid Innovation feature"
//     },
//     {
//         icon: <HeartHandshake className="w-8 h-8" />,
//         title: "Client-Centric Approach",
//         description: "Your success is our priority. We work closely with you to understand and exceed your expectations.",
//         ariaLabel: "Client-Centric Approach feature"
//     },
//     {
//         icon: <Clock className="w-8 h-8" />,
//         title: "Timely Delivery",
//         description: "We understand the importance of time in business and consistently deliver projects within agreed timelines.",
//         ariaLabel: "Timely Delivery feature"
//     }
// ];

// const FeatureCard = ({ icon, title, description, ariaLabel }: Feature) => (
//     <motion.div
//         className="relative group"
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: ANIMATION_DURATION }}
//         whileHover={{ scale: HOVER_SCALE }}
//         role="article"
//         aria-label={ariaLabel}
//     >
//         <div
//             className="absolute inset-0 bg-gradient-to-r from-violet-600/10 to-indigo-600/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"
//             aria-hidden="true"
//         />
//         <div className="relative h-full bg-black/40 border border-white/10 backdrop-blur-sm p-8 rounded-xl hover:border-violet-500/50 transition-all duration-300">
//             <div className="inline-flex p-4 bg-violet-600/20 rounded-xl text-violet-400 mb-6" aria-hidden="true">
//                 {icon}
//             </div>

//             <h3 className="text-xl font-semibold text-white mb-4 bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
//                 {title}
//             </h3>

//             <p className="text-neutral-400 leading-relaxed">
//                 {description}
//             </p>
//         </div>
//     </motion.div>
// );

// export default function WhyChooseUs() {
//     return (
//         <section className="relative bg-black text-white py-24">
//             <div
//                 className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(124,58,237,0.1),transparent_60%)]"
//                 aria-hidden="true"
//             />

//             <div className="relative mx-auto max-w-7xl px-6">
//                 <motion.div
//                     className="text-center mb-16"
//                     initial={{ opacity: 0, y: -20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                 >
//                     <h2 className="text-4xl font-bold mb-6">
//                         Why{" "}
//                         <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
//                             Choose Us
//                         </span>
//                     </h2>
//                     <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
//                         We combine expertise, innovation, and dedication to deliver exceptional digital solutions that help your business thrive in the modern landscape.
//                     </p>
//                 </motion.div>

//                 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//                     {features.map((feature, index) => (
//                         <FeatureCard key={index} {...feature} />
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }