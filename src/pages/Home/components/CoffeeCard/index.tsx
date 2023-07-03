import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { useState } from 'react'
import { CoffeeData } from '../../../../interfaces/CoffeeData'
import { priceFormatter } from '../../../../utils/formatter'
import {
  AddCardButton,
  Category,
  CategoryContainer,
  CoffeeCard,
  Counter,
  CounterButton,
  Description,
  Footer,
  Price,
} from './styles'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../../../store/hooks/useAppSelector'
import { increment } from '../../../../store/reducers/cart'

type CoffeeCardProps = {
  coffeeData: CoffeeData
}

export function CoffeeCardComponent({ coffeeData }: CoffeeCardProps) {
  const cart = useAppSelector((state) => state.cart)
  const dispatch = useDispatch()
  const [amount, setAmount] = useState(1)

  const handleAddToCart = ({ title, price, image }: CoffeeData) => {
    const index = cart.findIndex(({ name }) => name === title)

    const total = Number((amount * price).toFixed(2))

    const payload = {
      name: title,
      amount,
      maxAmount: coffeeData.amount,
      price,
      total,
      index,
      image,
    }

    dispatch(increment(payload))
  }

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

        <AddCardButton onClick={() => handleAddToCart(coffeeData)}>
          <ShoppingCartSimple size={24} weight="fill" />
        </AddCardButton>
      </Footer>
    </CoffeeCard>
  )
}
