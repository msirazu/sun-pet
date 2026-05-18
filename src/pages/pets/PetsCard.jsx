import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const PetsCard = ({ pet }) => {
    const { _id, petName, age, image, location } = pet;

    return (
        <div className="border p-2 border-gray-200 rounded-lg space-y-2">
            <section className="relative w-full aspect-square">
                <Image src={image} alt={petName} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover"/>
            </section>

            <section className="space-y-1">
                <h2 className="font-bold text-lg">{petName}</h2>
                <div className="text-sm flex justify-between items-center">
                <p>Age: {age}</p>
                <p>{location.split(',')[0]}</p>
                </div>
                <Button className={'w-full rounded-none mt-2'}><Link href={`/pet-detail/${_id}`}>View Details</Link></Button>
            </section>
        </div>
    );
};

export default PetsCard;