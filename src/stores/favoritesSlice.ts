import type { StateCreator } from "zustand"
import type { Recipe } from "../types"


export type FavoritesSliceTpe = {
  favorites: Recipe[]
  handleClickFavorite: (recipe: Recipe) => void
}

export const createFavoritesSlice : StateCreator<FavoritesSliceTpe> = (set, get) => ({
  favorites: [],
  handleClickFavorite: (recipe) => {
    if(get().favorites.some(favorite => favorite.idDrink === recipe.idDrink)) {
      set((state) => ({
        favorites: state.favorites.filter(favorite => favorite.idDrink !== recipe.idDrink)
      }))
    } else {
      set((state) => ({
        favorites: [...state.favorites, recipe]
      }))
    }
  }
})