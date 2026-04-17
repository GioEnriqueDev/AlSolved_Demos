'use client';

import React, { useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { Maximize2, ArrowLeft, ArrowRight } from 'lucide-react';

interface MagazineViewerProps {
    children: React.ReactNode;
}

export default function MagazineViewer({ children }: MagazineViewerProps) {
    const bookRef = useRef<any>(null);

    const nextFlip = () => bookRef.current?.pageFlip()?.flipNext();
    const prevFlip = () => bookRef.current?.pageFlip()?.flipPrev();

    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center bg-slate-100 p-4 md:p-10 min-h-screen overflow-hidden">

            {/* Viewer Structure */}
            <div className="relative z-10 perspective-1000 w-full max-w-[1400px] flex items-center justify-center">

                {/* Book Container - Centered */}
                {/* @ts-ignore */}
                <HTMLFlipBook
                    width={500}
                    height={707} // A4 Ratio
                    size="stretch"
                    minWidth={300}
                    maxWidth={800}
                    minHeight={424}
                    maxHeight={1131}
                    maxShadowOpacity={0.5}
                    showCover={true}
                    mobileScrollSupport={true}
                    className="demo-book shadow-2xl"
                    style={{ margin: '0 auto' }}
                    ref={bookRef}
                    flippingTime={1000}
                    usePortrait={false} // True spread behavior
                >
                    {children}
                </HTMLFlipBook>
            </div>

            {/* Standard Controls */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-4 z-50 pointer-events-none sticky-controls">
                <button
                    onClick={prevFlip}
                    className="bg-white/90 backdrop-blur shadow-lg border border-slate-200 text-slate-800 p-3 rounded-full hover:scale-110 transition-all pointer-events-auto"
                >
                    <ArrowLeft className="w-5 h-5" />
                </button>

                {/* Brand / Subscription Info */}
                <div className="bg-orange-600 shadow-lg shadow-orange-900/20 border border-orange-500 px-6 py-3 rounded-full flex items-center gap-3 pointer-events-auto cursor-help group relative">
                    <span className="text-white font-black uppercase tracking-widest text-xs">Fermento Birra Magazine</span>

                    {/* Tooltip / Mini-Modal on Hover */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-80 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto">
                        <h4 className="font-black text-slate-900 uppercase italic mb-2">Abbonati Subito!</h4>
                        <p className="text-xs text-slate-600 leading-relaxed mb-3">
                            Ricevi per un anno il bimestrale Fermento Birra Magazine direttamente a casa tua.
                            <strong>Sei numeri ad un prezzo speciale!</strong>
                        </p>
                        <div className="text-[10px] font-bold text-orange-600 uppercase tracking-widest bg-orange-50 p-2 rounded-lg text-center">
                            Spedito la 2° settimana dei mesi dispari
                        </div>
                        <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-b border-r border-slate-100"></div>
                    </div>
                </div>

                <div className="bg-white/90 backdrop-blur shadow-lg border border-slate-200 px-6 py-3 rounded-full flex items-center gap-2 pointer-events-auto">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-black uppercase tracking-widest text-slate-600">Secure View Active</span>
                </div>
                <button
                    onClick={nextFlip}
                    className="bg-white/90 backdrop-blur shadow-lg border border-slate-200 text-slate-800 p-3 rounded-full hover:scale-110 transition-all pointer-events-auto"
                >
                    <ArrowRight className="w-5 h-5" />
                </button>
            </div>

            <style>{`
                .demo-book {
                    background-color: transparent !important;
                }
            `}</style>
        </div>
    );
}
