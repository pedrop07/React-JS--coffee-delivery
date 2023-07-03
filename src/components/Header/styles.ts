import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  font-family: 'Roboto', sans-serif;
  padding: 2rem 0;

  position: sticky;
  top: 0;
  left: 0;
  z-index: 999;
`
export const DataContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const Address = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;

  padding: 0.5rem;
  border-radius: 6px;

  background: ${(props) => props.theme['purple-300']};
  color: ${(props) => props.theme['purple-700']};

  svg {
    color: ${(props) => props.theme['purple-500']};
  }
`

export const Cart = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;

  padding: 0.5rem;
  border-radius: 6px;

  background: ${(props) => props.theme['yellow-300']};
  color: ${(props) => props.theme['yellow-700']};

  position: relative;
`

export const CartQuantity = styled.span`
  border-radius: 50%;
  background-color: ${(props) => props.theme['yellow-700']};
  width: 1.25rem;
  height: 1.25rem;
  color: #fff;
  font-weight: bold;
  font-size: 0.75rem;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: calc(-1.25rem / 2);
  right: calc(-1.25rem / 2);
`
