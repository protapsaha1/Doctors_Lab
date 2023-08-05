import { Link } from "react-router-dom";
import banner_doc_img_1 from "../../../../public/image/banner_image/banner_doctor_1.jpg";
import banner_doc_img_2 from "../../../../public/image/banner_image/banner_doctor_2.jpg";
import banner_doc_img_3 from "../../../../public/image/banner_image/banner_doctor_3.jpeg";
import banner_doc_img_4 from "../../../../public/image/banner_image/banner_doctor_4.jpeg";

const Banner_Section = () => {
    return (
        <div className="bg-emerald-600 w-[100%] h-[100%] flex justify-evenly pt-20 px-20 pb-20">
            {/* Banner text */}
            <div className="mt-20 w-[50%]">
                <h1 className="text-6xl font-bold text-white">Your Best Medical Help Center</h1>
                <p className="text-lg font-semibold text-white my-10 pr-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem molestias ipsum adipisci esse. Eaque, et? Modi natus consectetur perspiciatis quod, sint nisi laborum quos magni, eveniet rem esse incidunt tempora?</p>
                <Link className="text-emerald-600 hover:text-white font-bold text-xl bg-white hover:bg-amber-400 py-2 px-3 rounded-lg ">All Service</Link>
            </div>
            {/* Banner Images */}
            <div className="p-10 w-[50%]">
                <div className="flex">
                    <img className="w-[15rem] h-[16rem] border-8 border-slate-300 mb-5 mr-3 shadow-lg shadow-emerald-100" src={banner_doc_img_1} alt="banner doctor image" />
                    <img className="w-[15rem] h-[16rem] border-8 border-slate-300 mt-5 shadow-lg shadow-emerald-100" src={banner_doc_img_2} alt="banner doctor image" />
                </div>
                <div className="flex">
                    <img className="w-[15rem] h-[16rem] border-8 border-slate-300 mb-5 mr-3 shadow-lg shadow-emerald-100" src={banner_doc_img_3} alt="banner doctor image" />
                    <img className="w-[15rem] h-[16rem] border-8 border-slate-300 mt-5 shadow-lg shadow-emerald-100" src={banner_doc_img_4} alt="banner doctor image" />
                </div>
            </div>
        </div>
    );
};

export default Banner_Section;