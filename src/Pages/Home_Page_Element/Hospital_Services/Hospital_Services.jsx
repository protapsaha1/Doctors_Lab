import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import doctor from "../../../../public/image/banner_image/doctor.jpg";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import "./Hospital_Service.css";


const Hospital_Services = () => {
    // tab state change
    const [tab, setTab] = useState(1);
    // tab referance
    const scrollTab = useRef(null);

    // toggle tab index
    const toggleTab = (index) => {
        setTab(index);
    };

    // Mouse events
    let isDraging = false;
    // Scroll tabs
    const dragtabslider = (e) => {
        if (!isDraging) return;
        scrollTab.current.scrollLeft -= e.movementX;
    };
    // Drag off
    const dragOff = () => {
        isDraging = false;
    };

    // scroll tab right arrow 
    const handleArrow_Right = () => {
        scrollTab.current.scrollLeft += 325
    };
    // scroll tab left arrow 
    const handleArrow_Left = () => {
        scrollTab.current.scrollLeft += -325
    };

    return (
        <div className="w-[1140px] h-[1000px] mx-auto my-28 flex" id="service">
            {/* tabs content */}
            {/* Image */}
            <div className={tab === 1 ? "tab_content w-[40%] h-[100%] mr-4" : "invisiblae_tab_cantent"}>
                <img className="w-[100%] h-[100%] rounded-lg" src={doctor} alt="" />
            </div>
            <div className={tab === 2 ? "tab_content w-[40%] h-[100%] mr-4" : "invisiblae_tab_cantent"}>
                <img className="w-[100%] h-[100%] rounded-lg" src={doctor} alt="" />
            </div>
            <div className={tab === 3 ? "tab_content w-[40%] h-[100%] mr-4" : "invisiblae_tab_cantent"}>
                <img className="w-[100%] h-[100%] rounded-lg" src={doctor} alt="" />
            </div>

            {/* Sevice Details */}
            <div className="w-[60%] p-3">
                <div className="mb-5">
                    <h1 className="text-6xl text-slate-800 font-bold tracking-wide mb-5">Our Service</h1>
                    <p className="text-xl font-[400] text-slate-800">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nesciunt deserunt temporibus corporis eveniet possimus
                        soluta inventore suscipit dolores perspiciatis at doloribus.
                    </p>
                </div>
                <div className="relative">
                    {/* tabs dynamic with slider*/}
                    {/* <div className="overflow-x-hidden scroll-smooth"> */}
                    <ul ref={scrollTab} onMouseDown={() => isDraging = true} onMouseUp={dragOff} onMouseMove={dragtabslider} className="w-[650px] h-[80px] flex items-center my-10 border border-gray-200 rounded-lg shadow-xl shadow-slate-200 gap-1 overflow-x-hidden whitespace-nowrap scroll-smooth">
                        <li onClick={() => toggleTab(1)} className={tab === 1 ? "text-xl font-semibold text-slate-800 bg-emerald-400 rounded-lg w-[40%] h-[100%] flex items-center justify-center hover:shadow-inner cursor-pointer whitespace-nowrap px-6 " : "text-xl font-semibold text-slate-800 hover:bg-emerald-400 hover:rounded-lg w-[40%]  h-[100%] flex items-center justify-center  hover:shadow-inner cursor-pointer whitespace-nowrap px-6"}>Cavity Protection</li>
                        <li onClick={() => toggleTab(2)} className={tab === 2 ? "text-xl font-semibold text-slate-800 bg-emerald-400 rounded-lg w-[40%] h-[100%] flex items-center justify-center hover:shadow-inner cursor-pointer whitespace-nowrap px-6 " : "text-xl font-semibold text-slate-800 hover:bg-emerald-400 hover:rounded-lg w-[40%]  h-[100%] flex items-center justify-center  hover:shadow-inner cursor-pointer whitespace-nowrap px-6"}>Cosmetic Dentisty</li>
                        <li onClick={() => toggleTab(3)} className={tab === 3 ? "text-xl font-semibold text-slate-800 bg-emerald-400 rounded-lg w-[40%] h-[100%] flex items-center justify-center hover:shadow-inner cursor-pointer whitespace-nowrap px-6 " : "text-xl font-semibold text-slate-800 hover:bg-emerald-400 hover:rounded-lg w-[40%]  h-[100%] flex items-center justify-center  hover:shadow-inner cursor-pointer whitespace-nowrap px-6"}>Oral Surgery</li>
                        <li onClick={() => toggleTab(3)} className={tab === 4 ? "text-xl font-semibold text-slate-800 bg-emerald-400 rounded-lg w-[40%] h-[100%] flex items-center justify-center hover:shadow-inner cursor-pointer whitespace-nowrap px-6 " : "text-xl font-semibold text-slate-800 hover:bg-emerald-400 hover:rounded-lg w-[40%]  h-[100%] flex items-center justify-center  hover:shadow-inner cursor-pointer whitespace-nowrap px-6"}>Oral Surgery</li>
                        <li onClick={() => toggleTab(3)} className={tab === 5 ? "text-xl font-semibold text-slate-800 bg-emerald-400 rounded-lg w-[40%] h-[100%] flex items-center justify-center hover:shadow-inner cursor-pointer whitespace-nowrap px-6 " : "text-xl font-semibold text-slate-800 hover:bg-emerald-400 hover:rounded-lg w-[40%]  h-[100%] flex items-center justify-center  hover:shadow-inner cursor-pointer whitespace-nowrap px-6"}>Oral Surgery</li>
                        <li onClick={() => toggleTab(3)} className={tab === 6 ? "text-xl font-semibold text-slate-800 bg-emerald-400 rounded-lg w-[40%] h-[100%] flex items-center justify-center hover:shadow-inner cursor-pointer whitespace-nowrap px-6 " : "text-xl font-semibold text-slate-800 hover:bg-emerald-400 hover:rounded-lg w-[40%]  h-[100%] flex items-center justify-center  hover:shadow-inner cursor-pointer whitespace-nowrap px-6"}>Oral Surgery</li>
                        <li onClick={() => toggleTab(3)} className={tab === 7 ? "text-xl font-semibold text-slate-800 bg-emerald-400 rounded-lg w-[40%] h-[100%] flex items-center justify-center hover:shadow-inner cursor-pointer whitespace-nowrap px-6 " : "text-xl font-semibold text-slate-800 hover:bg-emerald-400 hover:rounded-lg w-[40%]  h-[100%] flex items-center justify-center  hover:shadow-inner cursor-pointer whitespace-nowrap px-6"}>Oral Surgery</li>
                        <li onClick={() => toggleTab(3)} className={tab === 8 ? "text-xl font-semibold text-slate-800 bg-emerald-400 rounded-lg w-[40%] h-[100%] flex items-center justify-center hover:shadow-inner cursor-pointer whitespace-nowrap px-6 " : "text-xl font-semibold text-slate-800 hover:bg-emerald-400 hover:rounded-lg w-[40%]  h-[100%] flex items-center justify-center  hover:shadow-inner cursor-pointer whitespace-nowrap px-6"}>Oral Surgery</li>
                        <li onClick={() => toggleTab(3)} className={tab === 9 ? "text-xl font-semibold text-slate-800 bg-emerald-400 rounded-lg w-[40%] h-[100%] flex items-center justify-center hover:shadow-inner cursor-pointer whitespace-nowrap px-6 " : "text-xl font-semibold text-slate-800 hover:bg-emerald-400 hover:rounded-lg w-[40%]  h-[100%] flex items-center justify-center  hover:shadow-inner cursor-pointer whitespace-nowrap px-6"}>Oral Surgery</li>
                        <li onClick={() => toggleTab(3)} className={tab === 10 ? "text-xl font-semibold text-slate-800 bg-emerald-400 rounded-lg w-[40%] h-[100%] flex items-center justify-center hover:shadow-inner cursor-pointer whitespace-nowrap px-6" : "text-xl font-semibold text-slate-800 hover:bg-emerald-400 hover:rounded-lg w-[40%]  h-[100%] flex items-center justify-center  hover:shadow-inner cursor-pointer whitespace-nowrap px-6"}>Oral Surgery</li>
                        <li onClick={() => toggleTab(3)} className={tab === 11 ? "text-xl font-semibold text-slate-800 bg-emerald-400 rounded-lg w-[40%] h-[100%] flex items-center justify-center hover:shadow-inner cursor-pointer whitespace-nowrap px-6" : "text-xl font-semibold text-slate-800 hover:bg-emerald-400 hover:rounded-lg w-[40%]  h-[100%] flex items-center justify-center  hover:shadow-inner cursor-pointer whitespace-nowrap px-6"}>Oral Surgery</li>
                    </ul>
                    {/* </div> */}
                    <div onClick={handleArrow_Right} className="absolute -right-8 top-[12px]"><span className="text-4xl text-emerald-600 hover:text-white w-14 h-14 bg-slate-100 hover:bg-emerald-400 border-l-8 border-l-slate-100 hover:border-l-emerald-200 rounded-[50%] flex items-center justify-center hover:shadow-2xl hover:shadow-emerald-100 cursor-pointer"><GoChevronRight /></span></div>
                    <div onClick={handleArrow_Left} className="absolute -left-4 top-[12px]"><span className="text-4xl text-emerald-600 hover:text-white w-14 h-14 bg-slate-100 hover:bg-emerald-400 border-r-8 border-r-slate-100 hover:border-r-emerald-200 rounded-[50%] flex items-center justify-center hover:shadow-2xl hover:shadow-emerald-100 cursor-pointer"><GoChevronLeft /></span></div>
                </div>
                {/* tab contents */}
                <div className={tab === 1 ? "tab_content" : "invisiblae_tab_cantent"}>
                    <div className="w-[650px] h-[350px] mx-auto my-5">
                        <img className="w-[100%] h-[100%] rounded-lg" src={doctor} alt="our services" />
                    </div>
                    <div className="mt-5">
                        <h1 className="text-4xl font-bold text-slate-800 uppercase">Electro  Gastrology Therapy</h1>
                        <p className="text-xl font-medium text-slate-700 mt-5 mb-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Nesciunt a deleniti dolor nisi enim sed dolorem rerum
                            suscipit aliquid sapiente quam et, facere ab maiores
                            doloremque repudiandae cum, atque sit!
                            Nesciunt a deleniti dolor nisi enim sed dolorem rerum
                            suscipit aliquid sapiente quam et, facere ab maiores . . .
                        </p>
                        <Link className="py-2 px-3 border-2 border-orange-400 rounded-lg hover:bg-orange-400 text-orange-600 hover:text-white text-xl font-semibold">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hospital_Services;