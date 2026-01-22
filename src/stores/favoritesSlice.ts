import type { StateCreator } from "zustand"
import type { Recipe } from "../types"


export type FavoritesSliceTpe = {
  favorites: Recipe[]
}

export const createFavoritesSlice : StateCreator<FavoritesSliceTpe> = () => ({
  favorites: []
})