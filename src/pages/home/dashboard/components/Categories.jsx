import React, { useContext } from "react";
import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router";
import { MyStore } from "../../../../context/MyContext";

const Categories = () => {
  const { allProducts } = useContext(MyStore);
  const categoryCounts = {};

  const categoryEmojis = {
    "Beauty & Personal Care": "💄",
    "Electronics & Gadgets": "💻",
    "Fashion & Apparel": "👕",
    "Home & Kitchen": "🏠",
    "Health & Fitness": "🏋️",
  };

  allProducts.forEach((product) => {
    if (categoryCounts[product.category]) {
      categoryCounts[product.category] += 1;
    } else {
      categoryCounts[product.category] = 1;
    }
  });

  const categories = Object.keys(categoryCounts).map((name) => {
    return {
      name,
      count: categoryCounts[name],
      emoji: categoryEmojis[name] || "📦", // default emoji
    };
  });

  return (
    <section className="mb-10">
      {/* Heading */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-heading font-bold text-xl">Shop by Category</h2>
        <NavLink
          to="/home/products"
          className="text-volt text-sm hover:text-volt-light transition-colors flex items-center gap-1"
        >
          View All <ArrowRight size={14} />
        </NavLink>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {categories.map((cat) => (
          <NavLink
            key={cat.name}
            to={`/home/products?category=${encodeURIComponent(cat.name)}`}
            className="group bg-white border border-white/20 hover:border-white/40 hover:bg-white/95 rounded-2xl p-5 text-center transition-all duration-200 hover:-translate-y-0.5"
          >
            <div className="text-3xl mb-3">{cat.emoji}</div>
            <p className="font-body font-semibold text-ink/80 text-sm">{cat.name}</p>
            <p className="text-ink/50 text-xs mt-1">{cat.count} items</p>
          </NavLink>
        ))}
      </div>
    </section>
  );
};

export default Categories;
