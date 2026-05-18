const PetCareTips = () => {

    const tips = [
        {
            id: 1,
            icon: "🥗",
            title: "Balanced Diet",
            desc: "আপনার পোষা প্রাণীকে প্রোটিন এবং ভিটামিন সমৃদ্ধ সঠিক মানের খাবার দিন।"
        },
        {
            id: 2,
            icon: "🏥",
            title: "Regular Checkups",
            desc: "বছরে অন্তত একবার অভিজ্ঞ ভেটেরিনারি ডাক্তার দিয়ে চেকআপ করান।"
        },
        {
            id: 3,
            icon: "🎾",
            title: "Daily Exercise",
            desc: "তাদের শারীরিকভাবে সুস্থ রাখতে প্রতিদিন নিয়ম করে খেলাধুলা বা হাঁটাহাঁটি করান।"
        }
    ];

    return (
        <div className="bg-transparent transition-colors duration-300">
            <div className="container mx-auto">

                <div className="text-center mb-12 animate__animated animate__fadeInDown">
                    <h2 className="text-2xl font-extrabold text-slate-800 dark:text-slate-100 mb-2">
                        Pet Care Tips
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto">
                        আপনার প্রিয় বন্ধুর সুস্বাস্থ্য নিশ্চিত করতে আমাদের কিছু সহজ পরামর্শ।
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    {tips.map((tip) => (
                        <div 
                            key={tip.id}
                            className="group bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 dark:border-slate-700 animate__animated animate__fadeInUp"
                        >
                            <div className="text-4xl mb-4 bg-orange-50 dark:bg-orange-500/10 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform">
                                {tip.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-3">
                                {tip.title}
                            </h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                                {tip.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PetCareTips;