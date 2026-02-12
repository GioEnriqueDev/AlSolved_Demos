'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { getAssetPath } from '@/lib/utils';
import LoadingScreen from '@/components/platform/LoadingScreen';
import BeerLogo from '@/components/platform/BeerLogo';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showLoadingScreen, setShowLoadingScreen] = useState(false);
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        // Mock Auth Logic
        setTimeout(() => {
            if (email.toLowerCase() === 'test' && password === 'test') {
                setShowLoadingScreen(true);
            } else {
                setError('Credenziali non valide. Usa test / test');
                setLoading(false);
            }
        }, 1200);
    };

    const handleLoadingComplete = () => {
        router.push('/browse');
    };

    return (
        <main className="relative min-h-screen w-full overflow-hidden bg-[#050505] font-google-sans flex items-center justify-center">
            {/* Netflix-style Mosaic Background with Amber Glow */}
            <div className="absolute inset-0 z-0 opacity-40">
                <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 scale-110 -rotate-12 opacity-40 blur-[3px]">
                    {Array.from({ length: 48 }).map((_, i) => (
                        <div key={i} className="aspect-[2/3] bg-slate-900 rounded-sm overflow-hidden border border-white/5">
                            <img
                                src={getAssetPath(`/images/p${(i % 6) + 1}.png`)}
                                className="w-full h-full object-cover grayscale opacity-25"
                                alt=""
                            />
                        </div>
                    ))}
                </div>
                {/* Amber Pub Atmosphere Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-orange-950/20 to-black" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(242,142,28,0.05)_0%,transparent_70%)]" />
            </div>

            {/* Cinematic Login Container */}
            <AnimatePresence mode="wait">
                {!showLoadingScreen ? (
                    <motion.div
                        key="login-form"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05, filter: 'blur(30px)' }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="relative z-10 w-full max-w-md p-10 bg-black/40 backdrop-blur-3xl rounded-[3rem] border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)]"
                    >
                        {/* Beer Logo Header */}
                        <div className="text-center mb-10">
                            <motion.div
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="inline-block mb-2"
                            >
                                <BeerLogo size="md" />
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="text-5xl font-black text-white tracking-tighter uppercase mb-2 italic"
                            >
                                <span className="text-orange-500">Fermento</span> Birra
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="text-slate-500 font-black tracking-[0.3em] uppercase text-[9px] bg-white/5 py-1 px-4 rounded-full inline-block"
                            >
                                Exclusive Digital Network
                            </motion.p>
                        </div>

                        {/* Login Form */}
                        <form onSubmit={handleLogin} className="space-y-6">
                            <div className="space-y-1">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Username Platinum</label>
                                <input
                                    type="text"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-slate-700 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all font-medium text-lg"
                                    placeholder="Es. test"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Secure Passkey</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-slate-700 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all font-medium text-lg"
                                    placeholder="Es. test"
                                />
                            </div>

                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-red-400 text-xs font-bold text-center bg-red-500/10 py-3 rounded-xl border border-red-500/20"
                                >
                                    {error}
                                </motion.div>
                            )}

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-black uppercase tracking-[0.2em] py-5 rounded-2xl shadow-2xl shadow-orange-600/20 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 group overflow-hidden relative"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    {loading ? 'Identificazione...' : 'Entra nel Network'}
                                    {!loading && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                                </span>

                                {/* Button Hover Shine */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            </button>
                        </form>

                        <div className="mt-8 pt-8 border-t border-white/5 text-center flex flex-col items-center gap-4">
                            <div className="inline-flex items-center gap-2 text-[9px] font-black text-slate-600 uppercase tracking-[0.2em]">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                AlSolved Secure Node #8821
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    <LoadingScreen onComplete={handleLoadingComplete} />
                )}
            </AnimatePresence>
        </main>
    );
}
