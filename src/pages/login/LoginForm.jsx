import { useState, useContext } from "react";
import { Zap, User, Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { NavLink, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { MyStore } from "../../context/MyContext";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { allUser, setAllUser } = useContext(MyStore);

  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm({ mode: "onChange" });
  const password = watch("password");
  const navigate = useNavigate();
  const [alreadyExist, setAlreadyExist] = useState(false);

  const registerUser = (data) => {
    if (allUser.find((user) => user.email === data.email)) {
      setAlreadyExist(true);
    } else {
      setAllUser((prev) => [...prev, data]);
      reset();
      alert("User Registered. Kindly SignIn Again");
      navigate("/");
    }
  };

  return (
    <div className="w-full max-w-md animate-scale-in font-body">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-8 justify-center">
        <div className="w-9 h-9 bg-volt rounded-xl flex items-center justify-center">
          <Zap size={16} className="text-ink fill-ink" />
        </div>
        <span className="font-heading font-bold text-xl">
          Sky<span className="text-volt">Mart</span>
        </span>
      </div>

      {/* Card */}
      <div className="rounded-3xl border border-white/10 bg-[#111] p-8 shadow-2xl shadow-black/25">
        <h2 className="font-heading font-bold text-2xl mb-1">Create account</h2>
        <p className="text-white/40 text-sm mb-8">Join SkyMart and start shopping</p>

        <form onSubmit={handleSubmit(registerUser)} className="space-y-4">
          {/* Full name */}
          <div className="relative">
            <div className="absolute inset-y-0 left-3.5 flex items-center">
              <User size={15} className="text-white/25" />
            </div>
            <input
              {...register("name", {
                required: { value: true, message: "Name is Required" },
                minLength: { value: 3, message: "Name should have at least 3 characters" },
                maxLength: { value: 15, message: "Name should have at most 15 characters" },
              })}
              type="text"
              placeholder="Full name"
              className="w-full rounded-2xl border border-white/10 bg-white/5 pl-10 pr-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all duration-200 focus:border-volt focus:bg-white/10 focus:shadow-[0_0_0_2px_rgba(200,244,0,0.2)]"
            />
          </div>
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}

          {/* Email */}
          <div className="relative">
            <div className="absolute inset-y-0 left-3.5 flex items-center">
              <Mail size={15} className="text-white/25" />
            </div>
            <input
              {...register("email", {
                required: { value: true, message: "Email is Required" },
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a Valid Email" },
              })}
              type="email"
              placeholder="Email address"
              className="w-full rounded-2xl border border-white/10 bg-white/5 pl-10 pr-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all duration-200 focus:border-volt focus:bg-white/10 focus:shadow-[0_0_0_2px_rgba(200,244,0,0.2)]"
            />
          </div>
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}

          {/* Password */}
          <div className="relative">
            <div className="absolute inset-y-0 left-3.5 flex items-center">
              <Lock size={15} className="text-white/25" />
            </div>
            <input
              {...register("password", {
                required: { value: true, message: "Password is required" },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.#])[A-Za-z\d@$!%*?&.#]{8,}$/,
                  message: "Password must be at least 8 characters long, include uppercase, lowercase, a number, and a special character (@$!%*?&.#).",
                },
              })}
            type={showPassword ? "text" : "password"}
            placeholder="Password (min 6 chars)"
            className="w-full rounded-2xl border border-white/10 bg-white/5 pl-10 pr-10 py-3 text-sm text-white placeholder-white/30 outline-none transition-all duration-200 focus:border-volt focus:bg-white/10 focus:shadow-[0_0_0_2px_rgba(200,244,0,0.2)]"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute inset-y-0 right-3.5 flex items-center text-white/25 hover:text-white/60 transition-colors"
            >
              {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
            </button>
          </div>
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}

          {/* Confirm password */}
          <div className="relative">
            <div className="absolute inset-y-0 left-3.5 flex items-center">
              <Lock size={15} className="text-white/25" />
            </div>
            <input
              {...register("confirm", {
                required: "Confirm Password is required",
                validate: (value) => value === password || "Passwords do not match",
              })}
              type="password"
              placeholder="Confirm password"
              className="w-full rounded-2xl border border-white/10 bg-white/5 pl-10 pr-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all duration-200 focus:border-volt focus:bg-white/10 focus:shadow-[0_0_0_2px_rgba(200,244,0,0.2)]"
            />
          </div>
          {errors.confirm && <p className="text-red-500 text-xs mt-1">{errors.confirm.message}</p>}

          {/* Submit */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 rounded-2xl bg-volt py-3.5 mt-2 text-base font-heading font-bold text-ink transition-all duration-150 hover:bg-[#e2ff66] active:scale-95"
          >
            Create Account <ArrowRight size={18} />
          </button>
        </form>

        {alreadyExist && (
          <p className="text-red-500 text-xs mt-4 flex justify-center">
            User Already Exists. Kindly SignIn.
          </p>
        )}

        <p className="text-center text-white/30 text-sm mt-6">
          Already have an account?{" "}
          <NavLink
            to="/"
            className="text-volt hover:text-[#e2ff66] font-semibold transition-colors"
          >
            Sign in
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
