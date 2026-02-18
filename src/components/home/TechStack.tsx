"use client";

import React from "react";
import { motion } from "framer-motion";

const technologies = [
    "Next.js", "React", "TypeScript", "Tailwind CSS", "Three.js", "Framer Motion", "Node.js", "GraphQL", "PostgreSQL", "OpenAI"
];

export function TechStack() {
    return (
        <section className="border-y border-white/5 bg-white/2 py-10 overflow-hidden">
            <div className="container mx-auto px-4 mb-8 text-center">
                <p className="text-sm text-muted-foreground uppercase tracking-widest">Powered by modern technologies</p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <motion.div
                    className="flex whitespace-nowrap gap-12 animate-infinite-scroll"
                    animate={{
                        x: [0, -1035],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 20,
                            ease: "linear",
                        },
                    }}
                >
                    {[...technologies, ...technologies, ...technologies].map((tech, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <span className="font-display font-bold text-2xl md:text-3xl text-white/20 group-hover:text-white/40 transition-colors cursor-default">
                                {tech}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
