const SettingsPage = () => {
    return (
        <div className="p-6 max-w-4xl mx-auto">

            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border shadow-sm mb-6">
                <h2 className="text-lg font-semibold mb-4">Profile Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="text-sm text-slate-500">Full Name</label>
                        <input type="text" className="w-full mt-1 p-2 border rounded-xl bg-slate-50 dark:bg-slate-700" placeholder="John Doe" />
                    </div>
                    <div>
                        <label className="text-sm text-slate-500">Email Address</label>
                        <input type="email" className="w-full mt-1 p-2 border rounded-xl bg-slate-50 dark:bg-slate-700" placeholder="john@example.com" />
                    </div>
                </div>
                <button className="mt-4 bg-[#D87325] text-white px-4 py-2 rounded-xl font-medium">Save Changes</button>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border shadow-sm">
                <h2 className="text-lg font-semibold mb-4">Security</h2>
                <div className="space-y-4">
                    <div>
                        <label className="text-sm text-slate-500">New Password</label>
                        <input type="password" placeholder="••••••••" className="w-full mt-1 p-2 border rounded-xl bg-slate-50 dark:bg-slate-700" />
                    </div>
                    <button className="text-[#D87325] font-semibold hover:underline">Update Password</button>
                </div>
            </div>
            
            <div className="mt-8 p-6 bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/20 rounded-2xl">
                <h2 className="text-lg font-semibold text-red-600">Danger Zone</h2>
                <p className="text-sm text-red-500 mb-4">Permanently delete your account and all your data.</p>
                <button className="text-red-600 font-bold border border-red-600 px-4 py-2 rounded-xl hover:bg-red-600 hover:text-white transition-all">Delete Account</button>
            </div>
        </div>
    );
};

export default SettingsPage;