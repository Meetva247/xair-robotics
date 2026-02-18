"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bot, Cpu, Globe, Zap, Code, Shield, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
    {
        title: "AI Development",
        description: "Custom AI models and intelligent agents tailored to your business needs.",
        details: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
        icon: Bot,
        color: "from-blue-500 to-cyan-500",
    },
    {
        title: "Web & App Engineering",
        description: "High-performance web and mobile applications built with modern stacks.",
        details: ["Next.js & React", "Native Mobile Apps", "Progressive Web Apps", "Enterprise Portals"],
        icon: Globe,
        color: "from-purple-500 to-pink-500",
    },
    {
        title: "Automation Systems",
        description: "Streamline operations with automated workflows and intelligent bots.",
        details: ["Process Automation", "RPA Solutions", "Workflow Optimization", "Integration Services"],
        icon: Cpu,
        color: "from-amber-500 to-orange-500",
    },
    {
        title: "AI Agents",
        description: "Autonomous agents that can handle complex tasks and customer interactions.",
        details: ["Customer Support Bots", "Virtual Assistants", "Autonomous Task Agents", "Multi-Agent Systems"],
        icon: Zap,
        color: "from-green-500 to-emerald-500",
    },
    {
        title: "Cloud & DevOps",
        description: "Scalable cloud infrastructure and CI/CD pipelines for robust deployment.",
        details: ["AWS / Azure / GCP", "Docker & Kubernetes", "CI/CD Pipelines", "Infrastructure as Code"],
        icon: Code,
        color: "from-indigo-500 to-violet-500",
    },
    {
        title: "Cybersecurity",
        description: "Advanced security protocols to protect your digital assets and data.",
        details: ["Threat Detection", "Security Audits", "Data Encryption", "Compliance Management"],
        icon: Shield,
        color: "from-red-500 to-rose-500",
    },
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen pt-24 pb-20">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="font-display font-bold text-5xl md:text-6xl mb-6"
                    >
                        Our <span className="text-gradient">Capabilities</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-muted-foreground"
                    >
                        We offer a comprehensive suite of digital services designed to accelerate your growth and future-proof your business.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 hover:bg-white/10 transition-colors overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                                <ArrowUpRight className="w-8 h-8 text-white" />
                            </div>

                            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shrink-0`}>
                                    <service.icon className="w-8 h-8 text-white" />
                                </div>

                                <div className="flex-1">
                                    <h3 className="font-display font-bold text-2xl md:text-3xl mb-4">{service.title}</h3>
                                    <p className="text-muted-foreground text-lg mb-8">{service.description}</p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {service.details.map((detail, i) => (
                                            <div key={i} className="flex items-center gap-2 text-sm text-white/80">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                {detail}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="w-full md:w-auto mt-6 md:mt-0 flex flex-col justify-end h-full">
                                    <Button variant="outline" className="w-full md:w-auto">Learn More</Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
