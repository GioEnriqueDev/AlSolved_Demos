'use client';

import React, { useEffect } from 'react';

declare global {
    interface Window {
        adsbygoogle: any[];
    }
}

interface GoogleAdProps {
    slot: string;
    format?: 'auto' | 'fluid' | 'rectangle';
    layout?: string;
    className?: string;
}

export default function GoogleAd({ slot, format = 'auto', layout, className = '' }: GoogleAdProps) {
    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.error('AdSense error:', e);
        }
    }, []);

    return (
        <div className={`overflow-hidden rounded-xl border border-white/5 bg-slate-900/50 ${className}`}>
            <div className="text-[9px] uppercase tracking-widest text-slate-600 text-center py-1">Pubblicità</div>
            <ins
                className="adsbygoogle block"
                style={{ display: 'block', width: '100%', height: '100%' }}
                data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // Placeholder ID
                data-ad-slot={slot}
                data-ad-format={format}
                data-full-width-responsive="true"
                data-ad-layout={layout}
            />
        </div>
    );
}
