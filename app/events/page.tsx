'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Calendar,
    Users,
    Hotel,
    Plus,
    Minus,
    ArrowLeft,
    QrCode,
    Printer,
    Trash2,
    Beer,
    Ticket,
    CheckCircle2,
    AlertTriangle,
    Loader2,
    FileText
} from 'lucide-react';
import Link from 'next/link';

// Types
type StaffMember = { id: string; name: string; surname: string; role: 'Staff' };
type ReducedTicket = { id: string; name: string; surname: string; role: 'Reduced' };
type BeerItem = { id: string; name: string; degree: string; description: string };

export default function EventManagerDemo() {
    // State
    const [staffList, setStaffList] = useState<StaffMember[]>([]);
    const [reducedList, setReducedList] = useState<ReducedTicket[]>([]);
    const [beerList, setBeerList] = useState<BeerItem[]>([]);

    // Inputs State
    const [staffInput, setStaffInput] = useState({ name: '', surname: '' });
    const [reducedInput, setReducedInput] = useState({ name: '', surname: '' });
    const [beerInput, setBeerInput] = useState({ name: '', degree: '', description: '' });

    const [isPrinting, setIsPrinting] = useState(false);

    // Config
    const MAX_STAFF = 4;
    const MAX_REDUCED = 5;
    const HOTEL_CAPACITY_BEDS = 4; // Simulated Constraint

    // Derived State
    const totalStaff = staffList.length;
    const isOverCapacity = totalStaff > HOTEL_CAPACITY_BEDS;

    // Handlers
    const addStaff = () => {
        if (staffInput.name && staffInput.surname && totalStaff < MAX_STAFF) {
            setStaffList([...staffList, { id: crypto.randomUUID(), ...staffInput, role: 'Staff' }]);
            setStaffInput({ name: '', surname: '' });
        }
    };

    const addReduced = () => {
        if (reducedInput.name && reducedInput.surname && reducedList.length < MAX_REDUCED) {
            setReducedList([...reducedList, { id: crypto.randomUUID(), ...reducedInput, role: 'Reduced' }]);
            setReducedInput({ name: '', surname: '' });
        }
    };

    const addBeer = () => {
        if (beerInput.name && beerInput.degree) {
            setBeerList([...beerList, { id: crypto.randomUUID(), ...beerInput }]);
            setBeerInput({ name: '', degree: '', description: '' });
        }
    };

    const removeStaff = (id: string) => setStaffList(staffList.filter(s => s.id !== id));
    const removeReduced = (id: string) => setReducedList(reducedList.filter(r => r.id !== id));
    const removeBeer = (id: string) => setBeerList(beerList.filter(b => b.id !== id));

    const handlePrint = () => {
        setIsPrinting(true);
        setTimeout(() => setIsPrinting(false), 2000);
    };

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col font-google-sans selection:bg-primary selection:text-white pb-20">
            {/* Header */}
            <header className="bg-white border-b border-slate-200 px-8 py-4 flex items-center justify-between sticky top-0 z-30 shadow-sm backdrop-blur-md bg-white/80">
                <div className="flex items-center gap-6">
                    <Link href="/" className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex flex-col leading-tight">
                        <span className="text-lg font-black tracking-tighter text-slate-800 uppercase italic">Event Logistics OS</span>
                        <span className="text-[10px] font-bold tracking-widest text-primary uppercase flex items-center gap-1">
                            <Calendar className="w-3 h-3" /> Fermento Expo 2026
                        </span>
                    </div>
                </div>
                <div className="hidden md:flex items-center gap-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    <span className="bg-slate-100 px-3 py-1.5 rounded-lg text-slate-800 border border-slate-200">Padiglione 4 • Birra Artigianale</span>
                </div>
            </header>

            <main className="flex-1 p-8 grid grid-cols-1 xl:grid-cols-12 gap-8 max-w-[1800px] mx-auto w-full">

                {/* LEFT COLUMN: INPUTS */}
                <div className="xl:col-span-5 space-y-8">

                    {/* HOTEL CAPACITY WIDGET (Always Visible) */}
                    <div className={`p-8 rounded-[2rem] border transition-all duration-500 relative overflow-hidden ${isOverCapacity ? 'bg-red-50 border-red-200' : 'bg-emerald-50 border-emerald-200'}`}>
                        <div className="relative z-10 flex items-start justify-between">
                            <div className="space-y-2">
                                <h3 className={`text-sm font-black uppercase tracking-widest flex items-center gap-2 ${isOverCapacity ? 'text-red-600' : 'text-emerald-600'}`}>
                                    <Hotel className="w-4 h-4" /> Hotel Capacity Check
                                </h3>
                                <div className="flex items-baseline gap-2">
                                    <span className={`text-4xl font-black ${isOverCapacity ? 'text-red-900' : 'text-emerald-900'}`}>{totalStaff}</span>
                                    <span className={`text-sm font-bold uppercase ${isOverCapacity ? 'text-red-400' : 'text-emerald-400'}`}>/ {HOTEL_CAPACITY_BEDS} POSTI LETTO</span>
                                </div>
                                <p className={`text-xs font-medium max-w-xs ${isOverCapacity ? 'text-red-700' : 'text-emerald-700'}`}>
                                    {isOverCapacity
                                        ? "ATTENZIONE: Il numero di staff supera i posti letto assegnati. Contattare l'amministrazione per un upgrade."
                                        : "Tutto ok. Il personale rientra nei limiti della prenotazione alberghiera."}
                                </p>
                            </div>
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg ${isOverCapacity ? 'bg-red-100 text-red-600' : 'bg-emerald-100 text-emerald-600'}`}>
                                {isOverCapacity ? <AlertTriangle className="w-6 h-6" /> : <CheckCircle2 className="w-6 h-6" />}
                            </div>
                        </div>
                    </div>

                    {/* STAFF INPUT */}
                    <section className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
                            <Users className="w-32 h-32" />
                        </div>
                        <h2 className="text-xl font-black tracking-tight mb-6 flex items-center gap-3 text-slate-800">
                            <Users className="w-5 h-5 text-primary" /> Accredito Staff
                            <span className="text-[10px] bg-slate-100 px-2 py-1 rounded text-slate-500 font-bold uppercase tracking-widest ml-auto">
                                Max {MAX_STAFF}
                            </span>
                        </h2>

                        <div className="space-y-4 relative z-10">
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Nome"
                                    disabled={totalStaff >= MAX_STAFF}
                                    value={staffInput.name}
                                    onChange={(e) => setStaffInput({ ...staffInput, name: e.target.value })}
                                    className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary disabled:opacity-50"
                                />
                                <input
                                    type="text"
                                    placeholder="Cognome"
                                    disabled={totalStaff >= MAX_STAFF}
                                    value={staffInput.surname}
                                    onChange={(e) => setStaffInput({ ...staffInput, surname: e.target.value })}
                                    className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary disabled:opacity-50"
                                />
                            </div>
                            <button
                                onClick={addStaff}
                                disabled={!staffInput.name || !staffInput.surname || totalStaff >= MAX_STAFF}
                                className="w-full py-4 bg-slate-900 text-white rounded-xl font-black text-sm uppercase tracking-wider hover:bg-slate-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                <Plus className="w-4 h-4" /> Aggiungi Staff
                            </button>
                        </div>
                    </section>

                    {/* REDUCED INPUT */}
                    <section className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
                            <Ticket className="w-32 h-32" />
                        </div>
                        <h2 className="text-xl font-black tracking-tight mb-6 flex items-center gap-3 text-slate-800">
                            <Ticket className="w-5 h-5 text-indigo-500" /> Biglietti Ridotti
                            <span className="text-[10px] bg-slate-100 px-2 py-1 rounded text-slate-500 font-bold uppercase tracking-widest ml-auto">
                                Max {MAX_REDUCED}
                            </span>
                        </h2>

                        <div className="space-y-4 relative z-10">
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Nome Ospite"
                                    disabled={reducedList.length >= MAX_REDUCED}
                                    value={reducedInput.name}
                                    onChange={(e) => setReducedInput({ ...reducedInput, name: e.target.value })}
                                    className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 disabled:opacity-50"
                                />
                                <input
                                    type="text"
                                    placeholder="Cognome Ospite"
                                    disabled={reducedList.length >= MAX_REDUCED}
                                    value={reducedInput.surname}
                                    onChange={(e) => setReducedInput({ ...reducedInput, surname: e.target.value })}
                                    className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 disabled:opacity-50"
                                />
                            </div>
                            <button
                                onClick={addReduced}
                                disabled={!reducedInput.name || !reducedInput.surname || reducedList.length >= MAX_REDUCED}
                                className="w-full py-4 bg-indigo-600 text-white rounded-xl font-black text-sm uppercase tracking-wider hover:bg-indigo-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-indigo-200"
                            >
                                <Plus className="w-4 h-4" /> Genera Invito
                            </button>
                        </div>
                    </section>

                    {/* BEER INPUT */}
                    <section className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
                            <Beer className="w-32 h-32" />
                        </div>
                        <h2 className="text-xl font-black tracking-tight mb-6 flex items-center gap-3 text-slate-800">
                            <Beer className="w-5 h-5 text-amber-500" /> Tap List
                        </h2>

                        <div className="space-y-4 relative z-10">
                            <div className="grid grid-cols-3 gap-4">
                                <div className="col-span-2">
                                    <input
                                        type="text"
                                        placeholder="Nome Birra"
                                        value={beerInput.name}
                                        onChange={(e) => setBeerInput({ ...beerInput, name: e.target.value })}
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                                    />
                                </div>
                                <div className="col-span-1">
                                    <input
                                        type="text"
                                        placeholder="Vol %"
                                        value={beerInput.degree}
                                        onChange={(e) => setBeerInput({ ...beerInput, degree: e.target.value })}
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                                    />
                                </div>
                            </div>
                            <textarea
                                placeholder="Descrizione breve / Stile"
                                rows={2}
                                value={beerInput.description}
                                onChange={(e) => setBeerInput({ ...beerInput, description: e.target.value })}
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 resize-none"
                            />
                            <button
                                onClick={addBeer}
                                disabled={!beerInput.name || !beerInput.degree}
                                className="w-full py-4 bg-amber-500 text-white rounded-xl font-black text-sm uppercase tracking-wider hover:bg-amber-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-amber-200"
                            >
                                <Plus className="w-4 h-4" /> Aggiungi alla Spina
                            </button>
                        </div>
                    </section>

                </div>

                {/* RIGHT COLUMN: SUMMARY & OUTPUT */}
                <div className="xl:col-span-7 space-y-8 flex flex-col">

                    {/* PRINT ACTION */}
                    <div className="flex justify-end sticky top-24 z-20">
                        <button
                            onClick={handlePrint}
                            disabled={isPrinting}
                            className="bg-slate-900 text-white px-8 py-4 rounded-[1.5rem] font-black uppercase tracking-wider shadow-xl shadow-slate-900/20 flex items-center gap-3 hover:scale-105 transition-transform active:scale-95 disabled:opacity-80"
                        >
                            {isPrinting ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Generazione PDF...
                                </>
                            ) : (
                                <>
                                    <Printer className="w-5 h-5" />
                                    Stampa Riepilogo PDF
                                </>
                            )}
                        </button>
                    </div>

                    <div className="space-y-8 pb-20">
                        {/* STAFF LIST */}
                        {staffList.length > 0 && (
                            <div className="space-y-4">
                                <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest px-2">Personale Accreditato ({staffList.length})</h3>
                                <AnimatePresence>
                                    {staffList.map((staff) => (
                                        <motion.div
                                            key={staff.id}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="bg-white p-4 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-6 group hover:shadow-md transition-shadow"
                                        >
                                            <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center shrink-0">
                                                <QrCode className="w-8 h-8 text-white" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="font-black text-lg text-slate-900 leading-none mb-1">{staff.name} {staff.surname}</p>
                                                <p className="text-[10px] font-bold text-primary uppercase tracking-widest bg-primary/10 inline-block px-2 py-0.5 rounded">Staff Espositore</p>
                                            </div>
                                            <button onClick={() => removeStaff(staff.id)} className="p-3 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-colors">
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>
                        )}

                        {/* REDUCED LIST */}
                        {reducedList.length > 0 && (
                            <div className="space-y-4">
                                <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest px-2">Inviti Ridotti ({reducedList.length})</h3>
                                <AnimatePresence>
                                    {reducedList.map((ticket) => (
                                        <motion.div
                                            key={ticket.id}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="bg-white p-4 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-6 group hover:shadow-md transition-shadow"
                                        >
                                            <div className="w-16 h-16 bg-indigo-500 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-indigo-200">
                                                <QrCode className="w-8 h-8 text-white" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="font-black text-lg text-slate-900 leading-none mb-1">{ticket.name} {ticket.surname}</p>
                                                <p className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest bg-indigo-50 inline-block px-2 py-0.5 rounded">Pass Ridotto</p>
                                            </div>
                                            <button onClick={() => removeReduced(ticket.id)} className="p-3 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-colors">
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>
                        )}

                        {/* BEER LIST */}
                        {beerList.length > 0 && (
                            <div className="space-y-4">
                                <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest px-2">Lista Birre in Spina</h3>
                                <AnimatePresence>
                                    {beerList.map((beer) => (
                                        <motion.div
                                            key={beer.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            className="bg-amber-50 p-6 rounded-[2rem] border border-amber-100 shadow-sm flex items-start gap-6 relative overflow-hidden"
                                        >
                                            <div className="absolute -right-4 -bottom-4 opacity-10 rotate-12">
                                                <Beer className="w-24 h-24 text-amber-900" />
                                            </div>
                                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm border border-amber-100 text-amber-600 font-black text-xs">
                                                {beer.degree}
                                            </div>
                                            <div className="flex-1 relative z-10">
                                                <h4 className="font-black text-lg text-amber-950 mb-1">{beer.name}</h4>
                                                <p className="text-amber-800/70 text-sm font-medium leading-relaxed max-w-md">{beer.description}</p>
                                            </div>
                                            <button onClick={() => removeBeer(beer.id)} className="relative z-10 p-2 text-amber-300 hover:text-red-500 transition-colors">
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>
                        )}

                        {/* EMPTY STATE */}
                        {staffList.length === 0 && reducedList.length === 0 && beerList.length === 0 && (
                            <div className="h-full flex flex-col items-center justify-center text-center opacity-30 py-20">
                                <FileText className="w-24 h-24 mb-4" />
                                <p className="text-xl font-black">Nessun Dato Inserito</p>
                                <p className="font-medium">Utilizza i moduli a sinistra per popolare il tuo evento.</p>
                            </div>
                        )}

                    </div>
                </div>

            </main>
        </div>
    );
}
