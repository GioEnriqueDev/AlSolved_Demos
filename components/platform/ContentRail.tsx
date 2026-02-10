'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { getAssetPath } from '@/lib/utils';
import Link from 'next/link';

interface Magazine {
    id: number;
    title: string;
    image: string;
    year: string;
}

export default function ContentRail({ title, magazines }: { title: string, magazines: Magazine[] }) {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth + 200 : scrollLeft + clientWidth - 200;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <div className="space-y-4 py-8 relative group/rail">
            <h2 className="px-8 md:px-16 text-2xl font-black text-white tracking-tight uppercase italic flex items-center gap-3">
                <div className="w-1.5 h-6 bg-orange-600 rounded-full"></div>
                {title}
            </h2>

            <div className="relative">
                {/* Scroll Controls */}
                <button
                    onClick={() => scroll('left')}
                    className="absolute left-0 top-0 bottom-0 z-20 w-16 bg-gradient-to-r from-black to-transparent opacity-0 group-hover/rail:opacity-100 transition-opacity flex items-center justify-center text-white"
                >
                    <ChevronLeft className="w-10 h-10 hover:scale-125 transition-transform" />
                </button>

                <div
                    ref={scrollRef}
                    className="flex gap-4 overflow-x-auto overflow-y-hidden scrollbar-hide px-8 md:px-16 py-8"
                >
                    {magazines.map((mag, i) => (
                        <motion.div
                            key={mag.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="relative flex-none w-48 md:w-64 aspect-[2/3] group cursor-pointer"
                        >
                            <Link href="/reader">
                                <div className="w-full h-full rounded-xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:scale-[1.05] group-hover:z-30 group-hover:shadow-orange-600/20">
                                    <img
                                        src={getAssetPath(mag.image)}
                                        className="w-full h-full object-cover"
                                        alt={mag.title}
                                    />

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 space-y-3">
                                        <div className="space-y-1">
                                            <span className="text-[10px] font-black text-orange-500 uppercase tracking-widest">{mag.year}</span>
                                            <h4 className="text-lg font-black text-white leading-none uppercase">{mag.title}</h4>
                                        </div>
                                        <div className="flex items-center gap-2 text-[10px] font-black text-white px-3 py-2 bg-orange-600 rounded-lg w-fit">
                                            <Play className="w-3 h-3 fill-current" /> LEGGI ORA
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <button
                    onClick={() => scroll('right')}
                    className="absolute right-0 top-0 bottom-0 z-20 w-16 bg-gradient-to-l from-black to-transparent opacity-0 group-hover/rail:opacity-100 transition-opacity flex items-center justify-center text-white"
                >
                    <ChevronRight className="w-10 h-10 hover:scale-125 transition-transform" />
                </button>
            </div>

            <style jsx global>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
}
