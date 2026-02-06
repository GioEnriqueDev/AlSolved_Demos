'use client';

import { motion, Variants } from 'framer-motion';
import { ArrowRight, BookOpen, Calendar, ShieldCheck, Rocket, Zap, Shield, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Antigravity from '@/components/Antigravity';
import React from 'react';

// Define variants outside component with proper typing
const textReveal: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
  }
};

const staggerText: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.4
    }
  }
};

const containerMatches: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.8
    }
  }
};

export default function Home() {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <main className="min-h-screen bg-white text-slate-900 relative overflow-hidden selection:bg-pink-100 selection:text-primary flex flex-col font-google-sans">
      {/* High Fidelity Antigravity Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <Antigravity
          count={3500}
          springStrength={0.015}
          friction={0.93}
          forceFormation={isHovered}
        />
        {/* Subtle white overlay */}
        <div className="absolute inset-0 bg-white/30 pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-6 py-6 relative z-10 flex flex-col min-h-screen">
        {/* AlSolved Premium Header */}
        <header className="flex items-center justify-between py-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4"
          >
            {/* AlSolved Original Logo SVG */}
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative w-10 h-8">
                {/* White/Ghost Bubble */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="absolute top-0 left-0 text-slate-300 transition-transform group-hover:-translate-x-1">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.8c.8 0 1.6.1 2.4.3L21 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {/* Magenta Bubble */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="absolute bottom-0 right-0 text-primary transition-transform group-hover:translate-x-1">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.8c.8 0 1.6.1 2.4.3L21 2z" fill="currentColor" />
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-2xl font-bold tracking-tighter text-slate-800">ALSOLVED</span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase">Solutions</span>
              </div>
            </div>

            <div className="h-6 w-px bg-slate-200 mx-4 hidden md:block"></div>

            <div className="text-sm font-medium text-slate-400 hidden md:block uppercase tracking-widest text-[10px]">
              Il Futuro dello <span className="text-primary font-bold">Sviluppo su Misura</span>
            </div>
          </motion.div>

          {/* Social Proof / Status Pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="hidden md:flex items-center gap-4"
          >
            <div className="px-4 py-1.5 bg-slate-50 border border-slate-200 rounded-full text-[10px] font-medium text-slate-600 shadow-sm flex items-center">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></span>
              Proposta Tecnologica per Fermento Birra
            </div>
          </motion.div>
        </header>

        {/* Hero Section - The Pitch */}
        <div className="flex-1 flex flex-col justify-center items-center max-w-5xl mx-auto w-full mb-24 relative pointer-events-none text-center">
          <motion.div
            initial="hidden"
            animate="show"
            variants={staggerText}
            className="space-y-12 pointer-events-auto flex flex-col items-center"
          >
            <motion.div variants={textReveal} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 mb-2">
              <Sparkles className="w-3 h-3 text-primary" />
              <span className="text-[10px] font-bold tracking-widest uppercase text-primary">Eccellenza Tecnologica Dimostrata</span>
            </motion.div>

            <motion.h1
              variants={textReveal}
              className="text-6xl md:text-[6.5rem] font-black tracking-tighter text-slate-900 leading-[0.85] max-w-5xl"
            >
              AlSolved x <br />
              <span className="text-primary text-[5rem] md:text-[8rem]">Fermento Birra.</span>
            </motion.h1>

            <motion.p
              variants={textReveal}
              className="text-xl md:text-2xl text-slate-600 font-normal leading-relaxed max-w-3xl"
            >
              Oltre il codice. Progettiamo l&apos;infrastruttura digitale che protegge e scala il valore di <span className="font-bold text-slate-800">Fermento Expo 2026</span>.
              Dall&apos;editoria blindata alla logistica intelligente.
            </motion.p>

            {/* Sales Focus Action Buttons */}
            <motion.div variants={textReveal} className="flex flex-col md:flex-row items-center gap-4 pt-6">
              <Link
                href="#demo"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="px-12 py-5 rounded-full bg-primary text-white font-black text-lg hover:brightness-110 transition-all duration-300 shadow-2xl shadow-primary/30 flex items-center gap-3 group"
              >
                Esplora i Vertical Slice
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link
                href="https://alsolved.it"
                target="_blank"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="px-10 py-5 rounded-full bg-slate-900 text-white font-medium text-lg hover:bg-slate-800 transition-all duration-300 flex items-center gap-2 shadow-xl shadow-slate-900/10"
              >
                La Nostra Roadmap
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Value Proposition Cards - Fermento Pillars */}
        <motion.div
          id="demo"
          variants={containerMatches}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-32 relative z-20"
        >
          <CompactCard
            title="Secure Digital Reader"
            description="Protezione 'Highlander' per il magazine Fermento Birra: accesso unico, watermark dinamico e anti-leak avanzato."
            icon={<Shield className="w-6 h-6" />}
            href="/reader"
            accent="bg-slate-900"
            label="PILLAR 1: SECURITY"
          />
          <CompactCard
            title="Smart Event ERP"
            description="Automazione logistica per espositori: validazione real-time hotel/staff e generazione pass digitale."
            icon={<Zap className="w-6 h-6" />}
            href="/events"
            accent="bg-primary"
            label="PILLAR 2: AUTOMATION"
          />
          <CompactCard
            title="Admin Command Center"
            description="Controllo totale dell'infrastruttura: monitoraggio minacce in tempo reale e analisi trend abbonamenti."
            icon={<Rocket className="w-6 h-6" />}
            href="/admin"
            accent="bg-slate-900"
            label="PILLAR 3: CONTROL"
          />
        </motion.div>

        {/* Why AlSolved Section - Targeted at Fermento */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="pb-32 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-black text-slate-900 mb-12 italic tracking-tighter uppercase">Perché Scegliere AlSolved per Fermento?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div className="space-y-4">
              <h4 className="text-xl font-bold flex items-center gap-2 text-slate-900">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Protezione Proprietà Intellettuale
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                Il magazine Fermento Birra è il cuore editoriale. Abbiamo blindato l&apos;esperienza per impedire leak e pirateria,
                garantendo che il valore resti esclusivo degli abbonati.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-bold flex items-center gap-2 text-slate-900">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Efficienza Logistica Zero-Errori
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                Le fiere sono caotiche. I nostri strumenti di validazione staff eliminano i colli di bottiglia logistici,
                permettendovi di concentrarvi sul networking anziché sui fogli Excel.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Final CTA Footer */}
        <footer className="pb-20 pt-10 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-primary"></div>
            <span className="font-bold text-slate-800 uppercase tracking-tighter">AL-SOLVED x FERMENTO</span>
          </div>
          <p className="text-slate-400 text-[10px] font-medium tracking-widest uppercase">© 2026 Proposta di Collaborazione Strategica.</p>
        </footer>
      </div>
    </main>
  );
}

function CompactCard({ title, description, icon, href, accent, label }: {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  accent: string;
  label?: string;
}) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ y: -15, scale: 1.02 }}
        className="group p-10 rounded-[2.5rem] border border-slate-100 bg-white/60 backdrop-blur-2xl hover:bg-white hover:border-primary/20 transition-all duration-500 cursor-pointer shadow-sm hover:shadow-2xl hover:shadow-primary/10 flex flex-col h-full"
      >
        <div className={`mb-8 p-4 rounded-2xl w-fit text-white ${accent} shadow-lg shadow-current/20 group-hover:rotate-12 transition-transform duration-500`}>
          {icon}
        </div>

        {label && (
          <span className="inline-block text-[10px] font-black tracking-[0.2em] text-primary mb-3 bg-primary/5 px-3 py-1 rounded-full uppercase w-fit">
            {label}
          </span>
        )}

        <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">{title}</h3>
        <p className="text-slate-600 text-base leading-relaxed mb-8 flex-1">
          {description}
        </p>
        <div className="flex items-center text-sm font-black text-primary group-hover:translate-x-2 transition-transform duration-300">
          Avvia Demo <ArrowRight className="w-4 h-4 ml-2" />
        </div>
      </motion.div>
    </Link>
  );
}
