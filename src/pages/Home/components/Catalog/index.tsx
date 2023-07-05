import { coffeesData } from '../../../../coffesData'
import { CoffeeCardComponent } from '../CoffeeCard'

export function Catalog() {
  return (
    <>
      <h2 className="font-cursive font-extrabold text-3xl text-gray-800 mt-12">
        Nossos cafés
      </h2>

      <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 mt-14 mb-20">
        {coffeesData.map((coffee) => {
          return <CoffeeCardComponent key={coffee.id} coffeeData={coffee} />
        })}
      </section>
    </>
  )
}
