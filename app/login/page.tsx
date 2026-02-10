'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Sparkles, ArrowRight, Lock } from 'lucide-react';
import LoadingScreen from '@/components/platform/LoadingScreen';
import { getAssetPath } from '@/lib/utils';

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
        <main className="relative min-h-screen w-full overflow-hidden bg-black font-google-sans flex items-center justify-center">
            {/* Netflix-style Mosaic Background */}
            <div className="absolute inset-0 z-0 opacity-40">
                <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 scale-110 -rotate-12 opacity-50 blur-[2px]">
                    {Array.from({ length: 48 }).map((_, i) => (
                        <div key={i} className="aspect-[2/3] bg-slate-800 rounded-sm overflow-hidden">
                            <img
                                src={getAssetPath(`/images/p${(i % 6) + 1}.png`)}
                                className="w-full h-full object-cover grayscale opacity-30"
                                alt=""
                            />
                        </div>
                    ))}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/80" />
            </div>

            {/* Cinematic Login Container */}
            <AnimatePresence mode="wait">
                {!showLoadingScreen ? (
                    <motion.div
                        key="login-form"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, filter: 'blur(20px)' }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="relative z-10 w-full max-w-md p-10 bg-black/60 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]"
                    >
                        {/* Brand Header */}
                        <div className="text-center mb-10">
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
                                className="text-4xl font-black text-white tracking-tighter uppercase mb-2"
                            >
                                Accedi a <span className="text-orange-500 italic">Fermento</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="text-slate-400 font-bold tracking-widest uppercase text-[10px]"
                            >
                                Il Network dell&apos;Eccellenza Birraria
                            </motion.p>
                        </div>

                        {/* Login Form */}
                        <form onSubmit={handleLogin} className="space-y-6">
                            <div className="space-y-1">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Account</label>
                                <input
                                    type="text"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-slate-700 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all font-medium"
                                    placeholder="Inserisci 'test'"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Password Security</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-slate-700 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all font-medium"
                                    placeholder="Inserisci 'test'"
                                />
                            </div>

                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    className="text-red-400 text-xs font-bold text-center bg-red-500/10 py-3 rounded-xl border border-red-500/20"
                                >
                                    {error}
                                </motion.div>
                            )}

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-orange-600 hover:bg-orange-500 text-white font-black uppercase tracking-widest py-5 rounded-2xl shadow-xl shadow-orange-600/20 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                            >
                                {loading ? (
                                    <span className="flex items-center gap-2">
                                        <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></span>
                                        Verifica in corso...
                                    </span>
                                ) : (
                                    <>
                                        Entra nella Piattaforma <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>

                        <div className="mt-8 pt-8 border-t border-white/5 text-center flex flex-col items-center gap-4">
                            <div className="inline-flex items-center gap-2 text-[9px] font-black text-slate-600 uppercase tracking-[0.2em]">
                                <Lock className="w-3 h-3 text-emerald-500" />
                                AlSolved Secure Protocol Active
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
