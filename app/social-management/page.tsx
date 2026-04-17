'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Film, Layout, ArrowLeft, ExternalLink, Sparkles, ShieldAlert, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

const IMAGES = [
  '/case-studies/back-to-black/1.jpg',
  '/case-studies/back-to-black/2.jpg',
  '/case-studies/back-to-black/3.jpg',
  '/case-studies/back-to-black/4.jpg',
  '/case-studies/back-to-black/5.jpg',
];

export default function SocialManagementPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-google-sans selection:bg-orange-100 selection:text-orange-600">
      {/* Branding Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200/50 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group text-slate-500 hover:text-slate-900 transition-colors">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-bold uppercase tracking-tight">Torna al Hub Case Study</span>
        </Link>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex flex-col items-end leading-none">
            <span className="text-[10px] font-black tracking-widest text-orange-600 uppercase">PROGETTO DEMO</span>
            <span className="text-[8px] font-medium text-slate-400 uppercase">Ambiente di test AlSolved</span>
          </div>
          <div className="w-8 h-8 rounded bg-orange-500 flex items-center justify-center text-white">
            <ShieldAlert className="w-5 h-5" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100">
              <Sparkles className="w-3 h-3 text-orange-600" />
              <span className="text-[10px] font-bold tracking-widest uppercase text-orange-600">Case Study: Back to Black</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 leading-[0.9]">
              Social Media <br />
              <span className="text-orange-500 underline decoration-orange-200 decoration-8 underline-offset-8">Strategy.</span>
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
              Abbiamo trasformato la presenza digitale di <strong>Back to Black</strong> attraverso una produzione video cinematografica 
              e uno storytelling visivo coerente, ottimizzato per l&apos;engagement organico.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm">
                <div className="text-3xl font-black text-slate-900 mb-1">+140%</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Reach Organica</div>
              </div>
              <div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm">
                <div className="text-3xl font-black text-slate-900 mb-1">High</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Production Value</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative aspect-[9/16] max-w-[400px] mx-auto lg:ml-auto w-full group"
          >
            {/* Phone Frame Simulator */}
            <div className="absolute inset-0 bg-slate-900 rounded-[3rem] p-3 shadow-2xl overflow-hidden border-4 border-slate-800">
              <div className="relative w-full h-full rounded-[2.2rem] overflow-hidden bg-black">
                <video
                  src="/case-studies/back-to-black/social-reel.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md" />
                    <div className="text-xs font-bold text-white">backtoblack_official</div>
                  </div>
                  <div className="text-[10px] text-white/80 line-clamp-2">
                    L&apos;essenza del gusto in ogni frame. La nostra nuova serie social è ora live. #backtoblack #socialstrategy
                  </div>
                </div>
              </div>
            </div>
            {/* Decoration */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </section>

      {/* PROGETTO DEMO Floating Banner */}
      <div className="w-full bg-orange-600 text-white py-3 overflow-hidden relative z-40">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-xs font-black uppercase tracking-[0.3em] mx-8">
               PROGETTO DEMO • SOLO A SCOPO ILLUSTRATIVO • NON UN PRODOTTO FINALE • 
            </span>
          ))}
        </div>
      </div>

      {/* Visual Identity Grid */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase italic">Visual Identity Asset</h2>
          <p className="text-slate-500 font-medium">Frammenti della produzione fotografica dedicata.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {IMAGES.map((src, index) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-[2rem] overflow-hidden group border border-slate-200 bg-white"
            >
              <img
                src={src}
                alt={`Asset ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/80 backdrop-blur-md rounded-2xl border border-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all">
                <div className="text-[10px] font-black text-orange-600 uppercase tracking-widest mb-1">PROGETTO DEMO</div>
                <div className="text-xs font-bold text-slate-900">Asset Fotografico Studio {index + 1}</div>
              </div>
            </motion.div>
          ))}
          
          {/* Card Mockup for Strategy */}
          <div className="lg:col-span-1 rounded-[2.5rem] bg-slate-900 p-10 flex flex-col justify-between text-white shadow-2xl shadow-slate-900/20 relative overflow-hidden group">
            <div className="relative z-10">
              <Instagram className="w-8 h-8 text-orange-500 mb-6" />
              <h3 className="text-3xl font-black tracking-tight mb-4">Ottimizzazione Reels.</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Ogni contenuto è progettato per catturare l&apos;attenzione nei primi 1.5 secondi tramite hook visivi e transizioni dinamiche.
              </p>
            </div>
            <div className="relative z-10 mt-8">
              <div className="text-[10px] font-black tracking-widest text-orange-500 uppercase mb-2">OUTPUT FINALE</div>
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <Film className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <Layout className="w-4 h-4" />
                </div>
              </div>
            </div>
            {/* Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 blur-3xl translate-x-1/2 -translate-y-1/2 group-hover:bg-orange-500/40 transition-colors" />
          </div>
        </div>
      </section>

      {/* Footer Disclaimer */}
      <footer className="py-20 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 mb-8 animate-pulse">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <h4 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tighter">Attenzione: Ambiente Demo</h4>
          <p className="text-slate-500 max-w-2xl text-sm leading-relaxed mb-12">
            Questo caso studio è presentato esclusivamente per scopi dimostrativi nell&apos;ambito della proposta commerciale AlSolved. 
            I dati, i contenuti multimediali e le strategie sono simulazioni di capacità tecnologica e creativa. 
            Non costituisce un prodotto finale o un accordo vincolante.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-6 py-2 rounded-full border border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-400">© 2026 AlSolved Digital Showcase</div>
            <div className="px-6 py-2 rounded-full bg-orange-600 text-white text-[10px] font-black uppercase tracking-widest shadow-lg shadow-orange-600/20">PROGETTO DEMO</div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 20s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </main>
  );
}
