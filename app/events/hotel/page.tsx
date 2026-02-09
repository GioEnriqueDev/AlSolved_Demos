'use client';

import HotelBookingForm from '@/components/events/HotelBookingForm';
import { motion } from 'framer-motion';

export default function HotelBookingPage() {
    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 md:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-6xl mx-auto mb-12"
            >
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-4">
                    Event Logistics <span className="text-primary">OS</span>
                </h1>
                <p className="text-xl text-slate-500 max-w-2xl">
                    Il sistema intelligente che previene errori logistici prima che accadano.
                    Prova a inserire più staff che posti letto.
                </p>
            </motion.div>

            <HotelBookingForm />
        </div>
    );
}
