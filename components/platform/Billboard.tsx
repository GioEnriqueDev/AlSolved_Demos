'use client';

import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Play, Info } from 'lucide-react';
import { getAssetPath } from '@/lib/utils';
import Link from 'next/link';

export default function Billboard() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const rotateX = useSpring(useTransform(mouseY, [-300, 300], [5, -5]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-5, 5]), springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        mouseX.set(clientX - innerWidth / 2);
        mouseY.set(clientY - innerHeight / 2);
    };

    return (
        <div
            onMouseMove={handleMouseMove}
            onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
            className="relative h-[85svh] w-full overflow-hidden perspective-1000"
        >
            {/* Background Image / Video with Parallax */}
            <motion.div
                style={{ rotateX, rotateY, scale: 1.05 }}
                className="absolute inset-0 z-0"
            >
                <img
                    src={getAssetPath('/images/billboard_hero_beer_masterpiece.png')}
                    className="w-full h-full object-cover object-center transition-all duration-700"
                    alt="Featured Magazine"
                    onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&q=80";
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
            </motion.div>

            {/* Content Overlay */}
            <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 max-w-2xl space-y-6 pt-20">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="space-y-2"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-600/20 border border-orange-500/30 mb-2">
                        <span className="text-[10px] font-black tracking-widest text-orange-500 uppercase">Edizione Platinum 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-9xl font-black text-white tracking-tighter leading-none uppercase italic">
                        Artisan <br />
                        <span className="text-orange-500 not-italic">Vol. 12</span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="text-slate-200 text-xl font-medium leading-relaxed drop-shadow-xl max-w-lg"
                >
                    L&apos;arte della fermentazione incontra il design digitale.
                    Un viaggio immersivo tra i segreti del rame e i luppoli d&apos;autore.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex items-center gap-4 pt-4"
                >
                    <Link
                        href="/reader"
                        className="flex items-center gap-3 px-10 py-5 bg-white text-black rounded-2xl font-black text-xl hover:bg-orange-500 hover:text-white transition-all shadow-2xl active:scale-95 group"
                    >
                        <Play className="w-6 h-6 fill-current group-hover:scale-110 transition-transform" /> Sfoglia Ora
                    </Link>
                    <button className="flex items-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-xl text-white rounded-2xl font-black text-xl hover:bg-white/20 transition-all border border-white/10 active:scale-95">
                        <Info className="w-6 h-6" /> Maggiori Info
                    </button>
                </motion.div>
            </div>

            {/* Ambient Bottom Glow */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-orange-600/10 to-transparent pointer-events-none" />
        </div>
    );
}
