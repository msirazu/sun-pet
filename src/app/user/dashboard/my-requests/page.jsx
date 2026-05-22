import MyRequest from "@/features/dashboard/MyRequest";
import { getMyRequestData } from "@/lib/allFetchApi";

const MyRequestsPage = async() => {
    const allRequest = await getMyRequestData();
    return (
        <div>
            <section>
                <h1 className="text-2xl font-bold">My Requests</h1>
            </section>

            <section className="mt-5">
                <MyRequest allRequest={allRequest}/>
            </section>
        </div>
    );
};

export default MyRequestsPage;