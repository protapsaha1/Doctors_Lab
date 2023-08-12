import { useRef } from "react";
// import { useState } from "react";
import { FaQuoteRight } from "react-icons/fa";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import useFeedbacks from "../../../components/Hooks/useFeedbacks";

const Patients_Feedback_section = () => {
    const feedbackSliderRef = useRef(null);
    // const [currIndex, setCurrIndex] = useState(0);
    const { feedbacks } = useFeedbacks();
    console.log(feedbacks)

    const handleFeedbackArrowRight = () => {
        feedbackSliderRef.current.scrollLeft += -570;
    };
    const handleFeedbackArrowLeft = () => {
        feedbackSliderRef.current.scrollLeft += 570;
    };

    // const data = 

    // const handleFeedbackArrowRight = () => {
    //     const firstIndex = currIndex === 0;
    //     const newIndex = firstIndex ? feedbacks.length - 1 : currIndex - 1;
    //     setCurrIndex(newIndex);
    // };
    // const handleFeedbackArrowLeft = () => {
    //     const lastIndex = feedbacks.length - 1 === currIndex;
    //     const newIndex = lastIndex ? 0 : currIndex + 1;
    //     setCurrIndex(newIndex);
    // };

    return (
        // TODO 
        <div className="w-[1140px] mx-auto mt-28">
            <h1 className="text-slate-800 text-3xl font-[700] text-center">Our Patients Mind Says</h1>
            <p className="text-lg font-[500] text-slate-800 text-center mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam architecto, ipsa illum libero, omnis itaque officia vitae suscipit quae, sit unde nobis quia natus nostrum iure adipisci! Voluptate, delectus ex.</p>
            <div className="relative">
                <div ref={feedbackSliderRef} className="mt-16 flex items-center gap-4 overflow-x-hidden scroll-smooth whitespace-nowrap">
                    {feedbacks &&
                        feedbacks.map((feedback) =>
                            <div key={feedback._id} className="w-[558px] h-[290px] bg-white border border-slate-500 rounded p-8">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="w-[60px] h-[60px]">
                                            <img className="w-[100%] h-[100%] rounded-[50%] border-2 border-emerald-700" src={feedback?.image} alt="" />
                                        </div>
                                        <div className="ml-3">
                                            <h3 className="text-xl font-semibold text-slate-900 ">{feedback?.name}</h3>
                                            <h3 className="text-lg font-[200] text-slate-900 tracking-[1px]">{feedback?.status}</h3>
                                        </div>
                                    </div>
                                    <div className="text-[60px] text-emerald-400" >
                                        <FaQuoteRight />
                                    </div>
                                </div>
                                <p className="mt-10 text-slate-900 text-lg font-[500] tracking-[1px]">{feedback?.feedback_description}</p>
                            </div>
                        )}
                </div>
                <button onClick={handleFeedbackArrowRight} className="text-3xl text-emerald-600 hover:text-white w-12 h-12 bg-white hover:bg-emerald-400 border border-emerald-400 rounded-[50%] flex items-center justify-center absolute top-[40%] -left-6"><GoChevronLeft /></button>
                <button onClick={handleFeedbackArrowLeft} className="text-3xl text-emerald-600 hover:text-white w-12 h-12 bg-white hover:bg-emerald-400 border border-emerald-400 rounded-[50%] flex items-center justify-center absolute top-[40%] -right-6"><GoChevronRight /></button>
            </div>
        </div>
    );
};

export default Patients_Feedback_section;