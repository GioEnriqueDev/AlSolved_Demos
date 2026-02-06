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
