import { useState } from "react";
import auth_bg_1 from "../../../../public/image/authentication_img/img_1.png";
import auth_bg_2 from "../../../../public/image/authentication_img/img_2.png";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

const SignUp_Page = () => {
    const [show, setShow] = useState(false);
    return (
        <div className="w-[100%] h-[100%] flex">
            <div className="w-[50%] h-[743px] bg-emerald-800">
                <div className="w-[450px] h-[300px] pt-5 ml-[280px]">
                    <img className="w-[100%] h-[100%]" src={auth_bg_1} alt="auth img" />
                </div>
                <div className="w-[500px] h-[570px] -mt-36 mx-auto">
                    <img className="w-[100%] h-[100%]" src={auth_bg_2} alt="auth img" />
                </div>
            </div>
            <div className="w-[50%] h-[100%] p-10">
                <div className="w-[600px] h-[100%] mx-auto bg-gray-50 border border-gray-100 rounded-lg p-16">
                    <h1 className="text-4xl font-bold text-slate-800 text-center mb-10">Sign up to Hero,s</h1>
                    {/* Sign up form */}
                    <form>
                        {/* Name */}
                        <div className="mb-6">
                            <label className="text-xl font-bold text-slate-800">Name</label>
                            <br />
                            <input type="email" name="email" id="" placeholder="Username/Email Address" className="w-[100%] h-[66px] bg-gray-100 rounded-lg text-2xl font-medium text-black placeholder-gray-200 ps-4 mt-2" />
                        </div>
                        {/* User Name */}
                        <div className="mb-6">
                            <label className="text-xl font-bold text-slate-800">Username</label>
                            <br />
                            <input type="email" name="email" id="" placeholder="Username/Email Address" className="w-[100%] h-[66px] bg-gray-100 rounded-lg text-2xl font-medium text-black placeholder-gray-200 ps-4 mt-2" />
                        </div>
                        {/* Email */}
                        <div className="mb-6">
                            <label className="text-xl font-bold text-slate-800">Email Address</label>
                            <br />
                            <input type="email" name="email" id="" placeholder="Username/Email Address" className="w-[100%] h-[66px] bg-gray-100 rounded-lg text-2xl font-medium text-black placeholder-gray-200 ps-4 mt-2" />
                        </div>
                        {/* Password */}
                        <div className="mb-10">
                            <label className="text-xl font-bold text-slate-800">Password</label>
                            <br />
                            <label className="relative">
                                <input type={show ? "text" : "password"} name="password" id="" placeholder="Enter password" className="w-[100%] h-[66px] bg-gray-100 rounded-lg text-2xl font-medium text-black placeholder-gray-200 ps-4 mt-2" />
                                <span className="text-4xl text-emerald-700 absolute -top-2 right-3 cursor-pointer" onClick={() => setShow(!show)}>
                                    {show ? <AiFillEyeInvisible /> : <AiFillEye />}
                                </span>
                            </label>
                        </div>
                        <input type="submit" value="Create Account" className="w-[100%] h-[66px] bg-emerald-700 hover:bg-emerald-600 rounded-lg text-2xl text-white font-semibold tracking-[1px] cursor-pointer mb-8" />
                    </form>
                    <p className="text-lg font-bold text-slate-800 text-center">Already registered? Go to <Link to="/auth/login" className="text-emerald-500 text-xl font-bold hover:underline">SIGN IN</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp_Page;