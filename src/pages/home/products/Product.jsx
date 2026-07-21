import React from "react";
import ProductDiv from "./components/ProductDiv";
import ProductsHeader from "./components/ProductsHeader";
import { Outlet } from "react-router";
import { useState } from "react";

const Products = () => {

  const [category, setCategory] = useState("")
  const [features, setFeatures] = useState("")
  const [search, setSearch] = useState("")

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Heading + Filters */}
      <ProductsHeader setCategory={setCategory} setFeatures={setFeatures} setSearch={setSearch} category={category} features={features} search={search}/>

      {/* Product Grid */}
      <ProductDiv category={category} features={features} search={search} setFeatures={setFeatures} setSearch={setSearch} setCategory={setCategory}/>
    </main>
  );
};

export default Products;
