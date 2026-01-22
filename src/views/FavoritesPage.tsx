import { useMemo } from "react"
import DrinkCard from "../components/DrinkCard"
import { useAppStore } from "../stores/useAppStore"

function FavoritesPage() {
  const favorites = useAppStore((state) => state.favorites)

  const hasFavorite = useMemo(() => favorites.length, [favorites])

  return (
    <>
      <h1 className="text-6xl font-extrabold">Favoritos</h1>

      {hasFavorite ? (
      <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 my-10 gap-10">
        {favorites.map(favorite => (
          <DrinkCard
            key={favorite.idDrink}
            drink={favorite}
          />
        ))}
      </div>
      ) : (
       <p className="my-10 text-center text-2xl">Aún no hay favoritos</p> 
      )}
    </>
  )
}

export default FavoritesPage