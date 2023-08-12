import 'tippy.js/dist/tippy.css';
import All_Doctors from "./All_Doctors";
import useTitle from '../../../components/Hooks/useTitle';
import useTotalDoctors from '../../../components/Hooks/useTotalDoctors';
import { useEffect, useState } from 'react';
import Pagination from '../../../components/Module/Pagination/Pagination';

const Doctors = () => {
    useTitle("Our Doctors");

    // Total Doctors Card Numbers
    const { totalDoctors } = useTotalDoctors();
    // All Doctors Data
    const [doctors, setDoctors] = useState([]);
    // Current page
    const [currentPage, setCurrentPage] = useState(0);
    // Cards in page
    const cardInPage = 6;
    // Total pages
    const totalPage = Math.ceil(totalDoctors?.totalDoctors / cardInPage);

    useEffect(() => {
        fetch(`http://localhost:3001/doctors?page=${currentPage}&limit=${cardInPage}`)
            .then(res => res.json())
            .then(data => {
                setDoctors(data);
            })

    }, [currentPage, cardInPage]);


    const handleSetTogglePage = (setPage) => {
        setCurrentPage(setPage);
    };

    return (
        <>
            <div className="pt-32 pb-20 w-[1140px] mx-auto grid grid-cols-3">
                {doctors &&
                    doctors.map(doctor => <All_Doctors
                        key={doctor._id}
                        doctor={doctor}
                    />)
                }
            </div>
            <div className={totalDoctors?.totalDoctors < 6 ? "hidden" : "pb-10 flex items-center justify-center"}>
                <Pagination currentPage={currentPage} totalPage={totalPage} changePages={handleSetTogglePage} />
            </div>
        </>
    );
};

export default Doctors;