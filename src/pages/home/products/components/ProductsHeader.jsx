import React, { useContext } from "react";
import { Search, ChevronDown, X } from "lucide-react";
import { MyStore } from "../../../../context/MyContext";

const ProductsHeader = ({ setCategory, setFeatures, setSearch, category, features, search }) => {
  const { allProducts } = useContext(MyStore);

  const isCategoryActive = category && category !== "All Categories";
  const isFeaturesActive = features && features !== "default";
  const hasAnyFilter = Boolean(search) || isCategoryActive || isFeaturesActive;

  const clearFilters = () => {
    setCategory("All Categories");
    setFeatures("default");
    setSearch("");
  };

  const featureLabels = {
    "price-asc": "Price: Low → High",
    "price-desc": "Price: High → Low",
    "rating-desc": "Top Rated",
    "rating-asc": "Lowest Rated",
  };

  return (
    <div className="mb-8">
      {/* Heading */}
      <h1 className="font-heading font-bold text-3xl sm:text-4xl mb-2">All Products</h1>
      <p className="text-white/40 font-body text-sm">
        {allProducts.length} products found
        {isCategoryActive && (
          <span className="text-volt"> in <span className="capitalize">{category}</span></span>
        )}
      </p>

      {/* Filter + Search */}
      <div className="bg-[#111] border border-white/8 rounded-2xl p-4 mt-6">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search */}
          <div className="relative flex-1 min-w-0">
            <Search
              size={15}
              className="absolute left-3.5 top-6.5 -translate-y-1/2 text-white/25 pointer-events-none"
            />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search products..."
              className="field pl-10 pr-8 h-10 w-full"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-6.5 -translate-y-1/2 text-white/25 hover:text-white/60 transition-colors"
              >
                <X size={13} />
              </button>
            )}
          </div>

          {/* Category Filter */}
          <div className="relative shrink-0">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="field h-10 pl-4 pr-8 appearance-none cursor-pointer min-w-\[160px] text-sm sm:text-base"
            >
              <option value="All Categories">All Categories</option>
              <option value="Beauty & Personal Care">Beauty & Personal Care</option>
              <option value="Electronics & Gadgets">Electronics & Gadgets</option>
              <option value="Fashion & Apparel">Fashion & Apparel</option>
              <option value="Home & Kitchen">Home & Kitchen</option>
              <option value="Health & Fitness">Health & Fitness</option>
            </select>
            <ChevronDown
              size={13}
              className="absolute right-3 top-6.5 -translate-y-1/2 text-white/25 pointer-events-none"
            />
          </div>


          {/* Sort Filter */}
          <div className="relative shrink-0">
            <select
              value={features}
              onChange={(e) => setFeatures(e.target.value)}
              className="field h-10 pl-4 pr-8 appearance-none cursor-pointer min-w-\[180px]"
            >
              <option value="default">Featured</option>
              <option value="price-asc">Price: Low → High</option>
              <option value="price-desc">Price: High → Low</option>
              <option value="rating-desc">Top Rated</option>
              <option value="rating-asc">Lowest Rated</option>
            </select>
            <ChevronDown
              size={13}
              className="absolute right-3 top-6.5 -translate-y-1/2 text-white/25 pointer-events-none"
            />
          </div>

          {/* Clear All */}
          {hasAnyFilter && (
            <button
              onClick={clearFilters}
              className="flex items-center justify-center gap-1.5 text-red-400 hover:text-red-300 bg-red-500/10 hover:bg-red-500/15 border border-red-500/20 px-4 h-10 rounded-2xl text-sm font-body transition-all shrink-0"
            >
              <X size={13} /> Clear
            </button>
          )}
        </div>

        {/* Active Filters Chips */}
        {hasAnyFilter && (
          <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-white/6">
            {isCategoryActive && (
              <span className="badge bg-volt/15 text-volt border border-volt/20 text-xs gap-1">
                {category}
                <button onClick={() => setCategory("All Categories")}>
                  <X size={10} />
                </button>
              </span>
            )}
            {search && (
              <span className="badge bg-volt/10 text-volt border border-volt/20 text-xs gap-1">
                "{search}"
                <button onClick={() => setSearch("")}>
                  <X size={10} />
                </button>
              </span>
            )}
            {isFeaturesActive && (
              <span className="badge bg-volt/10 text-volt border border-volt/20 text-xs gap-1">
                {featureLabels[features]}
                <button onClick={() => setFeatures("default")}>
                  <X size={10} />
                </button>
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsHeader;