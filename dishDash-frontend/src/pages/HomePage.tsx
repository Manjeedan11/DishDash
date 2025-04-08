import Hero from "@/components/standalone/Hero";
import RecipeFeed from "@/components/standalone/RecipeFeed";
import SearchFilterBar from "@/components/standalone/SearchFilterBar";

// Mock data for now (replace this with real data later)
const sampleRecipes = [
  {
    id: "1",
    title: "Spaghetti Bolognese",
    cookingTime: 30,
    rating: 4.5,
    image: "/images/spaghetti.jpg",
  },
  {
    id: "2",
    title: "Vegan Tacos",
    cookingTime: 20,
    rating: 4.8,
    image: "/images/tacos.jpg",
  },
  {
    id: "3",
    title: "Classic Pancakes",
    cookingTime: 15,
    rating: 4.2,
    image: "/images/pancakes.jpg",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <SearchFilterBar />
      <RecipeFeed recipes={sampleRecipes} />
    </>
  );
}
