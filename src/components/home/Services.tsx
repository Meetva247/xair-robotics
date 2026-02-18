"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bot, Cpu, Globe, Zap, Code, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
    {
        title: "AI Development",
        description: "Custom AI models and intelligent agents tailored to your business needs.",
        icon: Bot,
        color: "from-blue-500 to-cyan-500",
    },
    {
        title: "Web & App Engineering",
        description: "High-performance web and mobile applications built with modern stacks.",
        icon: Globe,
        color: "from-purple-500 to-pink-500",
    },
    {
        title: "Automation Systems",
        description: "Streamline operations with automated workflows and intelligent bots.",
        icon: Cpu,
        color: "from-amber-500 to-orange-500",
    },
    {
        title: "AI Agents",
        description: "Autonomous agents that can handle complex tasks and customer interactions.",
        icon: Zap,
        color: "from-green-500 to-emerald-500",
    },
    {
        title: "Cloud & DevOps",
        description: "Scalable cloud infrastructure and CI/CD pipelines for robust deployment.",
        icon: Code,
        color: "from-indigo-500 to-violet-500",
    },
    {
        title: "Cybersecurity",
        description: "Advanced security protocols to protect your digital assets and data.",
        icon: Shield,
        color: "from-red-500 to-rose-500",
    },
];

export function Services() {
    return (
        <section className="container mx-auto px-4 py-20">
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="font-display font-bold text-4xl md:text-5xl mb-4"
                >
                    Our <span className="text-gradient">Services</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-muted-foreground text-lg max-w-2xl mx-auto"
                >
                    Cutting-edge solutions to propel your business into the future.
                    We blend creativity with technology.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative p-1 rounded-2xl bg-gradient-to-br from-white/10 to-transparent hover:from-white/20 transition-all duration-300"
                    >
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"
                            style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
                        />

                        <div className="relative h-full bg-background/50 backdrop-blur-xl border border-white/5 rounded-xl p-8 hover:border-white/10 transition-colors">
                            <div className={cn("w-12 h-12 rounded-lg mb-6 flex items-center justify-center bg-gradient-to-br", service.color)}>
                                <service.icon className="w-6 h-6 text-white" />
                            </div>

                            <h3 className="font-display font-bold text-xl mb-3">{service.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {service.description}
                            </p>

                            <div className="mt-6 flex items-center text-sm font-medium text-white/50 group-hover:text-white transition-colors">
                                Learn more <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
