import { publicApi } from "@/lib/apiUrl";
import Image from "next/image";

const PetDetailPage = async({ params }) => {

    const { id } = await params;

    const res = await fetch(`${publicApi}/pet-detail/${id}`);
    const data = await res.json();
    const pet = data.data;

    if (!pet) return null;

    const { _id, petName, species, breed, age, gender, image, healthStatus, vaccinationStatus, location, adoptionFee, description, ownerEmail, status } = pet;
    return (
        <div className="grid grid-cols-12 gap-5 w-11/12 lg:w-10/12 mx-auto py-5">

            <section className="col-span-12 md:col-span-8 p-3 border">

                <div className="relative w-full aspect-video">
                    <Image src={image} sizes="(max-width: 768px) 100vw, 50vw" fill priority alt={petName} className="object-cover"/>
                </div>

                <h2 className="text-2xl text-center font-bold my-5">{petName}</h2>

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

            </section>

        </div>
    );
};

export default PetDetailPage;