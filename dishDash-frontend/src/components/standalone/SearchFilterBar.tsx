import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SearchFilterBar({
  searchQuery,
  setSearchQuery,
  category,
  setCategory,
  dietLabel,
  setDietLabel,
}) {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-4 mt-8 max-w-screen-xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-4 items-center">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <div className="flex">
            <Input
              type="text"
              placeholder="Search recipes or ingredients..."
              className="pl-9 pr-4 focus-visible:ring-orange-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter"}
            />
          </div>
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

        <Select value={dietLabel} onValueChange={setDietLabel}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Dietary Preference" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="no">Non Dietary</SelectItem>
            <SelectItem value="vegan">Vegan</SelectItem>
            <SelectItem value="vegetarian">Vegetarian</SelectItem>
            <SelectItem value="gluten-free">Gluten-Free</SelectItem>
            <SelectItem value="dairy-free">Dairy-Free</SelectItem>
            <SelectItem value="low-carb">Low Carb</SelectItem>
            <SelectItem value="keto">Keto</SelectItem>
            <SelectItem value="paleo">Paleo</SelectItem>
            <SelectItem value="whole30">Whole30</SelectItem>
            <SelectItem value="pescatarian">Pescatarian</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
