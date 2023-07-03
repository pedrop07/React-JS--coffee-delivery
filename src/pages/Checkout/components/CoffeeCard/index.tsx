import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Minus, Plus, Trash } from 'phosphor-react'
import {
  StyledCoffeeCard,
  Counter,
  CounterButton,
  DeleteButton,
  BoxFlex,
  BoxFlexColumn,
  Title,
} from './styles'
import {
  type CartItem,
  deleteItem,
  increment,
} from '../../../../store/reducers/cart'

interface Props {
  coffee: CartItem
  index: number
}

export function CoffeeCard({ coffee, index }: Props) {
  const dispatch = useDispatch()
  const [amount, setAmount] = useState(coffee.amount)

  const incrementAmount = (item: CartItem, index: number) => {
    const updatedAmount = amount + 1
    const total = Number((item.price * updatedAmount).toFixed(2))

    const newItem = {
      ...item,
      amount: updatedAmount,
      total,
      index,
    }

    dispatch(increment(newItem))
    setAmount(updatedAmount)
  }

  const decrementAmount = (item: CartItem, index: number) => {
    const updatedAmount = amount - 1
    const total = Number((item.price * updatedAmount).toFixed(2))

    const newItem = {
      ...item,
      amount: updatedAmount,
      total,
      index,
    }

    dispatch(increment(newItem))
    setAmount(updatedAmount)
  }

  const handleDeleteItem = (index: number) => {
    dispatch(deleteItem(index))
  }

  return (
    <StyledCoffeeCard>
      <BoxFlex>
        <img src={coffee.image} alt={coffee.name} title={coffee.name} />
        <BoxFlexColumn>
          <Title>{coffee.name}</Title>
          <BoxFlex>
            <Counter>
              <CounterButton
                onClick={() => decrementAmount(coffee, index)}
                disabled={amount === 1}
              >
                <Minus weight="bold" />
              </CounterButton>
              {amount}
              <CounterButton
                onClick={() => incrementAmount(coffee, index)}
                disabled={amount === coffee.maxAmount}
              >
                <Plus weight="bold" />
              </CounterButton>
            </Counter>
            <DeleteButton onClick={() => handleDeleteItem(index)}>
              <Trash size={20} />
              REMOVER
            </DeleteButton>
          </BoxFlex>
        </BoxFlexColumn>
      </BoxFlex>
    </StyledCoffeeCard>
  )
}
