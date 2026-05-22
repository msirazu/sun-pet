"use client";

import { useState, useRef, useEffect } from "react";
import ThemeSwitch from "@/components/ui/ThemeSwitch";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { toast } from "react-toastify";
import { ArrowRightFromSquare, Gear, LayoutCellsLarge } from "@gravity-ui/icons";

const UserProfile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const router = useRouter();
    const { data: session, isPending } = authClient.useSession();

    // বাইরে ক্লিক করলে মেনু বন্ধ করার লজিক
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

    return (
        <div className="flex gap-4 items-center">
            {isPending ? (
                // লোডিং স্টেট যেন বাটন লাফ না দেয়
                <div className="w-10 h-10 animate-pulse bg-slate-200 dark:bg-slate-700 rounded-full" />
            ) : session ? (
                <div className="relative" ref={menuRef}>
                    <button 
                        onClick={() => setIsOpen(!isOpen)}
                        onMouseEnter={() => setIsOpen(true)}
                        className="flex items-center gap-3 p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors border border-transparent hover:border-slate-200"
                    >
                        <Image
                            width={40}
                            height={40}
                            referrerPolicy="no-referrer"
                            src={session?.user?.image || "https://cdn-icons-png.flaticon.com/128/2202/2202112.png"}
                            alt="avatar"
                            className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-600/10"
                        />
                        <div className="text-left hidden lg:block">
                            <p className="text-sm font-bold truncate max-w-25">{session?.user?.name || "User"}</p>
                            <p className="text-[10px] text-slate-500">Student</p>
                        </div>
                    </button>
                    
                    {isOpen && (
                        <div 
                            onMouseLeave={() => setIsOpen(false)}
                            className="absolute right-0 left-0 md:left-auto top-14 w-50 sm:w-56 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-2xl flex flex-col py-2 z-99 animate-in fade-in slide-in-from-top-2 duration-200"
                        >
                            <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-700">
                                <p className="font-bold text-sm">Welcome back!</p>
                                <p className="text-sm truncate text-slate-500">{session?.user?.name}</p>
                            </div>
                            
                            <Link href="/user/dashboard" onClick={() => setIsOpen(false)} className="px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center gap-3 transition-colors">
                                <LayoutCellsLarge/> Dashboard
                            </Link>
                            
                            <Link href="/user/settings" onClick={() => setIsOpen(false)} className="px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center gap-3 transition-colors">
                                <Gear/> Settings
                            </Link>
                            
                            <button
                                onClick={handleLogOut}
                                className="px-4 py-2 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 flex items-center gap-3 transition-colors text-left w-full cursor-pointer"
                            >
                                <ArrowRightFromSquare/> Log Out
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <Button className="rounded-none" variant="outline">
                    <Link href="/user/login">Login</Link>
                </Button>
            )}
            
            <ThemeSwitch />
        </div>
    );
};

export default UserProfile;