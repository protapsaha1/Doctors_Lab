import pacient_img from "../../../../public/image/banner_image/banner_doctor_3.jpeg";
import { FaQuoteRight } from "react-icons/fa";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
// import { EffectFlip, Pagination, Navigation } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css/effect-flip';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import 'swiper/css';

const Patients_Feedback_section = () => {
    return (
        <div className="w-[1140px] mx-auto mt-28">
            <h1 className="text-slate-800 text-3xl font-[700] text-center">Our Patients Mind Says</h1>
            <p className="text-lg font-[500] text-slate-800 text-center mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam architecto, ipsa illum libero, omnis itaque officia vitae suscipit quae, sit unde nobis quia natus nostrum iure adipisci! Voluptate, delectus ex.</p>


            {/* Feedbacks Swiper*/}
            {/* <div className='mt-16'>
                <Swiper
                    effect={'flip'}
                    grabCursor={true}
                    pagination={true}
                    navigation={true}
                    modules={[EffectFlip, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="w-[558px] h-[290px] border border-slate-500 p-8">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className="w-[50px] h-[50px]">
                                        <img className="w-[100%] h-[100%] rounded-[50%] border-2 border-emerald-700" src={pacient_img} alt="" />
                                    </div>
                                    <div className="ml-3">
                                        <h3 className="text-xl font-semibold text-slate-900 ">Name of pacient</h3>
                                        <h3 className="text-lg font-[200] text-slate-900 tracking-[1px]">pacient status</h3>
                                    </div>
                                </div>
                                <div>
                                    <FaQuoteRight className="w-[60px] h-[60px] text-orange-400" />
                                </div>
                            </div>
                            <p className="mt-10 text-slate-900 text-lg font-[400]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas impedit similique quibusdam dicta labore autem ipsam at rem ipsum iusto nihil saepe minima incidunt temporibus, sed tempora ut, accusantium nesciunt!</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-[558px] h-[290px] border border-slate-500 p-8">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className="w-[50px] h-[50px]">
                                        <img className="w-[100%] h-[100%] rounded-[50%] border-2 border-emerald-700" src={pacient_img} alt="" />
                                    </div>
                                    <div className="ml-3">
                                        <h3 className="text-xl font-semibold text-slate-900 ">Name of pacient</h3>
                                        <h3 className="text-lg font-[200] text-slate-900 tracking-[1px]">pacient status</h3>
                                    </div>
                                </div>
                                <div>
                                    <FaQuoteRight className="w-[60px] h-[60px] text-orange-400" />
                                </div>
                            </div>
                            <p className="mt-10 text-slate-900 text-lg font-[400]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas impedit similique quibusdam dicta labore autem ipsam at rem ipsum iusto nihil saepe minima incidunt temporibus, sed tempora ut, accusantium nesciunt!</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div> */}
            <div className="mt-16 grid grid-cols-2 gap-4 relative">

                {/* -----------------------FaQuoteRight-------------------------- */}
                <div className="w-[558px] h-[290px] bg-white border border-slate-500 rounded p-8">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="w-[60px] h-[60px]">
                                <img className="w-[100%] h-[100%] rounded-[50%] border-2 border-emerald-700" src={pacient_img} alt="" />
                            </div>
                            <div className="ml-3">
                                <h3 className="text-xl font-semibold text-slate-900 ">Name of pacient</h3>
                                <h3 className="text-lg font-[200] text-slate-900 tracking-[1px]">pacient status</h3>
                            </div>
                        </div>
                        <div>
                            <FaQuoteRight className="w-[60px] h-[60px] text-emerald-400" />
                        </div>
                    </div>
                    <p className="mt-10 text-slate-900 text-lg font-[400]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas impedit similique quibusdam dicta labore autem ipsam at rem ipsum iusto nihil saepe minima incidunt temporibus, sed tempora ut, accusantium nesciunt!</p>
                </div>
                {/* -----------------------FaQuoteRight-------------------------- */}
                <div className="w-[558px] h-[290px] bg-white border border-slate-500 rounded p-8">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="w-[60px] h-[60px]">
                                <img className="w-[100%] h-[100%] rounded-[50%] border-2 border-emerald-700" src={pacient_img} alt="" />
                            </div>
                            <div className="ml-3">
                                <h3 className="text-xl font-semibold text-slate-900 ">Name of pacient</h3>
                                <h3 className="text-lg font-[200] text-slate-900 tracking-[1px]">pacient status</h3>
                            </div>
                        </div>
                        <div>
                            <FaQuoteRight className="w-[60px] h-[60px] text-orange-400" />
                        </div>
                    </div>
                    <p className="mt-10 text-slate-900 text-lg font-[400]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas impedit similique quibusdam dicta labore autem ipsam at rem ipsum iusto nihil saepe minima incidunt temporibus, sed tempora ut, accusantium nesciunt!</p>
                </div>
                <div className="text-3xl text-emerald-600 hover:text-white w-12 h-12 bg-white hover:bg-emerald-400 border border-emerald-400 rounded-[50%] flex items-center justify-center absolute top-[40%] -left-6"><GoChevronLeft /></div>
                <div className="text-3xl text-emerald-600 hover:text-white w-12 h-12 bg-white hover:bg-emerald-400 border border-emerald-400 rounded-[50%] flex items-center justify-center absolute top-[40%] -right-6"><GoChevronRight /></div>
            </div>

        </div>
    );
};

export default Patients_Feedback_section;