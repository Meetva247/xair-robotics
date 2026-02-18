"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTABanner() {
    return (
        <section className="container mx-auto px-4 py-24">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-blue-900/40 to-purple-900/40 p-12 md:p-24 text-center">
                {/* Animated Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[100px]" />
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[80px]" />
                </div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="font-display font-bold text-4xl md:text-6xl mb-6 tracking-tight text-white"
                >
                    Ready to Build the <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Future?</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10"
                >
                    Join the leading companies using Xair to power their next-generation digital experiences. Scale faster, smarter, and better.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Button size="lg" variant="gradient" className="h-14 px-8 text-lg rounded-full shadow-xl shadow-blue-500/20 w-full sm:w-auto">
                        Get Started Now <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-white/20 hover:bg-white/10 w-full sm:w-auto">
                        Book a Demo
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
