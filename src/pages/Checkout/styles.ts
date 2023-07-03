import { NavLink } from 'react-router-dom'
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

export const Title = styled.h2`
  font-family: 'Baloo 2', cursive;
  font-size: 1.25rem;
  color: ${({ theme }) => theme['gray-800']};
  margin-bottom: 0.85rem;
`

export const EmptyCartContainer = styled.div`
  height: 500px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  background: ${(props) => props.theme['gray-100']};
  border-radius: 6px;
`

export const GoHomeButton = styled(NavLink)`
  cursor: pointer;
  text-decoration: none;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  padding: 8px;
  border-radius: 6px;

  background-color: ${({ theme }) => theme['purple-700']};
  color: ${({ theme }) => theme.white};

  &:hover {
    background-color: ${({ theme }) => theme['purple-500']};
  }
`
