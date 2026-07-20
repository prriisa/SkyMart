import React from "react";
import { ArrowRight } from "lucide-react";


const Categories = () => {

  const categories = [
    { name: "electronics", emoji: "💻", count: "17 items" },
    { name: "clothing", emoji: "📦", count: "2 items" },
    { name: "furniture", emoji: "📦", count: "3 items" },
    { name: "home", emoji: "📦", count: "14 items" },
    { name: "sports", emoji: "📦", count: "8 items" },
    { name: "accessories", emoji: "📦", count: "6 items" },
  ]


  return (
    <section className="mb-10">
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-heading font-bold text-xl">Shop by Category</h2>
        <a className="text-volt text-sm hover:text-volt-light transition-colors flex items-center gap-1" href="/products">
          View All <ArrowRight size={14} />
        </a>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {categories.map((cat) => (
          <a
            key={cat.name}
            className="group bg-white border border-white/20 hover:border-white/40 hover:bg-white/95 rounded-2xl p-5 text-center transition-all duration-200 hover:-translate-y-0.5"
            href={`/products?category=${cat.name}`}
          >
            <div className="text-3xl mb-3">{cat.emoji}</div>
            <p className="font-body font-semibold text-ink/80 text-sm capitalize">{cat.name}</p>
            <p className="text-ink/50 text-xs mt-1">{cat.count}</p>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Categories;
