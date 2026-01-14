import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { createRecipesSlice, type RecipesSliceType } from "./recipeSlice"

export const useAppStore = create<RecipesSliceType>()(devtools((...a) => ({ // (...a) toma una copia de todos los argumentos
  ...createRecipesSlice(...a)
})))