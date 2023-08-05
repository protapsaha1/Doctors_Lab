import { GoChevronRight } from "react-icons/go";
import doctor from "../../../../public/image/banner_image/doctor.jpg";
import { Link } from "react-router-dom";


const Hospital_Services = () => {
    return (
        <div className="w-[1140px] h-[1000px] mx-auto mt-28 flex">
            {/* Image */}
            <div className="w-[40%] h-[100%] mr-4">
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
                <div className="flex items-center my-10 border border-gray-200 rounded-lg shadow-xl shadow-slate-200 relative">
                    <p className="text-xl font-semibold hover:bg-emerald-400 hover:rounded-lg ps-5 py-7 pr-8 hover:shadow-inner cursor-pointer">Cavity Protection</p>
                    <p className="text-xl font-semibold hover:bg-emerald-400 hover:rounded-lg ps-5 py-7 pr-8 hover:shadow-inner cursor-pointer">Cosmetic Dentisty</p>
                    <p className="text-xl font-semibold hover:bg-emerald-400 hover:rounded-lg ps-5 py-7 pr-8 hover:shadow-inner cursor-pointer">Oral Surgery</p>
                    <div className="text-4xl text-emerald-600 hover:text-white w-14 h-14 bg-slate-100 hover:bg-emerald-400 border-l-2 rounded-[50%] flex items-center justify-center absolute -right-9 hover:shadow-2xl hover:shadow-emerald-100"><GoChevronRight /></div>
                </div>
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
    );
};

export default Hospital_Services;