import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { createRecipesSlice, type RecipesSliceType } from "./recipeSlice"
import { createFavoritesSlice, type FavoritesSliceTpe } from "./favoritesSlice"

export const useAppStore = create<RecipesSliceType & FavoritesSliceTpe>()(devtools((...a) => ({ // (...a) toma una copia de todos los argumentos
  ...createRecipesSlice(...a),
  ...createFavoritesSlice(...a)
})))