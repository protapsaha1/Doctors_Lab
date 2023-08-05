import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';


const Doctor_Card = ({ img, name, profession_status, ratings, location, duty_time, visit_fee }) => {
    return (
        <div className="w-[364px] h-[570px] rounded-xl p-5 bg-[#ffffff] hover:shadow-2xl border border-slate-200">
            {/* Doctor Image */}
            <div className="w-[100%] h-[220px]">
                <img className="rounded-xl w-[100%] h-[100%]" src={img} alt="Doctor Image" />
            </div>
            {/* Doctor Info */}
            <div className="my-4">
                <h1 className="text-xl font-bold ">{name}</h1>
                <p className="text-lg font-[400]">{profession_status}</p>
            </div>
            {/* Ratings doctor */}
            <div className="flex items-center">
                <Rating
                    style={{ maxWidth: 180 }}
                    value={ratings}
                    readOnly
                />
            </div>
            <hr className="my-5" />
            {/* Doctor Info */}
            <div className="mb-5">
                <label className="flex items-center my-2">
                    <FaMapMarkerAlt className="w-5 h-5" />
                    <p className="ml-2 text-lg font-[400]">{location}</p>
                </label>
                <label className="flex items-center my-2">
                    <FaCalendarAlt className="w-5 h-5" />
                    <p className="ml-2 text-lg font-[400]">{duty_time}</p>
                </label>
                <label className="flex items-center my-2">
                    <AiOutlineDollarCircle className="w-5 h-5" />
                    <p className="ml-2 text-lg font-[400]">$ {visit_fee}</p>
                </label>
            </div>
            <Link className="py-2 px-10 border-2 border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white rounded-lg ml-[4.5rem] font-[500] text-lg">View Profile</Link>
        </div>
    );
};

export default Doctor_Card;