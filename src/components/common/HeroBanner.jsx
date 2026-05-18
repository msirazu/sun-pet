import Image from "next/image";

const HeroBanner = () => {
    return (
        <div>
            <Image src={'/assets/images/hero-banner.png'} alt={'sun pet hero banner'} loading="eager" width={1500} height={500}/>
        </div>
    );
};

export default HeroBanner;