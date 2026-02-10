'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Play, Info } from 'lucide-react';
import { getAssetPath } from '@/lib/utils';
import Link from 'next/link';

export default function Billboard() {
    return (
        <div className="relative h-[85vh] w-full overflow-hidden">
            {/* Background Image / Video */}
            <div className="absolute inset-0">
                <img
                    src={getAssetPath('/images/p1.png')}
                    className="w-full h-full object-cover object-center"
                    alt="Featured Magazine"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 max-w-2xl space-y-6 pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-2"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-600/20 border border-orange-500/30 mb-2">
                        <span className="text-[10px] font-black tracking-widest text-orange-500 uppercase">Speciale 2026</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none uppercase italic">
                        Fermento <br />
                        <span className="text-orange-500">Birra</span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-slate-200 text-lg font-medium leading-relaxed drop-shadow-lg"
                >
                    Scopri l&apos;eccellenza del luppolo alieno e le nuove caldaie a fiamma diretta.
                    Il numero più atteso dell&apos;anno è ora disponibile in esclusiva digitale.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex items-center gap-4 pt-4"
                >
                    <Link
                        href="/reader"
                        className="flex items-center gap-3 px-8 py-4 bg-white text-black rounded-xl font-black text-xl hover:bg-slate-200 transition-all shadow-2xl"
                    >
                        <Play className="w-6 h-6 fill-current" /> Sfoglia Ora
                    </Link>
                    <button className="flex items-center gap-3 px-8 py-4 bg-white/20 backdrop-blur-md text-white rounded-xl font-black text-xl hover:bg-white/30 transition-all border border-white/10">
                        <Info className="w-6 h-6" /> Più Info
                    </button>
                </motion.div>
            </div>
        </div>
    );
}
