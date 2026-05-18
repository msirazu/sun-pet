import { Spinner } from "@heroui/react";

const GlobalLoading = () => {
    return (
        <div className="flex justify-center items-center h-25">
           <Spinner/> 
           <Spinner/> 
           <Spinner/> 
           <Spinner/> 
           <Spinner/> 
        </div>
    );
};

export default GlobalLoading;