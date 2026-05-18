import MainFooter from "@/components/layout/footer/MainFooter";
import MainHeader from "@/components/layout/header/MainHeader";

const MainLayout = ({ children }) => {
    return (
        <div>
            <header className="border-b shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2)]">
                <MainHeader />
            </header>
            <main className="w-11/12 lg:w-10/12 mx-auto">
                {children}
            </main>
            <footer className="bg-[#D87325] py-5">
                <MainFooter />
            </footer>
        </div>
    );
};

export default MainLayout;