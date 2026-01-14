import type { Drink } from "../types"

type DrinkCardProps = {
  drink: Drink
}

function DrinkCard({drink} : DrinkCardProps) {
  return (
    <div>
      <h2>{drink.strDrink}</h2>
    </div>
  )
}

export default DrinkCard