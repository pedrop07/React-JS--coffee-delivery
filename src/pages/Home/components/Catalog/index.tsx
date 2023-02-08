import {
  Category,
  CoffeeCard,
  Footer,
  Price,
  Description,
  CatalogContainer,
  CategoryContainer,
} from './styles'
import { ShoppingCartSimple } from 'phosphor-react'

import { coffeesData } from '../../../../coffesData'

export function Catalog() {
  return (
    <>
      <h2>Nossos cafés</h2>
      <CatalogContainer>
        {coffeesData.map((coffe) => (
          <CoffeeCard key={coffe.id}>
            <img src={coffe.image} alt={coffe.title} title={coffe.title} />

            <CategoryContainer>
              {coffe.categorys.map((category) => (
                <Category key={category.name}>{category.name}</Category>
              ))}
            </CategoryContainer>

            <h3>{coffe.title}</h3>
            <Description>{coffe.description}</Description>

            <Footer>
              <Price>
                R$
                <span>{coffe.price}</span>
              </Price>

              <input min={1} max={30} type="number" />
              <button>
                <ShoppingCartSimple size={24} weight="fill" />
              </button>
            </Footer>
          </CoffeeCard>
        ))}
      </CatalogContainer>
    </>
  )
}
