import { BsImages } from "react-icons/bs";


const Added_Doctors = () => {
    return (
        <div className="w-[540px] mx-auto my-8">
            <h1 className="text-3xl font-bold text-slate-800">Add a New Doctors</h1>
            {/* form */}
            <div className="w-[540px] h-[100%] bg-white mt-5 p-10 rounded-xl border border-slate-300">
                <div>
                    <div className="mb-3">
                        <label className="text-lg font-medium text-gray-500">Name</label>
                        <input className="w-[100%] h-[60px] rounded-lg border border-gray-300 bg-gray-50 ps-5 text-lg text-black font-medium mt-3 shadow-inner" type="text" placeholder="Enter your Name" />
                    </div>
                    <div className="mb-3">
                        <label className="text-lg font-medium text-gray-500">Email</label>
                        <input className="w-[100%] h-[60px] rounded-lg border border-gray-300 bg-gray-50 ps-5 text-lg text-black font-medium mt-3 shadow-inner" type="text" placeholder="Enter your Email" />
                    </div>
                    <div className="mb-10">
                        <label className="text-lg font-medium text-gray-500">Name</label>
                        <select className="w-[100%] h-[60px] rounded-lg border border-gray-300 bg-gray-50 ps-5 text-lg text-black font-medium mt-3 shadow-xl">
                            <option>dental</option>
                            <option>dental</option>
                            <option>dental</option>
                            <option>dental</option>
                            <option>dental</option>
                        </select>
                    </div>
                    <div className="text-center w-[100%] h-[150px] text-gray-400 border border-gray-400 border-dashed rounded-xl flex flex-col items-center justify-center">
                        <h3 className="text-xl font-[400] ">drag image/upload image</h3>
                        <div className="text-3xl mt-2">
                            <BsImages />
                        </div>
                    </div>
                    <button className="w-[100%] h-[50px] text-xl font-semibold text-white bg-emerald-900 rounded-lg mt-4">Add</button>
                </div>
            </div>
        </div>
    );
};

export default Added_Doctors;