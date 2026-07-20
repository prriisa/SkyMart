import React from "react";
import {
    ArrowRight,
    Package,
    TrendingUp,
    Star,
    Tag,
    Zap,
    Shield,
    ShoppingBag,
} from "lucide-react";

const stats = [
    {
        icon: Package,
        iconBg: "bg-volt/10",
        iconColor: "text-volt",
        value: "0",
        label: "Cart Items",
        sub: "In your bag",
    },
    {
        icon: TrendingUp,
        iconBg: "bg-blue-500/10",
        iconColor: "text-blue-400",
        value: "$0.00",
        label: "Cart Value",
        sub: "Ready to checkout",
    },
    {
        icon: Star,
        iconBg: "bg-amber-500/10",
        iconColor: "text-amber-400",
        value: "5",
        label: "Top Products",
        sub: "Highly rated",
    },
    {
        icon: Tag,
        iconBg: "bg-purple-500/10",
        iconColor: "text-purple-400",
        value: "6",
        label: "Categories",
        sub: "To explore",
    },
];

const categories = [
    { name: "electronics", emoji: "💻", count: "17 items" },
    { name: "clothing", emoji: "📦", count: "2 items" },
    { name: "furniture", emoji: "📦", count: "3 items" },
    { name: "home", emoji: "📦", count: "14 items" },
    { name: "sports", emoji: "📦", count: "8 items" },
    { name: "accessories", emoji: "📦", count: "6 items" },
];

const topRated = [
    {
        id: 6,
        name: "Professional Camera Lens",
        price: "$599.99",
        img: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400",
    },
    {
        id: 4,
        name: "Ergonomic Office Chair",
        price: "$199.99",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
    },
    {
        id: 13,
        name: "4K Ultra HD Monitor",
        price: "$349.99",
        img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400",
    },
    {
        id: 9,
        name: "Aromatherapy Essential Oil Diffuser",
        price: "$49.99",
        img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    },
    {
        id: 14,
        name: "Mechanical Keyboard",
        price: "$149.99",
        img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400",
    },
];

const newArrivals = [
    {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        price: "$99.99",
        img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    },
    {
        id: 2,
        name: "Smart Watch Series 5",
        price: "$299.99",
        img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    },
    {
        id: 3,
        name: "Comfortable Cotton T-Shirt",
        price: "$24.99",
        img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    },
    {
        id: 4,
        name: "Ergonomic Office Chair",
        price: "$199.99",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
    },
    {
        id: 5,
        name: "Stainless Steel Water Bottle",
        price: "$34.99",
        img: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400",
    },
];

const perks = [
    {
        icon: Zap,
        color: "text-volt",
        title: "Fast Delivery",
        sub: "Same-day on select items",
    },
    {
        icon: Shield,
        color: "text-blue-400",
        title: "Secure Payments",
        sub: "100% encrypted checkout",
    },
    {
        icon: Tag,
        color: "text-green-400",
        title: "Best Prices",
        sub: "Price-match guarantee",
    },
];

function ProductRow({ product }) {
    return (
        <a
            className="group flex items-center gap-3 p-3 bg-white/3 hover:bg-white/6 border border-white/6 hover:border-volt/30 rounded-2xl transition-all duration-200"
            href={`/products/${product.id}`}
        >
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 p-1.5">
                <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-contain"
                />
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-white/80 text-xs font-body clamp-1">{product.name}</p>
                <p className="text-volt font-heading font-bold text-sm mt-0.5">
                    {product.price}
                </p>
            </div>
            <button className="shrink-0 w-7 h-7 bg-volt/10 hover:bg-volt text-volt hover:text-ink rounded-lg flex items-center justify-center transition-all">
                <ShoppingBag size={13} />
            </button>
        </a>
    );
}

export default function Dashboard() {
    const headingFont = { fontFamily: "'Syne', sans-serif" };
    const bodyFont = { fontFamily: "'DM Sans', sans-serif" };

    return (
        <main>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                {/* Hero */}
                <div className="relative overflow-hidden rounded-3xl bg-[#111] border border-white/8 p-8 sm:p-12 mb-10">
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        <div className="absolute -top-16 -right-16 w-80 h-80 bg-volt/8 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-1/4 w-60 h-60 bg-volt/4 rounded-full blur-3xl" />
                        <div
                            className="absolute inset-0 opacity-[0.03]"
                            style={{
                                backgroundImage:
                                    "linear-gradient(rgb(200, 244, 0) 1px, transparent 1px), linear-gradient(90deg, rgb(200, 244, 0) 1px, transparent 1px)",
                                backgroundSize: "40px 40px",
                            }}
                        />
                    </div>

                    <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
                        <div>
                            <p className="text-volt/70 text-sm font-body tracking-widest uppercase mb-3">
                                Good evening 👋
                            </p>
                            <h1 className="font-heading font-bold text-4xl sm:text-5xl text-white leading-tight mb-4">
                                Welcome back,
                                <br />
                                <span className="text-volt">Priya!</span>
                            </h1>
                            <p className="text-white/40 font-body max-w-md">
                                Discover today's picks — hand-curated products across
                                electronics, fashion, and more.
                            </p>
                            <div className="flex gap-3 mt-6 flex-wrap">
                                <a className="btn-volt flex items-center gap-2" href="/products">
                                    Shop Now <ArrowRight size={16} />
                                </a>
                                <a className="btn-ghost flex items-center gap-2" href="/products">
                                    View All Products
                                </a>
                            </div>
                        </div>

                        <div className="shrink-0 flex flex-col gap-3">
                            <div className="bg-volt/10 border border-volt/20 rounded-2xl px-6 py-4 text-center">
                                <p className="font-heading font-bold text-4xl text-volt">20+</p>
                                <p className="text-white/40 text-xs font-body mt-1">
                                    Products Available
                                </p>
                            </div>
                            <div className="bg-white/4 border border-white/8 rounded-2xl px-6 py-4 text-center">
                                <p className="font-heading font-bold text-2xl text-white">Free</p>
                                <p className="text-white/40 text-xs font-body mt-1">
                                    Delivery on ₹999+
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10 stagger">
                    {stats.map((stat) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={stat.label}
                                className="bg-[#111] border border-white/8 rounded-3xl p-6 flex items-start gap-4"
                            >
                                <div
                                    className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${stat.iconBg} ${stat.iconColor}`}
                                >
                                    <Icon size={22} />
                                </div>
                                <div>
                                    <p className="font-heading font-bold text-2xl text-white">
                                        {stat.value}
                                    </p>
                                    <p className="text-white/50 text-sm font-body">{stat.label}</p>
                                    <p className="text-white/25 text-xs font-body mt-0.5">
                                        {stat.sub}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Categories */}
                <section className="mb-10">
                    <div className="flex items-center justify-between mb-5">
                        <h2 className="font-heading font-bold text-xl">Shop by Category</h2>
                        <a
                            className="text-volt text-sm hover:text-volt-light transition-colors flex items-center gap-1"
                            href="/products"
                        >
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
                                <p className="font-body font-semibold text-ink/80 text-sm capitalize">
                                    {cat.name}
                                </p>
                                <p className="text-ink/50 text-xs mt-1">{cat.count}</p>
                            </a>
                        ))}
                    </div>
                </section>

                {/* Top Rated / New Arrivals */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
                    <div className="bg-white border border-white/20 rounded-3xl p-6">
                        <div className="flex items-center justify-between mb-5">
                            <h2 className="font-heading font-bold text-lg flex items-center gap-2 text-ink">
                                <Star size={18} className="text-amber-400 fill-amber-400" />
                                Top Rated
                            </h2>
                            <a
                                className="text-volt text-xs hover:text-volt-light flex items-center gap-1"
                                href="/products?sort=rating"
                            >
                                See all <ArrowRight size={12} />
                            </a>
                        </div>
                        <div className="space-y-2">
                            {topRated.map((product) => (
                                <ProductRow key={product.id} product={product} />
                            ))}
                        </div>
                    </div>

                    <div className="bg-white border border-white/20 rounded-3xl p-6">
                        <div className="flex items-center justify-between mb-5">
                            <h2 className="font-heading font-bold text-lg flex items-center gap-2 text-ink">
                                <Zap size={18} className="text-volt fill-volt" />
                                New Arrivals
                            </h2>
                            <a
                                className="text-volt text-xs hover:text-volt-light flex items-center gap-1"
                                href="/products"
                            >
                                See all <ArrowRight size={12} />
                            </a>
                        </div>
                        <div className="space-y-2">
                            {newArrivals.map((product) => (
                                <ProductRow key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Perks strip */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {perks.map((perk) => {
                        const Icon = perk.icon;
                        return (
                            <div
                                key={perk.title}
                                className="bg-[#111] border border-white/8 rounded-2xl p-5 flex items-center gap-4"
                            >
                                <Icon size={24} className={perk.color} />
                                <div>
                                    <p className="font-body font-semibold text-white/80 text-sm">
                                        {perk.title}
                                    </p>
                                    <p className="text-white/30 text-xs">{perk.sub}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}