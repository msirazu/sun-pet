import { Button } from "@heroui/react";

const HeroBanner = () => {
    return (
        <div
  className="bg-hero bg-cover bg-center h-75 flex justify-center items-center p-5">
            <div className="flex flex-col justify-center items-center gap-5 text-center">
                <h2 className="font-bold text-3xl">Adopt a Best Friend Today!</h2>
                <div>
                <p className="text-sm">Explore hundreds of pets waiting for a loving home.</p>
                <p className="text-sm">Your companion is just a click away.</p>
                </div>
                <Button variant="primary" className={'rounded-none'}>Adopt Now</Button>
            </div>
</div>
    );
};

export default HeroBanner;