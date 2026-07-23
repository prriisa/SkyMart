import { useSearchParams } from "react-router";
import ProductsHeader from "./components/ProductsHeader";
import ProductDiv from "./components/ProductDiv";

const Product = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category") || "All Categories";
  const features = searchParams.get("sort") || "default";
  const search = searchParams.get("search") || "";

  const defaults = { category: "All Categories", sort: "default", search: "" };

  // Accepts one or more {key, value} updates and applies them in ONE setSearchParams call
  const updateParams = (updates) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      Object.entries(updates).forEach(([key, value]) => {
        if (value && value !== defaults[key]) {
          next.set(key, value);
        } else {
          next.delete(key);
        }
      });
      return next;
    });
  };

  const setCategory = (value) => updateParams({ category: value });
  const setFeatures = (value) => updateParams({ sort: value });
  const setSearch = (value) => updateParams({ search: value });
  const clearAll = () => updateParams({ category: defaults.category, sort: defaults.sort, search: defaults.search });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <ProductsHeader
        setCategory={setCategory}
        setFeatures={setFeatures}
        setSearch={setSearch}
        clearAll={clearAll}
        category={category}
        features={features}
        search={search}
      />
      <ProductDiv category={category} features={features} search={search} setFeatures={setFeatures} setSearch={setSearch} setCategory={setCategory}/>
    </div>
  );
};

export default Product