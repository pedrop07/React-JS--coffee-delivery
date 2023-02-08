import { DataContainer, HeaderContainer } from './styles'
import { ShoppingCart, MapPin } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src="src/assets/images/coffee-logo.svg" alt="" />

      <DataContainer>
        <article className="address">
          <MapPin size={24} weight="fill" />
          Fortaleza, CE
        </article>
        <article className="cart">
          <ShoppingCart size={24} weight="fill" />
        </article>
      </DataContainer>
    </HeaderContainer>
  )
}
