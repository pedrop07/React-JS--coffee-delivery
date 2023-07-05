import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Minus, Plus, Trash } from 'phosphor-react'
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
    <div className="py-2 px-1">
      <div className="flex flex-wrap items-center gap-5">
        <img src={coffee.image} alt={coffee.name} title={coffee.name} />
        <div className="flex flex-col gap-2">
          <h4 className="text-gray-800">{coffee.name}</h4>
          <div className="flex items-center gap-2">
            <div className="flex gap-2 justify-center p-2 bg-gray-400 rounded-md">
              <button
                className="cursor-pointer text-purple-500 hover:text-purple-700"
                onClick={() => decrementAmount(coffee, index)}
                disabled={amount === 1}
              >
                <Minus weight="bold" />
              </button>
              {amount}
              <button
                className="cursor-pointer text-purple-500 hover:text-purple-700"
                onClick={() => incrementAmount(coffee, index)}
                disabled={amount === coffee.maxAmount}
              >
                <Plus weight="bold" />
              </button>
            </div>
            <button
              className="cursor-pointer flex gap-1 items-center p-2 bg-gray-400 hover:bg-gray-500 rounded-md text-gray-700"
              onClick={() => handleDeleteItem(index)}
            >
              <Trash size={20} color="#8047F8" />
              REMOVER
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
