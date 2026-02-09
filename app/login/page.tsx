'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Sparkles, ArrowRight, Lock } from 'lucide-react';
import Antigravity from '@/components/Antigravity';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        // Mock Auth
        setTimeout(() => {
            if (email.toLowerCase() === 'test' && password === 'test') {
                router.push('/reader');
            } else {
                setError('Credenziali non valide. Usa test / test');
                setLoading(false);
            }
        }, 1500); // Fake network delay for dramatic effect
    };

    return (
        <main className="relative min-h-screen w-full overflow-hidden bg-slate-950 font-google-sans flex items-center justify-center">
            {/* Background Ambience */}
            <div className="absolute inset-0 pointer-events-none">
                <Antigravity count={200} springStrength={0.01} friction={0.9} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-orange-950/20" />
            </div>

            {/* Cinematic Login Container */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 w-full max-w-md p-8"
            >
                {/* Brand Header */}
                <div className="text-center mb-10 space-y-4">
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-orange-600 shadow-2xl shadow-orange-600/40 text-white mb-6"
                    >
                        <span className="font-black text-2xl">FB</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase"
                    >
                        Fermento <span className="text-orange-500">Birra</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-slate-400 font-medium tracking-widest uppercase text-xs"
                    >
                        Accesso Esclusivo Abbonati
                    </motion.p>
                </div>

                {/* Login Form */}
                <form onSubmit={handleLogin} className="space-y-6 bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl">
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Email / User</label>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all font-medium"
                            placeholder="Inserisci 'test'"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all font-medium"
                            placeholder="Inserisci 'test'"
                        />
                    </div>

                    {error && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="text-red-400 text-sm font-bold text-center bg-red-500/10 py-2 rounded-lg border border-red-500/20"
                        >
                            {error}
                        </motion.div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-orange-600 hover:bg-orange-500 text-white font-black uppercase tracking-widest py-4 rounded-xl shadow-lg shadow-orange-600/20 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                    >
                        {loading ? (
                            <span className="animate-pulse">Accesso in corso...</span>
                        ) : (
                            <>
                                Entra nel Magazine <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </>
                        )}
                    </button>
                </form>

                <div className="mt-8 text-center">
                    <div className="inline-flex items-center gap-2 text-[10px] font-bold text-slate-600 uppercase tracking-widest p-2 rounded-lg bg-black/20">
                        <Lock className="w-3 h-3 text-green-500" />
                        Secure Session by AlSolved
                    </div>
                </div>
            </motion.div>
        </main>
    );
}
