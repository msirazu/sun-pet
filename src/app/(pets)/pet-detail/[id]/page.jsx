import EditPetModal from "@/components/ui/EditPetModal";
import PetDeleteModal from "@/components/ui/PetDeleteModal";
import AdoptionForm from "@/features/dashboard/AdoptionForm";
import { publicApi } from "@/lib/apiUrl";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";

const PetDetailPage = async({ params }) => {

    const { id } = await params;

    const { token } = await auth.api.getToken({
        headers: await headers(),
    });

    const res = await fetch(`${publicApi}/pet-detail/${id}`, {
        cache: 'no-store',
        headers: {
            authorization: `Bearer ${token}`
        }
    });

    const data = await res.json();
    const pet = data.data;

    if (!pet) return null;

    const { _id, petName, species, breed, age, gender, image, healthStatus, vaccinationStatus, location, adoptionFee, description, ownerEmail, status } = pet;

    const validImage = typeof image === "string" &&
    (image.startsWith("/") || image.startsWith("http")) ? image : "/assets/pets/fallback.jpg";

    return (
        <div className="grid grid-cols-12 gap-5 w-11/12 lg:w-10/12 mx-auto py-5">

            <section className="col-span-12 md:col-span-8 p-3 border space-y-2">

                <div className="relative w-full aspect-video">
                    <Image src={validImage} sizes="(max-width: 768px) 100vw, 50vw" fill priority alt={petName} className="object-cover"/>
                </div>

                <div className="flex justify-between items-center flex-col md:flex-row">
                <h2 className="text-2xl font-bold my-5">{petName}</h2>
                <div className="flex gap-2">
                <EditPetModal pet={pet}/>
                <PetDeleteModal pet={pet}/>
                </div>
                </div>

                <div className="space-y-2">
                <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-5">
                    <p>Age: {age}</p>
                    <p>Species: {species}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-5">
                    <p>Breed: {breed}</p>
                    <p>Gender: {gender}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-5">
                    <p>Health Status: {healthStatus}</p>
                    <p>Vaccination Status: {vaccinationStatus}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-5">
                    <p>Location: {location}</p>
                    <p>Owner Email: {ownerEmail}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-5">
                    <p>Status: {status}</p>
                    <p>Adoption Fee: ${adoptionFee}</p>
                </div>

                <p>Description: {description}</p>
                </div>

            </section>

            <section className="col-span-12 md:col-span-4 p-3 border">
                <AdoptionForm pet={pet}/>
            </section>

        </div>
    );
};

export default PetDetailPage;