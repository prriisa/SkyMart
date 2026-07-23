import React, { useContext } from "react"
import { Zap, ShoppingCart, LogOut } from "lucide-react"
import { MyStore } from "../../context/MyContext"
import { NavLink, useNavigate } from "react-router"

export default function Navbar() {
  const { allUser, currentUser, setCurrentUser, setCartToggle, cartItems } = useContext(MyStore)
  const userDet = allUser.find(user => user.email === currentUser?.email)
  let navigate = useNavigate()

  return (
    <header className="sticky top-0 z-30 transition-all duration-300 bg-[#0d0d0d]/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-6">
        
        {/* Logo */}
        <NavLink className="flex items-center gap-2 shrink-0" to="/home">
          <div className="w-8 h-8 bg-volt rounded-xl flex items-center justify-center">
            <Zap size={15} className="text-ink fill-ink" />
          </div>
          <span className="font-heading font-bold text-lg">
            Sky<span className="text-volt">Mart</span>
          </span>
        </NavLink>

        {/* Nav links (desktop only) */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/home" className="nav-link" end>Home</NavLink>
          <NavLink to="/home/products" className="nav-link">Shop</NavLink>
          <NavLink to="/home/about" className="nav-link">About</NavLink>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2 shrink-0">
          {userDet && (
            <>
              {/* Desktop user info */}
              <div className="hidden sm:flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl">
                <div className="w-6 h-6 bg-volt rounded-lg flex items-center justify-center text-ink text-xs font-bold">
                  {userDet.name.slice(0, 1)}
                </div>
                <span className="text-sm text-white/70 font-body max-w-[100px] truncate">
                  {userDet.name}
                </span>
              </div>

              {/* Mobile user avatar */}
              <div className="sm:hidden w-8 h-8 bg-volt rounded-lg flex items-center justify-center text-ink text-sm font-bold">
                {userDet.name.slice(0, 1)}
              </div>
            </>
          )}

          {/* Cart button */}
          <button
            onClick={() => setCartToggle(prev => !prev)}
            className="relative p-2.5 bg-white/8 hover:bg-white/12 border border-white/10 rounded-xl transition-all"
          >
            <ShoppingCart size={18} />
            <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-volt text-ink text-[10px] font-bold rounded-full flex items-center justify-center">
              {cartItems.length}
            </span>
          </button>

          {/* Logout */}
          <button
            onClick={() => setCurrentUser(null)}
            title="Logout"
            className="p-2.5 bg-white/8 hover:bg-red-500/20 hover:border-red-500/30 border border-white/10 rounded-xl transition-all text-white/60 hover:text-red-400"
          >
            <LogOut size={16} />
          </button>
        </div>
      </div>
    </header>
  )
}