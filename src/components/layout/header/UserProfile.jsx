'use client';

import { Button } from "@heroui/react";
import Link from "next/link";

const UserProfile = () => {
    return (
        <div className="flex gap-2 items-center">
            <Button className={'rounded-none'} variant={'outline'}><Link href={'/user/login'}>Login</Link></Button>

            <Button className={'rounded-none'} variant={'outline'}><Link href={'/user/register'}>Register</Link></Button>
        </div>
    );
};

export default UserProfile;