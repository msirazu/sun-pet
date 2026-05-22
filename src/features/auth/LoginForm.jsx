'use client';

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const LoginForm = () => {
    const router = useRouter();
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setErrorMessage("");
        setIsLoading(true);

        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());

        try {
            const { data, error } = await authClient.signIn.email({
                email: userData.email,
                password: userData.password,
                rememberMe: true,
            });

            if (data) {
                toast.success('Login Success');
                router.push('/');
            }

            if (error) {
                const errMsg = error.message || "Invalid email or password. Please try again.";
                setErrorMessage(errMsg);
                toast.error(errMsg);
            }
        } catch (err) {
            console.error(err);
            setErrorMessage("An unexpected error occurred.");
        } finally {
            setIsLoading(false);
        }
    }

    const handleGoogleLogin = async() => {
        await authClient.signIn.social({
        provider: "google",
        });
    }

    return (
        <div className="flex justify-center items-center h-screen bg-transparent transition-colors duration-300">

            <Form onSubmit={handleLogin} className="flex w-full max-w-96 flex-col gap-4 border border-slate-200 dark:border-slate-700 p-6 rounded-2xl shadow-sm bg-white dark:bg-slate-800/50 backdrop-blur-md mx-4">
                
                <h2 className="text-2xl font-black text-center text-slate-800 dark:text-slate-100 mb-2">
                    Welcome Back
                </h2>

                {errorMessage && (
                    <div className="text-xs bg-red-50 dark:bg-red-500/10 text-red-500 p-3 rounded-xl border border-red-200 dark:border-red-500/20 text-center font-medium">
                        {errorMessage}
                    </div>
                )}

                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "Please enter a valid email address";
                        }
                        return null;
                    }}
                >
                    <Label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Email</Label>
                    <Input placeholder="john@example.com" className="mt-1" />
                    <FieldError className="text-xs text-red-500 mt-1" />
                </TextField>

                <TextField
                    isRequired
                    minLength={8}
                    name="password"
                    type="password"
                    validate={(value) => {
                        if (value.length < 8) {
                            return "Password must be at least 8 characters";
                        }
                        if (!/[A-Z]/.test(value)) {
                            return "Password must contain at least one uppercase letter";
                        }
                        if (!/[0-9]/.test(value)) {
                            return "Password must contain at least one number";
                        }
                        return null;
                    }}
                >
                    <Label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Password</Label>
                    <Input placeholder="Enter your password" className="mt-1" />
                    <Description className="text-[11px] text-slate-400 dark:text-slate-500 mt-1">
                        Must be at least 8 characters with 1 uppercase and 1 number
                    </Description>
                    <FieldError className="text-xs text-red-500 mt-1" />
                </TextField>

                <div className="flex flex-col gap-2 mt-2">
                    <Button 
                        type="submit" 
                        isLoading={isLoading}
                        className="w-full bg-[#D87325] text-white font-bold rounded-xl transition-all active:scale-98"
                    >
                        {!isLoading && <Check />} Login
                    </Button>
                    <Button 
                        type="reset" 
                        variant="flat" 
                        className="w-full text-slate-500 dark:text-slate-400 font-medium rounded-xl"
                    >
                        Reset Form
                    </Button>
                </div>

                <div className="flex items-center my-2 before:flex-1 before:border-t before:border-slate-200 dark:before:border-slate-700 after:flex-1 after:border-t after:border-slate-200 dark:after:border-slate-700 justify-center text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mx-1">
                    <span className="px-3">OR</span>
                </div>

                <Button onClick={handleGoogleLogin} 
                    variant="outline" 
                    className="w-full font-semibold border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-xl"
                >
                    Continue with Google
                </Button>

                <div className="mt-2 text-center text-[13px] text-slate-500 dark:text-slate-400">
                    Don&apos;t have an Account?{" "}
                    <Link href='/user/register' className="text-[#D87325] hover:underline font-bold transition-all">
                        Register
                    </Link>
                </div>
            </Form>
        </div>
    );
};

export default LoginForm;