import styled from 'styled-components'

export const StyledCoffeeCard = styled.div`
  padding: 8px 4px;
`

export const Counter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.7rem;

  padding: 8px;

  background: ${(props) => props.theme['gray-400']};
  border-radius: 6px;
`

export const CounterButton = styled.button`
  cursor: pointer;
  outline: none;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;

  background: transparent;
  color: ${(props) => props.theme['purple-500']};
  border-radius: 6px;

  transition: color 0.2s;

  &:not(:disabled):hover {
    color: ${(props) => props.theme['purple-700']};
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`

export const Title = styled.h4`
  display: inline-block;
  color: ${({ theme }) => theme['gray-700']};
  font-weight: 500;
  font-size: 1.15rem;
`

export const DeleteButton = styled.button`
  cursor: pointer;
  outline: none;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.9rem;

  padding: 8px;
  border-radius: 6px;

  background: ${(props) => props.theme['gray-400']};
  color: ${(props) => props.theme['gray-700']};

  svg {
    color: ${(props) => props.theme['purple-500']};
  }

  transition: all 0.2s;

  &:not(:disabled):hover {
    background: #eb5a5a;
    color: ${(props) => props.theme.white};
    svg {
      color: ${(props) => props.theme.white};
    }
  }
`

export const BoxFlex = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const BoxFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`
