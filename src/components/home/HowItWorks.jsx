const HowItWorks = () => {
    return (
            <div className="bg-transparent animate__animated animate__fadeIn transition-colors duration-300">
                <div className="container mx-auto">

                    <h2 className="text-2xl font-extrabold text-center mb-5 text-slate-800 dark:text-slate-100">
                        How It Works
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">

                        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center border-y-4 border-orange-400">
                            <div className="w-14 h-14 bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 rounded-full flex items-center justify-center mx-auto mb-4 font-black text-2xl">
                                1
                            </div>
                            <h3 className="font-bold text-xl mb-3 text-slate-700 dark:text-slate-200"> Find Your Friend </h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                                আমাদের হাজারো পেটের মধ্য থেকে আপনার প্রিয় বন্ধুকে খুঁজে নিন।
                            </p>
                        </div>

                        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center border-y-4 border-orange-400">
                            <div className="w-14 h-14 bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 rounded-full flex items-center justify-center mx-auto mb-4 font-black text-2xl">
                                2
                            </div>
                            <h3 className="font-bold text-xl mb-3 text-slate-700 dark:text-slate-200"> Send Request </h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                                সঠিক তথ্য দিয়ে অ্যাডপশন ফর্মটি পূরণ করে সাবমিট করুন।
                            </p>
                        </div>

                        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center border-y-4 border-orange-400">
                            <div className="w-14 h-14 bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 rounded-full flex items-center justify-center mx-auto mb-4 font-black text-2xl">
                                3
                            </div>
                            <h3 className="font-bold text-xl mb-3 text-slate-700 dark:text-slate-200"> Take Home </h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                                অ্যাপ্রুভাল পেয়ে গেলেই নতুন বন্ধুকে নিয়ে ফিরুন আপনার নীড়ে!
                            </p>
                        </div>

                    </div>
                </div>
            </div>
    );
};

export default HowItWorks;