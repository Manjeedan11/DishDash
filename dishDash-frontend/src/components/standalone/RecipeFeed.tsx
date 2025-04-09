import { useGetRecipesQuery } from "@/lib/api";
import EmptyState from "./EmptyState";
import RecipeCard from "./RecipeCard";

export default function RecipeFeed() {
  const { data: recipes, isLoading, isError } = useGetRecipesQuery();

  if (isLoading) {
    return (
      <div className="max-w-screen-xl mx-auto px-4 pb-16">
        <div>Loading...</div>
      </div>
    );
  }

  if (isError || !recipes) {
    return (
      <div className="max-w-screen-xl mx-auto px-4 pb-16">
        <EmptyState />
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto pt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.length === 0 ? (
          <div className="max-w-screen-xl mx-auto px-4 pb-16">
            <EmptyState />
          </div>
        ) : (
          recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))
        )}
      </div>
    </div>
  );
}
