import { AddressContainer, InputWrapper, AddressInput } from './styles'

export function Address() {
  return (
    <AddressContainer>
      <div>
        <span>Endereço de Entrega</span>
        <p>Informe o endereço onde deseja receber seu pedido</p>
      </div>
      <InputWrapper gridColumn={'12.5rem'}>
        <AddressInput type="text" placeholder="CEP" />
      </InputWrapper>
      <InputWrapper gridColumn={'1fr'}>
        <AddressInput type="text" placeholder="Rua" />
      </InputWrapper>
      <InputWrapper gridColumn={'12.5rem 1fr'}>
        <AddressInput type="text" placeholder="Número" />
        <AddressInput type="text" placeholder="Complemento" />
      </InputWrapper>
      <InputWrapper gridColumn={'12.5rem 1fr 3.75rem'}>
        <AddressInput type="text" placeholder="Bairro" />
        <AddressInput type="text" placeholder="Cidade" />
        <AddressInput type="text" placeholder="UF" />
      </InputWrapper>
    </AddressContainer>
  )
}
