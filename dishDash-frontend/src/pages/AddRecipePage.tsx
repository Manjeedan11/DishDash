import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { ChevronLeft, Plus, X } from "lucide-react";
import { Link } from "react-router";

const formSchema = z.object({
  title: z.string().min(3, {
    message: "Title must be at least 3 characters.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  category: z.string().min(1, {
    message: "Please select a category.",
  }),
  cookingTime: z.coerce.number().min(1, {
    message: "Cooking time must be at least 1 minute.",
  }),
  difficulty: z.string().min(1, {
    message: "Difficulty is required.",
  }),
  servings: z.coerce.number().min(1, {
    message: "At least 1 serving is required.",
  }),
  imageUrl: z
    .string()
    .url({
      message: "Please enter a valid URL.",
    })
    .optional(),
});

export default function AddRecipePage() {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [instructions, setInstructions] = useState<string[]>([]);
  const [newInstruction, setNewInstruction] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "",
      cookingTime: 0,
      difficulty: "",
      servings: 1,
      imageUrl: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Reset form after submission
    form.reset();
    setIngredients([]);
    setInstructions([]);

    // Log form data (you can replace this with actual submission to backend)
    console.log({
      ...values,
      ingredients,
      instructions,
    });

    // Show success message or redirect
    alert("Recipe submitted successfully!");
  }

  const addIngredient = () => {
    if (newIngredient.trim() !== "") {
      setIngredients([...ingredients, newIngredient.trim()]);
      setNewIngredient("");
    }
  };

  const removeIngredient = (index: number) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  const addInstruction = () => {
    if (newInstruction.trim() !== "") {
      setInstructions([...instructions, newInstruction.trim()]);
      setNewInstruction("");
    }
  };

  const removeInstruction = (index: number) => {
    setInstructions(instructions.filter((_, i) => i !== index));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 py-8">
      <div className="container py-8 max-w-3xl w-full">
        <div className="mb-6">
          <Button variant="ghost" size="sm" asChild className="mb-2">
            <Link to="/" className="flex items-center gap-1">
              <ChevronLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Add New Recipe</h1>
          <p className="text-muted-foreground">
            Share your culinary creation with the community
          </p>
        </div>

        <Card>
          <CardContent className="p-6">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Recipe Title</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g., Creamy Garlic Pasta"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Briefly describe your recipe..."
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="breakfast">Breakfast</SelectItem>
                          <SelectItem value="lunch">Lunch</SelectItem>
                          <SelectItem value="dinner">Dinner</SelectItem>
                          <SelectItem value="appetizer">Appetizer</SelectItem>
                          <SelectItem value="soup">Soup</SelectItem>
                          <SelectItem value="salad">Salad</SelectItem>
                          <SelectItem value="main-course">
                            Main Course
                          </SelectItem>
                          <SelectItem value="side-dish">Side Dish</SelectItem>
                          <SelectItem value="dessert">Dessert</SelectItem>
                          <SelectItem value="baking">Baking</SelectItem>
                          <SelectItem value="beverage">Beverage</SelectItem>
                          <SelectItem value="snack">Snack</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        Choose the category that best fits your recipe
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <FormField
                    control={form.control}
                    name="cookingTime"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Cooking Time (minutes)</FormLabel>
                        <FormControl>
                          <Input type="number" min="1" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="difficulty"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Difficulty</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select difficulty" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Easy">Easy</SelectItem>
                            <SelectItem value="Medium">Medium</SelectItem>
                            <SelectItem value="Hard">Hard</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="servings"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Servings</FormLabel>
                        <FormControl>
                          <Input type="number" min="1" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="imageUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Image URL</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="https://example.com/image.jpg"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Provide a URL to an image of your finished dish
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div>
                  <div className="text-sm font-medium mb-2">Ingredients</div>
                  <div className="flex items-center gap-2 mb-2">
                    <Input
                      value={newIngredient}
                      onChange={(e) => setNewIngredient(e.target.value)}
                      placeholder="e.g., 2 tbsp olive oil"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          addIngredient();
                        }
                      }}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={addIngredient}
                      aria-label="Add Ingredient"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="space-y-2 mt-2">
                    {ingredients.map((ingredient, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between bg-muted/50 rounded-md px-3 py-2"
                      >
                        <span className="text-sm">{ingredient}</span>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => removeIngredient(index)}
                          aria-label="Remove Ingredient"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                  {ingredients.length === 0 && (
                    <p className="text-sm text-muted-foreground mt-2">
                      No ingredients added yet. Add some ingredients to your
                      recipe.
                    </p>
                  )}
                </div>

                <div>
                  <div className="text-sm font-medium mb-2">Instructions</div>
                  <div className="flex items-center gap-2 mb-2">
                    <Input
                      value={newInstruction}
                      onChange={(e) => setNewInstruction(e.target.value)}
                      placeholder="e.g., Boil water"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          addInstruction();
                        }
                      }}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={addInstruction}
                      aria-label="Add Instruction"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="space-y-2 mt-2">
                    {instructions.map((instruction, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between bg-muted/50 rounded-md px-3 py-2"
                      >
                        <span className="text-sm">{instruction}</span>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => removeInstruction(index)}
                          aria-label="Remove Instruction"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                  {instructions.length === 0 && (
                    <p className="text-sm text-muted-foreground mt-2">
                      No instructions added yet. Add some instructions to your
                      recipe.
                    </p>
                  )}
                </div>

                <Button type="submit" className="w-full mt-6">
                  Submit Recipe
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
