import Tippy from "@tippyjs/react";
import { AiOutlineClose, AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import "../../../../Pages/Appoinment_Page/Appoinment_Page.css";

const My_Appoinment = () => {
    return (
        <div className="w-[1030px] mx-auto my-10">
            <h1 className="text-3xl font-bold text-slate-800">All Users: 06</h1>
            <div className="my-10">
                <div className="overflow-x- rounded-lg">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-gray-300 border-none">
                            <tr>
                                <th className="text-xl font-semibold text-black uppercase">#</th>
                                <th className="text-xl font-semibold text-black uppercase">Name</th>
                                <th className="text-xl font-semibold text-black uppercase">Date</th>
                                <th className="text-xl font-semibold text-black uppercase">TIME</th>
                                <th className="text-xl font-semibold text-black uppercase">TREATMENT</th>
                                <th className="text-xl font-semibold text-black uppercase">Payment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr className="bg-gray-100 border-none">
                                <th className="text-lg text-gray-500 font-[400]">01</th>
                                <td className="text-lg text-gray-500 font-[500]">Wade Warren</td>
                                <td className="text-lg text-gray-500 font-[500]">1/31/14</td>
                                <td className="text-lg text-gray-500 font-[500]">06:41 pm</td>
                                <td className="text-lg text-gray-500 font-[500]">Cavity Protection</td>
                                <td>
                                    <div>
                                        <p className="text-red-500 text-lg font-bold tracking-[1px]">Paid</p>
                                        <p className="text-lg text-gray-500 font-[500]">id : dfadfjlaksdjf24sdfds</p>
                                    </div>
                                </td>
                            </tr>
                            {/* row 2 */}
                            <tr className="bg-gray-100 border-none">
                                <th className="text-lg text-gray-500 font-[400]">02</th>
                                <td className="text-lg text-gray-500 font-[500]">Wade Warren</td>
                                <td className="text-lg text-gray-500 font-[500]">1/31/14</td>
                                <td className="text-lg text-gray-500 font-[500]">06:41 pm</td>
                                <td className="text-lg text-gray-500 font-[500]">Cavity Protection</td>
                                <td>
                                    <label className="text-2xl text-white font-[700] pb-2 w-[90px] h-[50px] flex items-center justify-center mx-auto border border-white rounded-lg shadow-2xl bg-emerald-900 hover:bg-emerald-700 hover:shadow-inner tracking-[1px] cursor-pointer" htmlFor="book_to_click" >pay</label>
                                    <div className="main_book_modal shadow-slate-200">
                                        <input type="checkbox" id="book_to_click" />
                                        <div className="modal_content_pay">
                                            <div className="flex items-center justify-between relative">
                                                <h1 className="text-lg font-bold text-red-500">Hello, Robin</h1>
                                                {/* Close Modal  */}
                                                <label htmlFor="book_to_click" className="text-xl font-bold text-white bg-emerald-900 w-[30px] h-[30px] rounded-[50%] cursor-pointer flex items-center justify-center absolute -right-3 -top-3"><AiOutlineClose /></label>
                                            </div>
                                            {/* Appoinment booking form */}
                                            <div className="pt-4">
                                                <div>
                                                    <h1 className="text-black text-xl font-bold mb-2">Please Pay for Tech Cleaning</h1>
                                                    <p className="text-black text-[16px] font-[600] leading-6">Your Appointment: <span className="text-yellow-600 font-[600]"> Nov 09, 2022 </span>at 08.00 AM - 08.30 AM</p>
                                                    <h1 className="text-2xl font-bold text-slate-900 mt-3">Please Pay: $200</h1>
                                                </div>
                                                <hr className="my-5" />
                                                <form>
                                                    <input className="w-[100%] h-[56px] bg-gray-50 rounded text-slate-800 font-[500] text-sm border border-gray-200 ps-5 mb-5" type="text" placeholder="Card Number" name="" />
                                                    <input className="w-[100%] h-[56px] bg-gray-50 rounded text-slate-800 font-[500] text-sm border border-gray-200 ps-5 mb-5" type="email" placeholder="MM/YY/CVC" name="" />
                                                    <input className="w-[100%] h-[56px] bg-emerald-900 rounded-lg text-white font-[400] text-xl cursor-pointer tracking-[1px]" type="submit" value="pay" />
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            {/* row 3 */}
                            <tr className="bg-gray-100 border-none">
                                <th className="text-lg text-gray-500 font-[400]">03</th>
                                <td className="text-lg text-gray-500 font-[500]">Wade Warren</td>
                                <td className="text-lg text-gray-500 font-[500]">1/31/14</td>
                                <td className="text-lg text-gray-500 font-[500]">06:41 pm</td>
                                <td className="text-lg text-gray-500 font-[500]">Cavity Protection</td>
                                <td>
                                    <label className="text-2xl text-white font-[700] pb-2 w-[90px] h-[50px] flex items-center justify-center mx-auto border border-white rounded-lg shadow-2xl bg-emerald-900 hover:bg-emerald-700 hover:shadow-inner tracking-[1px] cursor-pointer" htmlFor="book_to_click" >pay</label>
                                    <div className="main_book_modal shadow-slate-200">
                                        <input type="checkbox" id="book_to_click" />
                                        <div className="modal_content_pay">
                                            <div className="flex items-center justify-between relative">
                                                <h1 className="text-lg font-bold text-red-500">Hello, Robin</h1>
                                                {/* Close Modal  */}
                                                <label htmlFor="book_to_click" className="text-xl font-bold text-white bg-emerald-900 w-[30px] h-[30px] rounded-[50%] cursor-pointer flex items-center justify-center absolute -right-3 -top-3"><AiOutlineClose /></label>
                                            </div>
                                            {/* Appoinment booking form */}
                                            <div className="pt-4">
                                                <div>
                                                    <h1 className="text-black text-xl font-bold mb-2">Please Pay for Tech Cleaning</h1>
                                                    <p className="text-black text-[16px] font-[600] leading-6">Your Appointment: <span className="text-yellow-600 font-[600]"> Nov 09, 2022 </span>at 08.00 AM - 08.30 AM</p>
                                                    <h1 className="text-2xl font-bold text-slate-900 mt-3">Please Pay: $200</h1>
                                                </div>
                                                <hr className="my-5" />
                                                <form>
                                                    <input className="w-[100%] h-[56px] bg-gray-50 rounded text-slate-800 font-[500] text-sm border border-gray-200 ps-5 mb-5" type="text" placeholder="Card Number" name="" />
                                                    <input className="w-[100%] h-[56px] bg-gray-50 rounded text-slate-800 font-[500] text-sm border border-gray-200 ps-5 mb-5" type="email" placeholder="MM/YY/CVC" name="" />
                                                    <input className="w-[100%] h-[56px] bg-emerald-900 rounded-lg text-white font-[400] text-xl cursor-pointer tracking-[1px]" type="submit" value="pay" />
                                                </form>
                                            </div>
                                        </div>
                                    </div>
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

export default My_Appoinment;