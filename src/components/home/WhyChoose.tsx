"use client";

import React from "react";
import { motion } from "framer-motion";
import { Rocket, Target, Users, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
    {
        title: "Future-Proof Architecture",
        description: "Built on next-generation frameworks that scale with your ambitions.",
        icon: Rocket,
    },
    {
        title: "Precision Engineering",
        description: "Every pixel and line of code is crafted for maximum performance.",
        icon: Target,
    },
    {
        title: "User-Centric Design",
        description: "Interfaces that feel intuitive, human, and wonderfully intelligent.",
        icon: Users,
    },
    {
        title: "Lightning Fast",
        description: "Optimized for speed, ensuring instant load times and smooth interactions.",
        icon: Zap,
    },
];

export function WhyChoose() {
    return (
        <section className="container mx-auto px-4 py-20 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="font-display font-bold text-4xl md:text-5xl mb-6 leading-tight"
                    >
                        Why <span className="text-gradient">Visionaries</span> <br />
                        Choose Xair
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-muted-foreground text-lg mb-8 max-w-lg"
                    >
                        We don't just build websites; we engineer digital ecosystems that define industries.
                        Experience the perfect synergy of design and technology.
                    </motion.p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                className="flex flex-col gap-3"
                            >
                                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 text-primary">
                                    <feature.icon size={20} />
                                </div>
                                <h3 className="font-display font-bold text-lg">{feature.title}</h3>
                                <p className="text-sm text-muted-foreground">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative h-[600px] rounded-3xl overflow-hidden glass border border-white/10"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20" />
                    {/* Abstract visual representation */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-64 h-64">
                            <div className="absolute inset-0 border-2 border-white/20 rounded-full animate-[spin_10s_linear_infinite]" />
                            <div className="absolute inset-4 border-2 border-primary/40 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                            <div className="absolute inset-12 border-2 border-secondary/60 rounded-full animate-[spin_8s_linear_infinite]" />
                            <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm">
                                <span className="font-display font-bold text-2xl text-white">XAIR</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
