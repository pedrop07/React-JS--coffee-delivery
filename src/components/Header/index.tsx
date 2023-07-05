import { ShoppingCart, MapPin } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useAppSelector } from '../../store/hooks/useAppSelector'

export function Header() {
  const cart = useAppSelector((state) => state.cart)

  return (
    <header className="bg-white flex justify-between py-7 sticky top-0">
      <NavLink to="/" title="Home">
        <img src="src/assets/images/coffee-logo.svg" alt="" />
      </NavLink>

      <div className="flex gap-3">
        <div className="flex items-center gap-1 p-2 rounded-md bg-purple-300 text-purple-500">
          <MapPin size={24} weight="fill" />
          <span className="text-purple-700">Fortaleza, CE</span>
        </div>
        <NavLink to={'/checkout'}>
          <div className="flex items-center gap-1 p-2 rounded-md bg-yellow-300 text-yellow-700 relative">
            {cart.length > 0 && (
              <div
                className="
                  absolute
                  top-[-7px]
                  right-[-7px]
                  font-bold 
                text-white 
                  text-sm
                bg-yellow-700 
                  rounded-full
                  w-5
                  h-5
                  flex
                  justify-center
                "
              >
                {cart.length}
              </div>
            )}
            <ShoppingCart size={24} weight="fill" />
          </div>
        </NavLink>
      </div>
    </header>
  )
}
