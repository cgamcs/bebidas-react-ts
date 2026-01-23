import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { createRecipesSlice, type RecipesSliceType } from "./recipeSlice"
import { createFavoritesSlice, type FavoritesSliceType } from "./favoritesSlice"
import { createNotificationSlice, type NotificationSliceType } from "./notificationSlice"
import { CreateAISlice, type AISliceType } from "./aiSlice"

export const useAppStore = create<RecipesSliceType & FavoritesSliceType & NotificationSliceType & AISliceType>()(devtools((...a) => ({ // (...a) toma una copia de todos los argumentos
  ...createRecipesSlice(...a),
  ...createFavoritesSlice(...a),
  ...createFavoritesSlice(...a),
  ...createNotificationSlice(...a),
  ...CreateAISlice(...a)
})))