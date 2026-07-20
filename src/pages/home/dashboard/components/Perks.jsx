import React from "react";
import { Zap, Shield, Tag } from "lucide-react";

const perks = [
  { icon: Zap, color: "text-volt", title: "Fast Delivery", sub: "Same-day on select items" },
  { icon: Shield, color: "text-blue-400", title: "Secure Payments", sub: "100% encrypted checkout" },
  { icon: Tag, color: "text-green-400", title: "Best Prices", sub: "Price-match guarantee" },
];

const Perks = () => (
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
            <p className="font-body font-semibold text-white/80 text-sm">{perk.title}</p>
            <p className="text-white/30 text-xs">{perk.sub}</p>
          </div>
        </div>
      );
    })}
  </div>
);

export default Perks;
