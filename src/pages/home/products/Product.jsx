import React from "react";
import ProductDiv from "./components/ProductDiv";
import ProductsHeader from "./components/ProductsHeader";
import { Outlet, useSearchParams } from "react-router";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category") || "All Categories";
  const features = searchParams.get("sort") || "default";
  const search = searchParams.get("search") || "";

  const defaults = { category: "All Categories", sort: "default", search: "" };

  const updateParam = (key, value) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      if (value && value !== defaults[key]) {
        next.set(key, value);
      } else {
        next.delete(key);
      }
      return next;
    });
  };

  const setCategory = (value) => updateParam("category", value);
  const setFeatures = (value) => updateParam("sort", value);
  const setSearch = (value) => updateParam("search", value);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <ProductsHeader setCategory={setCategory} setFeatures={setFeatures} setSearch={setSearch} category={category} features={features} search={search}/>
      <ProductDiv category={category} features={features} search={search} setFeatures={setFeatures} setSearch={setSearch} setCategory={setCategory}/>
    </div>
  );
};

export default Products;