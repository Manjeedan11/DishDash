import { useGetRecipesQuery } from "@/lib/api";
import EmptyState from "./EmptyState";
import RecipeCard from "./RecipeCard";

interface RecipeFeedProps {
  searchQuery: string;
  category: string;
  dietLabel: string;
}

export default function RecipeFeed({
  searchQuery,
  category,
  dietLabel,
}: RecipeFeedProps) {
  const { data: recipes, isLoading, isError } = useGetRecipesQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading recipes</div>;
  }

  const filteredRecipes = recipes?.filter((recipe) => {
    const matchesSearch = searchQuery
      .toLowerCase()
      .split(" ")
      .every(
        (term) =>
          recipe.title.toLowerCase().includes(term) ||
          recipe.ingredients.some((ingredient: string) =>
            ingredient.toLowerCase().includes(term)
          )
      );

    const matchesCategory = category === "all" || recipe.category === category;
    const matchesDiet = dietLabel === "no" || recipe.dietType === dietLabel;

    return matchesSearch && matchesCategory && matchesDiet;
  });

  const noResultsAfterSearch =
    searchQuery.trim() !== "" && filteredRecipes?.length === 0;

  return (
    <div className="max-w-screen-xl mx-auto pt-10 pb-16">
      {noResultsAfterSearch ? (
        <EmptyState />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes?.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
}
