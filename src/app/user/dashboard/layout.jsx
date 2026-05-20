import DashboardFooter from "@/features/dashboard/DashboardFooter";
import DashboardHeader from "@/features/dashboard/DashboardHeader";
import DashboardLeftSidebar from "@/features/dashboard/DashboardLeftSidebar";

const DashboardLayout = ({ children }) => {
    return (
        <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
   
            <aside className="w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hidden md:block">
                <DashboardLeftSidebar />
            </aside>

            <div className="flex-1 flex flex-col min-w-0">
                <header className="sticky top-0 z-40">
                    <DashboardHeader />
                </header>

                <main className="flex-1 p-4 md:p-8 dark:text-slate-200">
                    {children}
                </main>

                <footer>
                    <DashboardFooter/>
                </footer>
            </div>
        </div>
    );
};

export default DashboardLayout;