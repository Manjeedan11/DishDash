import { useAppSelector } from "@/hooks/reduxHooks";
import FavoriteCard from "@/components/standalone/FavoriteCard";

export default function FavoritesPage() {
  const favorites = useAppSelector((state) => state.favorite.favorites);

  return (
    <div className="container py-8 max-w-screen-xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Your Favorite Recipes</h1>
        <p className="text-muted-foreground">
          All your saved culinary inspirations in one place
        </p>
      </div>

      {favorites.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No favorites yet!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((recipe) => (
            <FavoriteCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
}
