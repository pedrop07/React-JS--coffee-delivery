import {
  Address,
  Cart,
  CartQuantity,
  DataContainer,
  HeaderContainer,
} from './styles'
import { ShoppingCart, MapPin } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src="src/assets/images/coffee-logo.svg" alt="" />
      </NavLink>

      <DataContainer>
        <Address>
          <MapPin size={24} weight="fill" />
          Fortaleza, CE
        </Address>
        <Cart>
          <CartQuantity>1</CartQuantity>
          <ShoppingCart size={24} weight="fill" />
        </Cart>
      </DataContainer>
    </HeaderContainer>
  )
}
