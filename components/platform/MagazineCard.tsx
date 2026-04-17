'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Plus, ChevronDown, Check } from 'lucide-react';
import { getAssetPath } from '@/lib/utils';
import Link from 'next/link';

interface Magazine {
    id: number;
    title: string;
    image: string;
    year: string;
}

export default function MagazineCard({ magazine }: { magazine: Magazine }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative flex-none w-48 md:w-64 aspect-[2/3] group z-10"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Link href="/reader">
                <motion.div
                    className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl bg-slate-900 border border-white/5"
                    animate={{
                        scale: isHovered ? 1.05 : 1,
                        y: isHovered ? -10 : 0
                    }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                    <img
                        src={getAssetPath(magazine.image)}
                        className="w-full h-full object-cover"
                        alt={magazine.title}
                        onError={(e) => {
                            e.currentTarget.src = `https://images.unsplash.com/photo-1518176259641-0f8a49c44c3c?auto=format&fit=crop&q=80&w=640&sig=${magazine.id}`;
                        }}
                    />

                    {/* Simple Normal Grid Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                    {/* Hover Content Peek */}
                    <AnimatePresence>
                        {isHovered && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex flex-col justify-end p-6"
                            >
                                {/* Static Internal Page Peek (Simulated with Blur/Opacity) */}
                                <div className="absolute inset-x-0 top-0 h-1/2 overflow-hidden opacity-30">
                                    <div className="flex gap-2 w-[200%] animate-slide-preview">
                                        {Array.from({ length: 4 }).map((_, i) => (
                                            <div key={i} className="w-20 h-32 bg-white/20 rounded shadow-lg border border-white/10" />
                                        ))}
                                    </div>
                                </div>

                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="space-y-4"
                                >
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2">
                                            <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">98% Match</span>
                                            <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">{magazine.year}</span>
                                        </div>
                                        <h4 className="text-xl font-black text-white leading-tight uppercase italic">{magazine.title}</h4>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black shadow-lg">
                                            <Play className="w-5 h-5 fill-current" />
                                        </div>
                                        <div className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center text-white hover:border-white transition-colors">
                                            <Plus className="w-5 h-5" />
                                        </div>
                                        <div className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center text-white hover:border-white transition-colors">
                                            <Check className="w-5 h-5" />
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                        <span>Artigianale</span>
                                        <span className="w-1 h-1 rounded-full bg-slate-700" />
                                        <span>Premium</span>
                                        <span className="w-1 h-1 rounded-full bg-slate-700" />
                                        <span>128 Pagine</span>
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </Link>

            <style jsx>{`
                @keyframes slide-preview {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
                .animate-slide-preview {
                    animation: slide-preview 10s linear infinite;
                }
            `}</style>
        </div>
    );
}
