import styled from 'styled-components'

export const PaymentMethodContainer = styled.div`
  padding: 2.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 100%;

  background: ${(props) => props.theme['gray-100']};
  border-radius: 6px;

  span {
    display: inline-block;
    margin-bottom: 8px;
    color: ${(props) => props.theme['gray-800']};
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  p {
    color: ${(props) => props.theme['gray-700']};
    font-size: 14px;
  }
`

interface PaymentMethodButtonProps {
  active: boolean
}

export const PaymentMethodWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`

export const PaymentMethodButton = styled.button<PaymentMethodButtonProps>`
  cursor: pointer;

  padding: 1rem;
  border: ${({ active, theme }) =>
    active
      ? `2px solid ${theme['purple-500']}`
      : `2px solid ${theme['gray-500']}`};
  border-radius: 6px;

  background: ${({ active, theme }) =>
    active ? theme['purple-300'] : theme['gray-400']};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  font-size: 0.9rem;
  color: ${(props) => props.theme['gray-700']};
  text-transform: uppercase;

  svg {
    color: ${(props) => props.theme['purple-500']};
  }

  transition: all 0.2s;

  &:hover {
    background: ${({ theme, active }) => !active && theme['gray-500']};
  }
`
