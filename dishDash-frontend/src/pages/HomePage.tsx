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
    image:
      "https://supervalu.ie/image/var/files/real-food/recipes/Uploaded-2020/spaghetti-bolognese-recipe.jpg",
  },
  {
    id: "2",
    title: "Vegan Tacos",
    cookingTime: 20,
    rating: 4.8,
    image:
      "https://cleangreensimple.com/wp-content/uploads/vegan-tacos-cauliflower.jpg",
  },
  {
    id: "3",
    title: "Classic Pancakes",
    cookingTime: 15,
    rating: 4.2,
    image:
      "https://fortheloveofcooking.net/wp-content/uploads/2016/04/DSC_2476.1.jpg",
  },
  {
    id: "4",
    title: "Grilled Chicken Salad",
    cookingTime: 25,
    rating: 4.6,
    image:
      "https://www.slenderkitchen.com/sites/default/files/styles/gsd-16x9/public/recipe_images/grilled-chicken-Greek-salad.jpg",
  },
  {
    id: "5",
    title: "Beef Stir Fry",
    cookingTime: 20,
    rating: 4.4,
    image:
      "https://recipe30.com/wp-content/uploads/2024/03/Beef-And-Broccoli-Stir-Fry.jpg",
  },
  {
    id: "6",
    title: "Chocolate Lava Cake",
    cookingTime: 35,
    rating: 4.9,
    image:
      "https://www.bakingstherapy.com/wp-content/uploads/2022/01/DSC_7670-1.jpg",
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
