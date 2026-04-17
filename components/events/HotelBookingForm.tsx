'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, Bed, Check, Users, Building, MousePointerClick } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter
} from "@/components/ui/dialog";

// Mock Data
const ROOM_TYPES = [
    { id: 'single', name: 'Singola Standard', beds: 1, price: 120 },
    { id: 'double', name: 'Doppia Twin', beds: 2, price: 180 },
    { id: 'triple', name: 'Tripla Comfort', beds: 3, price: 240 },
];

export default function HotelBookingForm() {
    // State
    const [staffCount, setStaffCount] = useState<number>(0);
    const [selectedRooms, setSelectedRooms] = useState<{ type: string; count: number }[]>([]);
    const [showPassModal, setShowPassModal] = useState(false);
    const [isGenerating, setIsGenerating] = useState(false);

    // Derived State
    const totalBeds = selectedRooms.reduce((acc, room) => {
        const roomType = ROOM_TYPES.find(r => r.id === room.type);
        return acc + (roomType ? roomType.beds * room.count : 0);
    }, 0);

    const totalCost = selectedRooms.reduce((acc, room) => {
        const roomType = ROOM_TYPES.find(r => r.id === room.type);
        return acc + (roomType ? roomType.price * room.count : 0);
    }, 0);

    const isOverCapacity = staffCount > totalBeds;

    // Handlers
    const addRoom = (typeId: string) => {
        setSelectedRooms(prev => {
            const existing = prev.find(r => r.type === typeId);
            if (existing) {
                return prev.map(r => r.type === typeId ? { ...r, count: r.count + 1 } : r);
            }
            return [...prev, { type: typeId, count: 1 }];
        });
    };

    const removeRoom = (typeId: string) => {
        setSelectedRooms(prev => {
            const existing = prev.find(r => r.type === typeId);
            if (existing && existing.count > 1) {
                return prev.map(r => r.type === typeId ? { ...r, count: r.count - 1 } : r);
            }
            return prev.filter(r => r.type !== typeId);
        });
    };

    const generatePass = () => {
        setIsGenerating(true);
        setTimeout(() => {
            setIsGenerating(false);
            setShowPassModal(true);
        }, 2000);
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl mx-auto p-4 md:p-8">

            {/* LEFT COLUMN: Input & Config */}
            <div className="space-y-8">
                <Card className="border-none shadow-2xl bg-white/80 backdrop-blur-sm">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-2xl">
                            <Users className="w-6 h-6 text-primary" />
                            Gestione Staff & Logistica
                        </CardTitle>
                        <CardDescription>
                            Configura le presenze per Fermento Expo 2026.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-8">

                        {/* Staff Count Input */}
                        <div className="space-y-4">
                            <Label htmlFor="staff-count" className="text-lg font-semibold">
                                Numero Totale Staff Presente
                            </Label>
                            <div className="flex items-center gap-4">
                                <Input
                                    id="staff-count"
                                    type="number"
                                    min="0"
                                    value={staffCount}
                                    onChange={(e) => setStaffCount(parseInt(e.target.value) || 0)}
                                    className="text-3xl font-bold h-16 w-32 text-center"
                                />
                                <span className="text-muted-foreground text-sm">Persone fisiche da accreditare</span>
                            </div>
                        </div>

                        {/* Room Selection */}
                        <div className="space-y-4">
                            <Label className="text-lg font-semibold flex items-center gap-2">
                                <Building className="w-5 h-5" />
                                Assegnazione Camere Hotel
                            </Label>
                            <div className="grid grid-cols-1 gap-4">
                                {ROOM_TYPES.map(room => {
                                    const count = selectedRooms.find(r => r.type === room.id)?.count || 0;
                                    return (
                                        <div key={room.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-200">
                                            <div className="flex flex-col">
                                                <span className="font-bold text-slate-800">{room.name}</span>
                                                <span className="text-xs text-slate-500">{room.beds} Letto/i • €{room.price}/notte</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Button variant="outline" size="icon" onClick={() => removeRoom(room.id)} disabled={count === 0}>-</Button>
                                                <span className="w-8 text-center font-mono font-bold">{count}</span>
                                                <Button variant="outline" size="icon" onClick={() => addRoom(room.id)}>+</Button>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                    </CardContent>
                </Card>
            </div>

            {/* RIGHT COLUMN: Real-time Validation */}
            <div className="space-y-6">

                {/* The "Brain" Card */}
                <Card className="bg-slate-900 text-white border-0 shadow-2xl relative overflow-hidden">
                    {/* Background Pulse Animation */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none"></div>

                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Bed className="w-5 h-5 text-primary" />
                            Analisi Capacità - Live Check
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6 relative z-10">

                        <div className="grid grid-cols-2 gap-4 text-center">
                            <div className="p-4 bg-white/10 rounded-xl backdrop-blur-md">
                                <div className="text-xs uppercase tracking-widest text-slate-400 mb-1">Staff</div>
                                <div className="text-4xl font-black text-white">{staffCount}</div>
                            </div>
                            <div className={`p-4 rounded-xl backdrop-blur-md transition-colors duration-500 ${isOverCapacity ? 'bg-red-500/20 border border-red-500' : 'bg-emerald-500/20 border border-emerald-500'}`}>
                                <div className="text-xs uppercase tracking-widest text-slate-200 mb-1">Posti Letto</div>
                                <div className={`text-4xl font-black ${isOverCapacity ? 'text-red-400' : 'text-emerald-400'}`}>
                                    {totalBeds}
                                </div>
                            </div>
                        </div>

                        {/* THE YELLOW WARNING LOGIC */}
                        <AnimatePresence mode="wait">
                            {isOverCapacity && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20, height: 0 }}
                                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                                    exit={{ opacity: 0, y: -20, height: 0 }}
                                    transition={{ type: "spring", bounce: 0.5 }}
                                >
                                    <Alert variant="destructive" className="bg-yellow-500 border-yellow-600 text-slate-900">
                                        <AlertTriangle className="h-5 w-5 !text-slate-900" />
                                        <AlertTitle className="font-bold text-lg">Attenzione: Logistica Insufficiente</AlertTitle>
                                        <AlertDescription className="font-medium">
                                            Hai {staffCount - totalBeds} membri dello staff senza alloggio assegnato.
                                            Consigliamo di aggiungere {Math.ceil((staffCount - totalBeds) / 2)} camere doppie.
                                        </AlertDescription>
                                    </Alert>
                                </motion.div>
                            )}

                            {!isOverCapacity && staffCount > 0 && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                >
                                    <Alert className="bg-emerald-500/20 border-emerald-500 text-emerald-300">
                                        <Check className="h-5 w-5" />
                                        <AlertTitle className="font-bold">Logistica Ottimizzata</AlertTitle>
                                        <AlertDescription>
                                            Costo Stimato Totale: €{totalCost}
                                        </AlertDescription>
                                    </Alert>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="pt-8">
                            <Button
                                size="lg"
                                className="w-full h-16 text-lg font-bold shadow-xl shadow-primary/20"
                                disabled={isOverCapacity || staffCount === 0 || isGenerating}
                                onClick={generatePass}
                            >
                                {isGenerating ? (
                                    <span className="flex items-center gap-2 animate-pulse">
                                        Generazione Pass in corso...
                                    </span>
                                ) : (
                                    <span className="flex items-center gap-2">
                                        <MousePointerClick className="w-5 h-5" />
                                        Conferma e Genera Pass Digitali
                                    </span>
                                )}
                            </Button>
                        </div>

                    </CardContent>
                </Card>

            </div>

            {/* Pass Generation Modal */}
            <Dialog open={showPassModal} onOpenChange={setShowPassModal}>
                <DialogContent className="sm:max-w-md bg-white text-slate-900 border-none shadow-2xl">
                    <DialogHeader>
                        <DialogTitle className="text-center text-2xl font-black uppercase tracking-tighter text-primary">
                            Pass Generato
                        </DialogTitle>
                        <CardDescription className="text-center">
                            Pronto per l'invio all'app dello staff.
                        </CardDescription>
                    </DialogHeader>
                    <div className="flex flex-col items-center justify-center p-6 space-y-4">
                        <div className="w-48 h-48 bg-white p-2 rounded-xl border-2 border-slate-900 flex items-center justify-center shadow-lg">
                            {/* Placeholder for QR Code */}
                            <img
                                src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=AlSolvedDemo123"
                                alt="Demo QR"
                                className="w-full h-full opacity-90"
                            />
                        </div>
                        <div className="text-center space-y-1">
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Codice Univoco</p>
                            <p className="text-2xl font-mono font-black text-slate-900">FER-2026-X99</p>
                        </div>
                    </div>
                    <DialogFooter className="sm:justify-center">
                        <Button type="button" variant="secondary" onClick={() => setShowPassModal(false)}>
                            Chiudi
                        </Button>
                        <Button type="button">invia Email agli Staff</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
