import React from "react"
import { ShoppingCart, Heart, Truck, Shield, RotateCcw, Star } from "lucide-react"
import { NavLink, useParams } from "react-router"
import { useContext } from "react"
import { MyStore } from "../../../../context/MyContext"
import { useState } from "react"
import { useEffect } from "react"

const SingleProduct = () => {
    const { allProducts } = useContext(MyStore)
    const { id } = useParams();
    const [currentId, setCurrentId] = useState(null)
    const [singleProduct, setSingleProduct] = useState(null)
    const [relatedProducts, setRelatedProducts] = useState([])

    useEffect(() => {
        if (allProducts.length > 0) {
            const pro = allProducts.find((product) => product.id == id)
            if (pro) {
                setCurrentId(Number(id))
                setSingleProduct(pro)
            }
        }
    }, [id, allProducts])

    useEffect(() => {
        if (singleProduct) {
            const pro = allProducts.filter(
                (product) => product.category === singleProduct.category && product.id !== singleProduct.id
            );
            setRelatedProducts(pro)
        }
    }, [singleProduct, allProducts])


    if (!singleProduct) {
        return <p className="text-white/50">Loading product...</p>
    }

    return (
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-white/30 font-body mb-8">
                <NavLink to="/home/products" className="hover:text-white flex items-center gap-1.5 transition-colors">
                    ← Products
                </NavLink>
                <span>/</span>
                <span className="capitalize text-white/50">{singleProduct.category}</span>
                <span>/</span>
                <span className="text-white/70 clamp-1 max-w-\[200px]">{singleProduct.name}</span>
            </nav>

            {/* Product Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 mb-16">
                {/* Image */}
                <div className="bg-white rounded-3xl p-10 flex items-center justify-center aspect-square">
                    <img
                        src={singleProduct.image}
                        alt={singleProduct.name}
                        className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                    />
                </div>

                {/* Info */}
                <div className="flex flex-col gap-5">
                    <span className="badge bg-volt/10 text-volt border border-volt/20 capitalize w-fit text-xs">
                        {singleProduct.category}
                    </span>
                    <h1 className="font-heading font-bold text-2xl sm:text-3xl text-white leading-tight">
                        {singleProduct.name}
                    </h1>

                    {/* Rating */}
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    size={14}
                                    className={
                                        i < 4 ? "text-amber-400 fill-amber-400" : "text-white/15 fill-white/15"
                                    }
                                />
                            ))}
                        </div>
                        <span className="font-semibold text-white/70 text-sm">{singleProduct.rating.stars}</span>
                        <span className="text-white/30 text-sm">({singleProduct.rating.count})</span>
                    </div>

                    {/* Price */}
                    <div className="py-4 border-y border-white/8">
                        <span className="font-heading font-bold text-4xl text-volt">${singleProduct.priceCents}</span>
                    </div>

                    {/* Description */}
                    <p className="text-white/50 font-body text-sm leading-relaxed">{singleProduct.description}</p>

                    {/* Buttons */}
                    <div className="flex gap-3">
                        <button className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl font-heading font-bold text-base transition-all duration-200 active:scale-95 btn-volt">
                            <ShoppingCart size={18} /> Add to Cart
                        </button>
                        <button className="p-3.5 border rounded-2xl transition-all border-white/10 text-white/30 hover:text-red-400 hover:border-red-500/30">
                            <Heart size={20} />
                        </button>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-3 gap-3 mt-1">
                        <div className="bg-white/3 border border-white/6 rounded-2xl p-3 text-center">
                            <Truck className="text-volt mx-auto mb-1.5" size={16} />
                            <p className="text-white/60 text-[11px] font-body font-semibold">Free Delivery</p>
                            <p className="text-white/25 text-[10px] font-body">On orders $50+</p>
                        </div>
                        <div className="bg-white/3 border border-white/6 rounded-2xl p-3 text-center">
                            <Shield className="text-volt mx-auto mb-1.5" size={16} />
                            <p className="text-white/60 text-[11px] font-body font-semibold">Secure Pay</p>
                            <p className="text-white/25 text-[10px] font-body">256-bit SSL</p>
                        </div>
                        <div className="bg-white/3 border border-white/6 rounded-2xl p-3 text-center">
                            <RotateCcw className="text-volt mx-auto mb-1.5" size={16} />
                            <p className="text-white/60 text-[11px] font-body font-semibold">Easy Returns</p>
                            <p className="text-white/25 text-[10px] font-body">30-day policy</p>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex gap-3 mt-6">
                        <NavLink
                            to={`/home/products/${currentId === 1 ? 50 : currentId - 1}`}
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white/10 hover:bg-white/15 border border-white/10 rounded-2xl transition-all text-white text-sm font-body"
                        >
                            ← Previous
                        </NavLink>

                        <NavLink
                            to={`/home/products/${currentId === 50 ? 1 : currentId + 1}`}
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-volt hover:bg-volt-light text-ink border border-volt rounded-2xl transition-all font-heading font-semibold text-sm"
                        >
                            Next →
                        </NavLink>
                    </div>
                </div>
            </div>

            {/* Related Products */}
            <section>
                <h2 className="font-heading font-bold text-2xl mb-6">Related Products</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {/* Example card */}

                    {relatedProducts.map((product) => {
                        return (
                            <NavLink
                                to={`/home/products/${product.id}`}
                                className="product-card flex flex-col group animate-fade-up"
                            >
                                <div className="relative aspect-square bg-white overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <span className="absolute top-3 left-3 badge bg-black/60 text-white/80 backdrop-blur-sm capitalize text-[10px]">
                                        {product.category}
                                    </span>
                                </div>
                                <div className="p-4 flex flex-col flex-1 gap-2">
                                    <p className="text-white/30 text-[10px] .uppercase tracking-widest font-body capitalize">
                                        clothing
                                    </p>
                                    <h3 className="font-body font-medium text-white/85 text-sm leading-snug clamp-2 flex-1">
                                        Running Shoes
                                    </h3>
                                    <div className="flex items-center gap-1.5">
                                        <Star size={10} className="text-amber-400 fill-amber-400" />
                                        <span className="text-white/30 text-[10px]">({product.rating.count})</span>
                                    </div>
                                    <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/6">
                                        <span className="font-heading font-bold text-volt text-lg">{product.priceCents}</span>
                                        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold font-body transition-all duration-200 active:scale-95 bg-volt text-ink hover:bg-volt-light">
                                            <ShoppingCart size={12} /> Add
                                        </button>
                                    </div>
                                </div>
                            </NavLink>
                        )
                    })}
                </div>
            </section>
        </main>
    );
};

export default SingleProduct;
