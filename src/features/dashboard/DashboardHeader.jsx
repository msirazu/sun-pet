'use client';

import UserProfile from "@/components/layout/header/UserProfile";
import { ListCheck } from '@gravity-ui/icons';

const DashboardHeader = ({ toggleSidebar }) => {
    return (
        <header className="h-16 border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 md:px-8 flex items-center justify-between transition-colors duration-300">
            
            <div className="flex items-center gap-4">
                
                <button 
                    onClick={toggleSidebar}
                    className="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
                >
                    <ListCheck size={24} />
                </button>

                <h2 className="font-semibold text-slate-700 dark:text-slate-200 truncate">
                    Dashboard
                </h2>
            </div>

            <div className="flex items-center">
                <UserProfile />
            </div>
        </header>
    );
};

export default DashboardHeader;