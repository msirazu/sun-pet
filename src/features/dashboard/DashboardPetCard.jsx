"use client";
import EditPetModal from "@/components/ui/EditPetModal";
import PetDeleteModal from "@/components/ui/PetDeleteModal";
import Image from "next/image";
import ViewRequestsModal from "./ViewRequestsModal";
import { Button } from "@heroui/react";

const DashboardPetCard = ({ pet, onDelete, onViewRequests }) => {
    const { _id, petName, age, image, location } = pet;

    return (
        <div className="border p-4 border-gray-200 rounded-xl space-y-4 shadow-sm hover:shadow-md transition-shadow">

            <section className="relative w-full aspect-video">
                <Image src={image} alt={petName} fill className="object-cover rounded-lg" priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
            </section>

            <section className="space-y-2">
                <h2 className="font-bold text-xl">{petName}</h2>
                <div className="text-sm text-gray-600 flex justify-between">
                    <p>Age: {age}</p>
                    <p>Location: {location?.split(',')[0]}</p>
                </div>
            </section>

            <section className="grid grid-cols-2 gap-2 pt-2">
                <EditPetModal pet={pet}/>
                
                <PetDeleteModal pet={pet} onDeleteSuccess={onDelete}/>

                <Button className={'rounded-none'} onClick={onViewRequests}>
                    View Requests
                </Button>
            </section>
        </div>
    );
};

export default DashboardPetCard;