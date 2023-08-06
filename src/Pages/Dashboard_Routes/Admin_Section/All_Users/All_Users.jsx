import Tippy from "@tippyjs/react";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";

const All_Users = () => {
    return (
        <div className="w-[1030px] mx-auto my-10">
            <h1 className="text-3xl font-bold text-slate-800">All Users: 06</h1>
            <div className="my-10">
                <div className="overflow-x-auto rounded-lg">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-slate-900">
                            <tr>
                                <th className="text-2xl font-bold text-white ">#</th>
                                <th className="text-2xl font-bold text-white ">Name</th>
                                <th className="text-2xl font-bold text-white ">Email</th>
                                <th className="text-2xl font-bold text-white ">Role</th>
                                <th className="text-2xl font-bold text-white ">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr className="bg-slate-600 shadow-2xl">
                                <th className="text-lg text-white font-[400]">1</th>
                                <td className="text-lg text-white font-[500]">Cy Ganderton</td>
                                <td className="text-lg text-white font-[500]">ex.gmail.com</td>
                                <td className="text-lg text-white font-[500]">Admin</td>
                                <td>
                                    <button className="text-xl text-white hover:text-slate-800 font-[700] py-3 px-3 border border-white rounded-lg shadow-2xl bg-slate-500 hover:bg-slate-300 hover:shadow-inner">Remove User</button>
                                </td>
                            </tr>
                            {/* row 2 */}
                            <tr className="bg-slate-600 shadow-2xl">
                                <th className="text-lg text-white font-[400]">2</th>
                                <td className="text-lg text-white font-[500]">Hart Hagerty</td>
                                <td className="text-lg text-white font-[500]">ex.gmail.com</td>
                                <td>
                                    <button className="text-xl text-white hover:text-slate-800 font-[700] py-3 px-3 border border-white rounded-lg shadow-2xl bg-slate-500 hover:bg-slate-300 hover:shadow-inner">Admin</button>
                                </td>
                                <td>
                                    <button className="text-xl text-white hover:text-slate-800 font-[700] py-3 px-3 border border-white rounded-lg shadow-2xl bg-slate-500 hover:bg-slate-300 hover:shadow-inner">Remove User</button>
                                </td>
                            </tr>
                            {/* row 3 */}
                            <tr className="bg-slate-600 shadow-2xl">
                                <th className="text-lg text-white font-[400]">3</th>
                                <td className="text-lg text-white font-[500]">Brice Swyre</td>
                                <td className="text-lg text-white font-[500]">ex.gmail.com</td>
                                <td className="text-lg text-white font-[500]">Admin</td>
                                <td>
                                    <button className="text-xl text-white hover:text-slate-800 font-[700] py-3 px-3 border border-white rounded-lg shadow-2xl bg-slate-500 hover:bg-slate-300 hover:shadow-inner">Remove User</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="mb-10 flex items-center justify-center">
                <Tippy content="Previous">
                    <button className="text-3xl text-white bg-emerald-500 hover:bg-emerald-400 py-1 px-2 mr-4 rounded-lg"><AiOutlineDoubleLeft /></button>
                </Tippy>
                <Tippy content="Next">
                    <button className="text-3xl text-white bg-emerald-500 hover:bg-emerald-400 py-1 px-2 mr-4 rounded-lg"><AiOutlineDoubleRight /></button>
                </Tippy>
            </div>
        </div>
    );
};

export default All_Users;