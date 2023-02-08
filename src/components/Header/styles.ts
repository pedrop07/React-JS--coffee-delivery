import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  font-family: 'Roboto', sans-serif;

  padding: 2rem 0;
`
export const DataContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  article {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;

    padding: 0.5rem;
    border-radius: 6px;
  }

  .address {
    background: ${(props) => props.theme['purple-300']};
    color: ${(props) => props.theme['purple-700']};

    svg {
      color: ${(props) => props.theme['purple-500']};
    }
  }

  .cart {
    background: ${(props) => props.theme['yellow-300']};
    color: ${(props) => props.theme['yellow-700']};
  }
`
