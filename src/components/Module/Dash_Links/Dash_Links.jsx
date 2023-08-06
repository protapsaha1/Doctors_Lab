import { NavLink } from "react-router-dom";

const Dash_Links = ({ to, children }) => {
    return (
        <>
            <NavLink to={to} className={({ isActive }) =>
                isActive ? "text-slate-800 w-[100%] h-[80px] flex items-center bg-slate-200" : ""
            }>
                {children}
            </NavLink>
        </>
    )
};

export default Dash_Links;