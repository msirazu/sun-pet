import HeroBanner from "@/components/common/HeroBanner";
import PetsCard from "@/components/ui/PetsCard";
import { getPetsData } from "@/lib/allFetchApi";

const Homepage = async() => {

  const pets = await getPetsData();

  return (
    <>
    <section>
      <HeroBanner/>
    </section>

    <section className="w-11/12 lg:w-10/12 mx-auto">
      <div>
      <h3 className="font-bold text-center text-2xl my-5">Featured Pets</h3>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 mb-5">
        {pets?.slice(0,6).map(pet => <PetsCard key={pet._id} pet={pet}/>)}
      </div>
    </section>
    </>
  );
};

export default Homepage;