import { Outlet } from "react-router-dom";
import Header_Section from "../Pages/Shared_Elements/Header/Header";
import Footer_Section from "../Pages/Shared_Elements/Footer/Footer";

const Default_Main = () => {
    return (
        <>
            <Header_Section />
            <div className="max-w-[1600px] h-[100%] mx-auto">
                <Outlet />
            </div>
            <Footer_Section />
        </>
    );
};

export default Default_Main;