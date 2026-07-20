import React from "react";
import { Zap, ShoppingCart, LogOut, Menu } from "lucide-react";

export default function Navbar() {

  const headingFont = { fontFamily: "'Syne', sans-serif" };
  const bodyFont = { fontFamily: "'DM Sans', sans-serif" };


  return (
    <header className="sticky top-0 z-30 transition-all duration-300 bg-[#0d0d0d]/90 backdrop-blur-xl border-b border-white/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-6">
        {/* Logo */}
        <a className="flex items-center gap-2 shrink-0" href="/home">
          <div className="w-8 h-8 bg-volt rounded-xl flex items-center justify-center">
            <Zap size={15} className="text-ink fill-ink" />
          </div>
          <span className="font-${heading} font-bold text-lg">
            Sky<span className="text-volt">Mart</span>
          </span>
        </a>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-6">
          <a className="nav-link active" href="/home">
            Home
          </a>
          <a className="nav-link" href="/products">
            Shop
          </a>
          <a className="nav-link" href="/about">
            About
          </a>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="hidden sm:flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl">
            <div className="w-6 h-6 bg-volt rounded-lg flex items-center justify-center text-ink text-xs font-bold">
              P
            </div>
            <span className="text-sm text-white/70 font-body max-w-\[100px] truncate">
              Priya Sharma
            </span>
          </div>

          <button className="relative p-2.5 bg-white/8 hover:bg-white/12 border border-white/10 rounded-xl transition-all">
            <ShoppingCart size={18} />
          </button>

          <button
            title="Logout"
            className="p-2.5 bg-white/8 hover:bg-red-500/20 hover:border-red-500/30 border border-white/10 rounded-xl transition-all text-white/60 hover:text-red-400"
          >
            <LogOut size={16} />
          </button>

          <button className="md:hidden p-2.5 bg-white/8 border border-white/10 rounded-xl">
            <Menu size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}