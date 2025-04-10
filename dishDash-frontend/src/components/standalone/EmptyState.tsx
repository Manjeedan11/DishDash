import { Link } from "react-router";
import { Button } from "@/components/ui/button";

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <h3 className="text-2xl font-semibold mb-2">
        No delicious results found!
      </h3>
      <p className="text-muted-foreground mb-6 max-w-md">
        It looks like there are no recipes matching your search criteria. Try
        adjusting your filters or add a new recipe.
      </p>
      <Button asChild className="bg-orange-500 hover:bg-orange-600">
        <Link to="/add-recipes">Add Your Recipe</Link>
      </Button>
    </div>
  );
}
