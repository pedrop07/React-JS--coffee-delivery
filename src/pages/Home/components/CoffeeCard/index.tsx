import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { useState } from 'react'
import { CoffeeData } from '../../../../interfaces/CoffeeData'
import { priceFormatter } from '../../../../utils/formatter'
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
    <div className="bg-gray-100 dark:bg-slate-800 rounded-tl-[6px] rounded-tr-[36px] rounded-bl-[36px] rounded-br-[6px] p-5 mx-auto text-center flex flex-col justify-between max-w-[270px]">
      <img
        src={coffeeData.image}
        alt={coffeeData.title}
        title={coffeeData.title}
        className="mx-auto mt-[-42px] mb-4"
      />

      <div className="flex gap-1 justify-center">
        {coffeeData.categorys.map((category) => (
          <div
            key={category.name}
            className="bg-yellow-300 text-yellow-700 font-bold text-xs py-1 px-2 uppercase rounded-full"
          >
            {category.name}
          </div>
        ))}
      </div>

      <h3 className="font-cursive text-gray-800 dark:text-slate-100 text-xl font-bold mb-2 mt-3">
        {coffeeData.title}
      </h3>
      <p className="text-gray-600 dark:text-slate-300 text-center text-sm">
        {coffeeData.description}
      </p>

      <div className="flex gap-2 justify-between">
        <div className="text-gray-700 dark:text-slate-100 self-end">
          <span className="text-sm mr-1">R$</span>
          <span className="font-cursive text-2xl font-extrabold">
            {priceFormatter.format(coffeeData.price)}
          </span>
        </div>

        <div className="flex gap-2 mt-6">
          <div className="flex gap-2 justify-center p-2 bg-gray-400 dark:bg-slate-700 dark:text-slate-100 rounded-md">
            <button
              className="cursor-pointer text-purple-500 hover:text-purple-700"
              onClick={decrementAmount}
              disabled={amount === 1}
            >
              <Minus weight="bold" />
            </button>
            {amount}
            <button
              className="cursor-pointer text-purple-500 hover:text-purple-700"
              onClick={incrementAmount}
              disabled={amount === coffeeData.amount}
            >
              <Plus weight="bold" />
            </button>
          </div>

          <button
            className="p-2 rounded-md bg-purple-700 hover:bg-purple-500 transition duration-150"
            onClick={() => handleAddToCart(coffeeData)}
          >
            <ShoppingCartSimple size={24} weight="fill" color="#fff" />
          </button>
        </div>
      </div>
    </div>
  )
}
