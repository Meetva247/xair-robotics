"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroScene } from "@/components/3d/HeroScene";

export function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-background flex items-center justify-center">
            {/* 3D Background */}
            <HeroScene />

            {/* Content */}
            <div className="container relative z-10 px-4 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm"
                >
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">
                        The Future of Digital Experience is Here
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-display font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight mb-6"
                >
                    Building <span className="text-gradient">Intelligent</span>
                    <br /> Digital Futures
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10"
                >
                    AI-powered systems engineered for scale. We help tech founders and
                    enterprises create next-generation digital experiences.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <Button size="lg" variant="gradient" className="gap-2 rounded-full h-12 px-8 text-base shadow-lg shadow-purple-500/25">
                        Get Started <ArrowRight className="w-4 h-4" />
                    </Button>
                    <Button size="lg" variant="outline" className="gap-2 rounded-full h-12 px-8 text-base border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm">
                        View Projects
                    </Button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
            </motion.div>
        </section>
    );
}
