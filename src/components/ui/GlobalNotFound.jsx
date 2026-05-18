'use client';

import React from 'react';
import Link from 'next/link';
import { House } from '@gravity-ui/icons';

const GlobalNotFound = () => {

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center bg-white overflow-hidden font-sans">
            
            {/* ব্যাকগ্রাউন্ড ডেকোরেশন (Sun Pet Theme) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-100 rounded-full blur-[100px] -z-10" />

            <div className="animate__animated animate__zoomIn">
                {/* বড় ৪0৪ টেক্সট */}
                <h1 className="text-[120px] md:text-[180px] font-black text-orange-500 leading-none select-none opacity-20">
                    404
                </h1>
                
                <div className="mt-10 md:mt-15">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 mb-4">
                        Lost in the Paws?
                    </h2>
                    <p className="text-slate-600 text-lg md:text-xl font-medium max-w-md mx-auto">
                        আমরা যে পেজটি খুঁজছেন সেটি আমাদের কোনো পেট হয়তো লুকিয়ে রেখেছে!
                    </p>
                </div>
            </div>

            {/* বাটন সেকশন (Pure Tailwind) */}
            <div className="flex flex-col sm:flex-row gap-4 mt-12 animate__animated animate__fadeInUp animate__delay-1s">
                
                {/* Back to Home Button */}
                <Link 
                    href="/" 
                    className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full shadow-lg shadow-orange-200 transition-all duration-300 hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2"><House/>
                    Back to Home
                </Link>
            </div>

            {/* ফুটার টেক্সট */}
            <div className="absolute bottom-10 flex items-center gap-3">
                <span className="w-10 h-1 bg-orange-200"></span>
                <p className="text-slate-400 font-bold tracking-widest uppercase text-xs">Sun Pet Platform</p>
                <span className="w-10 h-1 bg-orange-200"></span>
            </div>
        </div>
    );
};

export default GlobalNotFound;