'use client';

import { ThemeProvider } from "next-themes";
import { ToastContainer } from "react-toastify";
import 'animate.css';

const AppProviders = ({ children }) => {
    return (
        <>
            <ToastContainer/>
            <ThemeProvider attribute={'class'} defaultTheme={'light'}>
                {children}
            </ThemeProvider>
        </>
    );
};

export default AppProviders;