import type { StateCreator } from "zustand"
import type { Recipe } from "../types"

export type FavoritesSliceTpe = {
  favorites: Recipe[]
  handleClickFavorite: (recipe: Recipe) => void
  favoriteExist: (id: Recipe['idDrink']) => boolean
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
  },
  favoriteExist: (id) => {
    return get().favorites.some(favorite => favorite.idDrink === id)
  }
})