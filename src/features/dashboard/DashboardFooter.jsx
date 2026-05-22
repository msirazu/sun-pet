import Link from "next/link";

const DashboardFooter = () => {
    return (
        <div className="p-4 text-center text-[12px] text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex justify-center items-center gap-1">

            Copyright © 2026.<Link href={'/'}><span className="font-bold text-black dark:text-orange-500 hover:underline">Sun Pet</span></Link> - All rights reserved
        
        </div>
    );
};

export default DashboardFooter;