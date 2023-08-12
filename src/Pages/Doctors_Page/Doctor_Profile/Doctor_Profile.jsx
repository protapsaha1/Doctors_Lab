import doctor from "../../../../public/image/banner_image/banner_doctor_2.jpg";
import { Rating } from "@smastrom/react-rating";
import Tippy from "@tippyjs/react";
import { GoLocation } from "react-icons/go";
import ig1 from "../../../../public/image/banner_image/Group 7.png";
import ig2 from "../../../../public/image/banner_image/Vector (1).png";
import { useLoaderData } from "react-router-dom";
import "./Doctor_Profile_style.css";
import { useState } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";


const Doctor_Profile = () => {
    const [tab, setTab] = useState(1);
    // Tab
    const toggleTab = (index) => {
        setTab(index);
    };

    // Doctor data
    const doctorData = useLoaderData();
    console.log(doctorData)
    const {
        name,
        doctor_img,
        speacialist,
        ratings, total_review,
        location,
        about,
        education_qualification,
        experience,
        services,
        specializations,
        award,
        reviews
    } = doctorData;



    return (
        <>
            <div className="bg-emerald-600 w-[100%] h-[500px] pt-20 px-20 pb-20 relative">
                <h1 className="text-6xl font-bold text-white text-center mt-40 tracking-[2px] leading-6">Doctor Profile - <span className="uppercase">{name}</span></h1>
                <img className="w-[300px] h-[300px] absolute left-2 top-28" src={ig1} alt="" />
                <img className="w-[200px] h-[200px] absolute right-1 bottom-1" src={ig2} alt="" />
            </div>
            <div className="pb-20">
                <div className="my-28">
                    <div className="w-[1140px] mx-auto bg-white mb-10 rounded-lg p-5 flex border border-slate-100 shadow-lg">
                        <div className="w-[550px] h-[378px] mr-5">
                            <img className="w-[100%] h-[100%] rounded-lg" src={doctor_img} alt="" />
                        </div>
                        <div>
                            <div className="mb-4">
                                <h1 className="text-3xl font-bold text-slate-900 mb-3">{name}</h1>
                                <p className="text-xl font-[200] tracking-[1px] text-gray-500 mb-3">{speacialist}</p>
                                <div className="flex items-center mb-3">
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={ratings}
                                        readOnly
                                    />
                                    <Tippy content={`reviews - ${total_review}`}>
                                        <span className="text-xl ms-1 text-slate-800">(<span className="text-lg">{total_review}</span>)</span>
                                    </Tippy>
                                </div>
                                <div className="flex items-center">
                                    <div className="text-2xl text-slate-800 mr-5"><GoLocation /></div>
                                    <div className="flex items-center">
                                        <h3 className="text-slate-800 font-[200] tracking-[1px] mr-2">{location?.diraction} - </h3>
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
                <div className="w-[1140px] h-[100%] bg-white mx-auto p-8 rounded-lg border border-slate-100 shadow-lg">
                    <div className="w-fit mx-auto flex items-center border border-gray-300 shadow-xl shadow-slate-200 rounded-tl-xl rounded-tr-xl mb-8">
                        <div onClick={() => toggleTab(1)} className={tab === 1 ? "text-xl text-black font-semibold bg-emerald-400 px-[80px] py-5 hover:shadow-inner cursor-pointer border-r-2 border-r-emerald-800 rounded-tl-xl" : "text-xl text-black font-semibold hover:bg-emerald-400 px-[80px] py-5 hover:shadow-inner cursor-pointer border-r-2 border-r-emerald-800 rounded-tl-xl"}>Overview</div>
                        <div onClick={() => toggleTab(2)} className={tab === 2 ? "text-xl text-black font-semibold bg-emerald-400 px-[80px] py-5 hover:shadow-inner cursor-pointer border-r-2 border-r-emerald-800" : "text-xl text-black font-semibold hover:bg-emerald-400 px-[80px] py-5 hover:shadow-inner cursor-pointer border-r-2 border-r-emerald-800"}>Locations</div>
                        <div onClick={() => toggleTab(3)} className={tab === 3 ? "text-xl text-black font-semibold bg-emerald-400 px-[80px] py-5 hover:shadow-inner cursor-pointer border-r-2 border-r-emerald-800" : "text-xl text-black font-semibold hover:bg-emerald-400 px-[80px] py-5 hover:shadow-inner cursor-pointer border-r-2 border-r-emerald-800"}>Reviews</div>
                        <div onClick={() => toggleTab(4)} className={tab === 4 ? "text-xl text-black font-semibold bg-emerald-400 px-[80px] py-5 hover:shadow-inner cursor-pointer rounded-tr-xl" : "text-xl text-black font-semibold hover:bg-emerald-400 px-[80px] py-5 hover:shadow-inner cursor-pointer rounded-tr-xl"}>Experiences</div>
                    </div>
                    <div className={tab === 1 ? "tab_content" : "invisiblae_tab_cantent"}>
                        {/* About doctor */}
                        {about && <div>
                            <h3 className="text-2xl font-bold text-slate-800">About Us</h3>
                            <p className="text-lg text-slate-800 font-[400] pr-20 my-5">{about}</p>
                        </div>}
                        <div className="grid grid-cols-2">
                            <div>
                                {/* Doctor degrees */}
                                {education_qualification && <div>
                                    <h1 className="text-2xl font-bold text-slate-800 mb-8">Education</h1>
                                    <ul className="ml-12 list-disc">
                                        {education_qualification &&
                                            education_qualification.map((eq, index) => <div key={index}>
                                                <li className="text-xl font-semibold text-slate-800 my-1" > {eq?.institute}</li>
                                                <p className="text-lg font-[400] text-slate-800 my-1">{eq?.degree}</p>
                                                <p className="text-lg font-[400] text-slate-800 my-1">{eq?.year}</p>
                                            </div>)
                                        }
                                    </ul>
                                </div>}
                                {/* Doctor experience */}
                                {experience && <div>
                                    <h1 className="text-2xl font-bold text-slate-800 mb-8">Work & Experience</h1>
                                    <ul className="ml-12 list-disc">
                                        {experience &&
                                            experience.map((ex, index) => <div key={index}>
                                                <li className="text-xl font-semibold text-slate-800 my-1">{ex?.hospital_name}</li>
                                                <p className="text-lg font-[400] text-slate-800 my-1">{ex?.work_time}</p>
                                            </div>)
                                        }
                                    </ul>
                                </div>}
                                {/* Doctor service */}
                                {services && <div>
                                    <h1 className="text-2xl font-bold text-slate-800 mb-8">Services</h1>
                                    <ul className="ml-12 list-disc">
                                        {services &&
                                            services.map((serve, index) => <li className="text-sm font-[400] text-slate-800 my-1" key={index}>{serve}</li>)
                                        }
                                    </ul>
                                </div>}
                            </div>
                            <div>
                                {/* Doctors Awards */}
                                {award && <div>
                                    <h1 className="text-2xl font-bold text-slate-800 mb-8">Awards</h1>
                                    <ul className="ml-12 list-disc">
                                        {award &&
                                            award.map((aw, index) => <div key={index}>
                                                <li className="text-xl font-semibold text-slate-800 my-1">{aw?.award_title}</li>
                                                <p className="text-lg font-[400] text-slate-800 my-1">{aw?.award_description}</p>
                                                <p className="text-lg font-[400] text-slate-800 my-1">{aw?.award_date}</p>
                                            </div>)
                                        }
                                    </ul>
                                </div>}
                                {/* Doctors Specializations */}
                                {specializations && <div>
                                    <h1 className="text-2xl font-bold text-slate-800 mb-8">Specializations</h1>
                                    <ul className="ml-12 list-disc">
                                        {specializations &&
                                            specializations.map((sp, index) => <li className="text-sm font-[400] text-slate-800 my-1" key={index}>{sp}</li>)
                                        }
                                    </ul>
                                </div>}
                            </div>
                        </div>
                    </div>
                    {/* Location */}
                    <div className={tab === 2 ? "tab_content" : "invisiblae_tab_cantent"}>
                        <h1 className="text-3xl font-[500] text-slate-800 tracking-[1px]">Location : {location.diraction}</h1>
                        <div className="mt-5 w-[1076px] h-[500px]">
                            <img className="w-[100%] h-[100%]" src={location.map_img} alt="" />
                        </div>
                    </div>
                    {/* Reviews */}
                    <div className={tab === 3 ? "tab_content" : "invisiblae_tab_cantent"}>
                        <div className="flex items-center justify-between">
                            <h1 className="text-4xl font-semibold text-slate-800 tracking-[1px]">Pacients Reviews</h1>
                            {/* Reviews paigination */}
                            <div className="flex items-center gap-3 mr-5">
                                {/* TODO */}
                                <Tippy content="previous">
                                    <span className="text-xl text-gray-600 cursor-pointer">
                                        <AiFillCaretLeft />
                                    </span>
                                </Tippy>

                                <Tippy content="next">
                                    <span className="text-xl text-gray-600 cursor-pointer">
                                        <AiFillCaretRight />
                                    </span>
                                </Tippy>
                                <div>
                                    <span className="text-slate-900 text-lg font-medium">( {total_review / 5} of {total_review} )</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5">

                            {/* Reviews card */}
                            {reviews &&
                                reviews.map((review, index) => <div className="border border-gray-400 rounded p-3 mb-2" key={index}>
                                    <div className="flex items-center">
                                        <div className="w-[100px] h-[100px] mr-3">
                                            <img className="w-[100%] h-[100%] rounded-[50%]" src={review?.reviewer_image} alt="" />
                                        </div>
                                        <div>
                                            <h2 className="text-xl font-bold text-slate-800">{review?.reviewer_name}</h2>
                                            <p className="text-sm text-slate-800 font-[500] tracking-[1px]">{review?.review_time}</p>
                                        </div>
                                    </div>
                                    <div className="pl-12 pt-3">
                                        <p className="text-slate-800 text-lg font-semibold tracking-[1px]">{review?.review_description}</p>
                                    </div>
                                </div>
                                )
                            }
                        </div>
                    </div>
                    {/* Business Hours */}
                    <div className={tab === 4 ? "tab_content" : "invisiblae_tab_cantent"}>
                        <h1 className="text-3xl text-slate-800 font-semibold">Experiences :</h1>
                        {
                            experience &&
                            experience.map((ex, index) => <div key={index} className="my-8 pl-10">
                                <div className="flex items-center">
                                    <p className="text-2xl font-bold text-slate-800 mr-2">{index + 1}. </p>
                                    <h1 className="text-2xl font-bold text-slate-800">{ex.hospital_name}</h1>
                                </div>
                                <p className="text-gray-500 font-[400] tracking-[1px] ml-10 mt-2">{ex.work_time}</p>
                            </div>)
                        }
                    </div>
                </div>
            </div >
        </>
    );
};

export default Doctor_Profile;