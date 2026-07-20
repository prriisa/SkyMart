import React from "react";
import { ShoppingBag } from "lucide-react";

const ProductRow = ({ product }) => (
  <a
    className="group flex items-center gap-3 p-3 bg-white/3 hover:bg-white/6 border border-white/6 hover:border-volt/30 rounded-2xl transition-all duration-200"
    href={`/products/${product.id}`}
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
);

export default ProductRow;
