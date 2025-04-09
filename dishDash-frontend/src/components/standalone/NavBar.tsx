import { Link, useLocation } from "react-router";
import { CookingPot, Flame, Heart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useAuth } from "@/contexts/AuthContext";
import { useAppSelector } from "@/hooks/reduxHooks";

export default function NavBar() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const favorites = useAppSelector((state) => state.favorite.favorites);

  const navLinks = [
    { name: "Add Recipe", href: "/add-recipes", icon: CookingPot },
    { name: "Favorites", href: "/favorites", icon: Heart },
  ];

  return (
    <header className="left-0 sticky top-0 z-50 w-full transition-all duration-200 bg-white/90 backdrop-blur-md shadow-md">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-50 py-6">
        <div className="flex items-center gap-10">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <Flame className="h-6 w-6 text-orange-500" />
            Dish Dash
          </Link>

          <div className="hidden md:flex items-center gap-6 text-sm">
            <Link
              to="/"
              className={`hover:text-orange-500 transition-colors ${
                location.pathname === "/"
                  ? "text-orange-500"
                  : "text-muted-foreground"
              }`}
            >
              Home
            </Link>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <TooltipProvider>
            <div className="flex items-center gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    to="/add-recipes"
                    className={`flex h-9 w-9 items-center justify-center rounded-full border transition-colors ${
                      location.pathname === "/add-recipes"
                        ? "border-orange-500 text-orange-500"
                        : "border-transparent text-muted-foreground hover:border-border hover:text-foreground"
                    }`}
                  >
                    <CookingPot className="h-5 w-5" />
                    <span className="sr-only">Add Recipe</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>Add Recipe</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    to="/favorites"
                    className={`flex h-9 w-9 items-center justify-center rounded-full border transition-colors ${
                      location.pathname === "/favorites"
                        ? "border-orange-500 text-orange-500"
                        : "border-transparent text-muted-foreground hover:border-border hover:text-foreground"
                    }`}
                  >
                    <div className="flex items-center gap-1">
                      <Heart className="h-5 w-5" />
                      <p className="text-lg">{favorites.length}</p>
                    </div>
                    <span className="sr-only">Favorites</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>Favorites</TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>

          {user ? (
            <Button
              onClick={logout}
              className="bg-orange-500 hover:bg-orange-600"
            >
              Logout
            </Button>
          ) : (
            <>
              <Button variant="ghost" asChild>
                <Link to="/signIn">Sign In</Link>
              </Button>
              <Button className="bg-orange-500 hover:bg-orange-600" asChild>
                <Link to="/signUp">Sign Up</Link>
              </Button>
            </>
          )}
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px]">
              <div className="mt-8 flex flex-col gap-4 text-base">
                <Link
                  to="/"
                  className={`hover:text-orange-500 transition-colors ${
                    location.pathname === "/"
                      ? "text-orange-500"
                      : "text-muted-foreground"
                  }`}
                >
                  Home
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`flex items-center gap-2 hover:text-orange-500 transition-colors ${
                      location.pathname === link.href
                        ? "text-orange-500"
                        : "text-muted-foreground"
                    }`}
                  >
                    <link.icon className="h-5 w-5" />
                    {link.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
