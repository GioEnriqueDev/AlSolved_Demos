'use client';

import React from 'react';
import Page from '@/components/reader/Page';
import MagazineViewer from '@/components/reader/MagazineViewer';
import { ArrowLeft, BookOpen, Shield } from 'lucide-react';
import Link from 'next/link';

// Fermento Content Data
const PAGES = [
    {
        id: 1,
        image: '/assets/reader/cover.png',
        isCover: true,
        type: 'image'
    },
    {
        id: 2,
        type: 'content',
        title: 'Selezione Grani',
        subtitle: 'L\'ORIGINE',
        body: 'La qualità di Fermento Birra nasce nei campi. Selezioniamo solo orzo e luppolo certificati.',
        quote: "La miglior birra nasce da un rispetto profondo per la terra.",
        color: 'text-slate-800'
    },
    {
        id: 3,
        type: 'content',
        title: 'Mashing Process',
        subtitle: 'TECNOLOGIA',
        body: 'Il processo di ammostamento richiede precisione millimetrica. I nostri mastri birrai utilizzano dashboard AlSolved.',
        color: 'text-slate-800'
    },
    {
        id: 4,
        image: '/assets/reader/page2.png',
        type: 'image'
    },
    {
        id: 5,
        image: '/assets/reader/page3.png',
        type: 'image'
    },
    {
        id: 6,
        type: 'content',
        title: 'Future Expo',
        subtitle: 'VERONA 2026',
        body: 'Un grande evento per celebrare l\'eccellenza del craft brewing italiano nel mondo.',
        color: 'text-slate-900'
    },
    {
        id: 7,
        image: '/assets/reader/cover.png',
        isCover: true,
        type: 'image'
    }
];

export default function ReaderDemo() {
    return (
        <div className="bg-[#eef2f6] min-h-screen">
            {/* Simple Floating Header */}
            <div className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-start pointer-events-none">
                <Link href="/" className="pointer-events-auto bg-white/80 backdrop-blur shadow-md p-3 rounded-full hover:scale-105 transition-all text-slate-700">
                    <ArrowLeft className="w-5 h-5" />
                </Link>

                <div className="bg-slate-900/90 text-white px-6 py-3 rounded-lg shadow-2xl backdrop-blur flex flex-col items-end">
                    <span className="font-black uppercase tracking-widest text-xs">Fermento Demo</span>
                    <span className="text-[10px] text-primary font-bold">Secure Environment</span>
                </div>
            </div>

            <MagazineViewer>
                {PAGES.map((page, index) => (
                    <Page
                        key={index}
                        id={index}
                        isCover={page.isCover}
                        image={page.type === 'image' ? page.image : undefined}
                        className={page.type === 'content' ? 'bg-white' : ''}
                    >
                        {page.type === 'content' && (
                            <div className="h-full flex flex-col justify-center p-8 border-4 border-double border-slate-100 m-4">
                                <span className="text-primary font-black tracking-[0.4em] text-[10px] uppercase mb-6 block">
                                    {page.subtitle}
                                </span>
                                <h1 className={`text-5xl font-black italic tracking-tighter leading-none mb-8 ${page.color}`}>
                                    {page.title}
                                </h1>
                                <p className="text-sm font-bold text-slate-500 leading-relaxed mb-8 border-l-2 border-primary pl-4">
                                    {page.body}
                                </p>
                                {page.quote && (
                                    <div className="bg-slate-50 p-6 rounded-lg italic text-slate-600 shadow-inner">
                                        &ldquo;{page.quote}&rdquo;
                                    </div>
                                )}
                                <div className="mt-auto pt-8 border-t border-slate-100 flex items-center justify-between text-slate-300">
                                    <Shield className="w-4 h-4 text-slate-300" />
                                    <span className="text-[8px] font-black tracking-widest uppercase">AlSolved Content</span>
                                </div>
                            </div>
                        )}
                    </Page>
                ))}
            </MagazineViewer>
        </div>
    );
}
