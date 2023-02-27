import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  flex: 1;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;

  main {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  @media (max-width: 1100px) {
    justify-content: center;
  }
`

export const AddressContainer = styled.div`
  padding: 2.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 100%;

  background: ${(props) => props.theme['gray-100']};
  border-radius: 6px;

  span {
    color: ${(props) => props.theme['gray-800']};
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  p {
    color: ${(props) => props.theme['gray-700']};
    font-size: 14px;
  }
`

export const BaseAddressInput = styled.input`
  padding: 0.875rem;

  outline: none;
  border: 1px solid #e6e5e5;
  border-radius: 4px;

  flex: none;
  order: 0;
  flex-grow: 0;

  background: ${(props) => props.theme['gray-300']};
`

interface InputWrapperProps {
  gridColumn: string
}

export const InputWrapper = styled.div<InputWrapperProps>`
  display: grid;
  grid-template-columns: ${({ gridColumn }) => gridColumn};
  gap: 1rem;
`

export const PaymentMethodContainer = styled.div``

export const SelectedItemsContainer = styled.div`
  padding: 2.5rem;
  width: 448px;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  background: ${(props) => props.theme['gray-100']};
  border-radius: 6px 44px;
`
