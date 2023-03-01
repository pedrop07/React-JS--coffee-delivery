import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { useState } from 'react'
import { CoffeeData } from '../../../../interfaces/CoffeeData'
import { priceFormatter } from '../../../../utils/formatter'
import {
  BuyButton,
  Category,
  CategoryContainer,
  CoffeeCard,
  Counter,
  CounterButton,
  Description,
  Footer,
  Price,
} from './styles'

type CoffeeCardProps = {
  coffeeData: CoffeeData
}

export function CoffeeCardComponent({ coffeeData }: CoffeeCardProps) {
  const [amount, setAmount] = useState(1)

  function incrementAmount() {
    if (amount !== coffeeData.amount) setAmount((prevState) => prevState + 1)
  }

  function decrementAmount() {
    setAmount((prevState) => prevState - 1)
  }

  return (
    <CoffeeCard key={coffeeData.id}>
      <img
        src={coffeeData.image}
        alt={coffeeData.title}
        title={coffeeData.title}
      />

      <CategoryContainer>
        {coffeeData.categorys.map((category) => (
          <Category key={category.name}>{category.name}</Category>
        ))}
      </CategoryContainer>

      <h3>{coffeeData.title}</h3>
      <Description>{coffeeData.description}</Description>

      <Footer>
        <Price>
          R$
          <span>{priceFormatter.format(coffeeData.price)}</span>
        </Price>

        <Counter>
          <CounterButton onClick={decrementAmount} disabled={amount === 1}>
            <Minus weight="bold" />
          </CounterButton>
          {amount}
          <CounterButton
            onClick={incrementAmount}
            disabled={amount === coffeeData.amount}
          >
            <Plus weight="bold" />
          </CounterButton>
        </Counter>

        <BuyButton>
          <ShoppingCartSimple size={24} weight="fill" />
        </BuyButton>
      </Footer>
    </CoffeeCard>
  )
}
