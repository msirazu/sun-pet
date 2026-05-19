import { ArrowLeft } from "@gravity-ui/icons";
import Link from "next/link";

const LoginNavbar = () => {
    return (
        <nav className="w-full py-6 flex justify-between items-center bg-transparent">

      <Link 
        href="/" 
        className="flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-[#D87325] transition-colors"
      >
        <ArrowLeft /> Back to Home
      </Link>

      <Link href="/" className="text-xl font-black text-slate-800 dark:text-slate-100">
        🐾 Sun <span className="text-[#D87325]">Pet</span>
      </Link>
    </nav>
    );
};

export default LoginNavbar;