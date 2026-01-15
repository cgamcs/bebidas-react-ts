import type { Drink } from "../types"

type DrinkCardProps = {
  drink: Drink
}

function DrinkCard({drink} : DrinkCardProps) {
  return (
    <div className="border border-gray-100 shadow-lg">
      <div className="overflow-hidden">
        <img
          src={drink.strDrinkThumb}
          alt={`Imagen de ${drink.strDrink}`}
          className="hover:scale-125 transition-transform"
        />
      </div>

      <div className="p-5">
        <h2 className="text-2xl truncate font-black">{drink.strDrink}</h2>

        <button
          type="button"
          className="bg-orange-400 hover:bg-orange-500 mt-5 w-full p-3 font-bold text-white text-lg hover:cursor-pointer"
        >
          Ver Receta
        </button>
      </div>
    </div>
  )
}

export default DrinkCard