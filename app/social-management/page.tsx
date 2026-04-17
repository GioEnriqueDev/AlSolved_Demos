'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Instagram, 
  Film, 
  Layout, 
  ArrowLeft, 
  ExternalLink, 
  Sparkles, 
  ShieldAlert, 
  AlertTriangle,
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  MoreVertical,
  Music2,
  Search,
  PlusSquare,
  User,
  Home as HomeIcon,
  Wifi,
  Battery
} from 'lucide-react';
import Link from 'next/link';
import { getAssetPath } from '@/lib/utils';

const IMAGES = [
  getAssetPath('/case-studies/back-to-black/1.jpg'),
  getAssetPath('/case-studies/back-to-black/2.jpg'),
  getAssetPath('/case-studies/back-to-black/3.jpg'),
  getAssetPath('/case-studies/back-to-black/4.jpg'),
  getAssetPath('/case-studies/back-to-black/5.jpg'),
];

export default function SocialManagementPage() {
  const [phoneState, setPhoneState] = useState<'home' | 'opening' | 'instagram'>('home');
  const [isLiked, setIsLiked] = useState(false);
  const [showHeartAnimation, setShowHeartAnimation] = useState(false);

  // Auto-launch sequence
  useEffect(() => {
    const timer1 = setTimeout(() => setPhoneState('opening'), 1500);
    const timer2 = setTimeout(() => setPhoneState('instagram'), 2500);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleDoubleTap = () => {
    setIsLiked(true);
    setShowHeartAnimation(true);
    setTimeout(() => setShowHeartAnimation(false), 1000);
  };

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
              <span className="text-[10px] font-bold tracking-widest uppercase text-orange-600">Case Study: Fermento Birra</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 leading-[0.9]">
              Social Media <br />
              <span className="text-orange-500 underline decoration-orange-200 decoration-8 underline-offset-8">Experience.</span>
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
              Abbiamo trasformato la presenza digitale di <strong>Fermento Birra</strong> attraverso una produzione video cinematografica 
              e uno storytelling visivo coerente, ottimizzato per l&apos;engagement organico dei veri appassionati.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm">
                <div className="text-3xl font-black text-slate-900 mb-1">+240%</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Interazione Video</div>
              </div>
              <div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm">
                <div className="text-3xl font-black text-slate-900 mb-1">Premium</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Visual Content</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative aspect-[9/19] max-w-[380px] mx-auto lg:ml-auto w-full group"
          >
            {/* iPhone 15 Pro Frame */}
            <div className="absolute inset-0 bg-[#0c0c0c] rounded-[3.5rem] p-3 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border-[1.5px] border-slate-800/50 ring-1 ring-white/10 overflow-hidden">
              
              {/* iPhone External Buttons */}
              <div className="absolute left-[-2px] top-32 w-[3px] h-12 bg-slate-800 rounded-r-lg border-r border-white/5" />
              <div className="absolute left-[-2px] top-48 w-[3px] h-16 bg-slate-800 rounded-r-lg border-r border-white/5" />
              <div className="absolute left-[-2px] top-68 w-[3px] h-16 bg-slate-800 rounded-r-lg border-r border-white/5" />
              <div className="absolute right-[-2px] top-48 w-[3px] h-24 bg-slate-800 rounded-l-lg border-l border-white/5" />

              {/* Screen Area */}
              <div className="relative w-full h-full rounded-[2.8rem] overflow-hidden bg-black shadow-inner">
                
                {/* Dynamic Island */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-[100] flex items-center justify-end px-4 gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                </div>

                {/* Status Bar */}
                <div className="absolute top-0 left-0 w-full h-10 px-8 flex items-center justify-between text-white z-50 text-[11px] font-bold">
                  <span>11:48</span>
                  <div className="flex items-center gap-1.5">
                    <Wifi className="w-3.5 h-3.5" />
                    <Battery className="w-4 h-4 rotate-0" />
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {phoneState === 'home' && (
                    <motion.div
                      key="home"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, scale: 3 }}
                      transition={{ duration: 0.8 }}
                      className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80')] bg-cover bg-center p-8 pt-16"
                    >
                      <div className="grid grid-cols-4 gap-6">
                        {/* App Icons */}
                        <div className="flex flex-col items-center gap-1">
                          <div className="w-14 h-14 bg-gradient-to-tr from-purple-600 via-red-500 to-yellow-500 rounded-2xl flex items-center justify-center shadow-xl">
                            <Instagram className="text-white w-8 h-8" />
                          </div>
                          <span className="text-[10px] text-white font-medium">Instagram</span>
                        </div>
                        {[1, 2, 3, 4, 5, 6, 7].map(i => (
                          <div key={i} className="flex flex-col items-center gap-1 opacity-60">
                            <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl" />
                            <div className="w-8 h-1 bg-white/20 rounded-full" />
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {phoneState === 'instagram' && (
                    <motion.div
                      key="instagram"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: "spring", damping: 20, stiffness: 100 }}
                      className="absolute inset-0 bg-black flex flex-col"
                    >
                      {/* Video Content */}
                      <div className="relative flex-1" onDoubleClick={handleDoubleTap}>
                        <video
                          src={getAssetPath("/case-studies/back-to-black/social-reel.mp4")}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                        />

                        {/* Double Tap Heart Animation */}
                        <AnimatePresence>
                          {showHeartAnimation && (
                            <motion.div
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1.5, opacity: 1 }}
                              exit={{ scale: 2, opacity: 0 }}
                              className="absolute inset-0 flex items-center justify-center z-[70] pointer-events-none"
                            >
                              <Heart className="w-24 h-24 text-white fill-white shadow-2xl drop-shadow-lg" />
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Instagram Overlay UI */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 z-60 flex flex-col pointer-events-none">
                          
                          {/* Top UI */}
                          <div className="p-8 flex items-center justify-between text-white pt-10">
                            <span className="text-xl font-black italic tracking-tighter">Reels</span>
                            <Instagram className="w-6 h-6" />
                          </div>

                          {/* Right Menu (Interactions) */}
                          <div className="absolute right-4 bottom-32 flex flex-col gap-6 items-center pointer-events-auto">
                            <div className="flex flex-col items-center gap-1" onClick={() => setIsLiked(!isLiked)}>
                              <Heart className={`w-8 h-8 ${isLiked ? 'text-red-500 fill-red-500' : 'text-white'}`} />
                              <span className="text-[10px] font-bold text-white shadow-sm">1.2k</span>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                              <MessageCircle className="w-8 h-8 text-white" />
                              <span className="text-[10px] font-bold text-white">42</span>
                            </div>
                            <Send className="w-8 h-8 text-white" />
                            <Bookmark className="w-8 h-8 text-white" />
                            <MoreVertical className="w-6 h-6 text-white" />
                            <div className="w-8 h-8 rounded-lg border-2 border-white overflow-hidden scale-75">
                                <img src={getAssetPath("/images/p1.png")} className="w-full h-full object-cover" alt="" />
                            </div>
                          </div>

                          {/* Bottom Info */}
                          <div className="mt-auto p-8 pt-0 space-y-4 pointer-events-auto">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full border-2 border-orange-500 p-0.5 overflow-hidden">
                                <img src={getAssetPath("/images/p1.png")} className="w-full h-full object-cover rounded-full" alt="" />
                              </div>
                              <div className="flex items-center gap-1.5">
                                <span className="text-sm font-black text-white">fermentobirra_official</span>
                                <div className="w-3.5 h-3.5 bg-blue-500 rounded-full flex items-center justify-center">
                                  <svg className="w-2 h-2 text-white fill-white" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
                                </div>
                                <span className="text-[10px] font-bold text-white/40 mx-2">•</span>
                                <button className="px-3 py-1 border border-white/30 rounded-lg text-[10px] font-black text-white hover:bg-white/10 transition-colors uppercase tracking-widest">Segui</button>
                              </div>
                            </div>
                            <p className="text-xs text-white/90 line-clamp-2 pr-12 leading-relaxed">
                                L&apos;essenza del gusto in ogni frame. La nostra nuova serie social è ora live per tutti i veri amanti della birra artigianale. 🍺✨ <br />
                                <span className="font-bold">#fermentobirra #socialstrategy #craftbeer</span>
                            </p>
                            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full w-fit">
                                <Music2 className="w-3 h-3 text-white" />
                                <span className="text-[10px] font-medium text-white">Fermento Birra • Audio Originale</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Navbar */}
                      <div className="h-16 border-t border-white/10 flex items-center justify-around px-4 bg-black pointer-events-auto">
                        <HomeIcon className="w-6 h-6 text-white opacity-40" />
                        <Search className="w-6 h-6 text-white opacity-40" />
                        <PlusSquare className="w-6 h-6 text-white opacity-40" />
                        <Film className="w-6 h-6 text-white" />
                        <User className="w-6 h-6 text-white opacity-40" />
                      </div>

                      {/* Home Indicator */}
                      <div className="h-6 flex items-end justify-center pb-2">
                        <div className="w-32 h-1 bg-white/40 rounded-full" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
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
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase italic">Fermento Visual Identity</h2>
          <p className="text-slate-500 font-medium">Frammenti della produzione dedicata per il cliente Fermento Birra.</p>
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
                <div className="text-xs font-bold text-slate-900">Asset Fotografico Fermento {index + 1}</div>
              </div>
            </motion.div>
          ))}
          
          {/* Card Mockup for Strategy */}
          <div className="lg:col-span-1 rounded-[2.5rem] bg-slate-900 p-10 flex flex-col justify-between text-white shadow-2xl shadow-slate-900/20 relative overflow-hidden group">
            <div className="relative z-10">
              <Instagram className="text-orange-500 w-8 h-8 mb-6" />
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
            I dati, i contenuti multimediali e le strategie sono simulazioni di capacità tecnologica e creativa personalizzati per Fermento Birra. 
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
