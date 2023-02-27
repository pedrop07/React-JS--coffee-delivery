import {
  CheckoutContainer,
  AddressContainer,
  PaymentMethodContainer,
  SelectedItemsContainer,
  BaseAddressInput,
  InputWrapper,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        Complete seu pedido
        <div>
          <AddressContainer>
            <div>
              <span>Endereço de Entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
            <InputWrapper gridColumn={'12.5rem'}>
              <BaseAddressInput type="text" placeholder="CEP" />
            </InputWrapper>
            <InputWrapper gridColumn={'1fr'}>
              <BaseAddressInput type="text" placeholder="Rua" />
            </InputWrapper>
            <InputWrapper gridColumn={'12.5rem 1fr'}>
              <BaseAddressInput type="text" placeholder="Número" />
              <BaseAddressInput type="text" placeholder="Complemento" />
            </InputWrapper>
            <InputWrapper gridColumn={'12.5rem 1fr 3.75rem'}>
              <BaseAddressInput type="text" placeholder="Bairro" />
              <BaseAddressInput type="text" placeholder="Cidade" />
              <BaseAddressInput type="text" placeholder="UF" />
            </InputWrapper>
          </AddressContainer>
          <PaymentMethodContainer></PaymentMethodContainer>
        </div>
      </div>
      <div>
        Cafés selecionados
        <SelectedItemsContainer></SelectedItemsContainer>
      </div>
    </CheckoutContainer>
  )
}
