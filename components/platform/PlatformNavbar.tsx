'use client';

import React, { useState, useEffect } from 'react';
import { Search, Bell, User } from 'lucide-react';
import Link from 'next/link';

export default function PlatformNavbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`hidden md:flex fixed top-0 inset-x-0 z-[60] transition-colors duration-500 items-center justify-between px-8 md:px-16 py-4 ${isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
            <div className="flex items-center gap-12">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center shadow-xl shadow-orange-600/20">
                        <span className="font-black text-white text-xl">FB</span>
                    </div>
                </Link>

                {/* Nav Links */}
                <div className="hidden md:flex items-center gap-8 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    <Link href="/browse" className="text-white">Home</Link>
                    <Link href="#" className="hover:text-white transition-colors">Digital Reader</Link>
                    <Link href="#" className="hover:text-white transition-colors">Archivio</Link>
                    <Link href="#" className="hover:text-white transition-colors">Abbonati</Link>
                </div>
            </div>

            <div className="flex items-center gap-6 text-white/60">
                <Search className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
                <Bell className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
                <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center border border-white/10 cursor-pointer hover:bg-slate-700 transition-all">
                    <User className="w-4 h-4 text-white" />
                </div>
            </div>
        </nav>
    );
}
