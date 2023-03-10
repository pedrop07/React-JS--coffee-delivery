import styled from 'styled-components'

export const CoffeeCard = styled.article`
  max-width: 16rem;
  min-height: 19rem;
  border-radius: 6px 36px;
  padding: 1.25rem 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background: ${(props) => props.theme['gray-100']};

  img {
    margin: calc(-3.5rem + 1.25rem) 0 0.75rem;
  }
`

export const CategoryContainer = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-bottom: 1rem;
`

export const Category = styled.div`
  text-transform: uppercase;
  font-size: 0.725rem;
  font-weight: bold;

  max-width: max-content;

  padding: 0.25rem 0.5rem;
  border-radius: 100px;

  background: ${(props) => props.theme['yellow-300']};
  color: ${(props) => props.theme['yellow-700']};
`

export const Description = styled.span`
  font-size: 0.875rem;
  color: ${(props) => props.theme['gray-600']};
  text-align: center;
  line-height: 1.6;
  margin-top: 0.35rem;
  margin-bottom: 2rem;
`

export const Price = styled.div`
  font-size: 0.875rem;
  color: ${(props) => props.theme['gray-700']};

  span {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 1.5rem;
  }
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

  transition: background-color 0.2s;

  &:not(:disabled):hover {
    color: ${(props) => props.theme['purple-700']};
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`

export const BuyButton = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  padding: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props) => props.theme['purple-700']};
  color: #fff;
  border-radius: 6px;

  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme['purple-500']};
  }
`

export const Footer = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
`
