// "use client"

// import Image from "next/image"
// import { useState, useEffect } from "react"
// import { ArrowUpRight } from "lucide-react"
// import { cn } from "@/app/lib/utils"
// import { Marquee } from "@/components/ui/marquee"
// import { motion } from "framer-motion"

// const stats = [
//     { number: "95%", label: "Client Retention" },
//     { number: "10+", label: "Years Experience" },
//     { number: "500+", label: "Projects Delivered" },
// ]

// function Stat({ number, label }: { number: string; label: string }) {
//     return (
//         <motion.div
//             className="space-y-1 sm:space-y-2"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//         >
//             <div className="font-sans text-2xl sm:text-3xl font-light text-emerald-600">{number}</div>
//             <div className="text-xs sm:text-sm text-neutral-600">{label}</div>
//         </motion.div>
//     )
// }

// export default function HeroSection() {
//     const [scrollY, setScrollY] = useState(0)

//     useEffect(() => {
//         const handleScroll = () => setScrollY(window.scrollY)
//         window.addEventListener("scroll", handleScroll, { passive: true })
//         return () => window.removeEventListener("scroll", handleScroll)
//     }, [])

//     return (
//         <section className="relative min-h-screen w-full bg-white overflow-hidden">
//             {/* Split Background */}
//             <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-12 max-h-[100vh] min-h-[80vh]">
//                 <div className="col-span-full md:col-span-7 bg-white" />
//                 <div className="hidden md:block md:col-span-5 bg-black/25" />
//             </div>

//             {/* Main Content */}
//             <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-20">
//                 <div className="grid min-h-[80vh] grid-cols-1 md:grid-cols-12 items-center gap-8">
//                     {/* Left Content */}
//                     <motion.div
//                         className="col-span-full md:col-span-7 md:pr-12"
//                         initial={{ opacity: 0, x: -50 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.5 }}
//                     >
//                         <div className="space-y-6 sm:space-y-8">
//                             <motion.div
//                                 className="flex items-center space-x-4"
//                                 initial={{ opacity: 0, y: -20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ delay: 0.2, duration: 0.5 }}
//                             >
//                                 <div className="h-[2px] w-12 bg-emerald-600" />
//                                 <span className="font-mono text-xs sm:text-sm uppercase tracking-wider text-neutral-600">
//                                     Business Strategy
//                                 </span>
//                             </motion.div>

//                             <motion.h1
//                                 className="font-sans text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-black"
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ delay: 0.4, duration: 0.5 }}
//                             >
//                                 Build & <span className="text-rose-500">Breathe</span> Through
//                                 <br className="hidden sm:block" />
//                                 Tailored Solutions
//                             </motion.h1>

//                             <motion.p
//                                 className="max-w-xl text-base sm:text-lg text-neutral-600"
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ delay: 0.6, duration: 0.5 }}
//                             >
//                                 Empowering business owners with seamless systems and unwavering support for sustainable growth.
//                             </motion.p>

//                             <motion.div
//                                 className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8"
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ delay: 0.8, duration: 0.5 }}
//                             >
//                                 <button
//                                     className="group relative flex items-center space-x-2 bg-black px-6 sm:px-8 py-3 sm:py-4 text-white transition-all hover:pr-12 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
//                                     aria-label="Get Started"
//                                 >
//                                     <span>Get Started</span>
//                                     <ArrowUpRight className="absolute right-4 sm:right-6 h-4 w-4 opacity-0 transition-all group-hover:right-4 group-hover:opacity-100" />
//                                 </button>

//                                 <button
//                                     className={cn(
//                                         "border-b-2 border-transparent px-2 py-1 text-neutral-600 transition-all",
//                                         "hover:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600",
//                                     )}
//                                     aria-label="Learn More"
//                                 >
//                                     Learn More
//                                 </button>
//                             </motion.div>
//                         </div>
//                     </motion.div>

//                     {/* Right Content - Image Area */}
//                     <motion.div
//                         className="col-span-full md:col-span-5 h-full mt-8 md:mt-0"
//                         initial={{ opacity: 0, x: 50 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.5 }}
//                     >
//                         <div className="relative aspect-[4/5] w-full max-w-md mx-auto md:max-w-none overflow-hidden">
//                             <Image
//                                 src="/gooo.png"
//                                 alt="Strategic Business Growth"
//                                 fill
//                                 sizes="(max-width: 768px) 100vw, 50vw"
//                                 className="object-contain transition-transform duration-700 hover:scale-105"
//                                 priority
//                             />
//                             <div className="absolute inset-7 bg-black/10" />
//                         </div>
//                     </motion.div>
//                 </div>
//             </div>        
//         </section>
//     )
// }

