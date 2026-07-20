import React from "react";
import { ArrowRight, Star } from "lucide-react";
import ProductRow from "./ProductRow";

const topRated = [
  { id: 6, name: "Professional Camera Lens", price: "$599.99", img: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400" },
  { id: 4, name: "Ergonomic Office Chair", price: "$199.99", img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400" },
  { id: 13, name: "4K Ultra HD Monitor", price: "$349.99", img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400" },
  { id: 9, name: "Aromatherapy Essential Oil Diffuser", price: "$49.99", img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400" },
  { id: 14, name: "Mechanical Keyboard", price: "$149.99", img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400" },
];

const TopRated = () => (
  <div className="bg-white border border-white/20 rounded-3xl p-6">
    <div className="flex items-center justify-between mb-5">
      <h2 className="font-heading font-bold text-lg flex items-center gap-2 text-ink">
        <Star size={18} className="text-amber-400 fill-amber-400" /> Top Rated
      </h2>
      <a className="text-volt text-xs hover:text-volt-light flex items-center gap-1" href="/products?sort=rating">
        See all <ArrowRight size={12} />
      </a>
    </div>
    <div className="space-y-2">
      {topRated.map((product) => (
        <ProductRow key={product.id} product={product} />
      ))}
    </div>
  </div>
);

export default TopRated;
