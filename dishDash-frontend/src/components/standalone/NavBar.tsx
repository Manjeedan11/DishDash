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

export default function NavBar() {
  const location = useLocation();

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
              {navLinks.map((link) => (
                <Tooltip key={link.name}>
                  <TooltipTrigger asChild>
                    <Link
                      to={link.href}
                      className={`flex h-9 w-9 items-center justify-center rounded-full border transition-colors ${
                        location.pathname === link.href
                          ? "border-orange-500 text-orange-500"
                          : "border-transparent text-muted-foreground hover:border-border hover:text-foreground"
                      }`}
                    >
                      <link.icon className="h-5 w-5" />
                      <span className="sr-only">{link.name}</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>{link.name}</TooltipContent>
                </Tooltip>
              ))}
            </div>
          </TooltipProvider>

          <Button variant="ghost" asChild>
            <Link to="/signin">Sign In</Link>
          </Button>
          <Button className="bg-orange-500 hover:bg-orange-600" asChild>
            <Link to="/signup">Sign Up</Link>
          </Button>
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
                <div className="pt-4 mt-4 border-t flex flex-col gap-2">
                  <Button variant="ghost" asChild>
                    <Link to="/signIn">Sign In</Link>
                  </Button>
                  <Button className="bg-orange-500 hover:bg-orange-600" asChild>
                    <Link to="/signUp">Sign Up</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
