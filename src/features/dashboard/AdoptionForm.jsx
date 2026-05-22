"use client";

import { useState, useEffect } from "react";
import { publicApi } from "@/lib/apiUrl";
import { Button, Input, Label, Form, TextField } from "@heroui/react";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";
import GlobalLoading from "@/components/ui/GlobalLoading";
import { useRouter } from "next/navigation";

const AdoptionForm = ({ pet }) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [isRequested, setIsRequested] = useState(false);
    const { data: session, isPending } = authClient.useSession();

    useEffect(() => {
        if (session?.user?.email) {
            fetch(`${publicApi}/check-request?email=${session.user.email}&petId=${pet._id}`)
                .then(res => res.json())
                .then(data => {
                    if (data.exists) setIsRequested(true);
                });
        }
    }, [session, pet._id]);

    if (isPending) return <GlobalLoading />;
    
    const currentUser = session?.user;
    if (!currentUser) return <p>Please login to adopt.</p>;

    const handleAdopt = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const formData = new FormData(e.currentTarget);
        const adoptionData = {
            petId: pet._id,
            petName: pet.petName,
            userName: currentUser.name,
            userEmail: currentUser.email,
            pickupDate: formData.get("pickupDate"),
            message: formData.get("message"),
            status: "pending"
        };

        try {
            const res = await fetch(`${publicApi}/user/dashboard/adoption-requests`, {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(adoptionData)
            });

            const data = await res.json();
            if (data.success) {
                toast.success('Adoption request submitted successfully!');
                setIsRequested(true);
                e.target.reset();
                router.refresh();
            } else {
                toast.error(data.message || 'Failed to submit request.');
            }
        } catch (error) {
            toast.error('Something went wrong!');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="p-4 border rounded-lg bg-slate-50 dark:bg-slate-800">
            <h3 className="text-xl font-bold mb-4">Adopt {pet.petName}</h3>

            {isRequested ? (
                <div className="p-4 bg-green-100 text-green-700 rounded-md">
                    You have already requested to adopt {pet.petName}.
                </div>
            ) : (
                <Form onSubmit={handleAdopt} className="flex flex-col gap-3">
                    <TextField name="petName" defaultValue={pet.petName} isReadOnly>
                        <Label>Pet Name</Label>
                        <Input />
                    </TextField>
                    <TextField name="userName" defaultValue={currentUser.name} isReadOnly>
                        <Label>User Name</Label>
                        <Input />
                    </TextField>
                    <TextField name="userEmail" defaultValue={currentUser.email} isReadOnly>
                        <Label>User Email</Label>
                        <Input />
                    </TextField>
                    <TextField name="pickupDate" type="date" isRequired>
                        <Label>Pickup Date</Label>
                        <Input />
                    </TextField>
                    <TextField name="message" isRequired>
                        <Label>Message</Label>
                        <Input placeholder="Why do you want to adopt?" />
                    </TextField>
                    <Button type="submit" color="primary" isLoading={isLoading}>
                        Adopt Now
                    </Button>
                </Form>
            )}
        </div>
    );
};

export default AdoptionForm;