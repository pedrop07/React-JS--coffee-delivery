import styled from 'styled-components'

export const SelectedItemsContainer = styled.div`
  padding: 2.5rem;
  width: 448px;

  display: flex;
  flex-direction: column;

  background: ${(props) => props.theme['gray-100']};
  border-radius: 6px 44px;
`

export const Divider = styled.hr`
  margin: 24px 0px;

  background-color: ${({ theme }) => theme['gray-400']};
  height: 2px;
  border: none;
`

export const BoxFlex = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  margin: 10px 0px;
`

export const Total = styled.span`
  color: ${({ theme }) => theme['gray-900']};
  font-size: 1.25rem;
  font-weight: bold;
`

export const ConfirmButton = styled.button`
  margin-top: 10px;
  cursor: pointer;

  padding: 12px 8px;
  border: none;
  border-radius: 6px;

  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;

  color: ${({ theme }) => theme.white};
  background: ${({ theme }) => theme['yellow-500']};

  transition: all 0.2s;

  &:hover {
    background: ${({ theme }) => theme['yellow-700']};
  }
`
