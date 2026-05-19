import LoginNavbar from "@/features/auth/LoginNavbar";

const UserLayout = ({ children }) => {
    return (
        <div>
            <header className="w-11/12 lg:w-10/12 mx-auto">
                <LoginNavbar/>
            </header>
            <main className="w-11/12 lg:w-10/12 mx-auto">
                {children}
            </main>
        </div>
    );
};

export default UserLayout;