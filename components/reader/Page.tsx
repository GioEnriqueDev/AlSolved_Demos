import React from 'react';
import { cn } from '@/lib/utils';
import { Shield } from 'lucide-react';

interface PageProps {
    id: number;
    children?: React.ReactNode;
    image?: string;
    isCover?: boolean;
    className?: string;
}

const Page = React.forwardRef<HTMLDivElement, PageProps>((props, ref) => {
    return (
        <div
            className={cn(
                "demo-page relative overflow-hidden bg-white shadow-2xl h-full w-full select-none",
                props.className
            )}
            ref={ref}
        >
            {/* Layer 1: Background/Texture */}
            <div className="absolute inset-0 bg-[#fdfdfd] z-0"></div>

            {/* Layer 2: Content (Image or Children) */}
            <div className="relative z-10 w-full h-full">
                {props.image ? (
                    <img
                        src={props.image}
                        alt={`Page ${props.id}`}
                        className="w-full h-full object-cover pointer-events-none"
                    />
                ) : (
                    <div className="p-8 w-full h-full">
                        {props.children}
                    </div>
                )}
            </div>

            {/* Layer 3: Security Overlay (CRITICAL) */}
            <div className="absolute inset-0 z-20 pointer-events-none opacity-40 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 flex flex-col items-center justify-center rotate-[-35deg] gap-32 scale-150">
                    {Array.from({ length: 10 }).map((_, i) => (
                        <div key={i} className="whitespace-nowrap flex gap-12 text-xs font-bold text-slate-300 uppercase tracking-widest">
                            <span>Licensed to: mario.rossi@demo.com</span>
                            <span>•</span>
                            <span>Session ID: 8821X</span>
                            <span>•</span>
                            <span>AlSolved Secure Reader</span>
                            <span>•</span>
                            <span>Property of Fermento Birra</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Layer 4: Shadows & Spine Effect */}
            <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black/20 via-black/5 to-transparent z-30 pointer-events-none mix-blend-multiply opacity-50"></div>
            <div className="absolute inset-y-0 right-0 w-[1px] bg-black/10 z-40 pointer-events-none"></div>

            {/* Pagination / Footer */}
            {!props.isCover && (
                <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center pointer-events-none">
                    <span className="text-[9px] font-black text-slate-400 tracking-[0.2em] uppercase">
                        Page {props.id.toString().padStart(2, '0')}
                    </span>
                </div>
            )}
        </div>
    );
});

Page.displayName = 'Page';

export default Page;
