"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { Button } from "@heroui/react";
import ThemeSwitch from "@/components/ui/ThemeSwitch";
import { ArrowRightFromSquare, Gear, LayoutCellsLarge } from "@gravity-ui/icons";

const UserProfile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const router = useRouter();
    
    const { data: session, isPending } = authClient.useSession();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLogOut = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    toast.success("Logged out successfully");
                    setIsOpen(false);
                    router.push("/user/login");
                    router.refresh();
                }
            }
        });
    };

    if (isPending) return <div className="w-10 h-10 bg-slate-200 rounded-full" />;

    if (!session) {
        return (
            <div className="flex gap-4">
                <Button className={'rounded-none'} variant="outline"> <Link href="/user/login">Login</Link></Button>
                <ThemeSwitch />
            </div>
        );
    }

    return (
        <div className="flex items-center">
            <div className="relative" ref={menuRef}>
                <Button variant="flat" onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-2">
                    <Image
    width={40}
    height={40}
    referrerPolicy="no-referrer"
    src={session?.user?.image || "https://cdn-icons-png.flaticon.com/128/2202/2202112.png"}
    alt="avatar"
    className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-600/10"
/>
                </Button>

                {isOpen && (
    <div 
        onMouseLeave={() => setIsOpen(false)}
        className="absolute right-0 md:left-auto top-14 w-50 sm:w-56 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-2xl flex flex-col py-2 z-99 animate-in fade-in slide-in-from-top-2 duration-200"
    >
        <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-700">
            <p className="font-bold text-sm">Welcome back!</p>
            <p className="text-sm truncate text-slate-500">{session?.user?.name}</p>
            <p className="text-xs truncate text-slate-500">{session?.user?.email}</p>
        </div>
        
        <Link 
            href="/user/dashboard" 
            onClick={() => setIsOpen(false)} 
            className="px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center gap-3 transition-colors"
        >
            <LayoutCellsLarge/> Dashboard
        </Link>
        
        <Link 
            href="/user/dashboard/settings" 
            onClick={() => setIsOpen(false)} 
            className="px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center gap-3 transition-colors"
        >
            <Gear/>Settings
        </Link>
        
        <button
            onClick={handleLogOut}
            className="px-4 py-2 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 flex items-center gap-3 transition-colors text-left w-full cursor-pointer"
        >
            <ArrowRightFromSquare/>Log Out
        </button>
    </div>
)}
            </div>
            <ThemeSwitch />
        </div>
    );
};

export default UserProfile;