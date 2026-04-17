'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface BeerLogoProps {
    className?: string; // Kept for compatibility if needed
    size?: 'sm' | 'md' | 'lg';
    duration?: number;
}

export default function BeerLogo({ size = 'md', duration = 3.5 }: BeerLogoProps) {
    const scales = {
        sm: 0.5,
        md: 1,
        lg: 1.5
    };

    const scale = scales[size];

    return (
        <div className="relative flex items-center justify-center p-4" style={{ transform: `scale(${scale})` }}>
            {/* The Glass Container */}
            <div className="relative w-24 h-32 border-x-4 border-b-4 border-white/30 rounded-b-2xl overflow-hidden bg-white/5 backdrop-blur-sm">

                {/* Beer Liquid */}
                <motion.div
                    initial={{ height: '0%' }}
                    animate={{ height: '80%' }}
                    transition={{ duration: duration, ease: "easeInOut" }}
                    className="absolute bottom-0 w-full bg-gradient-to-t from-orange-600 via-amber-500 to-amber-400 shadow-[inset_0_0_20px_rgba(0,0,0,0.2)]"
                >
                    {/* Bubbles */}
                    {Array.from({ length: 12 }).map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ bottom: -10, left: `${Math.random() * 100}%`, opacity: 0 }}
                            animate={{
                                bottom: '100%',
                                opacity: [0, 1, 0],
                                transition: {
                                    duration: 1 + Math.random() * 2,
                                    repeat: Infinity,
                                    delay: Math.random() * 4
                                }
                            }}
                            className="absolute w-1 h-1 bg-white/40 rounded-full"
                        />
                    ))}
                </motion.div>

                {/* Foam (Schiuma) */}
                <motion.div
                    initial={{ bottom: '0%' }}
                    animate={{ bottom: '80%' }}
                    transition={{ duration: duration, ease: "easeInOut" }}
                    className="absolute w-full h-8 z-10"
                >
                    <div className="relative w-full h-full flex items-center justify-center">
                        <div className="absolute top-0 w-[110%] h-8 bg-white rounded-full blur-[2px] shadow-lg" />
                        <div className="absolute -top-2 w-full h-6 bg-slate-50 rounded-full opacity-90" />

                        {/* Overflowing Foam Droplet */}
                        <motion.div
                            initial={{ opacity: 0, y: 0 }}
                            animate={{ opacity: [0, 1, 1, 0], y: [0, 40] }}
                            transition={{ duration: 2, delay: 4, repeat: Infinity, repeatDelay: 1 }}
                            className="absolute left-1 top-2 w-3 h-5 bg-white rounded-full blur-[1px]"
                        />
                    </div>
                </motion.div>
            </div>

            {/* Glass Shine */}
            <div className="absolute w-24 h-32 border-x-4 border-b-4 border-transparent rounded-b-2xl pointer-events-none">
                <div className="absolute left-2 top-2 w-1.5 h-20 bg-white/20 rounded-full blur-[1px]" />
                <div className="absolute right-3 top-4 w-1 h-10 bg-white/10 rounded-full blur-[1px]" />
            </div>

            {/* Ambient Glow */}
            <div className="absolute w-32 h-32 bg-amber-500/20 rounded-full blur-[40px] -z-10 animate-pulse" />
        </div>
    );
}
