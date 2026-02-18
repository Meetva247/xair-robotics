"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
    {
        quote: "Xair transformed our digital presence. The AI integration is seamless and the design is simply breathtaking.",
        author: "Elena Rodriguez",
        role: "CTO, Nexus Dynamics",
        rating: 5,
    },
    {
        quote: "Working with Xair was an absolute game-changer. They delivered a platform that is lightyears ahead of our competition.",
        author: "Marcus Chen",
        role: "Founder, Quantum Leap",
        rating: 5,
    },
    {
        quote: "The speed and responsiveness of the site they built for us is incredible. Truly engineering at its finest.",
        author: "Sarah Jenkins",
        role: "VP of Engineering, Stratos",
        rating: 5,
    },
    {
        quote: "A visionary team that understands both technology and aesthetics. Highly recommended for any serious startup.",
        author: "David Okonjo",
        role: "CEO, FutureSpace",
        rating: 5,
    },
];

export function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="container mx-auto px-4 py-24 relative">
            <div className="text-center mb-16">
                <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
                    Trusted by <span className="text-gradient">Innovators</span>
                </h2>
                <p className="text-muted-foreground text-lg">
                    Join the forward-thinking companies building with Xair.
                </p>
            </div>

            <div className="relative max-w-4xl mx-auto h-[400px] md:h-[300px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0"
                    >
                        <div className="relative h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 flex flex-col justify-between">
                            <Quote className="absolute top-8 left-8 text-white/10 w-16 h-16 rot-180" />

                            <div className="relative z-10">
                                <div className="flex gap-1 mb-6">
                                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                                    ))}
                                </div>
                                <p className="font-display text-xl md:text-3xl font-medium leading-relaxed mb-8 text-white/90">
                                    "{testimonials[currentIndex].quote}"
                                </p>
                            </div>

                            <div className="relative z-10 flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                                    {testimonials[currentIndex].author[0]}
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">{testimonials[currentIndex].author}</h4>
                                    <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="flex justify-center gap-3 mt-8">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={cn(
                            "w-2 h-2 rounded-full transition-all duration-300",
                            index === currentIndex ? "w-8 bg-primary" : "bg-white/20 hover:bg-white/40"
                        )}
                        aria-label={`Go to testimonial ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
