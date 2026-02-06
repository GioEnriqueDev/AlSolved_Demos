'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Calendar,
    Users,
    Hotel,
    MapPin,
    AlertTriangle,
    CheckCircle2,
    Plus,
    Minus,
    ArrowLeft,
    ArrowRight,
    QrCode,
    Download,
    Printer,
    X,
    Zap,
    Info,
    Activity
} from 'lucide-react';
import Link from 'next/link';

export default function EventManagerDemo() {
    const [staffCount, setStaffCount] = useState(12);
    const [isGenerating, setIsGenerating] = useState(false);
    const [showPass, setShowPass] = useState(false);

    // Configuration - Simulated Hotel Capacity
    const HOTEL_CAPACITY = {
        totalRooms: 10,
        bedsPerRoom: 2,
    };

    const totalBeds = HOTEL_CAPACITY.totalRooms * HOTEL_CAPACITY.bedsPerRoom;
    const isOverCapacity = staffCount > totalBeds;
    const missingBeds = staffCount - totalBeds;

    const handleGeneratePass = () => {
        setIsGenerating(true);
        setTimeout(() => {
            setIsGenerating(false);
            setShowPass(true);
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col font-google-sans selection:bg-primary selection:text-white">
            {/* Header */}
            <header className="bg-white border-b border-slate-200 px-8 py-4 flex items-center justify-between sticky top-0 z-20 shadow-sm">
                <div className="flex items-center gap-6">
                    <Link href="/" className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex flex-col leading-tight">
                        <span className="text-lg font-black tracking-tighter text-slate-800 uppercase italic">Gestore ERP Espositori</span>
                        <span className="text-[10px] font-bold tracking-widest text-primary uppercase flex items-center gap-1">
                            <Calendar className="w-3 h-3" /> Fermento Expo 2026 Admin
                        </span>
                    </div>
                </div>

                <div className="hidden md:flex items-center gap-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    <span className="bg-slate-100 px-3 py-1.5 rounded-lg text-slate-800 border border-slate-200">Verona Fiere</span>
                    <span className="bg-slate-100 px-3 py-1.5 rounded-lg text-slate-800 border border-slate-200">Padiglione 4 • Birra Artigianale</span>
                </div>
            </header>

            <main className="flex-1 p-8 grid grid-cols-1 xl:grid-cols-12 gap-8 max-w-[1600px] mx-auto w-full">

                {/* Left Column: Technical Context */}
                <aside className="xl:col-span-3 space-y-6">
                    <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-xl relative overflow-hidden group">
                        <div className="relative z-10">
                            <h3 className="text-sm font-black uppercase tracking-widest text-primary mb-6 flex items-center gap-2">
                                <Zap className="w-4 h-4" /> Automazione AlSolved
                            </h3>
                            <div className="space-y-6">
                                <div className="space-y-1">
                                    <span className="text-[10px] font-black text-white/40 uppercase">Smart Validation</span>
                                    <p className="text-xs text-white/70 leading-relaxed italic">Il sistema calcola istantaneamente il gap tra personale dichiarato e posti letto prenotati via API.</p>
                                </div>
                                <div className="space-y-1">
                                    <span className="text-[10px] font-black text-white/40 uppercase">Zero-Cost Error</span>
                                    <p className="text-xs text-white/70 leading-relaxed italic">Evitiamo over-booking o dimenticanze logistiche che pesano sul budget dell&apos;espositore.</p>
                                </div>
                                <div className="space-y-1">
                                    <span className="text-[10px] font-black text-white/40 uppercase">Instant Issuance</span>
                                    <p className="text-xs text-white/70 leading-relaxed italic">Al termine della validazione, il pass viene generato e sincronizzato con il controllo accessi della fiera.</p>
                                </div>
                            </div>
                        </div>
                        <Activity className="absolute -right-6 -bottom-6 w-32 h-32 text-white/5 opacity-10 group-hover:rotate-12 transition-transform duration-1000" />
                    </div>

                    <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
                        <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                            <Info className="w-4 h-4" /> Nota di Progetto
                        </h4>
                        <p className="text-xs text-slate-500 leading-relaxed">
                            Questa demo riproduce fedelmente la Sez. 5.1 delle specifiche: <strong>&apos;The Yellow Warning&apos;</strong>. Un alert non bloccante che guida l&apos;utente verso la scelta corretta.
                        </p>
                    </div>
                </aside>

                {/* Center Column: Form & Configuration */}
                <div className="xl:col-span-6 space-y-8">
                    <section className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm">
                        <div className="flex items-center justify-between mb-10">
                            <h2 className="text-3xl font-black tracking-tighter flex items-center gap-4">
                                <Users className="w-8 h-8 text-primary" /> Analisi Personale
                            </h2>
                            <div className="flex items-center gap-4 bg-slate-50 p-2.5 rounded-3xl border border-slate-100 shadow-inner">
                                <button
                                    onClick={() => setStaffCount(Math.max(0, staffCount - 1))}
                                    className="p-3 hover:bg-white hover:shadow-md rounded-2xl transition-all"
                                >
                                    <Minus className="w-5 h-5 text-slate-400" />
                                </button>
                                <span className="text-2xl font-black min-w-[3ch] text-center text-slate-900">{staffCount}</span>
                                <button
                                    onClick={() => setStaffCount(staffCount + 1)}
                                    className="p-3 hover:bg-white hover:shadow-md rounded-2xl transition-all"
                                >
                                    <Plus className="w-5 h-5 text-slate-400" />
                                </button>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Punto di Raccolta</span>
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                                        <p className="font-bold text-slate-800">Main Entrance Verona Fiere</p>
                                    </div>
                                </div>
                                <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Timeline Evento</span>
                                    <div className="flex items-center gap-3">
                                        <Calendar className="w-4 h-4 text-slate-400" />
                                        <p className="font-bold text-slate-800">Marzo 14 - Marzo 18</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 bg-emerald-50 rounded-[2.5rem] border border-emerald-100 flex items-center justify-between">
                                <div className="space-y-1">
                                    <h4 className="text-lg font-black text-emerald-900 tracking-tight">Accesso Espositore Validato</h4>
                                    <p className="text-emerald-700/70 text-sm font-medium italic">Sincronizzazione API con il padiglione centrale attiva.</p>
                                </div>
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-900/10">
                                    <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Validation Logic Visual Feedback */}
                    <AnimatePresence>
                        {isOverCapacity && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                                className="bg-amber-50 border border-amber-200 p-10 rounded-[2.5rem] flex flex-col md:flex-row gap-8 shadow-xl shadow-amber-900/5"
                            >
                                <div className="w-20 h-20 bg-amber-500 rounded-3xl flex items-center justify-center shrink-0 shadow-lg shadow-amber-500/30">
                                    <AlertTriangle className="w-10 h-10 text-white" />
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-2xl font-black text-amber-950 tracking-tight uppercase italic">Attenzione: Sbilanciamento Alloggi</h3>
                                    <p className="text-amber-900/80 text-base leading-relaxed font-bold">
                                        Stai dichiarando <span className="underline">{staffCount} operatori</span> ma hai prenotato solo <span className="underline">{totalBeds} letti</span>.
                                    </p>
                                    <p className="text-amber-800/60 text-sm">
                                        Mancano <strong>{missingBeds} posti letto</strong>. Fermento Expo richiede che tutto lo staff sia alloggiato in strutture convenzionate.
                                    </p>
                                    <button className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-amber-600 hover:text-amber-700 pt-4 transition-colors">
                                        Modifica Prenotazione Camere <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Right Column: Summary & Actions */}
                <div className="xl:col-span-3 space-y-8">
                    <section className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm flex flex-col min-h-[500px]">
                        <h2 className="text-2xl font-black tracking-tight mb-8 flex items-center gap-3">
                            <Hotel className="w-6 h-6 text-primary" /> Budget Logistico
                        </h2>

                        <div className="space-y-6 flex-1">
                            <div className="flex justify-between items-center py-4 border-b border-slate-50">
                                <span className="text-slate-500 font-bold text-xs uppercase tracking-widest">Capacità Hotel</span>
                                <span className="font-black text-lg">{totalBeds}</span>
                            </div>
                            <div className="flex justify-between items-center py-4 border-b border-slate-50">
                                <span className="text-slate-500 font-bold text-xs uppercase tracking-widest">Posti Richiesti</span>
                                <span className={`font-black text-lg ${isOverCapacity ? 'text-red-500' : 'text-slate-900'}`}>{staffCount}</span>
                            </div>
                            <div className="flex flex-col gap-2 pt-4">
                                <span className="text-slate-500 font-bold text-xs uppercase tracking-widest mb-1">Stato Conferma</span>
                                <span className={`text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-xl text-center border ${isOverCapacity
                                        ? 'bg-red-50 text-red-600 border-red-100'
                                        : 'bg-emerald-50 text-emerald-600 border-emerald-100'
                                    }`}>
                                    {isOverCapacity ? 'AZIONE RICHIESTA' : 'LOGISTICA OTTIMIZZATA'}
                                </span>
                            </div>
                        </div>

                        <div className="pt-10">
                            <button
                                disabled={isOverCapacity || isGenerating}
                                onClick={handleGeneratePass}
                                className={`w-full py-6 rounded-[2rem] font-black text-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-2xl ${isOverCapacity
                                        ? 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200 shadow-none'
                                        : 'bg-slate-900 text-white hover:brightness-110 shadow-slate-900/20'
                                    }`}
                            >
                                {isGenerating ? (
                                    <span className="flex items-center gap-2">
                                        <span className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></span>
                                        Sincronizzazione...
                                    </span>
                                ) : (
                                    <>
                                        Genera Pass QR <QrCode className="w-5 h-5" />
                                    </>
                                )}
                            </button>
                        </div>
                    </section>
                </div>
            </main>

            {/* Pass Modal overlay */}
            <AnimatePresence>
                {showPass && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-xl flex items-center justify-center p-6"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 40, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            className="bg-white rounded-[3.5rem] p-12 max-w-sm w-full relative shadow-2xl overflow-hidden border border-white/20"
                        >
                            <button
                                onClick={() => setShowPass(false)}
                                className="absolute top-8 right-8 p-2 hover:bg-slate-100 rounded-full transition-colors"
                            >
                                <X className="w-6 h-6 text-slate-400" />
                            </button>

                            <div className="flex flex-col items-center text-center space-y-8">
                                <div className="w-20 h-20 bg-primary/10 rounded-[2rem] flex items-center justify-center shadow-inner">
                                    <QrCode className="w-10 h-10 text-primary" />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-black tracking-tighter mb-2 italic">PASS VALIDATO</h2>
                                    <p className="text-slate-500 text-sm font-medium leading-relaxed px-4">
                                        Piattaforma Fermento Expo: Il badge per lo staff è pronto e sincronizzato.
                                    </p>
                                </div>

                                {/* Mock Badge Graphic */}
                                <div className="w-full bg-slate-50 p-8 rounded-[2.5rem] border-2 border-dashed border-slate-200">
                                    <div className="aspect-square bg-white rounded-3xl flex items-center justify-center shadow-2xl mb-6 ring-8 ring-slate-100">
                                        <QrCode className="w-28 h-28 text-slate-900" />
                                    </div>
                                    <div className="flex items-center justify-between border-t border-slate-200 pt-6">
                                        <div className="text-left font-black leading-tight uppercase text-[9px]">
                                            <span className="block text-slate-400 mb-0.5">Ruolo</span>
                                            <span className="text-slate-900 tracking-tighter">ESPOSITORE</span>
                                        </div>
                                        <div className="text-right font-black leading-tight uppercase text-[9px]">
                                            <span className="block text-slate-400 mb-0.5">Padiglione</span>
                                            <span className="text-slate-900 tracking-tighter">ARTIGIANALE 4</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex w-full gap-4">
                                    <button className="flex-1 py-5 bg-slate-900 text-white rounded-[1.5rem] font-black text-xs flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors uppercase italic tracking-tighter shadow-lg">
                                        <Printer className="w-4 h-4" /> Stampa
                                    </button>
                                    <button className="flex-1 py-5 border-2 border-slate-100 rounded-[1.5rem] font-black text-xs flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors uppercase italic tracking-tighter">
                                        <Download className="w-4 h-4" /> PDF
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Footer Meta */}
            <footer className="p-12 text-center bg-white border-t border-slate-100">
                <p className="text-slate-400 text-[10px] font-black tracking-[0.4em] uppercase opacity-40">
                    AlSolved Advanced ERP Logic • Fermento Birra Exclusive Implementation
                </p>
            </footer>
        </div>
    );
}
