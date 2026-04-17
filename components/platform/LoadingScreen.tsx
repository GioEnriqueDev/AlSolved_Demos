'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }: { onComplete?: () => void }) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Fast, cinematic timing: 2.5s total
        const timer = setTimeout(() => {
            setIsVisible(false);
            if (onComplete) setTimeout(onComplete, 500);
        }, 2200);
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <AnimatePresence mode="wait">
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden"
                >
                    <div className="relative flex flex-col items-center justify-center w-full max-w-lg px-8">
                        {/* The Liquid Reveal Container */}
                        <div className="relative overflow-hidden">
                            {/* Text Mask */}
                            <h1 className="text-5xl md:text-7xl font-black tracking-tighter italic uppercase text-transparent bg-clip-text bg-white/10 relative z-20">
                                FERMENTO
                            </h1>

                            {/* Liquid Fill Animation */}
                            <motion.div
                                initial={{ height: '0%' }}
                                animate={{ height: '100%' }}
                                transition={{ duration: 1.8, ease: "easeInOut" }}
                                className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-orange-600 via-amber-500 to-amber-300 z-10 mix-blend-screen"
                            />

                            {/* Overlay Text to Restore Sharpness */}
                            <h1 className="absolute inset-0 text-5xl md:text-7xl font-black tracking-tighter italic uppercase text-transparent bg-clip-text bg-gradient-to-t from-transparent to-white/5 z-30">
                                FERMENTO
                            </h1>
                        </div>

                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 1.8, ease: "easeInOut" }}
                            className="h-1 bg-orange-600 mt-4 shadow-[0_0_20px_rgba(234,88,12,0.8)]"
                        />

                        <motion.p
                            initial={{ opacity: 0, letterSpacing: '0.1em' }}
                            animate={{ opacity: 1, letterSpacing: '0.5em' }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                            className="text-[10px] font-bold text-orange-500/60 uppercase mt-4 text-center"
                        >
                            Digital Brewing Experience
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
