'use client';

import React from 'react';
import MagazineViewer from '@/components/reader/MagazineViewer';
import Page from '@/components/reader/Page';
import { motion } from 'framer-motion';
import { getAssetPath } from '@/lib/utils';

// Animation Variants for Cinematic Entrance
const textVariants: any = {
    hidden: { opacity: 0, y: 30, filter: 'blur(12px)' },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
            delay: 0.5 + i * 0.2,
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1]
        }
    })
};

const bgVariants: any = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: { duration: 2, ease: "easeOut" }
    }
};

const PAGES_DATA = [
    {
        id: 1,
        isCover: true,
        content: (
            <div className="h-full w-full relative overflow-hidden text-white">
                <motion.div
                    variants={bgVariants}
                    initial="hidden"
                    animate="visible"
                    className="absolute inset-0 z-0"
                >
                    <img src={getAssetPath("/images/p1.png")} className="w-full h-full object-cover" alt="Cover" />
                    <div className="absolute inset-0 bg-black/40" />
                </motion.div>
                <div className="relative z-10 h-full flex flex-col items-center justify-center gap-6 text-center p-12">
                    <motion.div custom={0} variants={textVariants} initial="hidden" animate="visible" className="w-24 h-24 bg-orange-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-orange-600/40">
                        <span className="text-4xl font-black">FB</span>
                    </motion.div>
                    <motion.h1 custom={1} variants={textVariants} initial="hidden" animate="visible" className="text-5xl font-black tracking-[0.2em] uppercase leading-none">
                        Fermento<br /><span className="text-orange-500">Birra</span>
                    </motion.h1>
                    <motion.div custom={2} variants={textVariants} initial="hidden" animate="visible" className="h-px w-32 bg-orange-500/50" />
                    <motion.p custom={3} variants={textVariants} initial="hidden" animate="visible" className="text-xs font-bold tracking-[0.5em] text-orange-500/70 uppercase">
                        Speciale 2026
                    </motion.p>
                </div>
            </div>
        )
    },
    {
        id: 2,
        content: (
            <div className="h-full w-full relative overflow-hidden text-white border-r border-white/5">
                <motion.div
                    variants={bgVariants}
                    initial="hidden"
                    animate="visible"
                    className="absolute inset-0 z-0"
                >
                    <img src={getAssetPath("/images/p2.png")} className="w-full h-full object-cover" alt="Copper Boilers" />
                    <div className="absolute inset-0 bg-black/60" />
                </motion.div>
                <div className="relative z-10 h-full p-12 flex flex-col justify-between">
                    <motion.div custom={0} variants={textVariants} initial="hidden" animate="visible">
                        <span className="text-orange-500 font-black text-6xl italic leading-none block">01</span>
                        <h2 className="text-5xl font-black uppercase tracking-tighter mt-4 leading-none text-white">L'ECCELLENZA<br />DEL RAME</h2>
                    </motion.div>

                    <div className="space-y-6">
                        <motion.div custom={1} variants={textVariants} initial="hidden" animate="visible" className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                            <p className="text-sm leading-relaxed text-slate-200 font-medium">
                                Nelle caldaie a fiamma diretta, il mosto danza con il calore estremo, caramellando ogni goccia per creare una profondità di gusto inimitabile.
                            </p>
                        </motion.div>
                        <motion.div custom={2} variants={textVariants} initial="hidden" animate="visible" className="flex justify-between items-end">
                            <div className="w-12 h-12 rounded-full border border-orange-500 flex items-center justify-center">
                                <div className="w-2 h-2 bg-orange-500 rounded-full animate-ping" />
                            </div>
                            <span className="text-[10px] font-black tracking-widest text-orange-500 uppercase">Brewery Tech</span>
                        </motion.div>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: 3,
        content: (
            <div className="h-full w-full relative overflow-hidden text-white">
                <motion.div
                    variants={bgVariants}
                    initial="hidden"
                    animate="visible"
                    className="absolute inset-0 z-0"
                >
                    <img src={getAssetPath("/images/p3.png")} className="w-full h-full object-cover" alt="Galactic Hops" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />
                </motion.div>
                <div className="relative z-10 h-full p-12 flex flex-col items-center justify-center">
                    <motion.div custom={0} variants={textVariants} initial="hidden" animate="visible" className="mb-8 relative w-full text-center">
                        <div className="text-[8rem] font-black text-white/5 absolute inset-0 -top-10 flex items-center justify-center select-none">BIO</div>
                        <h3 className="relative z-10 text-4xl font-black uppercase tracking-widest border-b-8 border-orange-500 pb-2 inline-block">Luppolo<br />Alieno</h3>
                    </motion.div>

                    <motion.p custom={1} variants={textVariants} initial="hidden" animate="visible" className="text-center text-slate-300 font-medium max-w-xs mt-12 leading-relaxed italic">
                        "Una mutazione genetica scoperta nei campi di Yakima. Aromi di ananas galattico e resina di pino extra-terrestre."
                    </motion.p>

                    <motion.div custom={2} variants={textVariants} initial="hidden" animate="visible" className="mt-12 w-full h-2 bg-orange-500/30 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: "0%" }}
                            transition={{ duration: 3, ease: "easeInOut" }}
                            className="h-full w-1/2 bg-orange-500"
                        />
                    </motion.div>
                </div>
            </div>
        )
    },
    {
        id: 4,
        content: (
            <div className="h-full w-full relative overflow-hidden text-white">
                <motion.div
                    variants={bgVariants}
                    initial="hidden"
                    animate="visible"
                    className="absolute inset-0 z-0"
                >
                    <img src={getAssetPath("/images/p4.png")} className="w-full h-full object-cover" alt="Imperial Stout" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/90" />
                </motion.div>
                <div className="relative z-10 h-full flex flex-col">
                    <div className="flex-1 p-12 flex flex-col justify-center">
                        <motion.h1 custom={0} variants={textVariants} initial="hidden" animate="visible" className="text-6xl font-black text-white mix-blend-overlay">IMPERIAL<br />STOUT</motion.h1>
                        <motion.div custom={1} variants={textVariants} initial="hidden" animate="visible" className="h-1 w-24 bg-orange-500 mt-6" />
                    </div>
                    <div className="h-2/5 p-12 bg-black/40 backdrop-blur-md">
                        <motion.p custom={2} variants={textVariants} initial="hidden" animate="visible" className="text-slate-300 text-sm leading-relaxed">
                            Invecchiata per 24 mesi in botti di Bourbon. <br />
                            <span className="text-orange-500 font-bold">Vaniglia, cioccolato fondente e cuoio.</span><br />
                            Un colosso da degustazione.
                        </motion.p>
                        <motion.div custom={3} variants={textVariants} initial="hidden" animate="visible" className="mt-8 flex gap-4">
                            <div className="px-3 py-1 bg-white/10 border border-white/20 rounded text-[10px] font-black text-white uppercase tracking-widest">ABV 13.5%</div>
                            <div className="px-3 py-1 bg-white/10 border border-white/20 rounded text-[10px] font-black text-white uppercase tracking-widest">IBU 75</div>
                        </motion.div>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: 5,
        content: (
            <div className="h-full w-full relative overflow-hidden text-white">
                <motion.div
                    variants={bgVariants}
                    initial="hidden"
                    animate="visible"
                    className="absolute inset-0 z-0"
                >
                    <img src={getAssetPath("/images/p5.png")} className="w-full h-full object-cover" alt="IPA Tropical" />
                    <div className="absolute inset-0 bg-black/30" />
                </motion.div>
                <div className="relative z-10 h-full p-12 flex flex-col items-center text-center justify-center">
                    <motion.div custom={0} variants={textVariants} initial="hidden" animate="visible" className="w-16 h-1 bg-orange-500 mb-6" />
                    <motion.h2 custom={1} variants={textVariants} initial="hidden" animate="visible" className="text-4xl font-black text-white uppercase tracking-widest">La Nuova Era<br />dell'IPA</motion.h2>

                    <motion.div custom={2} variants={textVariants} initial="hidden" animate="visible" className="my-12 relative">
                        <div className="w-32 h-32 bg-orange-500/20 rounded-full animate-pulse flex items-center justify-center">
                            <div className="w-24 h-24 bg-orange-500 rounded-full shadow-2xl shadow-orange-500/40" />
                        </div>
                        <div className="absolute -right-4 top-0 bg-white text-black text-[10px] font-black p-2 rounded-lg -rotate-12 shadow-xl">CITRA</div>
                    </motion.div>

                    <motion.p custom={3} variants={textVariants} initial="hidden" animate="visible" className="text-sm text-slate-200 font-medium leading-relaxed max-w-xs">
                        Abbiamo rimosso l'amaro fastidioso per far esplodere il frutto tropicale. Una bevibilità pericolosa.
                    </motion.p>

                    <motion.button custom={4} variants={textVariants} initial="hidden" animate="visible" className="mt-8 px-8 py-3 bg-orange-600 text-white text-xs font-black uppercase tracking-widest rounded-full hover:bg-orange-500 transition-all shadow-lg shadow-orange-600/20">
                        Scopri lo Shop
                    </motion.button>
                </div>
            </div>
        )
    },
    {
        id: 6,
        isBack: true,
        content: (
            <div className="h-full w-full relative overflow-hidden text-white">
                <motion.div
                    variants={bgVariants}
                    initial="hidden"
                    animate="visible"
                    className="absolute inset-0 z-0"
                >
                    <img src={getAssetPath("/images/p6.png")} className="w-full h-full object-cover" alt="Back Cover" />
                    <div className="absolute inset-0 bg-black/60" />
                </motion.div>
                <div className="relative z-10 h-full flex flex-col items-center justify-center p-12 text-center">
                    <motion.h4 custom={0} variants={textVariants} initial="hidden" animate="visible" className="text-sm font-black tracking-[0.3em] uppercase mb-4 text-orange-500">Fine Presentation</motion.h4>
                    <motion.div custom={1} variants={textVariants} initial="hidden" animate="visible" className="w-20 h-2 bg-orange-500 rounded-full mb-12" />
                    <motion.div custom={2} variants={textVariants} initial="hidden" animate="visible" className="space-y-2">
                        <p className="font-black text-2xl uppercase italic tracking-tighter">Cheers to the</p>
                        <p className="font-black text-6xl uppercase leading-none text-orange-500">CULTURE</p>
                    </motion.div>
                    <motion.div custom={3} variants={textVariants} initial="hidden" animate="visible" className="absolute bottom-12 border border-orange-500/30 px-6 py-2 rounded-full text-[10px] font-black tracking-widest text-orange-500">
                        FERMENTO BIRRA 2026
                    </motion.div>
                </div>
            </div>
        )
    }
];

export default function ReaderPage() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full bg-slate-950"
        >
            <MagazineViewer>
                {PAGES_DATA.map((page) => (
                    <Page
                        key={page.id}
                        id={page.id}
                        isCover={page.id === 1 || page.id === PAGES_DATA.length}
                    >
                        {page.content}
                    </Page>
                ))}
            </MagazineViewer>
        </motion.div>
    );
}
