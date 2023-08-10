import { Link } from "react-router-dom";
import doctor_icon from "../../../../public/image/icon/favicon_hero_doctors.png";
import Active_Link from "../../../components/Module/Active_Link/Active_Link";
import { FaAlignLeft } from "react-icons/fa";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const Header_Section = () => {
    const pages_list_lg_md = <>
        <Tippy content="Home">
            <li className="text-xl font-[300] text-white hover:bg-emerald-800 px-4 py-3 rounded-lg"><Active_Link data-tooltip-id="home" to="/">Home</Active_Link></li>
        </Tippy>
        <Tippy content="Our Doctors">
            <li className="text-xl font-[300] text-white hover:bg-emerald-800 px-4 py-3 rounded-lg"><Active_Link to="/doctors">Doctors</Active_Link></li>
        </Tippy>
        <Tippy content="Appoinment">
            <li className="text-xl font-[300] text-white hover:bg-emerald-800 px-4 py-3 rounded-lg"><Active_Link to="/appoinment">Appoinment</Active_Link></li>
        </Tippy>
        <Tippy content="Contact">
            <li className="text-xl font-[300] text-white hover:bg-emerald-800 px-4 py-3 rounded-lg"><a href="#contact">Contact</a></li>
        </Tippy>
        <Tippy content="About">
            <li className="text-xl font-[300] text-white hover:bg-emerald-800 px-4 py-3 rounded-lg"><Active_Link to="/doctors-profile">About</Active_Link></li>
        </Tippy>
        <Tippy content="Login">
            <li className="text-xl font-[500] text-emerald-500 hover:text-white lg:ml-10 lg:mr-4 bg-white hover:bg-emerald-500 px-3 py-2 border-2 border-emerald-300 hover:border-emerald-600 rounded-lg shadow-lg"><Link to="/auth/login">login</Link></li>
        </Tippy>
    </>;
    const pages_list_sm = <>
        <li className="text-xl font-[300] text-white mx-2 hover:bg-emerald-800 py-2"><Link to="/">Home</Link></li>
        <li className="text-xl font-[300] text-white mx-2 hover:bg-emerald-800 py-2"><Link to="/doctors">Doctors</Link></li>
        <li className="text-xl font-[300] text-white mx-2 hover:bg-emerald-800 py-2"><Link to="/appoinnment">Appoinment</Link></li>
        <li className="text-xl font-[300] text-white mx-2 hover:bg-emerald-800 py-2"><Link to="#contact">Contact</Link></li>
        <li className="text-xl font-[300] text-white mx-2 hover:bg-emerald-800 py-2"><Link to="/about">About</Link></li>
        <li className="text-xl font-[500] text-emerald-500 hover:text-white lg:ml-10 lg:mr-4 bg-white hover:bg-emerald-500 px-3 py-2 border-2 border-emerald-300 hover:border-emerald-600 rounded-lg shadow-lg"><Link to="/login">login</Link></li>
    </>;
    return (
        <div className="w-[100%] sm:w-[100%] h-[6.5rem] bg-emerald-600 z-10 fixed shadow-sm shadow-emerald-100">
            <div className="flex justify-between items-center px-[1rem] lg:max-w-[1600px] md:w-[100%] sm:w-[100%] h-[100%] lg:mx-auto md:mx-0 sm:mx-0">
                <div>
                    <label className="flex items-center">
                        <Tippy content="Home">
                            <Link to="/"><img className="w-[3rem] h-[3rem] rounded-lg lg:mr-4 sm:mr-2" src={doctor_icon} alt="" /></Link>
                        </Tippy>
                        <span className="lg:text-3xl md:text-2xl sm:text-2xl text-white font-bold">Hero Doctors</span>
                    </label>
                </div>
                <div className="lg:ml-12 md:ml-0 sm:ml-0">
                    <div className="">
                        <ul className="flex items-center">
                            {pages_list_lg_md}
                        </ul>
                    </div>
                    <div className="dropdown lg:hidden mt-56">
                        <div tabIndex={0} className="text-4xl text-white hover:text-emerald-200"><FaAlignLeft /></div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            {pages_list_sm}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header_Section;