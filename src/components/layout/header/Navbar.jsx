import Image from "next/image";
import NavLinks from "./NavLinks";
import UserProfile from "./UserProfile";

const Navbar = () => {
    return (
        <nav className="flex flex-col md:flex-row justify-between items-center gap-3 py-5 px-6">

            <section className="flex items-center gap-2">
                <div>
                <Image src={'https://sun-pet.vercel.app/assets/icons/sunpet-logo.png'} alt={'sun pet logo'} width={50} height={50}/>
                </div>
                <h1 className="font-bold text-3xl">Sun Pet</h1>
            </section>

            <section className="flex gap-2">
                <NavLinks path={'/'}>Home</NavLinks>
                <NavLinks path={'/pets'}>All Pets</NavLinks>
            </section>

            <section>
                <UserProfile/>
            </section>
            
        </nav>
    );
};

export default Navbar;