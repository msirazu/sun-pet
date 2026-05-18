'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = ({ path, children, className }) => {
    const location = usePathname();
    const isActive = path === location;
    return (
        <>
            <Link className={`${isActive ? 'text-blue-500 font-bold' : ''} ${className}`} href={path}>{children}</Link>
        </>
    );
};

export default NavLinks;