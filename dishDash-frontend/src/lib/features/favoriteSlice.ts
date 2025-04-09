// features/favoriteSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Recipe } from "@/components/standalone/RecipeCard"; // Define Recipe type based on your data structure

interface FavoriteState {
  favorites: Recipe[];
}

const initialState: FavoriteState = {
  favorites: [],
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<Recipe>) => {
      const index = state.favorites.findIndex(
        (recipe) => recipe.id === action.payload.id
      );
      if (index >= 0) {
        state.favorites.splice(index, 1);
      } else {
        state.favorites.push(action.payload);
      }
    },
  },
});

export const { toggleFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
