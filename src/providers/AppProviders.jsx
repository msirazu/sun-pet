'use client';

import { ToastContainer } from "react-toastify";

const AppProviders = ({ children }) => {
    return (
        <>
            <ToastContainer/>
            {children}
        </>
    );
};

export default AppProviders;