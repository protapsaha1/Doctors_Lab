import { Link, Outlet } from "react-router-dom";
import Dash_Links from "../components/Module/Dash_Links/Dash_Links";



const Dashboard_Routes = () => {

    return (
        <div className="grid grid-cols-[1fr,3fr]">
            <div className="bg-slate-100 h-[46.5rem]">
                <ul>
                    {/* Admin routes */}
                    <>
                        <li className="text-2xl font-bold text-slate-800 w-[100%] h-[80px]  flex items-center ps-20 hover:bg-slate-200 tracking-[1px]"><Dash_Links to="/dash/admin-home">Dash House</Dash_Links></li>
                        <li className="text-2xl font-bold text-slate-800 w-[100%] h-[80px]  flex items-center ps-20 hover:bg-slate-200 tracking-[1px]"><Dash_Links to="/dash/our-users">All Users</Dash_Links></li>
                        <li className="text-2xl font-bold text-slate-800 w-[100%] h-[80px]  flex items-center ps-20 hover:bg-slate-200 tracking-[1px]"><Dash_Links to="/dash/add-doctors">Add Doctors</Dash_Links></li>
                        <li className="text-2xl font-bold text-slate-800 w-[100%] h-[80px]  flex items-center ps-20 hover:bg-slate-200 tracking-[1px]"><Dash_Links to="/dash/manage-doctors">Manage Doctors</Dash_Links></li>
                    </>
                    <li className="text-2xl font-bold text-slate-800 w-[100%] h-[80px] flex items-center ps-20 hover:bg-slate-200 tracking-[1px]"><Link to="/">Home</Link></li>
                </ul>

            </div>
            <div className="bg-slate-200">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard_Routes;