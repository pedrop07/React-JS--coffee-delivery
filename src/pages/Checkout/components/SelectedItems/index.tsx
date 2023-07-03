import { useAppSelector } from '../../../../store/hooks/useAppSelector'
import { priceFormatter } from '../../../../utils/formatter'
import { CoffeeCard } from '../CoffeeCard'
import {
  BoxFlex,
  ConfirmButton,
  Divider,
  SelectedItemsContainer,
  Total,
} from './styles'

export function SelectedItems() {
  const cart = useAppSelector((state) => state.cart)

  console.log(cart)

  if (cart.length === 0) {
    return (
      <SelectedItemsContainer>
        <div>Nao tem nada</div>
      </SelectedItemsContainer>
    )
  }

  const subtotal = cart.reduce((acc, cur) => {
    acc += cur.total

    return acc
  }, 0)

  return (
    <SelectedItemsContainer>
      {cart.map((coffee, index) => {
        return (
          <>
            <CoffeeCard key={coffee.name} coffee={coffee} index={index} />
            <Divider />
          </>
        )
      })}
      <BoxFlex>
        <div>Subtotal</div>
        <div>R$ {priceFormatter.format(subtotal)}</div>
      </BoxFlex>
      <BoxFlex>
        <div>Frete</div>
        <div>R$ 7,00</div>
      </BoxFlex>
      <BoxFlex>
        <Total>Total</Total>
        <Total>R$ {priceFormatter.format(subtotal + 7)}</Total>
      </BoxFlex>
      <ConfirmButton>Confirmar pedido</ConfirmButton>
    </SelectedItemsContainer>
  )
}
