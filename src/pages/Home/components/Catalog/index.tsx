import {
  Category,
  CoffeeCard,
  Footer,
  Price,
  Description,
  CatalogContainer,
  CategoryContainer,
  BuyButton,
  CounterButton,
  Counter,
} from './styles'
import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'

import { coffeesData } from '../../../../coffesData'
import { priceFormatter } from '../../../../utils/formatter'

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
                <span>{priceFormatter.format(coffe.price)}</span>
              </Price>

              <Counter>
                <CounterButton>
                  <Minus weight="bold" />
                </CounterButton>
                <span>1</span>
                <CounterButton>
                  <Plus weight="bold" />
                </CounterButton>
              </Counter>

              <BuyButton>
                <ShoppingCartSimple size={24} weight="fill" />
              </BuyButton>
            </Footer>
          </CoffeeCard>
        ))}
      </CatalogContainer>
    </>
  )
}
