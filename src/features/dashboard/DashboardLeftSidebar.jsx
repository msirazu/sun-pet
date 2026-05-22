'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText, Gear, LayoutCellsLarge, ListCheck, Plus } from '@gravity-ui/icons';

const DashboardLeftSidebar = () => {
    const pathname = usePathname();
    const menuItems = [
        { name: "My Dashboard", href: "/user/dashboard", icon: <LayoutCellsLarge size={20} /> },
        { name: "My Requests", href: "/user/dashboard/my-requests", icon: <FileText size={20} /> },
        { name: "Add Pet", href: "/user/dashboard/add-pet", icon: <Plus size={20} /> },
        { name: "My Listings", href: "/user/dashboard/my-listings", icon: <ListCheck size={20} /> },
        { name: "Settings", href: "/user/dashboard/settings", icon: <Gear size={20} /> },
    ];

    return (

        <nav className="w-full md:w-64 h-full bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-700 p-6 space-y-2 transition-colors duration-300">
            <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-8 px-4 hidden md:block">
                User Panel
            </h2>
            
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
                {menuItems.map((item) => (
                    <Link 
                        key={item.name} 
                        href={item.href} 
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all whitespace-nowrap ${
                            pathname === item.href 
                                ? "bg-blue-50 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400 font-semibold" 
                                : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                        }`}
                    >
                        {item.icon} 
                        <span className="hidden md:inline">{item.name}</span>
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default DashboardLeftSidebar;