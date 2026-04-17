'use client';

import React from 'react';
import PlatformNavbar from '@/components/platform/PlatformNavbar';
import MobileNav from '@/components/platform/MobileNav';
import Billboard from '@/components/platform/Billboard';
import ContentRail from '@/components/platform/ContentRail';
import BrandedAd from '@/components/platform/BrandedAd';
import GoogleAd from '@/components/platform/GoogleAd';
import { motion } from 'framer-motion';

const MOCK_MAGAZINES = [
    { id: 1, title: 'Speciale Edizione 2026', image: '/images/p1.png', year: '2026', category: 'Platinum' },
    { id: 2, title: 'I Segreti del Rame', image: '/images/p2.png', year: '2025', category: 'Tecnica' },
    { id: 3, title: 'Luppoli d\'Autore', image: '/images/p3.png', year: '2025', category: 'Ingredienti' },
    { id: 4, title: 'Imperial Stout Guide', image: '/images/p4.png', year: '2025', category: 'Stili' },
    { id: 5, title: 'Tropical IPA Era', image: '/images/p5.png', year: '2024', category: 'Trend' },
    { id: 6, title: 'Archivio Fermento #06', image: '/images/p6.png', year: '2024', category: 'Archivio' },
];

export default function BrowsePage() {
    return (
        <main className="min-h-screen bg-black text-white overflow-x-hidden font-google-sans">
            <PlatformNavbar />

            <Billboard />

            <div className="relative z-20 -mt-24 space-y-16 pb-32 md:pb-24">
                {/* Main Content Rail */}
                <ContentRail
                    title="Scelti per te"
                    magazines={MOCK_MAGAZINES}
                />

                {/* Integrated Ad Break - Cinematic Style */}
                <div className="max-w-[1600px] mx-auto px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <BrandedAd
                        brand="Birra Peroni"
                        title="Riserva Doppio Malto: L'eccellenza italiana dal 1846."
                        image="/images/ad_peroni_sponsored.png"
                        link="https://www.peroni.it"
                    />
                    <GoogleAd slot="1234567890" className="h-[400px]" />
                </div>

                <ContentRail
                    title="Di Tendenza Ora"
                    magazines={[...MOCK_MAGAZINES].reverse()}
                />

                {/* Secondary Ad Break */}
                <div className="max-w-7xl mx-auto px-8 md:px-16">
                    <GoogleAd slot="0987654321" format="auto" className="h-[250px] w-full" />
                </div>

                <ContentRail
                    title="Le Nostre Bionde Preferite"
                    magazines={[...MOCK_MAGAZINES].sort(() => Math.random() - 0.5)}
                />

                <ContentRail
                    title="Docuseries: Maestri del Gusto"
                    magazines={[...MOCK_MAGAZINES].slice(0, 4)}
                />
            </div>

            {/* Footer Netflix-style */}
            <footer className="px-8 md:px-16 py-24 border-t border-white/5 bg-black/50">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-4xl opacity-40">
                    <div className="space-y-4">
                        <h4 className="text-[10px] font-black uppercase tracking-widest">Piattaforma</h4>
                        <ul className="text-xs space-y-2 font-medium">
                            <li>Account</li>
                            <li>Abbonamenti</li>
                            <li>Privacy</li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-[10px] font-black uppercase tracking-widest">Supporto</h4>
                        <ul className="text-xs space-y-2 font-medium">
                            <li>Contatti</li>
                            <li>Help Center</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-20 flex flex-col items-center gap-4">
                    <div className="w-10 h-1 h-px bg-white/10"></div>
                    <p className="text-[9px] font-black tracking-[0.5em] text-orange-500/40 uppercase">
                        Fermento Birra × AlSolved Digital Ecosystem
                    </p>
                </div>
            </footer>
            <MobileNav />
        </main>
    );
}
