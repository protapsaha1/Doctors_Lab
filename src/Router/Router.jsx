import { createBrowserRouter } from "react-router-dom";
import Default_Main from "../Layouts/Default_Main";
import Home_Page from "../Pages/Home_Page_Element/Home_Page/Home_Page";
import Doctor_Profile from "../Pages/Doctors_Page/Doctor_Profile/Doctor_Profile";
import Appoinment_Page from "../Pages/Appoinment_Page/Appoinment_Page";
import Dashboard_Routes from "../Layouts/Dashboard_Routes";
import My_Appoinment from "../Pages/Dashboard_Routes/Users_Section/My_Appoinment/My_Appoinment";
import My_History from "../Pages/Dashboard_Routes/Users_Section/My_History/My_History";
import My_Reviews from "../Pages/Dashboard_Routes/Users_Section/My_Reviews/My_Reviews";
import Dash_Home from "../Pages/Dashboard_Routes/Admin_Section/Dash_Home/Dash_Home";
import All_Users from "../Pages/Dashboard_Routes/Admin_Section/All_Users/All_Users";
import Manage_Doctors from "../Pages/Dashboard_Routes/Admin_Section/Manage_Doctors/Manage_Doctors";
import Added_Doctors from "../Pages/Dashboard_Routes/Admin_Section/Added_Doctors/Added_Doctors";
import Doctors from "../Pages/Doctors_Page/All_Doctors/Doctors";

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
                element: <Doctors />
            },
            {
                path: "appoinment",
                element: <Appoinment_Page />
            },
            {
                path: "doctor-profile/:id",
                element: <Doctor_Profile />,
                loader: ({ params }) => fetch(`http://localhost:3001/doctors/${params.id}`)
            }
        ]
    },
    {
        path: "dash",
        element: <Dashboard_Routes />,
        // Users Routes
        children: [
            {
                path: "my-appoinment",
                element: <My_Appoinment />
            },
            {
                path: "my-history",
                element: <My_History />
            },
            {
                path: "my-reviews",
                element: <My_Reviews />
            },
            // Admin routes
            {
                path: "admin-home",
                element: <Dash_Home />
            },
            {
                path: "our-users",
                element: <All_Users />
            },
            {
                path: "add-doctors",
                element: <Added_Doctors />
            },
            {
                path: "manage-doctors",
                element: <Manage_Doctors />
            }
        ]
    }
])

export default router;