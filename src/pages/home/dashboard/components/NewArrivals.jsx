import React, { useContext } from "react"
import { ArrowRight, ShoppingBag, Zap } from "lucide-react"
import { MyStore } from "../../../../context/MyContext"
import { NavLink } from "react-router"

const NewArrivals = () => {
  const { allProducts, addToCart, cartItems } = useContext(MyStore)
  const newArrivals = allProducts.slice(0, 5)

  return (
    <div className="bg-white border border-white/20 rounded-3xl p-6">
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-heading font-bold text-lg flex items-center gap-2 text-ink">
          <Zap size={18} className="text-volt fill-volt" /> New Arrivals
        </h2>
        <NavLink
          className="text-volt text-xs hover:text-volt-light flex items-center gap-1"
          to="/home/products"
        >
          See all <ArrowRight size={12} />
        </NavLink>
      </div>

      <div className="space-y-2">
        {newArrivals.map((product) => (
          <NavLink
            key={product.id}
            to={`/home/products/${product.id}`}
            className="group flex items-center gap-3 p-3 bg-white/3 border border-white/6 
              rounded-2xl transition-all duration-200 
              hover:bg-white/8 hover:border-volt/40 hover:scale-[1.02] hover:shadow-md"
          >
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 p-1.5">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-black text-xs font-body clamp-1">{product.name}</p>
              <p className="text-volt font-heading font-bold text-sm mt-0.5">${product.priceCents / 100}</p>
            </div>
            {cartItems.find(item => item.id === product.id) ? (
              <button
                className="shrink-0 w-20 h-7 bg-green-500/15 text-green-400 rounded-lg flex items-center justify-center transition-all duration-200 border border-green-500/20 text-xs font-semibold font-body"
                disabled>
                ✔ Added
              </button>) : (
              <button
                onClick={e => {
                  e.preventDefault()
                  addToCart(product)
                }}
                className="shrink-0 w-7 h-7 bg-volt/10 text-volt rounded-lg flex items-center justify-center transition-all duration-200 hover:bg-volt hover:text-ink active:scale-95">
                <ShoppingBag size={13} />
              </button>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default NewArrivals