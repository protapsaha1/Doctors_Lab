import Calendar from "react-calendar";
import useTitle from "../../components/Hooks/useTitle";
import "./Appoinment_page.css";
import 'react-calendar/dist/Calendar.css';
import imgLab from "../../../public/image/Appoinment_bg/doclab.jpeg";
import moment from "moment/moment";
import ig1 from "../../../public/image/banner_image/Group 7.png";
import ig2 from "../../../public/image/banner_image/Vector (1).png";

const Appoinment_Page = () => {
    useTitle("Appoinment");



    return (
        <>
            <div className="bg-emerald-600 w-[100%] h-[500px] pt-20 px-20 pb-20 relative">
                <h1 className="text-6xl font-bold text-white text-center mt-40 tracking-[2px] leading-6">Appoinment</h1>
                <img className="w-[300px] h-[300px] absolute left-2 top-28" src={ig1} alt="" />
                <img className="w-[200px] h-[200px] absolute right-1 bottom-1" src={ig2} alt="" />
            </div>

            <div className="py-28 bg-url">
                <div className="w-[1050px] mx-auto flex ">
                    {/* Calender  */}
                    <div className="">
                        <Calendar className="shadow-2xl shadow-slate-50 ml-20 rounded-lg"></Calendar>
                    </div>
                    <div className="w-[600px] h-[300px] ml-28">
                        <img className="w-[100%] h-[100%] rounded-lg" src={imgLab} alt="" />
                    </div>
                </div>

                {/* Main Services */}
                <div className="mt-28 w-[1030px] mx-auto">
                    <p className="text-xl text-red-700 font-medium text-center">Available Service on {moment().format("MMM / DD / YY")}</p>
                    <h1 className="text-4xl font-bold text-slate-900 text-center my-3 tracking-[1px] leading-tight">Please Select Your Sevrvice</h1>
                    <div className="grid grid-cols-3 gap-4 mb-4 mt-16">
                        <div className="flex bg-white p-5 rounded-lg shadow-2xl shadow-slate-400 border border-slate-200 cursor-pointer">
                            <div className="w-[100px] h-[100px] mr-3"><img className="w-[100%] h-[100%] rounded-lg" src={imgLab} alt="service image" /></div>
                            <h3 className="text-2xl font-bold text-slate-800">Teeth Dental cavity</h3>
                        </div>
                        <div className="flex bg-white p-5 rounded-lg shadow-2xl shadow-slate-400 border border-slate-200 cursor-pointer">
                            <div className="w-[100px] h-[100px] mr-3"><img className="w-[100%] h-[100%] rounded-lg" src={imgLab} alt="service image" /></div>
                            <h3 className="text-2xl font-bold text-slate-800">Teeth Dental cavity</h3>
                        </div>
                        <div className="flex bg-white p-5 rounded-lg shadow-2xl shadow-slate-400 border border-slate-200 cursor-pointer">
                            <div className="w-[100px] h-[100px] mr-3"><img className="w-[100%] h-[100%] rounded-lg" src={imgLab} alt="service image" /></div>
                            <h3 className="text-2xl font-bold text-slate-800">Teeth Dental cavity</h3>
                        </div>
                        <div className="flex bg-white p-5 rounded-lg shadow-2xl shadow-slate-400 border border-slate-200 cursor-pointer">
                            <div className="w-[100px] h-[100px] mr-3"><img className="w-[100%] h-[100%] rounded-lg" src={imgLab} alt="service image" /></div>
                            <h3 className="text-2xl font-bold text-slate-800">Teeth Dental cavity</h3>
                        </div>
                        <div className="flex bg-white p-5 rounded-lg shadow-2xl shadow-slate-400 border border-slate-200 cursor-pointer">
                            <div className="w-[100px] h-[100px] mr-3"><img className="w-[100%] h-[100%] rounded-lg" src={imgLab} alt="service image" /></div>
                            <h3 className="text-2xl font-bold text-slate-800">Teeth Dental cavity</h3>
                        </div>
                        <div className="flex bg-white p-5 rounded-lg shadow-2xl shadow-slate-400 border border-slate-200 cursor-pointer">
                            <div className="w-[100px] h-[100px] mr-3"><img className="w-[100%] h-[100%] rounded-lg" src={imgLab} alt="service image" /></div>
                            <h3 className="text-2xl font-bold text-slate-800">Teeth Dental cavity</h3>
                        </div>
                        <div className="flex bg-white p-5 rounded-lg shadow-2xl shadow-slate-400 border border-slate-200 cursor-pointer">
                            <div className="w-[100px] h-[100px] mr-3"><img className="w-[100%] h-[100%] rounded-lg" src={imgLab} alt="service image" /></div>
                            <h3 className="text-2xl font-bold text-slate-800">Teeth Dental cavity</h3>
                        </div>
                        <div className="flex bg-white p-5 rounded-lg shadow-2xl shadow-slate-400 border border-slate-200 cursor-pointer">
                            <div className="w-[100px] h-[100px] mr-3"><img className="w-[100%] h-[100%] rounded-lg" src={imgLab} alt="service image" /></div>
                            <h3 className="text-2xl font-bold text-slate-800">Teeth Dental cavity</h3>
                        </div>
                    </div>


                    {/* Sub services */}
                    <div className="w-[1120px] mx-auto mt-28">
                        <h1 className="text-5xl font-bold text-slate-900 text-center tracking-[1px] mb-16">Available slots for Teeth Orthodontics.</h1>
                        <div className="grid grid-cols-3 gap-4 mb-4">
                            <div className="w-[360px] py-16 px-10 rounded-xl border border-slate-200 bg-white shadow-2xl shadow-slate-200">
                                <div className="w-[140px] h-[140px] mx-auto"><img className="w-[100%] h-[100%] rounded-[50%] shadow-2xl" src={imgLab} alt="service image" /></div>
                                <div className="my-10 text-center">
                                    <h3 className="text-3xl text-slate-800 font-bold mb-2">Teeth Dental Cavity</h3>
                                    <p className="text-lg font-medium text-red-500 tracking-[1px]">10:00 AM - 11:00 AM</p>
                                </div>
                                <button className="text-xl font-semibold text-emerald-500 hover:text-white bg-white hover:bg-emerald-500 py-3 px-4 rounded-lg border border-emerald-300 ml-10">Book Appoinment</button>
                            </div>
                            <div className="w-[360px] py-16 px-10 rounded-xl border border-slate-200 bg-white shadow-2xl shadow-slate-200">
                                <div className="w-[140px] h-[140px] mx-auto"><img className="w-[100%] h-[100%] rounded-[50%] shadow-2xl" src={imgLab} alt="service image" /></div>
                                <div className="my-10 text-center">
                                    <h3 className="text-3xl text-slate-800 font-bold mb-2">Teeth Dental Cavity</h3>
                                    <p className="text-lg font-medium text-red-500 tracking-[1px]">10:00 AM - 11:00 AM</p>
                                </div>
                                <button className="text-xl font-semibold text-emerald-500 hover:text-white bg-white hover:bg-emerald-500 py-3 px-4 rounded-lg border border-emerald-300 ml-10">Book Appoinment</button>
                            </div>
                            <div className="w-[360px] py-16 px-10 rounded-xl border border-slate-200 bg-white shadow-2xl shadow-slate-200">
                                <div className="w-[140px] h-[140px] mx-auto"><img className="w-[100%] h-[100%] rounded-[50%] shadow-2xl" src={imgLab} alt="service image" /></div>
                                <div className="my-10 text-center">
                                    <h3 className="text-3xl text-slate-800 font-bold mb-2">Teeth Dental Cavity</h3>
                                    <p className="text-lg font-medium text-red-500 tracking-[1px]">10:00 AM - 11:00 AM</p>
                                </div>
                                <button className="text-xl font-semibold text-emerald-500 hover:text-white bg-white hover:bg-emerald-500 py-3 px-4 rounded-lg border border-emerald-300 ml-10">Book Appoinment</button>
                            </div>
                            <div className="w-[360px] py-16 px-10 rounded-xl border border-slate-200 bg-white shadow-2xl shadow-slate-200">
                                <div className="w-[140px] h-[140px] mx-auto"><img className="w-[100%] h-[100%] rounded-[50%] shadow-2xl" src={imgLab} alt="service image" /></div>
                                <div className="my-10 text-center">
                                    <h3 className="text-3xl text-slate-800 font-bold mb-2">Teeth Dental Cavity</h3>
                                    <p className="text-lg font-medium text-red-500 tracking-[1px]">10:00 AM - 11:00 AM</p>
                                </div>
                                <button className="text-xl font-semibold text-emerald-500 hover:text-white bg-white hover:bg-emerald-500 py-3 px-4 rounded-lg border border-emerald-300 ml-10">Book Appoinment</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Appoinment_Page;