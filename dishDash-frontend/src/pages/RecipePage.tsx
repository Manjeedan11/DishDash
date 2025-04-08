import { useState } from "react";
import { useNavigate } from "react-router";
import {
  Clock,
  ChefHat,
  Heart,
  MoreVertical,
  Pencil,
  Trash,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useParams } from "react-router";

export default function RecipePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isOwner] = useState(true);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  // Mock data for a recipe
  const recipe = {
    id: id,
    title: "Creamy Garlic Pasta",
    description:
      "A delicious and creamy pasta dish with a rich garlic sauce that's perfect for a quick weeknight dinner.",
    cookingTime: 25,
    difficulty: "Medium",
    servings: 4,
    image:
      "https://www.allrecipes.com/thmb/QiGptPjQB5mqSXGVxE4sLPMJs_4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-269500-creamy-garlic-pasta-Beauties-2x1-bcd9cb83138849e4b17104a1cd51d063.jpg",
    ingredients: [
      "8 oz pasta of your choice",
      "4 cloves garlic, minced",
      "2 tbsp butter",
      "1 cup heavy cream",
      "1/2 cup grated parmesan cheese",
      "Salt and pepper to taste",
      "Fresh parsley for garnish",
    ],
    instructions: [
      "Bring a large pot of salted water to a boil. Add pasta and cook according to package instructions until al dente.",
      "While pasta is cooking, melt butter in a large skillet over medium heat. Add minced garlic and sauté for 1-2 minutes until fragrant.",
      "Pour in the heavy cream and bring to a simmer. Cook for 3-4 minutes until it starts to thicken slightly.",
      "Stir in the parmesan cheese until melted and smooth. Season with salt and pepper to taste.",
      "Drain the pasta, reserving 1/4 cup of pasta water. Add the pasta to the sauce, tossing to coat. If needed, add some reserved pasta water to thin the sauce.",
      "Garnish with fresh parsley and additional parmesan cheese if desired. Serve immediately.",
    ],
  };

  const handleDelete = () => {
    // In a real app, you would call an API to delete the recipe
    console.log("Deleting recipe:", recipe.id);

    // Navigate to home page
    navigate("/");
  };

  const handleFavorite = () => {
    // Handle adding to favorites
    console.log("Recipe added to favorites");
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-8">
      <div className="container max-w-4xl w-full">
        <Card className="overflow-hidden border-none shadow-lg">
          <div className="relative h-[300px] md:h-[400px]">
            <img
              src={recipe.image || "/placeholder.svg"}
              alt={recipe.title}
              className="object-cover w-full h-full"
            />
          </div>
          <CardContent className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <h1 className="text-3xl md:text-4xl font-bold">{recipe.title}</h1>
              <div className="flex items-center gap-4">
                <Badge
                  variant="outline"
                  className="flex items-center gap-1 px-3 py-1 text-sm"
                >
                  <Clock className="h-4 w-4" />
                  <span>{recipe.cookingTime} min</span>
                </Badge>
                <Badge
                  variant="outline"
                  className="flex items-center gap-1 px-3 py-1 text-sm"
                >
                  <ChefHat className="h-4 w-4" />
                  <span>{recipe.difficulty}</span>
                </Badge>

                {/* Edit/Delete Options - Only visible to recipe owner */}
                {isOwner && (
                  <div className="md:hidden">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                          <span className="sr-only">More options</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem asChild>
                          <Button
                            variant="link"
                            onClick={() =>
                              navigate(`/recipe/${recipe.id}/edit`)
                            }
                            className="flex items-center gap-2"
                          >
                            <Pencil className="h-4 w-4" />
                            <span>Edit Recipe</span>
                          </Button>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="text-destructive focus:text-destructive"
                          onClick={() => setShowDeleteDialog(true)}
                        >
                          <Trash className="h-4 w-4 mr-2" />
                          <span>Delete Recipe</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                )}
              </div>
            </div>

            {/* Desktop Edit/Delete Buttons - Only visible to recipe owner */}
            {isOwner && (
              <div className="hidden md:flex items-center gap-2 mb-6">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate(`/recipe/${recipe.id}/edit`)}
                  className="flex items-center gap-2"
                >
                  <Pencil className="h-4 w-4" />
                  <span>Edit Recipe</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-destructive hover:bg-destructive/10 hover:text-destructive"
                  onClick={() => setShowDeleteDialog(true)}
                >
                  <Trash className="h-4 w-4 mr-2" />
                  <span>Delete Recipe</span>
                </Button>
              </div>
            )}

            <p className="text-muted-foreground mb-8">{recipe.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">Ingredients</h2>
                <ul className="space-y-2">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Checkbox id={`ingredient-${index}`} />
                      <label
                        htmlFor={`ingredient-${index}`}
                        className="text-sm leading-relaxed cursor-pointer"
                      >
                        {ingredient}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Details</h2>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-medium">Prep Time:</span> 10 minutes
                  </p>
                  <p>
                    <span className="font-medium">Cook Time:</span> 15 minutes
                  </p>
                  <p>
                    <span className="font-medium">Total Time:</span>{" "}
                    {recipe.cookingTime} minutes
                  </p>
                  <p>
                    <span className="font-medium">Servings:</span>{" "}
                    {recipe.servings}
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Instructions</h2>
              <ol className="space-y-4">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="pl-6 relative">
                    <span className="absolute left-0 top-0 flex items-center justify-center w-5 h-5 rounded-full bg-orange-100 text-orange-600 text-xs font-medium">
                      {index + 1}
                    </span>
                    <p className="text-sm leading-relaxed">{instruction}</p>
                  </li>
                ))}
              </ol>
            </div>
          </CardContent>
        </Card>

        {/* Delete Confirmation Dialog */}
        <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Are you sure you want to delete this recipe?
              </AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                recipe and remove it from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                onClick={handleDelete}
              >
                Confirm Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}
