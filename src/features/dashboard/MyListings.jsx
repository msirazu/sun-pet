'use client';
import { useState } from "react";
import DashboardPetCard from "./DashboardPetCard";
import ViewRequestsModal from "./ViewRequestsModal";

const MyListings = ({ initialPets }) => {
    const [pets, setPets] = useState(initialPets || []);
    const [selectedPet, setSelectedPet] = useState(null);

    const handleDelete = (id) => {
        setPets(pets.filter(pet => pet._id !== id));
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pets.map((pet) => (
                <DashboardPetCard 
                    key={pet._id} 
                    pet={pet} 
                    onDelete={handleDelete}
                    onViewRequests={() => setSelectedPet(pet)}/>
            ))}
            
            <ViewRequestsModal 
                pet={selectedPet} 
                onClose={() => setSelectedPet(null)} 
            />
        </div>
    );
};

export default MyListings;