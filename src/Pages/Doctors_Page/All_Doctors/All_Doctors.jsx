import useTitle from "../../../components/Hooks/useTitle";
import Doctor_Card from "../../../components/Module/Doctor_Card/Doctor_Card";
import doctor from "../../../../public/image/banner_image/banner_doctor_2.jpg";
// import { useState } from "react";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";

const All_Doctors = () => {
    useTitle("Our Doctors");
    // const [curentPage, setCurrentPage] = useState(0);


    return (
        <>
            <div className="pt-32 pb-20 w-[1140px] mx-auto grid grid-cols-3">
                <Doctor_Card
                    img={doctor}
                    name="Dr. Robi"
                    profession_status="M.B.B.S / Phegio Thrapy Speacialist"
                    ratings={5}
                    location="Dhanmondi,Dhaka"
                    duty_time="7pm-10pm"
                    visit_fee="1200"
                />
                <Doctor_Card
                    img={doctor}
                    name="Dr. Robi"
                    profession_status="M.B.B.S / Phegio Thrapy Speacialist"
                    ratings={5}
                    location="Dhanmondi,Dhaka"
                    duty_time="7pm-10pm"
                    visit_fee="1200"
                />
                <Doctor_Card
                    img={doctor}
                    name="Dr. Robi"
                    profession_status="M.B.B.S / Phegio Thrapy Speacialist"
                    ratings={5}
                    location="Dhanmondi,Dhaka"
                    duty_time="7pm-10pm"
                    visit_fee="1200"
                />
                <Doctor_Card
                    img={doctor}
                    name="Dr. Robi"
                    profession_status="M.B.B.S / Phegio Thrapy Speacialist"
                    ratings={5}
                    location="Dhanmondi,Dhaka"
                    duty_time="7pm-10pm"
                    visit_fee="1200"
                />
                <Doctor_Card
                    img={doctor}
                    name="Dr. Robi"
                    profession_status="M.B.B.S / Phegio Thrapy Speacialist"
                    ratings={5}
                    location="Dhanmondi,Dhaka"
                    duty_time="7pm-10pm"
                    visit_fee="1200"
                />
                <Doctor_Card
                    img={doctor}
                    name="Dr. Robi"
                    profession_status="M.B.B.S / Phegio Thrapy Speacialist"
                    ratings={5}
                    location="Dhanmondi,Dhaka"
                    duty_time="7pm-10pm"
                    visit_fee="1200"
                />
                <Doctor_Card
                    img={doctor}
                    name="Dr. Robi"
                    profession_status="M.B.B.S / Phegio Thrapy Speacialist"
                    ratings={5}
                    location="Dhanmondi,Dhaka"
                    duty_time="7pm-10pm"
                    visit_fee="1200"
                />
                <Doctor_Card
                    img={doctor}
                    name="Dr. Robi"
                    profession_status="M.B.B.S / Phegio Thrapy Speacialist"
                    ratings={5}
                    location="Dhanmondi,Dhaka"
                    duty_time="7pm-10pm"
                    visit_fee="1200"
                />
                <Doctor_Card
                    img={doctor}
                    name="Dr. Robi"
                    profession_status="M.B.B.S / Phegio Thrapy Speacialist"
                    ratings={5}
                    location="Dhanmondi,Dhaka"
                    duty_time="7pm-10pm"
                    visit_fee="1200"
                />
                <Doctor_Card
                    img={doctor}
                    name="Dr. Robi"
                    profession_status="M.B.B.S / Phegio Thrapy Speacialist"
                    ratings={5}
                    location="Dhanmondi,Dhaka"
                    duty_time="7pm-10pm"
                    visit_fee="1200"
                />
                <Doctor_Card
                    img={doctor}
                    name="Dr. Robi"
                    profession_status="M.B.B.S / Phegio Thrapy Speacialist"
                    ratings={5}
                    location="Dhanmondi,Dhaka"
                    duty_time="7pm-10pm"
                    visit_fee="1200"
                />
                <Doctor_Card
                    img={doctor}
                    name="Dr. Robi"
                    profession_status="M.B.B.S / Phegio Thrapy Speacialist"
                    ratings={5}
                    location="Dhanmondi,Dhaka"
                    duty_time="7pm-10pm"
                    visit_fee="1200"
                />
                <Doctor_Card
                    img={doctor}
                    name="Dr. Robi"
                    profession_status="M.B.B.S / Phegio Thrapy Speacialist"
                    ratings={5}
                    location="Dhanmondi,Dhaka"
                    duty_time="7pm-10pm"
                    visit_fee="1200"
                />
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

export default All_Doctors;