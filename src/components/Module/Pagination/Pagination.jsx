import Tippy from "@tippyjs/react";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";

const Pagination = ({ currentPage, totalPage, changePages }) => {

    const handlePrevious = () => {
        if (currentPage > 0) {
            changePages(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPage) {
            changePages(currentPage + 1);
        }
    }


    return (
        <div>
            <Tippy content="Previous">
                <button onClick={handlePrevious} className="text-3xl text-white bg-emerald-500 hover:bg-emerald-400 py-1 px-2 mr-4 rounded-lg" disabled={currentPage === 0}><AiOutlineDoubleLeft /></button>
            </Tippy>
            <Tippy content="Next">
                <button onClick={handleNext} className="text-3xl text-white bg-emerald-500 hover:bg-emerald-400 py-1 px-2 mr-4 rounded-lg" disabled={currentPage === totalPage}><AiOutlineDoubleRight /></button>
            </Tippy>
        </div>
    );
};

export default Pagination;