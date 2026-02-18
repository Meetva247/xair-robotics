"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Trophy, Clock, Target } from "lucide-react";
import { HeroScene } from "@/components/3d/HeroScene";
import { cn } from "@/lib/utils";

const stats = [
    { label: "Years of Analysis", value: "10+", icon: Clock },
    { label: "Projects Delivered", value: "500+", icon: Target },
    { label: "Team Members", value: "50+", icon: Users },
    { label: "Awards Won", value: "25+", icon: Trophy },
];

const timeline = [
    { year: "2020", title: "Inception", description: "Xair was founded with a vision to revolutionize digital experiences through AI." },
    { year: "2021", title: "First Major Shift", description: "Launched our proprietary AI engine, setting a new standard in automation." },
    { year: "2022", title: "Global Expansion", description: "Opened offices in London and Tokyo to serve our growing international client base." },
    { year: "2023", title: "Next-Gen Platform", description: "Released Xair V2, integrating advanced machine learning capabilities." },
];

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <HeroScene />
                </div>
                <div className="container mx-auto px-4 text-center z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="font-display font-bold text-5xl md:text-7xl mb-6"
                    >
                        About <span className="text-gradient">Xair</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-muted-foreground max-w-2xl mx-auto"
                    >
                        We are architects of the digital future. Combining human creativity with artificial intelligence to build systems that scale.
                    </motion.p>
                </div>
            </section>

            {/* Stats Section */}
            <section className="container mx-auto px-4 py-20">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors"
                        >
                            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mx-auto mb-4">
                                <stat.icon size={24} />
                            </div>
                            <h3 className="font-display font-bold text-3xl md:text-4xl mb-2">{stat.value}</h3>
                            <p className="text-muted-foreground">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="container mx-auto px-4 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="font-display font-bold text-4xl mb-6">Our Mission</h2>
                        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                            To empower organizations with intelligent digital systems that drive growth, efficiency, and innovation. We believe in a future where technology amplifies human potential, not replaces it.
                        </p>
                        <h2 className="font-display font-bold text-4xl mb-6">Our Vision</h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            To be the global standard for AI-driven digital transformation, creating a world where every interaction is seamless, intelligent, and impactful.
                        </p>
                    </div>
                    <div className="relative h-[400px] rounded-3xl overflow-hidden glass">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20" />
                        {/* Decorative abstract art */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-48 h-48 border-4 border-white/10 rounded-full animate-pulse" />
                            <div className="absolute w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="container mx-auto px-4 py-20">
                <h2 className="font-display font-bold text-4xl text-center mb-16">Our Journey</h2>
                <div className="relative max-w-4xl mx-auto">
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />

                    {timeline.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className={cn(
                                "relative flex items-center gap-8 mb-12 md:mb-24 last:mb-0",
                                index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                            )}
                        >
                            <div className="md:w-1/2" />
                            <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />
                            <div className="flex-1 md:w-1/2 pl-12 md:pl-0 md:text-center md:px-12">
                                <div className={cn(
                                    "bg-white/5 border border-white/10 p-6 rounded-2xl",
                                    index % 2 === 0 ? "md:text-left" : "md:text-right"
                                )}>
                                    <span className="text-primary font-bold text-xl block mb-2">{item.year}</span>
                                    <h3 className="font-display font-bold text-2xl mb-2">{item.title}</h3>
                                    <p className="text-muted-foreground">{item.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
