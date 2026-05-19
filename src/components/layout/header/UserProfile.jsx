'use client';

import ThemeSwitch from "@/components/ui/ThemeSwitch";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { toast } from "react-toastify";

const UserProfile = () => {
    const router = useRouter();
    const { data: session, isPending } = authClient.useSession();

    const handleLogOut = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    toast.success("Logged out successfully");
                    router.push("/user/login");
                    router.refresh();
                }
            }
        });
    };

    return (
        <div className="flex gap-4 items-center">
            {!isPending && !session ? (
                <>
                    <Button className={'rounded-none'} variant="outline">
                    <Link href="/user/login">
                        Login
                    </Link>
                    </Button>
                </>
            ) : (
                <div className="relative group">
                    <button className="flex items-center gap-3 p-1 rounded-full hover:bg-slate-100 transition-colors border border-transparent hover:border-slate-200">
                        <Image
                            width={40}
                            height={40}
                            src={session?.user?.image || "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=400"}
                            alt="avatar"
                            className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-600/10"
                        />
                        <div className="text-left hidden lg:block">
                            <p className="text-sm font-bold truncate max-w-25">{session?.user?.name || "User"}</p>
                            <p className="text-[10px] text-slate-500">Student</p>
                        </div>
                    </button>
                    
                    <div className="absolute right-0 top-12 w-56 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-2xl hidden group-hover:flex flex-col py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-700">
                            <p className="font-bold text-sm">Welcome back!</p>
                            <p className="text-sm truncate text-slate-500">{session?.user?.name}</p>
                            <p className="text-xs truncate text-slate-500">{session?.user?.email}</p>
                        </div>
                        <Link href="/dashboard" className="px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center gap-3 transition-colors">
                             Dashboard
                        </Link>
                        <Link href="/settings" className="px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center gap-3 transition-colors">
                             Settings
                        </Link>
                        <button
                            onClick={handleLogOut}
                            className="px-4 py-2 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 flex items-center gap-3 transition-colors text-left w-full cursor-pointer"
                        >
                            Log Out
                        </button>
                    </div>
                </div>
            )}

            <ThemeSwitch />
        </div>
    );
};

export default UserProfile;