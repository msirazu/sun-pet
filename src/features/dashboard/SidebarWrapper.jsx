'use client';

import { useState } from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardLeftSidebar from "./DashboardLeftSidebar";
import DashboardFooter from "./DashboardFooter";

const SidebarWrapper = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex w-full min-h-screen bg-slate-50">

            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-40 md:hidden" 
                    onClick={() => setIsOpen(false)} 
                />
            )}

            <div className={`
                fixed inset-y-0 left-0 z-50 w-64 bg-white border-r transform transition-transform duration-300
                md:translate-x-0 md:static md:flex-shrink-0
                ${isOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
                <DashboardLeftSidebar />
            </div>

            <div className="flex-1 flex flex-col min-w-0">
                <header className="bg-white border-b sticky top-0 z-30">
                    <DashboardHeader toggleSidebar={() => setIsOpen(!isOpen)} />
                </header>
                
                <main className="flex-1 p-4 dark:bg-slate-800">
                    {children}
                </main>

                <footer className="p-4 border-t dark:bg-slate-700">
                    <DashboardFooter />
                </footer>
            </div>
        </div>
    );
};

export default SidebarWrapper;