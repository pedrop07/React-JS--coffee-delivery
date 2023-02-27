import styled from 'styled-components'

export const IntroContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* gap: 4rem; */

  padding: 5rem 0;

  > div {
    max-width: 36rem;
  }

  @media (max-width: 768px) {
    justify-content: center;

    img {
      display: none;
    }
  }
`

export const Description = styled.span`
  display: block;
  margin-top: 1.5rem;
  font-size: 1.25rem;
`

export const BenefitsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;

  padding-top: 3rem;

  article {
    display: flex;
    gap: 3rem;
  }
`

const BG_COLORS = {
  orange: 'yellow-700',
  yellow: 'yellow-500',
  black: 'gray-700',
  purple: 'purple-500',
} as const

interface BenefitProps {
  bgColor: keyof typeof BG_COLORS
}

export const Benefit = styled.div<BenefitProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: #fff;
    background: ${(props) => props.theme[BG_COLORS[props.bgColor]]};
    height: 2rem;
    width: 2rem;
    padding: 0.5rem;
    border-radius: 100%;
  }
`
