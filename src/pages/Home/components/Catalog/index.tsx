import { CatalogContainer } from './styles'
import { coffeesData } from '../../../../coffesData'
import { CoffeeCardComponent } from '../CoffeeCard'

export function Catalog() {
  return (
    <>
      <h2>Nossos cafés</h2>
      <CatalogContainer>
        {coffeesData.map((coffee) => {
          return <CoffeeCardComponent key={coffee.id} coffeeData={coffee} />
        })}
      </CatalogContainer>
    </>
  )
}
