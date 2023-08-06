import doctor from "../../../../public/image/banner_image/banner_doctor_2.jpg";
import { Rating } from "@smastrom/react-rating";
import Tippy from "@tippyjs/react";
import { GoLocation } from "react-icons/go";
import ig1 from "../../../../public/image/banner_image/Group 7.png";
import ig2 from "../../../../public/image/banner_image/Vector (1).png";
const Doctor_Profile = () => {
    return (
        <>
            <div className="bg-emerald-600 w-[100%] h-[500px] pt-20 px-20 pb-20 relative">
                <h1 className="text-6xl font-bold text-white text-center mt-40 tracking-[2px] leading-6">Doctor Profile - <span className="uppercase">Dr. Robi</span></h1>
                <img className="w-[300px] h-[300px] absolute left-2 top-28" src={ig1} alt="" />
                <img className="w-[200px] h-[200px] absolute right-1 bottom-1" src={ig2} alt="" />
            </div>
            <div className="my-28">
                <div className="w-[1140px] mx-auto bg-white mb-10 rounded-lg p-5 flex border border-slate-100 shadow-lg">
                    <div className="w-[550px] h-[378px] mr-5">
                        <img className="w-[100%] h-[100%] rounded-lg" src={doctor} alt="" />
                    </div>
                    <div>
                        <div className="mb-4">
                            <h1 className="text-3xl font-bold text-slate-900 mb-3">Dr. Robi</h1>
                            <p className="text-xl font-[200] tracking-[1px] text-gray-500 mb-3">M.B.B.S / Phego Thraphy Speacialist</p>
                            <div className="flex items-center mb-3">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={5}
                                    readOnly
                                />
                                <span className="text-xl ms-1 text-slate-800">(<span className="text-lg">35</span>)</span>
                            </div>
                            <div className="flex items-center">
                                <div className="text-2xl text-slate-800 mr-5"><GoLocation /></div>
                                <div className="flex items-center">
                                    <h3 className="text-slate-800 font-[200] tracking-[1px] mr-2">Dhanmondi, Dhaka, Bangladesh - </h3>
                                    {/* Location deraction */}
                                    <Tippy content="Location"><span className="text-orange-500 hover:text-orange-600 cursor-pointer font-bold tracking-normal">Get Directions</span></Tippy>
                                </div>
                            </div>
                        </div>
                        <div className="mt-9">
                            <div className="flex items-center mb-5">
                                <div className="w-[80px] h-[80px] mr-3">
                                    <img className="w-[100%] h-[100%] rounded-lg" src={doctor} alt="" />
                                </div>
                                <div className="w-[80px] h-[80px] mr-3">
                                    <img className="w-[100%] h-[100%] rounded-lg" src={doctor} alt="" />
                                </div>
                                <div className="w-[80px] h-[80px] mr-3">
                                    <img className="w-[100%] h-[100%] rounded-lg" src={doctor} alt="" />
                                </div>
                                <div className="w-[80px] h-[80px] mr-3">
                                    <img className="w-[100%] h-[100%] rounded-lg" src={doctor} alt="" />
                                </div>
                                <div className="w-[80px] h-[80px] mr-3">
                                    <img className="w-[100%] h-[100%] rounded-lg" src={doctor} alt="" />
                                </div>
                            </div>
                            <div className="flex items-center">
                                <button className="text-xl font-medium hover:bg-slate-500 hover:text-white border border-slate-500 rounded-lg py-2 px-3 mr-4">Dental Filling</button>
                                <button className="text-xl font-medium hover:bg-slate-500 hover:text-white border border-slate-500 rounded-lg py-2 px-3">Dental Filling</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Tab  */}
            <div className="w-[1140px] h-[100%] bg-white mx-auto p-8 rounded-lg border border-slate-100 mb-20 shadow-lg">
                <div className="w-fit flex items-center border border-gray-300 shadow-xl shadow-slate-200 rounded-tl-xl rounded-tr-xl mb-8">
                    <p className="text-xl font-semibold hover:bg-emerald-400 px-[86px] py-5 hover:shadow-inner cursor-pointer rounded-tl-xl">Overview</p>
                    <p className="text-xl font-semibold hover:bg-emerald-400 px-[86px] py-5 hover:shadow-inner cursor-pointer">Locations</p>
                    <p className="text-xl font-semibold hover:bg-emerald-400 px-[86px] py-5 hover:shadow-inner cursor-pointer">Reviews</p>
                    <p className="text-xl font-semibold hover:bg-emerald-400 px-[86px] py-5 hover:shadow-inner cursor-pointer rounded-tr-xl">Business Hours</p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-slate-800X">About Us</h3>
                    <p className="text-lg text-slate-800 font-[400] pr-20 my-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis,
                        libero recusandae ea consequatur itaque ad, modi harum quasi eveniet
                        accusamus neque saepe ratione tempora officia, eos excepturi
                        distinctio autem nam.
                    </p>
                </div>
                <div className="grid grid-cols-2">
                    <div>
                        <div>
                            <h1 className="text-2xl font-bold text-slate-800 mb-8">Education</h1>
                            <ul className="ml-12 list-disc">
                                <li className="text-xl font-semibold text-slate-800 my-1">American Dental Medical University</li>
                                <p className="text-lg font-[400] text-slate-800 my-1">BDS</p>
                                <p className="text-lg font-[400] text-slate-800 my-1">1998 - 2003</p>
                                <li className="text-xl font-semibold text-slate-800 my-1">American Dental Medical University</li>
                                <p className="text-lg font-[400] text-slate-800 my-1">BDS</p>
                                <p className="text-lg font-[400] text-slate-800 my-1">1998 - 2003</p>
                            </ul>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-slate-800 mb-8">Work & Experience</h1>
                            <ul className="ml-12 list-disc">
                                <li className="text-xl font-semibold text-slate-800 my-1">Glowing Smiles Family Dental Clinic</li>
                                <p className="text-lg font-[400] text-slate-800 my-1">2010 - Present (5 years)</p>
                                <li className="text-xl font-semibold text-slate-800 my-1">Comfort Care Dental Clinic</li>
                                <p className="text-lg font-[400] text-slate-800 my-1">2007 - 2010 (3 years)</p>
                                <li className="text-xl font-semibold text-slate-800 my-1">Dream Smile Dental Practice</li>
                                <p className="text-lg font-[400] text-slate-800 my-1">2005 - 2007 (2 years)</p>
                            </ul>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-slate-800 mb-8">Services</h1>
                            <ul className="ml-12 list-disc">
                                <li className="text-sm font-[400] text-slate-800 my-1">Tooth cleaning</li>
                                <li className="text-sm font-[400] text-slate-800 my-1">Tooth cleaning</li>
                                <li className="text-sm font-[400] text-slate-800 my-1">Tooth cleaning</li>
                                <li className="text-sm font-[400] text-slate-800 my-1">Tooth cleaning</li>
                                <li className="text-sm font-[400] text-slate-800 my-1">Tooth cleaning</li>
                                <li className="text-sm font-[400] text-slate-800 my-1">Tooth cleaning</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h1 className="text-2xl font-bold text-slate-800 mb-8">Awards</h1>
                            <ul className="ml-12 list-disc">
                                <p className="text-lg font-[400] text-slate-800 my-1">July 2019</p>
                                <li className="text-xl font-semibold text-slate-800 my-1">Humanitarian Award</li>
                                <p className="text-lg font-[400] text-slate-800 my-1">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur minima incidunt
                                    id fuga repellendus. Corporis laboriosam quaerat ipsam doloribus animi deserunt, pariatur
                                    fugit eos modi rerum ut neque ea illo.
                                </p>
                                <p className="text-lg font-[400] text-slate-800 my-1">March 2011</p>
                                <li className="text-xl font-semibold text-slate-800 my-1">Certificate for International Volunteer Service</li>
                                <p className="text-lg font-[400] text-slate-800 my-1">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Impedit similique animi natus expedita? Nam similique
                                    doloribus labore, soluta nobis suscipit nesciunt explicabo
                                    voluptatem magnam, dolorem natus rem, minus enim! Impedit.
                                </p>
                                <p className="text-lg font-[400] text-slate-800 my-1">May 2008</p>
                                <li className="text-xl font-semibold text-slate-800 my-1">The Dental Professional of The Year Award</li>
                                <p className="text-lg font-[400] text-slate-800 my-1">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Impedit similique animi natus expedita? Nam similique
                                    doloribus labore, soluta nobis suscipit nesciunt explicabo
                                    voluptatem magnam, dolorem natus rem, minus enim! Impedit.
                                </p>
                            </ul>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-slate-800 mb-8">Specializations</h1>
                            <ul className="ml-12 list-disc">
                                <li className="text-sm font-[400] text-slate-800 my-1">Tooth cleaning</li>
                                <li className="text-sm font-[400] text-slate-800 my-1">Tooth cleaning</li>
                                <li className="text-sm font-[400] text-slate-800 my-1">Tooth cleaning</li>
                                <li className="text-sm font-[400] text-slate-800 my-1">Tooth cleaning</li>
                                <li className="text-sm font-[400] text-slate-800 my-1">Tooth cleaning</li>
                                <li className="text-sm font-[400] text-slate-800 my-1">Tooth cleaning</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Doctor_Profile;