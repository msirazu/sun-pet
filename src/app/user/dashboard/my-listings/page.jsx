import MyListings from "@/features/dashboard/MyListings";
import { publicApi } from "@/lib/apiUrl";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const MyListingsPage = async () => {

    const session = await auth.api.getSession({
    query: {
        disableCookieCache: true,
    }, 
    headers: await headers()
        });
        
    const email = session?.user?.email;

    const res = await fetch(`${publicApi}/user/dashboard/my-listings/${email}`, {
        cache: 'no-store'
    });

    const result = await res.json();
    const myPets = result.data;

    return (
        <div>
            <section>
                <h1 className="text-2xl font-bold mb-6">My Listings</h1>
            </section>

            <section>
                <MyListings initialPets={myPets} />
            </section>
        </div>
    );
};

export default MyListingsPage;