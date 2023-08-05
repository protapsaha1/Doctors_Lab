import { NavLink } from "react-router-dom";

const Active_Link = ({ to, children }) => {
    return (
        <>
            <NavLink to={to} className={({ isActive }) =>
                isActive ? "bg-emerald-800 px-4 py-3 rounded-lg shadow-inner" : ""
            }>
                {children}
            </NavLink>
        </>
    );
};

export default Active_Link;