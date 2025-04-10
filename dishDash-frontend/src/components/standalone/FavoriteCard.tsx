// components/FavoriteCard.tsx
import { Clock, Star, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Recipe } from "@/components/standalone/RecipeCard";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { toggleFavorite } from "@/lib/features/favoriteSlice";
import { Link } from "react-router";
import { toast } from "sonner";

interface FavoriteCardProps {
  recipe: Recipe;
}

const totalTime = (recipe: Recipe) => recipe.prepTime + recipe.cookTime;

export default function FavoriteCard({ recipe }: FavoriteCardProps) {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.favorite.favorites);
  const isFavorite = favorites.some((fav) => fav.id === recipe.id);

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(toggleFavorite(recipe));

    toast.success(isFavorite ? "Removed from favorites" : "Added to favorites");
  };

  return (
    <Card className="relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div
        className="absolute top-3 right-3 z-20 bg-white/80 backdrop-blur-sm p-1 rounded-full cursor-pointer hover:bg-white shadow-md"
        onClick={handleToggleFavorite}
      >
        <Heart
          className="w-5 h-5 text-orange-500"
          fill={isFavorite ? "#f97316" : "transparent"}
        />
      </div>

      <div className="aspect-video overflow-hidden">
        <img
          src={recipe.image || "/placeholder.svg"}
          alt={recipe.title}
          className="w-full h-full object-cover"
        />
      </div>

      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg line-clamp-1">{recipe.title}</h3>
          <Badge
            variant="outline"
            className="flex items-center gap-1 bg-orange-50"
          >
            <Clock className="h-3 w-3" />
            <span>{totalTime(recipe)} min</span>
          </Badge>
        </div>
        <div className="flex items-center text-amber-500 mb-2">
          <Star className="h-4 w-4 fill-current" />
          <span className="ml-1 text-sm">{recipe.rating}</span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full bg-orange-500 hover:bg-orange-600">
          <Link to={`/recipe/${recipe.id}`}>View Recipe</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
