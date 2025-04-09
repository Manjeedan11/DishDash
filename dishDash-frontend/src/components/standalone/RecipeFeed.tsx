import { useGetRecipesQuery } from "@/lib/api";
import EmptyState from "./EmptyState";
import RecipeCard from "./RecipeCard";

export default function RecipeFeed() {
  const { data: recipes, isLoading, isError } = useGetRecipesQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading recipes</div>;
  }

  if (!recipes || recipes.length === 0) {
    return (
      <div className="max-w-screen-xl mx-auto px-4 pb-16">
        <EmptyState />
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto pt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
