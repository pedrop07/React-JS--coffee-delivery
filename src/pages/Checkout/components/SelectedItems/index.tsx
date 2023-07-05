import { useAppSelector } from '../../../../store/hooks/useAppSelector'
import { priceFormatter } from '../../../../utils/formatter'
import { CoffeeCard } from '../CoffeeCard'

export function SelectedItems() {
  const cart = useAppSelector((state) => state.cart)

  const subtotal = cart.reduce((acc, cur) => {
    acc += cur.total

    return acc
  }, 0)

  return (
    <div className="bg-gray-100 rounded-tl-[6px] rounded-tr-[36px] rounded-bl-[36px] rounded-br-[6px] p-10">
      {cart.map((coffee, index) => {
        return (
          <>
            <CoffeeCard key={coffee.name} coffee={coffee} index={index} />
            <hr className="bg-gray-400 h-[2px] border-none my-6" />
          </>
        )
      })}
      <div className="flex items-center justify-between gap-3 mb-3">
        <h6 className="text-gray-700 text-sm">Subtotal</h6>
        <h6 className="text-gray-700">R$ {priceFormatter.format(subtotal)}</h6>
      </div>
      <div className="flex items-center justify-between gap-3 mb-3">
        <h6 className="text-gray-700 text-sm">Frete</h6>
        <h6 className="text-gray-700">R$ 7,00</h6>
      </div>
      <div className="flex items-center justify-between gap-3 mb-6">
        <h5 className="text-gray-800 text-xl font-bold">Total</h5>
        <h5 className="text-gray-800 text-xl font-bold">
          R$ {priceFormatter.format(subtotal + 7)}
        </h5>
      </div>
      <button className="py-3 px-2 rounded-md font-bold text-white uppercase bg-yellow-500 hover:bg-yellow-700 w-full transition duration-150">
        Confirmar pedido
      </button>
    </div>
  )
}
