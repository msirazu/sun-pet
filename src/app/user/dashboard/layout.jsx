import SidebarWrapper from "@/features/dashboard/SidebarWrapper";

const DashboardLayout = ({ children }) => {
    return (
        <SidebarWrapper>
            {children}
        </SidebarWrapper>
    );
};

export default DashboardLayout;