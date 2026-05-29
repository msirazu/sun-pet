import PetsCard from "@/components/ui/PetsCard";
import PetsFiltering from "@/components/ui/PetsFiltering";
import { getPetsData } from "@/lib/allFetchApi";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const PetsPage = async({ searchParams }) => {
    const sParams = await searchParams;
    const query = new URLSearchParams(sParams).toString();
    const { token } = await auth.api.getToken({
        headers: await headers(),
    })
    const pets = await getPetsData(query, token);
    return (
        <div className="w-11/12 lg:w-10/12 mx-auto space-y-5">
           <section>
             <PetsFiltering/>
           </section>

           <section className="space-y-5">
            <h3 className="text-center font-bold text-xl">Find Your Best Friend</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 mb-5">
                {pets?.map(pet => <PetsCard key={pet._id} pet={pet}/>)}
            </div>
           </section>
        </div>
    );
};

export default PetsPage;