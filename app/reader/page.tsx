'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Shield, ArrowLeft, Maximize2, AlertTriangle, ArrowRight, Activity, BookOpen, Menu } from 'lucide-react';
import Link from 'next/link';
import HTMLFlipBook from 'react-pageflip';

// Enhanced Data - Reusing available high-quality assets
const PAGES = [
    {
        id: 1,
        title: 'Fermento',
        subtitle: 'Grand Exhibition 2026',
        body: 'Guida Ufficiale all\'Eccellenza Craft • Tecnologia AlSolved per l\'Industria del Beverage',
        image: '/assets/reader/cover.png',
        color: 'bg-slate-900',
        isDark: true,
        isCover: true
    },
    {
        id: 2,
        title: 'Selezione Grani',
        subtitle: 'L\'Inizio della Perfezione',
        body: 'La qualità di Fermento Birra nasce nei campi. Selezioniamo solo orzo e luppolo certificati. Il controllo qualità inizia dalla terra, con sensori IoT AlSolved che monitorano l\'umidità e la maturazione in tempo reale.',
        quote: "La miglior birra nasce da un rispetto profondo per la terra.",
        image: '/assets/reader/page2.png', // Fallback or reuse
        color: 'bg-white',
        isDark: false,
        layout: 'editorial-main'
    },
    {
        id: 3,
        title: 'Mashing & Boil',
        subtitle: 'L\'Alchimia del Vetro',
        body: 'Il processo di ammostamento richiede precisione millimetrica. I nostri mastri birrai utilizzano dashboard AlSolved per calibrare le curve termiche, garantendo un corpo equilibrato e una fragranza persistente in ogni lotto.',
        details: [
            { label: 'Temp. Ottimale', value: '66.5°C' },
            { label: 'Efficienza', value: '98.2%' },
            { label: 'Tempo Bolllitura', value: '90 Min' }
        ],
        image: '/assets/reader/page3.png',
        color: 'bg-slate-50',
        isDark: false,
        layout: 'editorial-split'
    },
    {
        id: 4,
        title: 'Infrastruttura',
        subtitle: 'Secure Production Lines',
        body: 'L\'impianto di Fermento è oggi un ecosistema digitale blindato. Grazie ad AlSolved, ogni tank è protetto da attacchi esterni, garantendo la continuità operativa anche durante i picchi di produzione feriale.',
        image: '/assets/reader/page4.png',
        color: 'bg-white',
        isDark: false,
        layout: 'full-bleed'
    },
    // Page 5 & 6: Feature Spread
    {
        id: 5,
        title: 'Double IPA',
        subtitle: 'Luppolatura Estrema',
        body: 'Nata per chi ama le emozioni forti. Una base maltata solida sostiene un\'esplosione di luppoli americani. Note di pompelmo, resina e un amaro pulito che invita al prossimo sorso.',
        flavorNotes: ['Pompelmo', 'Resina', 'Aghi di pino', 'Biscuits'],
        image: '/assets/reader/page2.png', // Reuse brewing image for IPA
        color: 'bg-white',
        isDark: false,
        layout: 'tasting-notes'
    },
    {
        id: 6,
        title: 'Imperial Stout',
        subtitle: 'Nera come la Notte',
        body: 'Un viaggio nell\'oscurità. Caffè tostato, cioccolato fondente e liquirizia si fondono in un corpo denso e vellutato. Ideale per meditazione o per chiudere in bellezza un pasto importante.',
        flavorNotes: ['Caffè', 'Cioccolato', 'Tabacco', 'Uvetta'],
        image: '/assets/reader/page3.png', // Reuse dark beer image
        color: 'bg-slate-950',
        isDark: true,
        layout: 'tasting-notes-dark'
    },
    {
        id: 7,
        title: 'Verona Expo',
        subtitle: 'Connessioni Globali',
        body: 'Fermento Expo 2026 non è solo una fiera, è un hub di innovazione. La nostra rete AlSolved gestisce il flusso di dati di migliaia di espositori, garantendo scambi commerciali sicuri e veloci.',
        image: '/assets/reader/page4.png', // Reuse tech infrastructure
        color: 'bg-white',
        isDark: false,
        layout: 'exhibition-grid'
    },
    {
        id: 8,
        title: 'Smart Badge',
        subtitle: 'L\'Identità Digitale',
        body: 'Il tuo pass per la fiera è molto più di un codice QR. È una chiave sicura per sbloccare contenuti esclusivi, orari di degustazione e ordini B2B, tutto sincronizzato nel cloud AlSolved.',
        image: '/assets/reader/cover.png', // Use cover detail
        color: 'bg-white',
        isDark: false,
        layout: 'editorial-main'
    },
    {
        id: 9,
        title: 'Liquid Security',
        subtitle: 'Dalla Pinta al Bit',
        body: 'Applichiamo ai contenuti editoriali la stessa cura che Fermento mette nelle sue birre. Proteggiamo l\'esperienza utente bloccando leak e pirateria, preservando il valore del vostro investimento digitale.',
        color: 'bg-slate-900',
        isDark: true,
        layout: 'manifesto'
    },
    {
        id: 10,
        title: 'AlSolved',
        subtitle: 'Your Digital Partner',
        body: 'Concludiamo questo viaggio con una certezza: la tecnologia AlSolved è il collante che permette a brand storici come Fermento di scalare nel futuro digitale.',
        image: '/assets/reader/cover.png',
        color: 'bg-slate-950',
        isDark: true,
        isCover: true
    },
];

const Page = React.forwardRef<HTMLDivElement, any>((props, ref) => {
    return (
        <div className={`demo-page relative overflow-hidden flex flex-col border-l border-slate-200/50 ${props.color} shadow-2xl h-full w-full`} ref={ref}>
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black/25 via-black/5 to-transparent z-40 opacity-40 mix-blend-multiply pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-[1px] bg-white/20 z-50 pointer-events-none"></div>

            <div className="absolute inset-0 pointer-events-none opacity-[0.03] select-none flex items-center justify-center rotate-[-45deg] whitespace-nowrap text-3xl font-black text-slate-800 z-50">
                OFFICIAL RE-PUBLICATION • FERMENTO EXPO 2026 • ALSOLVED LICENSED
            </div>

            {props.isCover ? (
                <div className="absolute inset-0 z-10">
                    <img src={props.image} alt="" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                    <div className="absolute bottom-24 left-14 right-14 z-20">
                        <span className="text-primary font-black tracking-[0.5em] text-[11px] uppercase mb-4 block">
                            {props.subtitle}
                        </span>
                        <h1 className="text-7xl md:text-8xl font-black text-white italic tracking-tighter leading-none mb-6">
                            {props.title}
                        </h1>
                        <p className="text-white/70 text-sm font-bold leading-relaxed max-w-sm border-l-2 border-white/20 pl-6">
                            {props.body}
                        </p>
                    </div>
                </div>
            ) : (
                <div className="relative z-20 flex-1 flex flex-col p-12 md:p-14">
                    <div className="flex justify-between items-center mb-10 opacity-30">
                        <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-500">Exhibit Master Catalogue</span>
                        <div className="h-px bg-slate-300 flex-1 mx-6"></div>
                        <span className="text-[9px] font-black text-slate-500">PAGE {props.id.toString().padStart(2, '0')}</span>
                    </div>

                    <div className="flex-1 flex flex-col justify-center">
                        <h2 className={`text-5xl md:text-6xl font-black italic tracking-tighter mb-2 leading-none ${props.isDark ? 'text-white' : 'text-slate-900'}`}>{props.title}</h2>
                        <span className="text-primary font-black tracking-[0.3em] text-[10px] uppercase mb-10 block">{props.subtitle}</span>

                        {props.layout === 'editorial-main' && (
                            <div className="space-y-8">
                                <div className="rounded-sm overflow-hidden shadow-2xl border border-white/10 h-64 md:h-72">
                                    <img src={props.image} alt="" className="w-full h-full object-cover" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <p className={`text-xs md:text-sm font-bold leading-relaxed ${props.isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                                        {props.body}
                                    </p>
                                    <div className="border-t-4 border-primary pt-4">
                                        <p className="text-lg md:text-xl font-black text-slate-900 italic tracking-tight leading-snug">
                                            &ldquo;{props.quote}&rdquo;
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {props.layout === 'editorial-split' && (
                            <div className="grid grid-cols-5 gap-8 bg-white/50 p-6 rounded-xl">
                                <div className="col-span-3 space-y-6">
                                    <p className={`text-xs md:text-sm font-bold leading-relaxed ${props.isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                                        {props.body}
                                    </p>
                                    <div className="grid grid-cols-1 gap-2">
                                        {props.details?.map((d: any, i: number) => (
                                            <div key={i} className="flex justify-between items-center border-b border-slate-200 py-2">
                                                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{d.label}</span>
                                                <span className="text-base font-black text-primary">{d.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="col-span-2 rounded-sm overflow-hidden shadow-xl h-full min-h-[300px]">
                                    <img src={props.image} alt="" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        )}

                        {props.layout === 'full-bleed' && (
                            <div className="relative flex-1 -mx-12 -mb-14 mt-4 group overflow-hidden rounded-b-[2rem]">
                                <img src={props.image} alt="" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2s]" />
                                <div className="absolute bottom-10 left-10 right-10 bg-white/90 backdrop-blur-md p-6 shadow-2xl border border-black/5">
                                    <p className="text-xs font-black text-slate-900 leading-relaxed uppercase tracking-widest italic">
                                        {props.body}
                                    </p>
                                </div>
                            </div>
                        )}

                        {(props.layout === 'tasting-notes' || props.layout === 'tasting-notes-dark') && (
                            <div className="space-y-10">
                                <div className="grid grid-cols-12 gap-8 items-center">
                                    <div className="col-span-7 bg-slate-50/50 p-6 rounded-lg border border-slate-100 shadow-inner">
                                        <p className="text-xs md:text-sm font-bold text-slate-600 leading-loose">
                                            {props.body}
                                        </p>
                                    </div>
                                    <div className="col-span-5 aspect-square rounded-full overflow-hidden border-4 border-white shadow-2xl">
                                        <img src={props.image} alt="" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {props.flavorNotes?.map((f: string, i: number) => (
                                        <span key={i} className={`px-4 py-2 rounded-full border text-[9px] font-black uppercase tracking-widest ${props.isDark ? 'bg-white/10 border-white/20 text-white' : 'bg-white border-slate-200 text-slate-500 shadow-sm'}`}>
                                            {f}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {props.layout === 'exhibition-grid' && (
                            <div className="grid grid-cols-2 gap-4 h-[400px]">
                                <div className="rounded-sm overflow-hidden shadow-xl h-full">
                                    <img src={props.image} alt="" className="w-full h-full object-cover" />
                                </div>
                                <div className="bg-slate-900 p-8 text-white flex flex-col justify-center gap-6">
                                    <BookOpen className="w-10 h-10 text-primary" />
                                    <p className="text-lg font-black italic tracking-tighter leading-snug">
                                        {props.body}
                                    </p>
                                    <button className="flex items-center gap-2 text-[9px] font-black text-primary uppercase tracking-[0.3em]">
                                        Scopri di più <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        )}

                        {props.layout === 'manifesto' && (
                            <div className="bg-primary/5 p-12 rounded-sm border-2 border-primary/20 space-y-6">
                                <Shield className="w-12 h-12 text-primary mb-4" />
                                <p className="text-2xl font-black italic tracking-tighter leading-tight text-white drop-shadow-md">
                                    {props.body}
                                </p>
                                <div className="h-px bg-white/20 w-32"></div>
                                <p className="text-primary font-black text-sm uppercase tracking-widest">
                                    Regola Highlander v1.2 Enabled
                                </p>
                            </div>
                        )}
                    </div>

                    <div className="mt-12 pt-6 border-t border-slate-100 flex items-center justify-between text-slate-300">
                        <span className="text-[10px] font-black tracking-widest uppercase">AlSolved Library Service</span>
                        <div className="flex gap-2">
                            <div className="w-1 h-1 bg-primary rounded-full"></div>
                            <div className="w-1 h-1 bg-primary rounded-full opacity-50"></div>
                            <div className="w-1 h-1 bg-primary rounded-full opacity-20"></div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
});

Page.displayName = 'Page';

export default function ReaderDemo() {
    const [isBlocked, setIsBlocked] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const bookRef = useRef<any>(null);

    useEffect(() => {
        const handleContextMenu = (e: MouseEvent) => e.preventDefault();
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key.toLowerCase() === 'k') {
                setIsBlocked(true);
            }
        };

        window.addEventListener('contextmenu', handleContextMenu);
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('contextmenu', handleContextMenu);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className={`min-h-screen transition-all duration-700 font-google-sans selection:bg-none ${isFullScreen ? 'bg-black' : 'bg-[#eef2f6]'}`}>
            <AnimatePresence>
                {isBlocked && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-red-950/95 backdrop-blur-3xl flex flex-col items-center justify-center text-white p-12 text-center"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="bg-red-600/20 p-8 rounded-full border border-red-500/50 mb-10 shadow-2xl"
                        >
                            <Lock className="w-24 h-24 text-red-500" />
                        </motion.div>
                        <h1 className="text-6xl font-black tracking-tighter mb-4 uppercase italic">Sessione Terminata</h1>
                        <p className="text-red-200">Tentativo di violazione dei protocolli AlSolved.</p>
                        <Link href="/" className="mt-12 px-12 py-5 bg-white text-red-900 font-black rounded-full shadow-2xl uppercase tracking-tighter italic">Back to Home</Link>
                    </motion.div>
                )}
            </AnimatePresence>

            {!isFullScreen && (
                <header className="bg-slate-900 border-b border-white/5 px-8 py-5 flex items-center justify-between z-20 sticky top-0 text-white shadow-2xl">
                    <div className="flex items-center gap-6">
                        <Link href="/" className="p-3 hover:bg-white/10 rounded-2xl transition-all border border-white/5">
                            <ArrowLeft className="w-6 h-6 text-slate-500" />
                        </Link>
                        <div className="flex flex-col">
                            <span className="text-xl font-black tracking-tighter uppercase italic text-white/90">Fermento 2026</span>
                            <span className="text-[10px] font-black tracking-[0.3em] text-primary uppercase">Secure Reader</span>
                        </div>
                    </div>
                    <button onClick={() => setIsBlocked(true)} className="md:hidden p-2 text-red-500 font-black text-xs uppercase border border-red-500/30 rounded">KILL</button>

                    <div className="hidden md:flex items-center gap-6">
                        <div className="flex items-center gap-4 bg-white/5 px-6 py-2.5 rounded-2xl border border-white/5">
                            <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
                            <span className="text-xs font-black uppercase text-slate-400">Status: <span className="text-emerald-400">Live Encrypted</span></span>
                        </div>
                        <button onClick={() => setIsFullScreen(!isFullScreen)} className="p-3 bg-white/5 hover:bg-white/10 rounded-2xl text-slate-500 border border-white/5 transition-all">
                            <Maximize2 className="w-5 h-5" />
                        </button>
                        <button onClick={() => setIsBlocked(true)} className="px-8 py-3 bg-primary text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:brightness-110 shadow-2xl shadow-primary/20 transition-all">
                            Test Kill-Switch
                        </button>
                    </div>
                </header>
            )}

            <main className={`flex-1 flex items-center justify-center transition-all ${isFullScreen ? 'p-0' : 'p-8 md:p-14'} overflow-hidden h-[calc(100vh-80px)]`}>
                <div className="flex flex-col items-center justify-center w-full max-w-[1600px]">
                    <div className={`relative transition-all duration-700 ${isFullScreen ? 'scale-100' : 'scale-95 md:scale-100 shadow-[0_60px_100px_-30px_rgba(0,0,0,0.5)]'} bg-transparent rounded-[2rem]`}>
                        {/* Spina centrale realistica per Double Spread */}
                        <div className="absolute top-[2%] bottom-[2%] left-1/2 -translate-x-1/2 w-16 bg-gradient-to-r from-black/20 via-black/5 to-black/20 z-[60] pointer-events-none mix-blend-multiply blur-sm rounded-full"></div>

                        {/* @ts-ignore */}
                        <HTMLFlipBook
                            width={550}
                            height={780}
                            size="stretch"
                            minWidth={300}
                            maxWidth={1000}
                            minHeight={400}
                            maxHeight={1400}
                            maxShadowOpacity={0.5}
                            showCover={true}
                            mobileScrollSupport={true}
                            className="demo-book"
                            style={{ backgroundColor: 'transparent' }}
                            ref={bookRef}
                            usePortrait={false} // FORCE SPREAD VIEW
                            startPage={0}
                            flippingTime={1000}
                        >
                            {PAGES.map((p) => (
                                <Page key={p.id} {...p} />
                            ))}
                        </HTMLFlipBook>
                    </div>

                    {!isFullScreen && (
                        <div className="mt-8 flex items-center gap-8 opacity-80 hover:opacity-100 transition-opacity">
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                Drag corners or use arrows
                            </span>
                        </div>
                    )}
                </div>
            </main>

            <style>{`
                .demo-book {
                    margin: 0 auto;
                }
                .demo-page {
                    background-color: white;
                }
                /* Ensure left/right spread shading */
                .demo-page:nth-child(even) {
                   box-shadow: inset 20px 0 50px -20px rgba(0,0,0,0.15);
                   border-radius: 4px 16px 16px 4px;
                }
                .demo-page:nth-child(odd) {
                   box-shadow: inset -20px 0 50px -20px rgba(0,0,0,0.15);
                   border-radius: 16px 4px 4px 16px;
                }
            `}</style>
        </div>
    );
}
