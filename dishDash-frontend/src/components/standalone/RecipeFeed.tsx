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
    return (
      <div className="max-w-screen-xl mx-auto px-4 pb-16">
        <EmptyState />
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4 pb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
