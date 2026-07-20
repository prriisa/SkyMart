import React from "react";
import { Package, TrendingUp, Star, Tag } from "lucide-react";

const stats = [
  { icon: Package, iconBg: "bg-volt/10", iconColor: "text-volt", value: "0", label: "Cart Items", sub: "In your bag" },
  { icon: TrendingUp, iconBg: "bg-blue-500/10", iconColor: "text-blue-400", value: "$0.00", label: "Cart Value", sub: "Ready to checkout" },
  { icon: Star, iconBg: "bg-amber-500/10", iconColor: "text-amber-400", value: "5", label: "Top Products", sub: "Highly rated" },
  { icon: Tag, iconBg: "bg-purple-500/10", iconColor: "text-purple-400", value: "6", label: "Categories", sub: "To explore" },
];

const Stats = () => (
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10 stagger">
    {stats.map((stat) => {
      const Icon = stat.icon;
      return (
        <div key={stat.label} className="bg-[#111] border border-white/8 rounded-3xl p-6 flex items-start gap-4">
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${stat.iconBg} ${stat.iconColor}`}>
            <Icon size={22} />
          </div>
          <div>
            <p className="font-heading font-bold text-2xl text-white">{stat.value}</p>
            <p className="text-white/50 text-sm font-body">{stat.label}</p>
            <p className="text-white/25 text-xs font-body mt-0.5">{stat.sub}</p>
          </div>
        </div>
      );
    })}
  </div>
);

export default Stats;
