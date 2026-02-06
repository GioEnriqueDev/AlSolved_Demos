'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    BarChart3,
    ShieldAlert,
    Users,
    TrendingUp,
    Activity,
    ArrowLeft,
    Search,
    Settings,
    Bell,
    CheckCircle2,
    XCircle,
    Clock,
    Zap,
    LayoutDashboard,
    ShieldCheck,
    Cpu
} from 'lucide-react';
import Link from 'next/link';

// Mock Data for the Security Log
const SECURITY_LOGS = [
    { id: 1, user: 'L. Bianchi', action: 'Login Fallito', reason: 'Condivisione Account', status: 'blocked', time: '2m fa', ip: '84.22.11.0' },
    { id: 2, user: 'M. Rossi', action: 'Accesso Autorizzato', reason: 'Abbonamento Premium', status: 'allowed', time: '5m fa', ip: '93.120.44.11' },
    { id: 3, user: 'G. Verdi', action: 'Download Bloccato', reason: 'Violazione Policy', status: 'blocked', time: '12m fa', ip: '151.44.22.8' },
    { id: 4, user: 'A. Neri', action: 'Login Successo', reason: 'Mobile Validato', status: 'allowed', time: '15m fa', ip: '82.11.0.3' },
    { id: 5, user: 'S. Russo', action: 'Sessione Chiusa', reason: 'Cambio IP Rapido', status: 'blocked', time: '30m fa', ip: '194.12.5.99' },
];

export default function AdminDashboardDemo() {
    const [activeTab, setActiveTab] = useState('overview');

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col font-google-sans text-slate-900 selection:bg-primary selection:text-white">
            {/* Sidebar */}
            <aside className="fixed left-0 top-0 bottom-0 w-72 bg-slate-950 text-white p-8 hidden lg:flex flex-col z-30 shadow-2xl">
                <div className="flex items-center gap-4 mb-14">
                    <div className="w-10 h-10 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                        <ShieldAlert className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex flex-col leading-none">
                        <span className="font-black tracking-tighter text-2xl uppercase">AlSolved</span>
                        <span className="text-[9px] font-black text-slate-500 tracking-[0.3em] uppercase">Control Suite</span>
                    </div>
                </div>

                <nav className="flex-1 space-y-2">
                    <NavItem icon={<LayoutDashboard size={18} />} label="Centro Controllo" active={activeTab === 'overview'} onClick={() => setActiveTab('overview')} />
                    <NavItem icon={<Users size={18} />} label="Gestione Utenti" active={activeTab === 'users'} onClick={() => setActiveTab('users')} />
                    <NavItem icon={<ShieldCheck size={18} />} label="Security Engine" active={activeTab === 'security'} onClick={() => setActiveTab('security')} />
                    <NavItem icon={<BarChart3 size={18} />} label="Analytics Expo" active={activeTab === 'reports'} onClick={() => setActiveTab('reports')} />
                </nav>

                <div className="pt-8 border-t border-white/5 space-y-6">
                    <div className="bg-white/5 p-5 rounded-3xl border border-white/10 relative overflow-hidden group">
                        <p className="text-[10px] font-black uppercase text-slate-500 mb-2 relative z-10">Stato Fermento Cloud</p>
                        <div className="flex items-center gap-2 relative z-10">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                            <span className="text-xs font-bold text-emerald-400">OPERATIVO</span>
                        </div>
                        <Cpu className="absolute -right-2 -bottom-2 w-12 h-12 text-white/5 opacity-20 group-hover:scale-110 transition-transform" />
                    </div>
                    <Link href="/" className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors text-xs font-black uppercase tracking-widest px-2 group">
                        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Torna al Sito
                    </Link>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="lg:ml-72 flex-1 flex flex-col">
                {/* Header */}
                <header className="h-24 bg-white/80 backdrop-blur-md border-b border-slate-200 px-10 flex items-center justify-between sticky top-0 z-20">
                    <div className="flex-1 max-w-xl">
                        <div className="relative group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 group-focus-within:text-primary transition-colors" />
                            <input
                                type="text"
                                placeholder="Cerca transazione, IP sospetto o utente..."
                                className="w-full pl-12 pr-6 py-3.5 bg-slate-100/50 border border-slate-200 rounded-2xl text-sm font-medium focus:ring-4 focus:ring-primary/10 focus:bg-white focus:border-primary/20 transition-all outline-none"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-8">
                        <button className="relative text-slate-400 hover:text-primary transition-colors p-3 bg-slate-50 rounded-xl">
                            <Bell size={20} />
                            <span className="absolute top-2 right-2 w-4 h-4 bg-primary text-white text-[9px] font-black rounded-full flex items-center justify-center ring-4 ring-white shadow-lg">3</span>
                        </button>
                        <div className="w-px h-10 bg-slate-200"></div>
                        <div className="flex items-center gap-4">
                            <div className="text-right flex flex-col leading-none">
                                <span className="text-sm font-black text-slate-900">Admin Fermento</span>
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Livello 10 Access</span>
                            </div>
                            <div className="w-12 h-12 rounded-2xl bg-slate-900 border-2 border-white shadow-xl flex items-center justify-center font-black text-white italic">
                                AF
                            </div>
                        </div>
                    </div>
                </header>

                <div className="p-10 space-y-10">
                    {/* Page Title & Controls */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <div className="flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-[0.3em] mb-2">
                                <Zap size={12} /> Live Infrastructure Monitoring
                            </div>
                            <h1 className="text-5xl font-black tracking-tighter">Command Center</h1>
                            <p className="text-slate-500 font-medium text-lg mt-2">Dati integrati per Fermento Expo 2026.</p>
                        </div>
                        <div className="flex gap-4">
                            <button className="px-8 py-3.5 bg-white border border-slate-200 rounded-2xl text-xs font-black uppercase tracking-widest shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">Esporta Dati XLS</button>
                            <button className="px-8 py-3.5 bg-slate-900 text-white rounded-2xl text-xs font-black uppercase tracking-widest shadow-2xl shadow-slate-900/20 hover:brightness-110 hover:-translate-y-1 transition-all">Report Sicurezza</button>
                        </div>
                    </div>

                    {/* Main Dashboard Layout */}
                    <div className="grid grid-cols-1 xl:grid-cols-12 gap-10">

                        {/* Left Side: KPIs & Charts */}
                        <div className="xl:col-span-8 space-y-10">
                            {/* KPI Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <KPICard title="Utenti Attivi" value="2.4k" change="+14%" icon={<Users size={20} />} active />
                                <KPICard title="Minacce Bloccate" value="51" change="-8%" icon={<ShieldAlert className="text-red-500" size={20} />} />
                                <KPICard title="Trend Settimanale" value="€ 58.2k" change="+12.5%" icon={<TrendingUp className="text-emerald-500" size={20} />} />
                            </div>

                            {/* Security Log Table */}
                            <div className="bg-white border border-slate-200 rounded-[3rem] shadow-sm overflow-hidden flex flex-col">
                                <div className="p-8 border-b border-slate-100 flex items-center justify-between">
                                    <h3 className="text-2xl font-black tracking-tighter flex items-center gap-3">
                                        <ShieldAlert className="w-6 h-6 text-primary" /> Registro Eventi Critici
                                    </h3>
                                    <span className="px-4 py-1.5 bg-slate-50 border border-slate-100 rounded-full text-[10px] font-bold text-slate-500 tracking-widest uppercase">Real-Time Feed</span>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="bg-slate-50/50 text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]">
                                                <th className="px-10 py-5">Soggetto</th>
                                                <th className="px-10 py-5">Trigger Azione</th>
                                                <th className="px-10 py-5">Stato Finale</th>
                                                <th className="px-10 py-5">Geo IP</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-50">
                                            {SECURITY_LOGS.map((log) => (
                                                <tr key={log.id} className="hover:bg-slate-50/50 transition-colors group">
                                                    <td className="px-10 py-7">
                                                        <div className="flex flex-col">
                                                            <span className="font-black text-slate-900">{log.user}</span>
                                                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{log.time}</span>
                                                        </div>
                                                    </td>
                                                    <td className="px-10 py-7">
                                                        <div className="flex flex-col -space-y-0.5">
                                                            <span className="text-sm font-black text-slate-800 uppercase italic tracking-tighter">{log.action}</span>
                                                            <span className="text-[11px] text-slate-400 font-medium">{log.reason}</span>
                                                        </div>
                                                    </td>
                                                    <td className="px-10 py-7">
                                                        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest border ${log.status === 'blocked' ? 'bg-red-50 text-red-600 border-red-100 shadow-sm' : 'bg-emerald-50 text-emerald-600 border-emerald-100 shadow-sm'
                                                            }`}>
                                                            {log.status === 'blocked' ? <XCircle size={12} /> : <CheckCircle2 size={12} />}
                                                            {log.status === 'blocked' ? 'RESCINDED' : 'AUTHORIZED'}
                                                        </div>
                                                    </td>
                                                    <td className="px-10 py-7">
                                                        <span className="font-mono text-[11px] text-slate-400 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200/50">{log.ip}</span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Technical Explanation & Trends */}
                        <div className="xl:col-span-4 space-y-10">
                            {/* Technical Explainer */}
                            <div className="bg-slate-950 text-white p-8 rounded-[3rem] shadow-2xl relative overflow-hidden group">
                                <div className="relative z-10">
                                    <h4 className="text-xs font-black uppercase tracking-[0.3em] text-primary mb-8 border-b border-white/5 pb-4">
                                        Architettura AlSolved
                                    </h4>
                                    <div className="space-y-8">
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-primary">
                                                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-ping"></div>
                                                <span className="text-[11px] font-black uppercase tracking-widest">Single Source of Truth</span>
                                            </div>
                                            <p className="text-xs text-white/50 leading-relaxed italic">Il Command Center aggrega i log di sessione gestiti via Redis, fornendo una visione immediata di accessi sospetti e tentativi di leak.</p>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-primary">
                                                <span className="text-[11px] font-black uppercase tracking-widest">Algorithmic Trend</span>
                                            </div>
                                            <p className="text-xs text-white/50 leading-relaxed italic">I grafici di trend non sono solo visuali: analizzano il tasso di conversione degli abbonamenti rispetto ai tentativi di frode bloccati.</p>
                                        </div>
                                        <div className="pt-6">
                                            <div className="p-5 bg-white/5 rounded-[2rem] border border-white/10 flex items-center justify-between">
                                                <span className="text-xs font-black tracking-widest uppercase">Core Uptime</span>
                                                <span className="font-mono text-emerald-400 font-bold">99.998%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Cpu className="absolute -right-6 -bottom-6 w-40 h-40 text-white/10 opacity-[0.03] group-hover:scale-110 transition-transform duration-[3s]" />
                            </div>

                            {/* Mini Trend Chart */}
                            <div className="bg-white border border-slate-200 rounded-[3rem] shadow-sm p-8 flex flex-col">
                                <h3 className="text-lg font-black tracking-tighter mb-8 uppercase italic flex items-center gap-2">
                                    <TrendingUp className="w-5 h-5 text-primary" /> Growth Analysis
                                </h3>

                                <div className="h-48 flex items-end gap-3 mb-8">
                                    {[30, 50, 40, 70, 60, 85, 95].map((h, i) => (
                                        <div key={i} className="flex-1 flex flex-col items-center gap-3 group">
                                            <div className="w-full bg-slate-100 rounded-2xl relative overflow-hidden h-full">
                                                <motion.div
                                                    initial={{ height: 0 }}
                                                    animate={{ height: `${h}%` }}
                                                    transition={{ delay: i * 0.1, duration: 1.5, ease: 'circOut' }}
                                                    className="absolute bottom-0 left-0 right-0 bg-primary group-hover:bg-slate-900 transition-all rounded-2xl"
                                                />
                                            </div>
                                            <span className="text-[9px] font-black text-slate-300 uppercase">{['L', 'M', 'M', 'G', 'V', 'S', 'D'][i]}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                                    <p className="text-[10px] text-slate-500 font-bold leading-normal">
                                        Analisi degli ultimi 7 giorni suggerisce un incremento del <span className="text-emerald-600">+12%</span> negli accessi validati post-evento.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Footer Branding */}
                <footer className="mt-auto p-12 flex flex-col md:flex-row items-center justify-between border-t border-slate-100 bg-white">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-slate-950 text-white flex items-center justify-center font-black italic shadow-lg">AF</div>
                        <div className="flex flex-col -space-y-1">
                            <span className="font-black text-slate-900 text-sm">FERMENTO EXPO CONTROL</span>
                            <span className="text-[9px] font-bold text-slate-400 italic">Powered by AlSolved Engine</span>
                        </div>
                    </div>
                    <p className="text-slate-400 text-[9px] font-black tracking-[0.5em] uppercase mt-6 md:mt-0 opacity-40">
                        Security Operations Center • Reserved Access • v4.22-fb
                    </p>
                </footer>
            </main>
        </div>
    );
}

function NavItem({ icon, label, active, onClick }: { icon: React.ReactNode, label: string, active?: boolean, onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${active ? 'bg-primary text-white shadow-2xl shadow-primary/30 scale-[1.02]' : 'text-slate-500 hover:text-white hover:bg-white/5'
                }`}
        >
            {icon}
            {label}
        </button>
    );
}

function KPICard({ title, value, change, icon, active }: { title: string, value: string, change: string, icon: React.ReactNode, active?: boolean }) {
    const isPositive = change.startsWith('+');
    return (
        <div className={`p-10 rounded-[3rem] border border-slate-200 shadow-sm flex flex-col gap-6 transition-all hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 ${active ? 'bg-white ring-2 ring-primary/5' : 'bg-white'}`}>
            <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-3xl bg-slate-50 flex items-center justify-center border border-slate-100 shadow-inner group-hover:scale-110 transition-transform">
                    {icon}
                </div>
                <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border ${isPositive ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-red-50 text-red-600 border-red-100'}`}>
                    {change}
                </span>
            </div>
            <div>
                <span className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-2">{title}</span>
                <span className="text-4xl font-black tracking-tighter text-slate-900 italic slashed-zero">{value}</span>
            </div>
        </div>
    );
}
