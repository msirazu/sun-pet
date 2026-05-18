const PetsCard = ({ pet }) => {
    const { _id, petName, species, breed, age, gender, image, healthStatus, vaccinationStatus, location, adoptionFee, description, ownerEmail, status } = pet;
    return (
        <div className="border p-5 border-gray-100 rounded-lg">
            {petName}
        </div>
    );
};

export default PetsCard;