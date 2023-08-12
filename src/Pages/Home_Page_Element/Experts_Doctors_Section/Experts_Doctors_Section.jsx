import { useCallback, useEffect, useState } from "react";
import useDoctorsData from "../../../components/Hooks/useDoctorsData";
import Experts_Doctors from "./Experts_Doctors";

// TODO 
const Experts_Doctors_Section = () => {
    const [shuffleDoctorCard, setShuffleDoctorCard] = useState([]);
    // all Doctors cards
    const { doctors } = useDoctorsData();

    // randomly shuffle doctors cards
    const shuffleCards = useCallback(() => {
        const doctorCard = [...doctors].sort(() => 0.5 - Math.random());
        setShuffleDoctorCard(doctorCard.slice(0, 3));
    }, [doctors]);

    // auto shuffle cards
    useEffect(() => {

        shuffleCards();
        // shuffle in every 2 min
        const shuffleCardTime = setInterval(shuffleCards, 1 * 60 * 1000);

        // shuffle clear
        return () => clearInterval(shuffleCardTime);
    }, [shuffleCards]);



    return (
        <div className="w-[1140px] mx-auto mt-28">
            <h1 className="text-slate-800 text-3xl font-bold text-center">Expert Doctors</h1>
            <p className="text-slate-800 text-xl text-center mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, architecto? Ab assumenda incidunt inventore eligendi earum nemo qui suscipit magnam omnis nihil, quis officia laborum voluptate rerum sed animi quas!</p>
            <button className="ml-[1030px] my-14 text-white text-xl font-serif font-semibold bg-orange-600 hover:bg-orange-500 px-3 py-2 rounded-lg tracking-[1px]" onClick={shuffleCards}>Sort ^</button>
            <div className="grid grid-cols-3 gap-5">
                {
                    shuffleDoctorCard.map(doctor => <Experts_Doctors
                        key={doctor._id}
                        doctor={doctor}
                    />)
                }
            </div>
        </div>
    );
};

export default Experts_Doctors_Section;