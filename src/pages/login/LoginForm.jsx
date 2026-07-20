import { useState } from "react";
import { Zap, User, Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { NavLink } from "react-router";
import { useForm } from "react-hook-form";
import { useRef } from "react";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef()

  const headingFont = { fontFamily: "'Syne', sans-serif" };
  const bodyFont = { fontFamily: "'DM Sans', sans-serif" };

  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm({ mode:"onChange" });
  const password = watch('password')

  const registerUser = (data) => {
    console.log(data)
  }


  return (
    <div className="w-full max-w-md animate-[scaleIn_0.3s_ease_forwards]" style={bodyFont}>
      {/* Logo */}
      <div className="flex items-center gap-2 mb-8 justify-center">
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
          Create account
        </h2>
        <p className="text-white/40 text-sm mb-8">
          Join SkyMart and start shopping
        </p>

        <form onSubmit={handleSubmit(registerUser)} className="space-y-4">
          {/* Full name */}
          <div className="relative">
            <User
              size={15}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25"
            />
            <input {...register("name", {
              required: {
                value: true,
                message: "Name is Required"
              }, minLength: {
                value: 3,
                message: "Name should have at least 3 characters"
              }, maxLength: {
                value: 15,
                message: "Name should have at most 15 characters"
              }
            })}
              type="text"
              name="name"
              placeholder="Full name"
              className="w-full rounded-2xl border border-white/10 bg-white/5 pl-10 pr-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all duration-200 focus:border-[#c8f400] focus:bg-white/10 focus:shadow-[0_0_0_2px_rgba(200,244,0,0.2)]"
            />
          </div>
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}


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
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.#_])[A-Za-z\d@$!%*?&.#_]{8,}$/,
                message: "Enter a Valid Password"
              }
            })}
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password (min 6 chars)"
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


          {/* Confirm password */}
          <div className="relative">
            <Lock
              size={15}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25"
            />
            <input {...register("confirm", {
              required: "Confirm Password is required",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
              type="password"
              name="confirm"
              placeholder="Confirm password"
              className="w-full rounded-2xl border border-white/10 bg-white/5 pl-10 pr-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all duration-200 focus:border-[#c8f400] focus:bg-white/10 focus:shadow-[0_0_0_2px_rgba(200,244,0,0.2)]"
            />
          </div>
          {errors.confirm && <p className="text-red-500 text-xs mt-1">{errors.confirm.message}</p>}


          {/* Submit */}
          <button
            type="submit"
            style={headingFont}
            className="w-full flex items-center justify-center gap-2 rounded-2xl bg-[#c8f400] py-3.5 mt-2 text-base font-bold text-[#0d0d0d] transition-all duration-150 hover:bg-[#e2ff66] active:scale-95"
          >
            Create Account <ArrowRight size={18} />
          </button>
        </form>

        <p className="text-center text-white/30 text-sm mt-6">
          Already have an account?{" "}
          <NavLink to='/'
            className="text-[#c8f400] hover:text-[#e2ff66] font-semibold transition-colors"
          >
            Sign in
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;