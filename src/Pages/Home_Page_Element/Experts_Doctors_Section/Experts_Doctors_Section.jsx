import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineDollarCircle } from "react-icons/ai";
import card_doctor from "../../../../public/image/banner_image/banner_doctor_2.jpg";
import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';


const Experts_Doctors_Section = () => {
    return (
        <div className="w-[1140px] mx-auto mt-28">
            <h1 className="text-slate-800 text-3xl font-bold text-center">Expert Doctors</h1>
            <p className="text-slate-800 text-xl text-center mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, architecto? Ab assumenda incidunt inventore eligendi earum nemo qui suscipit magnam omnis nihil, quis officia laborum voluptate rerum sed animi quas!</p>

            <div className="grid grid-cols-3 gap-5 mt-14">
                <div className="w-[364px] h-[570px] rounded-xl p-5 bg-[#ffffff] hover:shadow-2xl border border-slate-200">
                    {/* Doctor Image */}
                    <div className="w-[100%] h-[220px]">
                        <img className="rounded-xl w-[100%] h-[100%]" src={card_doctor} alt="Doctor Image" />
                    </div>
                    {/* Doctor Info */}
                    <div className="my-3">
                        <h1 className="text-xl font-bold ">Name Of Doctor</h1>
                        <p className="text-lg font-[400]">BTP -  Senior Physiotherapist</p>
                    </div>
                    {/* Ratings doctor */}
                    <div className="flex items-center">
                        <Rating
                            style={{ maxWidth: 150 }}
                            value={3.5}
                            readOnly
                        />
                    </div>

                    <hr className="my-5" />

                    {/* Doctor Info */}

                    <div className="mb-5">
                        <label className="flex items-center my-2">
                            <FaMapMarkerAlt className="w-5 h-5" />
                            <p className="ml-2 text-lg font-[400]">Dhanmondi, Dhaka, Bangladesh</p>
                        </label>
                        <label className="flex items-center my-2">
                            <FaCalendarAlt className="w-5 h-5" />
                            <p className="ml-2 text-lg font-[400]">Available On Mon, 22 December</p>
                        </label>
                        <label className="flex items-center my-2">
                            <AiOutlineDollarCircle className="w-5 h-5" />
                            <p className="ml-2 text-lg font-[400]">$ 10</p>
                        </label>
                    </div>
                    <Link className="py-2 px-10 border-2 border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white rounded-lg ml-[4.5rem] font-[500] text-lg">View Profile</Link>
                </div>

                {/* ----------------------------------------------------------------------------------- */}

                <div className="w-[364px] h-[570px] rounded-xl p-5 bg-[#ffffff] hover:shadow-2xl border border-slate-200">
                    {/* Doctor Image */}
                    <div className="w-[100%] h-[220px]">
                        <img className="rounded-xl w-[100%] h-[100%]" src={card_doctor} alt="Doctor Image" />
                    </div>
                    {/* Doctor Info */}
                    <div className="my-3">
                        <h1 className="text-xl font-bold ">Name Of Doctor</h1>
                        <p className="text-lg font-[400]">BTP -  Senior Physiotherapist</p>
                    </div>
                    {/* Ratings doctor */}
                    <div className="flex items-center">
                        <Rating
                            style={{ maxWidth: 150 }}
                            value={3.5}
                            readOnly
                        />
                    </div>

                    <hr className="my-5" />

                    {/* Doctor Info */}

                    <div className="mb-5">
                        <label className="flex items-center my-2">
                            <FaMapMarkerAlt className="w-5 h-5" />
                            <p className="ml-2 text-lg font-[400]">Dhanmondi, Dhaka, Bangladesh</p>
                        </label>
                        <label className="flex items-center my-2">
                            <FaCalendarAlt className="w-5 h-5" />
                            <p className="ml-2 text-lg font-[400]">Available On Mon, 22 December</p>
                        </label>
                        <label className="flex items-center my-2">
                            <AiOutlineDollarCircle className="w-5 h-5" />
                            <p className="ml-2 text-lg font-[400]">$ 10</p>
                        </label>
                    </div>
                    <Link className="py-2 px-10 border-2 border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white rounded-lg ml-[4.5rem] font-[500] text-lg">View Profile</Link>
                </div>
                <div className="w-[364px] h-[570px] rounded-xl p-5 bg-[#ffffff] hover:shadow-2xl border border-slate-200">
                    {/* Doctor Image */}
                    <div className="w-[100%] h-[220px]">
                        <img className="rounded-xl w-[100%] h-[100%]" src={card_doctor} alt="Doctor Image" />
                    </div>
                    {/* Doctor Info */}
                    <div className="my-3">
                        <h1 className="text-xl font-bold ">Name Of Doctor</h1>
                        <p className="text-lg font-[400]">BTP -  Senior Physiotherapist</p>
                    </div>
                    {/* Ratings doctor */}
                    <div className="flex items-center">
                        <Rating
                            style={{ maxWidth: 150 }}
                            value={3.5}
                            readOnly
                        />
                    </div>

                    <hr className="my-5" />

                    {/* Doctor Info */}

                    <div className="mb-5">
                        <label className="flex items-center my-2">
                            <FaMapMarkerAlt className="w-5 h-5" />
                            <p className="ml-2 text-lg font-[400]">Dhanmondi, Dhaka, Bangladesh</p>
                        </label>
                        <label className="flex items-center my-2">
                            <FaCalendarAlt className="w-5 h-5" />
                            <p className="ml-2 text-lg font-[400]">Available On Mon, 22 December</p>
                        </label>
                        <label className="flex items-center my-2">
                            <AiOutlineDollarCircle className="w-5 h-5" />
                            <p className="ml-2 text-lg font-[400]">$ 10</p>
                        </label>
                    </div>
                    <Link className="py-2 px-10 border-2 border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white rounded-lg ml-[4.5rem] font-[500] text-lg">View Profile</Link>
                </div>
                {/* ----------------------------------------------------------------------------------- */}
            </div>
        </div>
    );
};

export default Experts_Doctors_Section;