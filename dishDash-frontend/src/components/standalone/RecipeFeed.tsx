import EmptyState from "./EmptyState";
import RecipeCard from "./RecipeCard";

interface Recipe {
  id: string;
  title: string;
  cookingTime: number;
  rating: number;
  image: string;
}

interface RecipeFeedProps {
  recipes: Recipe[];
}

export default function RecipeFeed({ recipes }: RecipeFeedProps) {
  if (recipes.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8 pb-16 mt-6">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}
