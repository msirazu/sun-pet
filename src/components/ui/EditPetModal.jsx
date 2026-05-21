"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { publicApi } from "@/lib/apiUrl";
import { PencilToSquare } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, TextField, TextArea, Form } from "@heroui/react";
import { toast } from "react-toastify";

const EditPetModal = ({ pet }) => {
    const router = useRouter();
    const [isSaving, setIsSaving] = useState(false);

    if (!pet) return null;

    const { _id, petName, species, breed, age, gender, image, healthStatus, vaccinationStatus, location, adoptionFee, description } = pet;

    const handleEdit = async (e) => {
        e.preventDefault();
        setIsSaving(true);
        
        const formData = new FormData(e.currentTarget);
        const rawData = Object.fromEntries(formData.entries());
        
        const updatedData = {
            ...rawData,
            age: Number(rawData.age),
            adoptionFee: Number(rawData.adoptionFee),
        };
        
        try {
            const res = await fetch(`${publicApi}/pet-detail/${_id}`, {
                cache: 'no-store',
                method: 'PATCH',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(updatedData)
            });

            const data = await res.json();
            
            if (data.success && (data.data.modifiedCount > 0 || data.data.matchedCount > 0)) {
                toast.success('Updated Successfully');
                router.refresh();
            } else {
                toast.info('No changes were made.');
            }
        } catch (error) {
            toast.error('Something went wrong!');
            console.error(error);
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <Modal>
            <Button className={'rounded-none'} variant="outline"><PencilToSquare />Edit</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-2xl">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Heading>Edit Pet Information</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Form onSubmit={handleEdit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <TextField name="petName" defaultValue={petName} isRequired>
                                    <Label>Pet Name</Label>
                                    <Input />
                                </TextField>
                                <TextField name="species" defaultValue={species} isRequired>
                                    <Label>Species</Label>
                                    <Input />
                                </TextField>
                                <TextField name="breed" defaultValue={breed} isRequired>
                                    <Label>Breed</Label>
                                    <Input />
                                </TextField>
                                <TextField name="age" type="number" defaultValue={age} isRequired>
                                    <Label>Age</Label>
                                    <Input />
                                </TextField>
                                <TextField name="gender" defaultValue={gender} isRequired>
                                    <Label>Gender</Label>
                                    <Input />
                                </TextField>
                                <TextField name="healthStatus" defaultValue={healthStatus} isRequired>
                                    <Label>Health Status</Label>
                                    <Input />
                                </TextField>
                                <TextField name="vaccinationStatus" defaultValue={vaccinationStatus} isRequired>
                                    <Label>Vaccination Status</Label>
                                    <Input />
                                </TextField>
                                <TextField name="adoptionFee" type="number" defaultValue={adoptionFee} isRequired>
                                    <Label>Adoption Fee ($)</Label>
                                    <Input />
                                </TextField>
                                <TextField name="location" defaultValue={location} className="col-span-full" isRequired>
                                    <Label>Location</Label>
                                    <Input />
                                </TextField>
                                <TextField name="image" defaultValue={image} className="col-span-full" isRequired>
                                    <Label>Image URL</Label>
                                    <Input />
                                </TextField>
                                <TextField name="description" defaultValue={description} className="col-span-full" isRequired>
                                    <Label>Description</Label>
                                    <TextArea />
                                </TextField>
                                
                                <div className="col-span-full flex justify-end gap-2 mt-4">
                                    <Button slot="close" variant="secondary">Cancel</Button>
                                    <Button type="submit" isLoading={isSaving} slot="close">
                                        {isSaving ? "Saving..." : "Save Changes"}
                                    </Button>
                                </div>
                            </Form>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default EditPetModal;