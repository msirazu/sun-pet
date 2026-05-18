import HeroBanner from "@/components/common/HeroBanner";
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
      <h3 className="font-bold text-center text-2xl">Featured Pets</h3>
      </div>

      <div>
        {pets.map(pet => pet.petName)}
      </div>
    </section>
    </>
  );
};

export default Homepage;