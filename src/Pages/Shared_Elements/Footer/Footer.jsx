import { Link } from "react-router-dom";
import doctor_icon from "../../../../public/image/icon/favicon_hero_doctors.png";

const Footer_Section = () => {
    return (
        <div className="bg-slate-100 w-[100%] h-[100%]">
            <div className="max-w-[1600px] h-[100%] mx-auto pt-[5rem] px-[8rem]">
                <div className="flex justify-between">
                    <div>
                        <div>
                            <label className="flex items-center">
                                <Link to="/"><img className="w-[3rem] h-[3rem] rounded-lg lg:mr-2 sm:mr-2" src={doctor_icon} alt="" /></Link>
                                <span className="lg:text-3xl md:text-2xl sm:text-2xl text-slate-800 font-bold">Hero Doctors</span>
                            </label>
                        </div>
                        <p className="mt-5 mb-10 pr-5  text-left">Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br /> Labore velit perspiciatis nam non</p>
                        <Link className="py-2 px-3 border-2 border-orange-400 text-orange-400 font-[500] hover:bg-orange-400 hover:text-white" to="/appoinment">Appoinment</Link>
                    </div>
                    <div>
                        <label className="text-xl font-[700] text-black">Quick Links</label>
                        <ul className="mt-5">
                            <li className="my-1 text-lg font-[400] hover:text-emerald-500"><Link>About Us</Link></li>
                            <li className="my-1 text-lg font-[400] hover:text-emerald-500"><a href="#service">Service</a></li>
                            <li className="my-1 text-lg font-[400] hover:text-emerald-500"><Link to="/doctors">Doctors</Link></li>
                            <li className="my-1 text-lg font-[400] hover:text-emerald-500"><Link>Department</Link></li>
                            <li className="my-1 text-lg font-[400] hover:text-emerald-500"><Link>Online Payment</Link></li>
                            <li className="my-1 text-lg font-[400] hover:text-emerald-500"><a href="#contact">Contact Us</a></li>
                            <li className="my-1 text-lg font-[400] hover:text-emerald-500"><Link>My Account</Link></li>
                        </ul>
                    </div>
                    <div>
                        <label className="text-xl font-[700] text-black">Hero Services</label>
                        <ul className="mt-5">
                            <li className="my-1 text-lg font-[400] hover:text-emerald-500"><Link>Pediatric Clinic</Link></li>
                            <li className="my-1 text-lg font-[400] hover:text-emerald-500"><Link>Diagnosis Clinic</Link></li>
                            <li className="my-1 text-lg font-[400] hover:text-emerald-500"><Link>DCardiac Clinic</Link></li>
                            <li className="my-1 text-lg font-[400] hover:text-emerald-500"><Link>Laboratory Analysis</Link></li>
                            <li className="my-1 text-lg font-[400] hover:text-emerald-500"><Link>Gynecological Clinic</Link></li>
                            <li className="my-1 text-lg font-[400] hover:text-emerald-500"><Link>Personal Counseling</Link></li>
                            <li className="my-1 text-lg font-[400] hover:text-emerald-500"><Link>Dental Clinic</Link></li>
                        </ul>
                    </div>
                    <div>
                        <label className="text-xl font-[700] text-black">Working Hours</label>
                        <ul className="mt-5">
                            <li className="my-1 text-lg font-[400] hover:text-emerald-500">Monday - 10 am to 7 pm</li>
                            <li className="my-1 text-lg font-[400] hover:text-emerald-500">Tuesday - 10 am to 7 pm</li>
                            <li className="my-1 text-lg font-[400] hover:text-emerald-500">Wednesday - 10 am to 7 pm</li>
                            <li className="my-1 text-lg font-[400] hover:text-emerald-500">Thursday - 10 am to 7 pm</li>
                            <li className="my-1 text-lg font-[400] hover:text-emerald-500">Friday - 10 am to 7 pm</li>
                            <li className="my-1 text-lg font-[400] hover:text-emerald-500">Saturday - 10 am to 7 pm</li>
                            <li className="my-1 text-lg font-[400] hover:text-emerald-500">Sunday - 10 am to 7 pm</li>
                        </ul>
                    </div>
                </div>
                <hr className="mt-[3rem]" />
                <p className="text-center py-5 text-slate-700">Copyright © 2022 - All right reserved by Hero Doctors Ltd</p>
            </div>
        </div>
    );
};

export default Footer_Section;