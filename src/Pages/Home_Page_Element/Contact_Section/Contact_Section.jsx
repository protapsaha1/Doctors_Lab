import { BsTelephoneOutbound } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";

const Contact_Section = () => {
    return (
        <div className="w-[1140px] h-[100%] mx-auto rounded-lg bg-[#07332F] flex items-center p-20 mt-28" id="contact">
            <div className="w-[40%] mr-20">
                <h1 className="text-white font-bold text-4xl ">Contact With Us</h1>
                <p className="text-white font-[400] my-5 ps-3 tracking-[1px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum natus quisquam, sint quidem dolor, minima ea quas corporis.</p>
                {/* Contact */}
                <label className="flex items-center">
                    <BsTelephoneOutbound className="text-white w-8 h-8 mr-3" />
                    <p className="text-white font-[300] tracking-[2px]">+00120 399 94454</p>
                </label>
                {/* Address */}
                <label className="mt-5 flex items-center">
                    <FaMapMarkerAlt className="text-white w-8 h-8 mr-3" />
                    <p className="text-white font-[300] tracking-[2px]">Dhaka,Bangladesh,1200</p>
                </label>
            </div>

            {/* Contact form */}

            <div className="w-[60%]">
                <form>
                    <div className="grid grid-cols-2 gap-4">
                        <input className="w-[100%] h-[64px] bg-[#103d39ed] rounded-md p-2 text-xl text-white" type="text" placeholder="Name" name="name" id="name" />
                        <input className="w-[100%] h-[64px] bg-[#103d39ed] rounded-md p-2 text-xl text-white" type="email" placeholder="Email" name="email" id="email" />
                        <input className="w-[100%] h-[64px] bg-[#103d39ed] rounded-md p-2 text-xl text-white" type="text" placeholder="Phone Number" name="number" id="number" />
                        <input className="w-[100%] h-[64px] bg-[#103d39ed] rounded-md p-2 text-xl text-white" type="text" placeholder="Doctor Name" name="doctor_name" id="doctor_name" />
                        <input className="w-[100%] h-[64px] bg-[#103d39ed] rounded-md p-2 text-xl text-white" type="date" placeholder="Date" name="date" id="date" />
                        <input className="w-[100%] h-[64px] bg-[#103d39ed] rounded-md p-2 text-xl text-white" type="time" placeholder="Time" name="time" id="time" />
                    </div>
                    <input className="w-[100%] h-[64px] bg-[#103d39ed] hover:bg-[#134743ed] rounded-md mt-3 text-2xl text-white font-semibold cursor-pointer" type="submit" value="Contact us" />
                </form>
            </div>
        </div>
    );
};

export default Contact_Section;