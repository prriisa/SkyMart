import React, { useContext, useEffect } from "react";
import { ShoppingCart, Star } from "lucide-react";
import { MyStore } from "../../../../context/MyContext";
import { NavLink } from "react-router";

const ProductDiv = ({ search, category, features }) => {
  const { allProducts, cartItems, setCartItems } = useContext(MyStore);

  let productsOnly = allProducts.filter(
    (item) => item.name && item.priceCents && item.image
  );

  // Filters
  const filters = () => {
    if (search.trim()) {
      productsOnly = productsOnly.filter(
        (product) =>
          product.name.toLowerCase().includes(search.toLowerCase()) ||
          product.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category && category !== "All Categories") {
      productsOnly = productsOnly.filter((product) => product.category === category);
    }

    if (features) {
      if (features === "price-asc") {
        productsOnly = productsOnly.sort((a, b) => a.priceCents - b.priceCents);
      }
      if (features === "price-desc") {
        productsOnly = productsOnly.sort((a, b) => b.priceCents - a.priceCents);
      }
      if (features === "rating-desc") {
        productsOnly = productsOnly.sort((a, b) => b.rating.stars - a.rating.stars);
      }
      if (features === "rating-asc") {
        productsOnly = productsOnly.sort((a, b) => a.rating.stars - b.rating.stars);
      }
    }
    return productsOnly;
  };

  const filteredProducts = filters();

  const addToCart = (product) => {
    let inCart = cartItems.find((item) => item.id === product.id);
    if (!inCart) {
      setCartItems((prev) => [...prev, { ...product, cart: 1 }]);
    }
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {filteredProducts.map((product) => (
        <NavLink
          key={product.id}
          to={`/home/products/${product.id}`}
          className="product-card flex flex-col group animate-fade-up"
        >
          {/* Image */}
          <div className="relative aspect-square bg-white overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
            />
            <span className="absolute top-3 left-3 badge bg-black/60 text-white/80 backdrop-blur-sm capitalize text-[10px]">
              {product.category || "Miscellaneous"}
            </span>
          </div>

          {/* Info */}
          <div className="p-4 flex flex-col flex-1 gap-2">
            <p className="text-white/30 text-[10px] .uppercase tracking-widest font-body capitalize">
              {product.subCategory || "miscellaneous"}
            </p>
            <h3 className="mb-2 font-body font-medium text-white/85 text-sm leading-snug clamp-2 flex-1">
              {product.name}
            </h3>

            {/* Rating */}
            {product.rating && (
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className={
                      i < Math.round(product.rating.stars)
                        ? "text-amber-400 fill-amber-400"
                        : "text-white/15 fill-white/15"
                    }
                  />
                ))}
                <span className="text-white/30 text-[10px]">
                  ({product.rating.count})
                </span>
              </div>
            )}

            {/* Price + Add to Cart */}
            <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/6">
              <span className="font-heading font-bold text-volt text-lg">
                ${product.priceCents / 100}
              </span>
              <button
                onClick={() => addToCart(product)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold font-body transition-all duration-200 active:scale-95 bg-volt text-ink hover:bg-volt-light"
              >
                <ShoppingCart size={12} /> Add
              </button>
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default ProductDiv;