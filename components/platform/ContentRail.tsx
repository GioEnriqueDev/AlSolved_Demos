'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MagazineCard from './MagazineCard';

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
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="px-4 md:px-16 text-2xl md:text-3xl font-black text-white tracking-tighter uppercase italic flex items-center gap-4"
            >
                <div className="w-2 h-6 md:h-8 bg-orange-600 rounded-full shadow-[0_0_15px_rgba(234,88,12,0.5)]"></div>
                {title}
            </motion.h2>

            <div className="relative group/controls">
                {/* Scroll Controls Refined - Hidden on Mobile */}
                <button
                    onClick={() => scroll('left')}
                    className="hidden md:flex absolute left-0 top-0 bottom-0 z-40 w-20 bg-gradient-to-r from-black via-black/60 to-transparent opacity-0 group-hover/controls:opacity-100 transition-opacity items-center justify-center text-white cursor-pointer"
                >
                    <div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center hover:scale-110 active:scale-90 transition-all border border-white/10">
                        <ChevronLeft className="w-8 h-8" />
                    </div>
                </button>

                <div
                    ref={scrollRef}
                    className="flex gap-4 md:gap-6 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scrollbar-hide px-4 md:px-16 py-8 md:py-12"
                >
                    {magazines.map((mag) => (
                        <div key={mag.id} className="snap-center shrink-0 w-[45vw] md:w-auto">
                            <MagazineCard magazine={mag} />
                        </div>
                    ))}
                </div>

                <button
                    onClick={() => scroll('right')}
                    className="hidden md:flex absolute right-0 top-0 bottom-0 z-40 w-20 bg-gradient-to-l from-black via-black/60 to-transparent opacity-0 group-hover/controls:opacity-100 transition-opacity items-center justify-center text-white cursor-pointer"
                >
                    <div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center hover:scale-110 active:scale-90 transition-all border border-white/10">
                        <ChevronRight className="w-8 h-8" />
                    </div>
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
