"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const articles = [
    {
        id: 1,
        title: "The Future of Generative AI in Enterprise",
        excerpt: "How large language models are reshaping business operations and decision-making processes.",
        category: "Artificial Intelligence",
        author: "Dr. Sarah Chen",
        date: "Oct 12, 2023",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    },
    {
        id: 2,
        title: "Building Scalable Microservices Architecture",
        excerpt: "Best practices for designing resilient and high-performance distributed systems.",
        category: "Engineering",
        author: "James Wilson",
        date: "Sep 28, 2023",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    },
    {
        id: 3,
        title: "The Rise of Autonomous Agents",
        excerpt: "Exploring the next frontier of AI: agents that can plan, execute, and learn independently.",
        category: "Innovation",
        author: "Elena Rodriguez",
        date: "Sep 15, 2023",
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2006&auto=format&fit=crop",
    },
    {
        id: 4,
        title: "Securing the Future: Cyber Resilience",
        excerpt: "Strategies for protecting digital assets in an increasingly complex threat landscape.",
        category: "Security",
        author: "David Okonjo",
        date: "Aug 30, 2023",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop",
    },
    {
        id: 5,
        title: "UX Design for AI Interfaces",
        excerpt: "Designing intuitive and human-centric experiences for complex AI systems.",
        category: "Design",
        author: "Marcus Chen",
        date: "Aug 12, 2023",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    },
    {
        id: 6,
        title: "The Green Cloud: Sustainable Computing",
        excerpt: "How cloud providers and engineers are reducing the carbon footprint of digital infrastructure.",
        category: "Sustainability",
        author: "Sarah Jenkins",
        date: "Jul 25, 2023",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop",
    },
];

export default function BlogPage() {
    return (
        <div className="min-h-screen pt-24 pb-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="font-display font-bold text-5xl md:text-6xl mb-6"
                    >
                        Insights & <span className="text-gradient">News</span>
                    </motion.h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Latest thoughts, trends, and technologies shaping the future of digital.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <motion.article
                            key={article.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors"
                        >
                            <div className="relative h-48 w-full overflow-hidden">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white border border-white/10">
                                    {article.category}
                                </div>
                            </div>

                            <div className="flex-1 p-6 flex flex-col">
                                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                                    <div className="flex items-center gap-1">
                                        <User size={12} />
                                        {article.author}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Calendar size={12} />
                                        {article.date}
                                    </div>
                                </div>

                                <h2 className="font-display font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                                    <Link href={`/blog/${article.id}`}>
                                        {article.title}
                                    </Link>
                                </h2>

                                <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-1">
                                    {article.excerpt}
                                </p>

                                <Link
                                    href={`/blog/${article.id}`}
                                    className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                                >
                                    Read Article <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </div>
    );
}
