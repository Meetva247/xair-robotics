"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        id: 1,
        title: "Quantum Financial",
        category: "FinTech",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        description: "A next-generation trading platform with real-time AI analytics.",
    },
    {
        id: 2,
        title: "Nebula Health",
        category: "Healthcare",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
        description: "AI-powered diagnostic tools for early disease detection.",
    },
    {
        id: 3,
        title: "CyberShield",
        category: "Security",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
        description: "Enterprise-grade cybersecurity infrastructure visualization.",
    },
    {
        id: 4,
        title: "EcoSmart Grid",
        category: "Energy",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop",
        description: "Smart city energy management system optimization.",
    },
    {
        id: 5,
        title: "AutoPilot X",
        category: "Automotive",
        image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1983&auto=format&fit=crop",
        description: "Autonomous vehicle fleet management dashboard.",
    },
    {
        id: 6,
        title: "Virtuoso",
        category: "Media",
        image: "https://images.unsplash.com/photo-1536240478700-b869060f5c79?q=80&w=2070&auto=format&fit=crop",
        description: "Immersive VR content distribution platform.",
    },
];

export default function ProjectsPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const categories = ["All", "FinTech", "Healthcare", "Security", "Energy", "Automotive", "Media"];

    const filteredProjects = selectedCategory === "All"
        ? projects
        : projects.filter(p => p.category === selectedCategory);

    return (
        <div className="min-h-screen pt-24 pb-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="font-display font-bold text-5xl md:text-6xl mb-6">Our Work</h1>
                    <p className="text-muted-foreground text-xl max-w-2xl mx-auto mb-10">
                        Showcasing the future of digital innovation through our selected case studies.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-6 py-2 rounded-full text-sm transition-all ${selectedCategory === cat
                                        ? "bg-primary text-white"
                                        : "bg-white/5 hover:bg-white/10 text-muted-foreground"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                key={project.id}
                                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
                            >
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 p-8 flex flex-col justify-end">
                                    <span className="text-primary text-sm font-medium mb-2">{project.category}</span>
                                    <h3 className="font-display font-bold text-2xl text-white mb-2">{project.title}</h3>
                                    <p className="text-white/80 text-sm line-clamp-2">{project.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
}
