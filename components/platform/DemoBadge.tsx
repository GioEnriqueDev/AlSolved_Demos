'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

export default function DemoBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed top-4 right-4 z-[9999] pointer-events-none"
    >
      <div className="flex items-center gap-3 px-6 py-2.5 bg-orange-500 text-white rounded-full shadow-2xl shadow-orange-500/40 border border-orange-400 backdrop-blur-md">
        <AlertTriangle className="w-5 h-5 animate-pulse text-white" />
        <div className="flex flex-col leading-none">
          <span className="text-[12px] font-black tracking-tighter uppercase whitespace-nowrap">PROGETTO DEMO</span>
          <span className="text-[8px] font-bold tracking-widest opacity-80 uppercase">Solo a scopo illustrativo</span>
        </div>
      </div>
    </motion.div>
  );
}
