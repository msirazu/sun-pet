'use client';

import { useState } from "react";
import { publicApi } from "@/lib/apiUrl";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { TrashBin } from "@gravity-ui/icons";

const PetDeleteModal = ({ pet }) => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    
    if (!pet) return null;

    const { _id, petName } = pet;

    const handleDelete = async (id) => {
        try {
            const res = await fetch(`${publicApi}/pet-detail/${id}`, {
                method: 'DELETE',
            });
            const data = await res.json();

            if (data.success && data.data.deletedCount > 0) {
                toast.success('Deleted Successfully');
                setIsOpen(false);
                router.refresh();
                router.push('/pets'); 
            } else {
                toast.error('Failed to delete.');
            }
        } catch (error) {
            toast.error('Something went wrong!');
            console.error(error);
        }
    };

    return (
        <AlertDialog isOpen={isOpen} onOpenChange={setIsOpen}>
            <Button className={'rounded-none'} variant="danger" onPress={() => setIsOpen(true)}>
                <TrashBin/>Delete
            </Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete {petName} permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete <strong>{petName}</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button variant="tertiary" onPress={() => setIsOpen(false)}>
                                Cancel
                            </Button>
                            <Button 
                                onPress={() => handleDelete(_id)} 
                                variant="danger"
                            >
                                Yes Delete
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
};

export default PetDeleteModal;