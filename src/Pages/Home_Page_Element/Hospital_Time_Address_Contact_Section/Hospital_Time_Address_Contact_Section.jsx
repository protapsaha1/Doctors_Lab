import { GoClock, GoLocation } from "react-icons/go";
import { BsTelephoneOutbound } from "react-icons/bs";

const Hospital_Time_Address_Contact_Section = () => {
    return (
        <div className="w-[1140px] mx-auto mt-28 flex items-center justify-between relative">
            <div className="bg-green-900 w-[360px] h-[200px] p-9 rounded-lg shadow-lg shadow-green-100 flex items-center">
                <div className="text-6xl text-white mb-10 mr-3">
                    <GoClock />
                </div>
                <div>
                    <h3 className="text-2xl text-white font-bold tracking-[1px] mb-2">Our Time Hours</h3>
                    <p className="text-lg text-white font-[200] tracking-[1px]">Open 9.00 am to 5.00pm Everyday</p>
                </div>
            </div>
            <div className="bg-sky-900 w-[360px] h-[200px] p-9 rounded-lg shadow-lg shadow-sky-100 flex items-center">
                <div className="text-6xl text-white mb-10 mr-3">
                    <GoLocation />
                </div>
                <div>
                    <h3 className="text-2xl text-white font-bold tracking-[1px] mb-2">Our Locations</h3>
                    <p className="text-lg text-white font-[200] tracking-[1px]">Dhanmondi 17, Dhaka -1200, Bangladesh</p>
                </div>
            </div>
            <div className="bg-zinc-900 w-[360px] h-[200px] p-9 rounded-lg shadow-lg shadow-zinc-100 flex items-center">
                <div className="text-5xl text-white mb-10 mr-3">
                    <BsTelephoneOutbound />
                </div>
                <div>
                    <h3 className="text-2xl text-white font-bold tracking-[1px] mb-2">Contact Us</h3>
                    <p className="text-lg text-white font-[200] tracking-[1px]">+88 01750 00 00 00 </p>
                    <p className="text-lg text-white font-[200] tracking-[1px]">+88 01750 00 00 00 </p>
                </div>
            </div>
        </div>
    );
};

export default Hospital_Time_Address_Contact_Section;