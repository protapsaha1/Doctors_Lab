import { Outlet, useLocation } from "react-router-dom";
import Header_Section from "../Pages/Shared_Elements/Header/Header";
import Footer_Section from "../Pages/Shared_Elements/Footer/Footer";

const Default_Main = () => {
    const location = useLocation();
    // login and signup routes without header and footer
    const none_header_and_footer_routes = location.pathname.includes("/auth/login") || location.pathname.includes("/auth/signup");

    return (
        <>
            {none_header_and_footer_routes || <Header_Section />}
            <div className="w-[100%] bg-white">
                <div className="max-w-[1600px] h-[100%] mx-auto bg-white">
                    <Outlet />
                </div>
            </div>
            {none_header_and_footer_routes || <Footer_Section />}
        </>
    );
};

export default Default_Main;