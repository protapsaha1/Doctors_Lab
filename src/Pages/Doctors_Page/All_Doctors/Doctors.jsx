import 'tippy.js/dist/tippy.css';
import Tippy from "@tippyjs/react";
import useDoctorsData from "../../../components/Hooks/useDoctorsData";
import All_Doctors from "./All_Doctors";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import useTitle from '../../../components/Hooks/useTitle';

const Doctors = () => {
    useTitle("Our Doctors");
    const { doctors } = useDoctorsData();
    return (
        <>
            <div className="pt-32 pb-20 w-[1140px] mx-auto grid grid-cols-3">
                {
                    doctors.map(doctor => <All_Doctors
                        key={doctor._id}
                        doctor={doctor}
                    />)
                }
            </div>
            <div className="pb-10 flex items-center justify-center">
                <Tippy content="Previous">
                    <button className="text-3xl text-white bg-emerald-500 hover:bg-emerald-400 py-1 px-2 mr-4 rounded-lg"><AiOutlineDoubleLeft /></button>
                </Tippy>
                <Tippy content="Next">
                    <button className="text-3xl text-white bg-emerald-500 hover:bg-emerald-400 py-1 px-2 mr-4 rounded-lg"><AiOutlineDoubleRight /></button>
                </Tippy>
            </div>
        </>
    );
};

export default Doctors;