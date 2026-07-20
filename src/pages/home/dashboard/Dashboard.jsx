import React from "react";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Categories from "./components/Categories";
import TopRated from "./components/TopRated";
import NewArrivals from "./components/NewArrivals";
import Perks from "./components/Perks";

const Dashboard = () => (
  <main>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Hero />
      <Stats />
      <Categories />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
        <TopRated />
        <NewArrivals />
      </div>
      <Perks />
    </div>
  </main>
);

export default Dashboard;
