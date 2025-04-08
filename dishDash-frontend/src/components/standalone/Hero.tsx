import { Link } from "react-router";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-orange-50 to-amber-100 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-12 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Share Your Flavor. Discover Others.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Cook, create, and connect with a global community of food lovers.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-orange-500 hover:bg-orange-600"
            >
              <Link to="/add-recipes">Add Your Recipe</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
