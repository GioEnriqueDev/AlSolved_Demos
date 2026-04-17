'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { getAssetPath } from '@/lib/utils';

interface BrandedAdProps {
    title: string;
    brand: string;
    image: string;
    link: string;
}

export default function BrandedAd({ title, brand, image, link }: BrandedAdProps) {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="group relative w-full h-[400px] rounded-3xl overflow-hidden bg-slate-900 border border-white/5 shadow-2xl"
        >
            <img
                src={getAssetPath(image)}
                alt={title}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
                onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1518176259641-0f8a49c44c3c?auto=format&fit=crop&q=80";
                }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-8">
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-black text-orange-500 uppercase tracking-[0.3em] bg-orange-500/10 px-2 py-1 rounded">Sponsored</span>
                    <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">{brand}</span>
                </div>

                <h3 className="text-3xl font-black text-white mb-4 leading-tight">{title}</h3>

                <motion.a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-bold transition-all"
                >
                    Scopri di più
                    <ExternalLink className="w-4 h-4" />
                </motion.a>
            </div>

            {/* Visual Flair */}
            <div className="absolute top-4 right-4 w-12 h-12 bg-white/5 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="w-5 h-5 text-white" />
            </div>
        </motion.div>
    );
}
