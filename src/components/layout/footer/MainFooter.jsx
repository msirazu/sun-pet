import { Separator } from "@heroui/react";
import Link from "next/link";

const MainFooter = () => {
    return (
        <div className="w-11/12 lg:w-10/12 mx-auto">
            <section>
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
            </section>
            <Separator className="my-3"/>
            <section>
                <div className="text-white font-normal">
                    <p className="text-[12px] text-center">Copyright @ <Link href={'/'}><span className="font-bold">Sun Pet</span></Link>. All Rights Reserved</p>
                </div>
            </section>
        </div>
    );
};

export default MainFooter;