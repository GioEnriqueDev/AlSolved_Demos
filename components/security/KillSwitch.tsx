'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, Lock } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";

export default function KillSwitch() {
    const [triggered, setTriggered] = useState(false);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key.toLowerCase() === 'k') {
                setTriggered(true);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Auto-redirect simulation after 5 seconds
    useEffect(() => {
        if (triggered) {
            const timer = setTimeout(() => {
                window.location.href = '/'; // Redirect to home
                setTriggered(false);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [triggered]);

    return (
        <AnimatePresence>
            {triggered && (
                <Dialog open={true}>
                    <DialogContent className="max-w-full w-screen h-screen bg-red-950/90 backdrop-blur-xl border-none text-white flex flex-col items-center justify-center p-0 m-0 !rounded-none z-[9999]">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="text-center space-y-8 max-w-2xl p-8"
                        >
                            <div className="mx-auto w-32 h-32 bg-red-600 rounded-full flex items-center justify-center animate-pulse shadow-[0_0_50px_rgba(220,38,38,0.5)]">
                                <Lock className="w-16 h-16 text-white" />
                            </div>

                            <div className="space-y-4">
                                <h1 className="text-5xl font-black tracking-tighter uppercase text-red-100">
                                    Accesso Bloccato
                                </h1>
                                <div className="flex items-center justify-center gap-2 text-xl font-mono text-red-300 bg-red-900/50 p-4 rounded-lg border border-red-700">
                                    <AlertTriangle className="w-6 h-6" />
                                    Rilevata nuova sessione attiva
                                </div>
                            </div>

                            <div className="space-y-2 text-red-200/80 text-lg">
                                <p>IP: <span className="font-mono font-bold text-white">84.22.11.0 (Milano)</span></p>
                                <p>Dispositivo: <span className="font-mono font-bold text-white">Chrome / Windows 11</span></p>
                                <p className="pt-4 text-sm uppercase tracking-[0.2em] animate-pulse">
                                    Terminazione sessione in corso...
                                </p>
                            </div>
                        </motion.div>
                    </DialogContent>
                </Dialog>
            )}
        </AnimatePresence>
    );
}
