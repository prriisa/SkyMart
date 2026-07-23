import React, { useContext } from "react"
import { ShoppingBag, X, Minus, Plus, Trash2, ArrowRight } from "lucide-react"
import { MyStore } from "../../../context/MyContext"
import { useNavigate } from "react-router"

const Cart = () => {
  const { setCartToggle, cartItems, setCartItems } = useContext(MyStore)
  const navigate = useNavigate()

  return (
    <aside
      className="fixed top-0 right-0 h-full w-full sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[33%] bg-[#111] border-l border-white/10 z-50 flex flex-col transition-transform duration-300 ease-out translate-x-0 animate-slide-in">
      {/* Header */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5 border-b border-white/8">
        <div className="flex items-center gap-3">
          <ShoppingBag className="text-volt" size={20} />
          <h2 className="font-heading font-bold text-lg">Cart</h2>
          <span className="badge bg-volt/15 text-volt text-xs">
            {cartItems.length} items
          </span>
        </div>
        <button
          onClick={() => setCartToggle(prev => !prev)}
          className="p-2 hover:bg-white/8 rounded-xl transition-colors text-white/50 hover:text-white"
        >
          <X size={18} />
        </button>
      </div>

      {/* Cart Items */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 space-y-3">
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-3">
            <ShoppingBag size={40} className="text-white/20" />
            <p className="text-white/50 font-body text-sm">0 product added</p>
            <button
              onClick={() => {
                setCartToggle(false)
                navigate("/home/products")
              }}
              className="px-4 py-2 rounded-xl bg-volt text-ink font-heading font-bold text-sm hover:bg-volt-light transition-all"
            >
              Browse Products
            </button>
          </div>
        ) : (
          cartItems.map(element => (
            <div
              key={element.id}
              className="flex gap-3 sm:gap-4 p-3 bg-white/4 border border-white/8 rounded-2xl animate-fade-in"
            >
              {/* Image */}
              <div className="w-16 h-16 sm:w-18 sm:h-18 bg-white rounded-xl overflow-hidden shrink-0 flex items-center justify-center p-2">
                <img
                  src={element.image}
                  alt={element.name}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <p className="text-sm text-white/80 font-body clamp-2 leading-snug">
                  {element.name}
                </p>
                <p className="text-volt font-heading font-bold text-base mt-1">
                  ${(element.priceCents / 100) * element.cart}
                </p>
                <p className="text-white/30 text-xs">
                  ${element.priceCents / 100} each
                </p>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2 mt-2">
                  <button
                    className="w-7 h-7 flex items-center justify-center bg-white/8 hover:bg-white/15 rounded-lg transition-colors border border-white/10"
                    onClick={() =>
                      setCartItems(
                        cartItems.map(item =>
                          item.id === element.id && item.cart > 1
                            ? { ...item, cart: item.cart - 1 }
                            : item
                        )
                      )
                    }
                  >
                    <Minus size={11} />
                  </button>

                  <span className="text-sm font-bold font-body w-5 text-center">
                    {element.cart}
                  </span>

                  <button
                    className="w-7 h-7 flex items-center justify-center bg-white/8 hover:bg-white/15 rounded-lg transition-colors border border-white/10"
                    onClick={() =>
                      setCartItems(
                        cartItems.map(item =>
                          item.id === element.id
                            ? { ...item, cart: item.cart + 1 }
                            : item
                        )
                      )
                    }
                  >
                    <Plus size={11} />
                  </button>

                  <button
                    onClick={() =>
                      setCartItems(cartItems.filter(item => item.id !== element.id))
                    }
                    className="ml-auto text-red-400/60 hover:text-red-400 transition-colors"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      {cartItems.length > 0 && (
        <div className="px-4 sm:px-6 py-4 sm:py-5 border-t border-white/8 space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-white/50 text-sm font-body">Total</span>
            <span className="font-heading font-bold text-xl sm:text-2xl text-white">
              ${cartItems.reduce(
                (acc, curr) => acc + (curr.priceCents / 100) * curr.cart,
                0
              )}
            </span>
          </div>
          <button
            onClick={() => {
              setCartItems([])
              alert("Congratulations! Your order has been placed.")
            }}
            className="w-full btn-volt flex items-center justify-center gap-2 py-3 text-sm sm:text-base font-heading font-bold"
          >
            Checkout <ArrowRight size={18} />
          </button>
          <button
            onClick={() => setCartItems([])}
            className="w-full text-center text-xs text-white/25 hover:text-red-400 transition-colors py-1"
          >
            Clear cart
          </button>
        </div>
      )}
    </aside>
  )
}

export default Cart
