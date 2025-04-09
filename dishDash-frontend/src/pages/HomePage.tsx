import Hero from "@/components/standalone/Hero";
import RecipeFeed from "@/components/standalone/RecipeFeed";
import SearchFilterBar from "@/components/standalone/SearchFilterBar";
import { useState } from "react";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [dietLabel, setDietLabel] = useState("no");

  return (
    <>
      <Hero />
      <SearchFilterBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        category={category}
        setCategory={setCategory}
        dietLabel={dietLabel}
        setDietLabel={setDietLabel}
      />
      <RecipeFeed
        searchQuery={searchQuery}
        category={category}
        dietLabel={dietLabel}
      />
    </>
  );
}
