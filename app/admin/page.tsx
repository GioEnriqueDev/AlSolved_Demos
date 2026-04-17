'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, AlertOctagon, DollarSign } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import DashboardCharts from '@/components/admin/DashboardCharts';
import SecurityLogTable from '@/components/admin/SecurityLogTable';

export default function AdminDashboardPage() {
    return (
        <div className="min-h-screen bg-slate-50/50 p-8 space-y-8">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-between"
            >
                <div>
                    <div className="flex items-center gap-3">
                        <h1 className="text-3xl font-black text-slate-900 tracking-tight">Admin Command Center</h1>
                        <span className="bg-orange-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest animate-pulse">PROGETTO DEMO</span>
                    </div>
                    <p className="text-slate-500 font-medium">Panoramica live dell'ecosistema Fermento • <span className="text-orange-600 font-bold uppercase italic text-[10px]">Solo a scopo illustrativo</span></p>
                </div>
                <div className="flex flex-col items-end gap-2 text-right">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></div>
                        <span className="font-mono text-sm font-bold text-green-600 uppercase tracking-tighter">SIMULATED CORE ONLINE</span>
                    </div>
                </div>
            </motion.div>

            {/* KPI GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <KpiCard
                    title="Abbonati Totali"
                    value="1,284"
                    change="+12%"
                    icon={<Users className="w-4 h-4 text-slate-500" />}
                />
                <KpiCard
                    title="Lettori Online"
                    value="342"
                    change="+5%"
                    icon={<BookOpen className="w-4 h-4 text-slate-500" />}
                />
                <KpiCard
                    title="Minacce Bloccate"
                    value="12"
                    change="live"
                    icon={<AlertOctagon className="w-4 h-4 text-red-500" />}
                    trend="destructive"
                />
                <KpiCard
                    title="Ricavi Evento"
                    value="€ 42.5k"
                    change="+8%"
                    icon={<DollarSign className="w-4 h-4 text-slate-500" />}
                />
            </div>

            {/* CHARTS & LOGS */}
            <div className="grid grid-cols-1 lg:grid-cols-7 gap-8">
                <DashboardCharts />
                <SecurityLogTable />
            </div>
        </div>
    );
}

function KpiCard({ title, value, change, icon, trend = "default" }: { title: string, value: string, change: string, icon: React.ReactNode, trend?: "default" | "destructive" }) {
    return (
        <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-slate-600">
                    {title}
                </CardTitle>
                {icon}
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold text-slate-900">{value}</div>
                <p className={`text-xs ${trend === 'destructive' ? 'text-red-500 font-bold' : 'text-emerald-600 font-bold'}`}>
                    {change} {trend === 'default' && "dal mese scorso"}
                </p>
            </CardContent>
        </Card>
    )
}
