import React from "react";
import { ArrowRight, ShoppingBag, Zap } from "lucide-react";

const newArrivals = [
  { id: 1, name: "Wireless Bluetooth Headphones", price: "$99.99", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400" },
  { id: 2, name: "Smart Watch Series 5", price: "$299.99", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400" },
  { id: 3, name: "Comfortable Cotton T-Shirt", price: "$24.99", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400" },
  { id: 4, name: "Ergonomic Office Chair", price: "$199.99", img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400" },
  { id: 5, name: "Stainless Steel Water Bottle", price: "$34.99", img: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400" },
];

const NewArrivals = () => (
  <div className="bg-white border border-white/20 rounded-3xl p-6">
    <div className="flex items-center justify-between mb-5">
      <h2 className="font-heading font-bold text-lg flex items-center gap-2 text-ink">
        <Zap size={18} className="text-volt fill-volt" /> New Arrivals
      </h2>
      <a className="text-volt text-xs hover:text-volt-light flex items-center gap-1" href="/products">
        See all <ArrowRight size={12} />
      </a>
    </div>
    <div className="space-y-2">
      {newArrivals.map((product) => (
        <a
          key={product.id}
          href={`/products/${product.id}`}
          className="group flex items-center gap-3 p-3 bg-white/3 hover:bg-white/6 border border-white/6 hover:border-volt/30 rounded-2xl transition-all duration-200"
        >
          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 p-1.5">
            <img src={product.img} alt={product.name} className="w-full h-full object-contain" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white/80 text-xs font-body clamp-1">{product.name}</p>
            <p className="text-volt font-heading font-bold text-sm mt-0.5">{product.price}</p>
          </div>
          <button className="shrink-0 w-7 h-7 bg-volt/10 hover:bg-volt text-volt hover:text-ink rounded-lg flex items-center justify-center transition-all">
            <ShoppingBag size={13} />
          </button>
        </a>
      ))}
    </div>
  </div>
);

export default NewArrivals;
