'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }: { onComplete?: () => void }) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            if (onComplete) onComplete();
        }, 3500); // Cinematic duration
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, filter: 'blur(20px)' }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="fixed inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-center overflow-hidden"
                >
                    <div className="relative scale-150">
                        {/* Netflix-style Logo Animation (Ribbon Effect) */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="flex flex-col items-center"
                        >
                            <div className="w-24 h-24 bg-orange-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-orange-600/40 mb-6 relative overflow-hidden group">
                                <span className="text-4xl font-black text-white relative z-10">FB</span>

                                {/* Animated Shine Sweep */}
                                <motion.div
                                    initial={{ x: '-100%' }}
                                    animate={{ x: '100%' }}
                                    transition={{ repeat: Infinity, duration: 1.5, ease: "linear", repeatDelay: 0.5 }}
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 z-0"
                                />
                            </div>

                            {/* Loading Bar */}
                            <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ x: '-100%' }}
                                    animate={{ x: '0%' }}
                                    transition={{ duration: 3, ease: "easeInOut" }}
                                    className="h-full w-full bg-orange-600 shadow-[0_0_15px_rgba(234,88,12,0.6)]"
                                />
                            </div>
                        </motion.div>

                        {/* Background Ambient Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] -z-10" />
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="absolute bottom-12 text-[10px] font-black tracking-[0.5em] text-orange-500/50 uppercase"
                    >
                        Fermento Digital Infrastructure
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
