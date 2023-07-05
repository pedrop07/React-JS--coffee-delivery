import { ArrowCircleLeft } from 'phosphor-react'
import { useAppSelector } from '../../store/hooks/useAppSelector'
import { Address } from './components/Address'
import { Payment } from './components/Payment'
import { SelectedItems } from './components/SelectedItems'
import { NavLink } from 'react-router-dom'

export function Checkout() {
  const cart = useAppSelector((state) => state.cart)

  if (cart.length === 0) {
    return (
      <div className="p-4 rounded-md bg-gray-100 flex flex-col items-center justify-center gap-4 h-[500px]">
        <h2 className="font-cursive font-extrabold text-3xl text-gray-800">
          Seu Carrinho está vazio !
        </h2>
        <NavLink
          className="p-2 rounded-md flex gap-2 items-center text-white bg-purple-700 hover:bg-purple-500 transition duration-150"
          to="/"
        >
          <ArrowCircleLeft size={28} />
          Voltar para a página inicial
        </NavLink>
      </div>
    )
  }

  return (
    <div className="pt-3 pb-8">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          console.log('submit')
        }}
      >
        <div className="flex flex-wrap gap-8">
          <div>
            <h3 className="font-cursive text-gray-800 font-bold text-lg mb-4">
              Complete seu pedido
            </h3>
            <div className="flex flex-col gap-4">
              <Address />
              <Payment />
            </div>
          </div>

          <div>
            <h3 className="font-cursive text-gray-800 font-bold text-lg mb-4">
              Cafés selecionados
            </h3>
            <SelectedItems />
          </div>
        </div>
      </form>
    </div>
  )
}
