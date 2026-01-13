import { create } from "zustand"
import { createRecipesSlice, type RecipesSliceType } from "./recipeSlice"

export const useAppStore = create<RecipesSliceType>((...a) => ({ // toma una copia de todos los argumentos
  ...createRecipesSlice(...a)
}))