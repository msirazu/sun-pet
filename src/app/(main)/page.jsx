import HeroBanner from "@/components/common/HeroBanner";
import HowItWorks from "@/components/home/HowItWorks";
import PetCareTips from "@/components/home/PetCareTips";
import PetsCard from "@/components/ui/PetsCard";
import { getFeaturedPets } from "@/lib/allFetchApi";

const Homepage = async() => {

  const pets = await getFeaturedPets();

  return (
    <>
    <section>
      <HeroBanner/>
    </section>

    <section className="w-11/12 lg:w-10/12 mx-auto">
      <div>
      <h3 className="font-bold text-center text-2xl my-5">Featured Pets</h3>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
        {pets?.map(pet => <PetsCard key={pet._id} pet={pet}/>)}
      </div>
    </section>

    <section className="w-11/12 lg:w-10/12 mx-auto my-5">
      <HowItWorks/>
    </section>

    <section className="w-11/12 lg:w-10/12 mx-auto my-5">
      <PetCareTips/>
    </section>
    </>
  );
};

export default Homepage;