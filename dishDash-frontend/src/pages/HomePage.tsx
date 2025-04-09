import Hero from "@/components/standalone/Hero";
import RecipeFeed from "@/components/standalone/RecipeFeed";
import SearchFilterBar from "@/components/standalone/SearchFilterBar";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SearchFilterBar />
      <RecipeFeed />
    </>
  );
}
