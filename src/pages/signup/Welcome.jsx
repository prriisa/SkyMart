import { Zap } from "lucide-react";

const Welcome = () => {
  const stats = [
    { value: "20K+", label: "Products" },
    { value: "50K+", label: "Users" },
    { value: "4.9★", label: "Rating" },
  ];

  return (
    <div className="hidden lg:flex flex-col w-1/2 bg-[#111] border-r border-white\/[0.08] p-12 relative overflow-hidden">
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-[#c8f400]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-[#c8f400]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Logo */}
      <div className="flex items-center gap-3 relative z-10">
        <div className="w-10 h-10 bg-[#c8f400] rounded-2xl flex items-center justify-center transition-transform duration-300 hover:scale-105 hover:rotate-3">
          <Zap size={18} className="text-[#0d0d0d] fill-[#0d0d0d]" />
        </div>
        <span
          className="font-bold text-2xl"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          Sky<span className="text-[#c8f400]">Mart</span>
        </span>
      </div>

      {/* Copy */}
      <div className="flex-1 flex flex-col justify-center relative z-10">
        <p className="text-[#c8f400] text-sm font-medium mb-4 tracking-widest uppercase">
          Welcome back
        </p>
        <h1
          className="font-bold text-5xl leading-tight mb-6"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          Shop the future.
          <br />
          <span className="text-[#c8f400]">Today.</span>
        </h1>
        <p className="text-white/40 text-base max-w-sm leading-relaxed">
          Thousands of products, lightning-fast delivery, and prices that
          make your wallet happy.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white\/[0.04] border border-white\/[0.08] rounded-2xl p-4 text-center transition-all duration-300 hover:border-[#c8f400]/30 hover\:bg-white/[0.06] hover:-translate-y-0.5"
            >
              <p
                className="font-bold text-xl text-[#c8f400]"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {stat.value}
              </p>
              <p className="text-white/40 text-xs mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Welcome;