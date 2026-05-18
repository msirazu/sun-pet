import { publicApi } from "@/lib/apiUrl";

const PetDetailPage = async({ params }) => {

    const { id } = await params;

    const res = await fetch(`${publicApi}/pet-detail/${id}`);
    const data = await res.json();
    const pet = data.data;
    const { _id, petName, species, breed, age, gender, image, healthStatus, vaccinationStatus, location, adoptionFee, description, ownerEmail, status } = pet;
    return (
        <div>
            {petName}
        </div>
    );
};

export default PetDetailPage;