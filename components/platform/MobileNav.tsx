'use client';

import React from 'react';
import { Home, Search, BookOpen, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileNav() {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <div className="md:hidden fixed bottom-0 inset-x-0 z-[100] bg-black/90 backdrop-blur-lg border-t border-white/10 pb-safe pt-2 px-6">
            <div className="flex justify-between items-center h-16">
                <Link href="/browse" className={`flex flex-col items-center gap-1 ${isActive('/browse') ? 'text-orange-500' : 'text-slate-500'}`}>
                    <Home className="w-6 h-6" />
                    <span className="text-[10px] font-medium">Home</span>
                </Link>

                <Link href="#" className={`flex flex-col items-center gap-1 ${isActive('/search') ? 'text-orange-500' : 'text-slate-500'}`}>
                    <Search className="w-6 h-6" />
                    <span className="text-[10px] font-medium">Cerca</span>
                </Link>

                <Link href="/reader" className={`flex flex-col items-center gap-1 ${isActive('/reader') ? 'text-orange-500' : 'text-slate-500'}`}>
                    <BookOpen className="w-6 h-6" />
                    <span className="text-[10px] font-medium">Libreria</span>
                </Link>

                <Link href="#" className={`flex flex-col items-center gap-1 ${isActive('/profile') ? 'text-orange-500' : 'text-slate-500'}`}>
                    <User className="w-6 h-6" />
                    <span className="text-[10px] font-medium">Profilo</span>
                </Link>
            </div>
        </div>
    );
}
