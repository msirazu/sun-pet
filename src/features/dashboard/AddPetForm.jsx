'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { publicApi } from "@/lib/apiUrl";
import { Button, FieldError, Form, Input, Label, TextArea, TextField } from "@heroui/react";
import { toast } from "react-toastify";

const AddPetForm = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const formData = new FormData(e.currentTarget);
        const rawData = Object.fromEntries(formData.entries());

        const petData = {
            ...rawData,
            age: Number(rawData.age),
            adoptionFee: Number(rawData.adoptionFee),
        };

        try {
            const res = await fetch(`${publicApi}/pets`, {
                cache: 'no-store',
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(petData)
            });

            const data = await res.json();

            if (res.ok && data.success) {
                toast.success('Pet successfully added!');
                router.refresh();
                router.push('/pets');
            } else {
                throw new Error(data.message || "Failed to add pet");
            }
        } catch (error) {
            toast.error(error.message || "Something went wrong!");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
            <h1 className="text-2xl font-bold mb-6">Add a New Pet</h1>
            
            <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <TextField isRequired name="petName">
                        <Label>Pet Name</Label>
                        <Input placeholder="e.g. Lucy" />
                        <FieldError />
                    </TextField>
                    <TextField isRequired name="species">
                        <Label>Species</Label>
                        <Input placeholder="e.g. Cat" />
                        <FieldError />
                    </TextField>
                    <TextField isRequired name="breed">
                        <Label>Breed</Label>
                        <Input placeholder="e.g. Siamese" />
                        <FieldError />
                    </TextField>
                    <TextField 
                        isRequired 
                        name="age" 
                        type="number" 
                        validate={(value) => (Number(value) < 0 ? "Age cannot be negative" : null)}
                    >
                        <Label>Age</Label>
                        <Input placeholder="e.g. 2" />
                        <FieldError />
                    </TextField>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <TextField isRequired name="gender">
                        <Label>Gender</Label>
                        <Input placeholder="e.g. Female" />
                        <FieldError />
                    </TextField>
                    <TextField isRequired name="healthStatus">
                        <Label>Health Status</Label>
                        <Input placeholder="e.g. Healthy" />
                        <FieldError />
                    </TextField>
                    <TextField isRequired name="vaccinationStatus">
                        <Label>Vaccination Status</Label>
                        <Input placeholder="e.g. Vaccinated" />
                        <FieldError />
                    </TextField>
                    <TextField 
                        isRequired 
                        name="adoptionFee" 
                        type="number" 
                        validate={(value) => (Number(value) < 0 ? "Fee cannot be negative" : null)}
                    >
                        <Label>Adoption Fee ($)</Label>
                        <Input placeholder="90" />
                        <FieldError />
                    </TextField>
                </div>

                <TextField isRequired name="location">
                    <Label>Location</Label>
                    <Input placeholder="e.g. Narayanganj, Bangladesh" />
                    <FieldError />
                </TextField>

                <TextField isRequired name="image">
                    <Label>Image URL</Label>
                    <Input placeholder="e.g. /assets/pets/cat5.jpg" />
                    <FieldError />
                </TextField>

                <TextField isRequired name="description">
                    <Label>Description</Label>
                    <TextArea placeholder="Tell us about the pet..." />
                    <FieldError />
                </TextField>

                {/* Hidden Fields */}
                <input type="hidden" name="status" value="available" />
                <input type="hidden" name="ownerEmail" value="user@example.com" />

                <div className="flex gap-2 mt-4">
                    <Button type="submit" color="primary" isLoading={isLoading}>
                        {isLoading ? "Saving..." : "Add Pet"}
                    </Button>
                    <Button type="reset" variant="flat">Reset</Button>
                </div>
            </Form>
        </div>
    );
};

export default AddPetForm;