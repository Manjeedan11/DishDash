import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SearchFilterBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [cookingTime, setCookingTime] = useState("any");

  return (
    <div className="bg-white rounded-lg shadow-sm border p-4 mt-8 max-w-screen-xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-4 items-center">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search recipes or ingredients..."
            className="pl-9 w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="w-[160px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="breakfast">Breakfast</SelectItem>
            <SelectItem value="lunch">Lunch</SelectItem>
            <SelectItem value="dinner">Dinner</SelectItem>
            <SelectItem value="appetizer">Appetizer</SelectItem>
            <SelectItem value="soup">Soup</SelectItem>
            <SelectItem value="salad">Salad</SelectItem>
            <SelectItem value="main-course">Main Course</SelectItem>
            <SelectItem value="side-dish">Side Dish</SelectItem>
            <SelectItem value="dessert">Dessert</SelectItem>
            <SelectItem value="baking">Baking</SelectItem>
            <SelectItem value="beverage">Beverage</SelectItem>
            <SelectItem value="snack">Snack</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>

        <Select value={cookingTime} onValueChange={setCookingTime}>
          <SelectTrigger className="w-[160px]">
            <SelectValue placeholder="Cooking Time" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any Time</SelectItem>
            <SelectItem value="quick">Quick ({"<"} 15 min)</SelectItem>
            <SelectItem value="medium">Medium (15-30 min)</SelectItem>
            <SelectItem value="long">Long ({">"}30 min)</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
