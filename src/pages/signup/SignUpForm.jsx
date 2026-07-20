import { useState } from "react";
import { Zap, Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { NavLink, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { MyStore } from "../../context/MyContext";

const SignupForm = () => {

    // styling code here

    const [showPassword, setShowPassword] = useState(false);
    const headingFont = { fontFamily: "'Syne', sans-serif" };
    const bodyFont = { fontFamily: "'DM Sans', sans-serif" };

    // React code starts from here

    const { allUser, setCurrentUser } = useContext(MyStore)

    const { register, handleSubmit, formState: { errors }, reset } = useForm({ mode: "onChange" });
    const navigate = useNavigate()
    const [WrongDet, setWrongDet] = useState(false)

    const signIn = (data) => {
        const isUser = allUser.find((singleuser) => (singleuser.email === data.email && singleuser.password === data.password))
        if (isUser) {
            setCurrentUser(data)
            navigate('/home')
        } else {
            setWrongDet(true)
        }
    }

    return (
        <div className="flex-1 flex items-center justify-center p-6" style={bodyFont}>
            <div className="w-full max-w-md animate-[scaleIn_0.3s_ease_forwards]">

                {/* Mobile logo (shown below lg breakpoint, when Welcome panel is hidden) */}
                <div className="lg:hidden flex items-center gap-2 mb-8 justify-center">
                    <div className="w-9 h-9 bg-[#c8f400] rounded-xl flex items-center justify-center">
                        <Zap size={16} className="text-[#0d0d0d] fill-[#0d0d0d]" />
                    </div>
                    <span className="font-bold text-xl" style={headingFont}>
                        Sky<span className="text-[#c8f400]">Mart</span>
                    </span>
                </div>

                {/* Card */}
                <div className="rounded-3xl border border-white/10 bg-[#111] p-8 shadow-2xl shadow-black/25">
                    <h2 className="font-bold text-2xl mb-1" style={headingFont}>
                        Sign in
                    </h2>
                    <p className="text-white/40 text-sm mb-8">
                        Enter your credentials to continue
                    </p>

                    <form onSubmit={handleSubmit(signIn)} className="space-y-4">
                        {/* Email */}
                        <div className="relative">
                            <Mail
                                size={15}
                                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25"
                            />
                            <input {...register('email', {
                                required: {
                                    value: true,
                                    message: "Email is Required"
                                }, pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Enter a Valid Email"
                                }
                            })}
                                type="email"
                                name="email"
                                placeholder="Email address"
                                autoComplete="email"
                                className="w-full rounded-2xl border border-white/10 bg-white/5 pl-10 pr-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all duration-200 focus:border-[#c8f400] focus:bg-white/10 focus:shadow-[0_0_0_2px_rgba(200,244,0,0.2)]"
                            />
                        </div>
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}

                        {/* Password */}
                        <div className="relative">
                            <Lock
                                size={15}
                                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25"
                            />
                            <input {...register('password', {
                                required: {
                                    value: true,
                                    message: "Password is required"
                                }, pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.#])[A-Za-z\d@$!%*?&.#]{8,}$/,
                                    message: "Enter a Valid Password"
                                }
                            })}
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Password"
                                autoComplete="current-password"
                                className="w-full rounded-2xl border border-white/10 bg-white/5 pl-10 pr-10 py-3 text-sm text-white placeholder-white/30 outline-none transition-all duration-200 focus:border-[#c8f400] focus:bg-white/10 focus:shadow-[0_0_0_2px_rgba(200,244,0,0.2)]"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword((prev) => !prev)}
                                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/25 hover:text-white/60 transition-colors"
                            >
                                {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                            </button>
                        </div>
                        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}


                        {/* Submit */}
                        <button
                            type="submit"
                            style={headingFont}
                            className="w-full flex items-center justify-center gap-2 rounded-2xl bg-[#c8f400] py-3.5 mt-2 text-base font-bold text-[#0d0d0d] transition-all duration-150 hover:bg-[#e2ff66] active:scale-95"
                        >
                            Sign in <ArrowRight size={18} />
                        </button>

                        {WrongDet && <p className="text-red-500 text-xs mt-1 flex justify-center transition">Incorrect UserName or Password</p>}

                    </form>

                    <p className="text-center text-white/30 text-sm mt-6">
                        Don't have an account?{" "}
                        <NavLink to="/register"
                            className="text-[#c8f400] hover:text-[#e2ff66] font-semibold transition-colors"
                        >
                            Create one
                        </NavLink>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignupForm;