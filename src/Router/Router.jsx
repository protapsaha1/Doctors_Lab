import { createBrowserRouter } from "react-router-dom";
import Default_Main from "../Layouts/Default_Main";
import Home_Page from "../Pages/Home_Page_Element/Home_Page/Home_Page";
import All_Doctors from "../Pages/Doctors_Page/All_Doctors/All_Doctors";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Default_Main />,
        children: [
            {
                path: "/",
                element: <Home_Page />
            },
            {
                path: "doctors",
                element: <All_Doctors />
            }
        ]
    }
])

export default router;