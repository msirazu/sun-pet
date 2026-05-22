const DashboardPage = () => {
    return (
        <div className="p-6">
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl border shadow-sm">
                    <h3 className="text-slate-500">Total Requests</h3>
                    <p className="text-3xl font-bold">12</p>
                </div>
                <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl border shadow-sm">
                    <h3 className="text-slate-500">Available Pets</h3>
                    <p className="text-3xl font-bold">5</p>
                </div>
                <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl border shadow-sm">
                    <h3 className="text-slate-500">Adopted Pets</h3>
                    <p className="text-3xl font-bold">3</p>
                </div>
            </div>

            <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
                <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl border">
                    <p className="text-slate-500">No recent activity found.</p>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;