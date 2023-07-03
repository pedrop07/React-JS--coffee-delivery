import { ArrowCircleLeft } from 'phosphor-react'
import { useAppSelector } from '../../store/hooks/useAppSelector'
import { Address } from './components/Address'
import { Payment } from './components/Payment'
import { SelectedItems } from './components/SelectedItems'
import {
  CheckoutContainer,
  EmptyCartContainer,
  GoHomeButton,
  Title,
} from './styles'

export function Checkout() {
  const cart = useAppSelector((state) => state.cart)

  if (cart.length === 0) {
    return (
      <EmptyCartContainer>
        <h2>Seu Carrinho está vazio !</h2>
        <GoHomeButton to="/">
          <ArrowCircleLeft size={28} />
          Voltar para a página inicial
        </GoHomeButton>
      </EmptyCartContainer>
    )
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        console.log('submit')
      }}
    >
      <CheckoutContainer>
        <div>
          <Title>Complete seu pedido</Title>
          <div>
            <Address />
            <Payment />
          </div>
        </div>
        <div>
          <Title>Cafés selecionados</Title>
          <SelectedItems />
        </div>
      </CheckoutContainer>
    </form>
  )
}
