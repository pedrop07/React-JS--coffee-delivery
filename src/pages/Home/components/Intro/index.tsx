import {
  Benefit,
  BenefitsContainer,
  Description,
  IntroContainer,
} from './styles'
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'

export function Intro() {
  return (
    <IntroContainer>
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <Description>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </Description>

        <BenefitsContainer>
          <article>
            <Benefit bgColor="orange">
              <ShoppingCart size={20} weight="fill" />
              Compra simples e segura
            </Benefit>

            <Benefit bgColor="black">
              <Package size={20} weight="fill" />
              Compra simples e segura
            </Benefit>
          </article>

          <article>
            <Benefit bgColor="yellow">
              <Timer size={20} weight="fill" />
              Compra simples e segura
            </Benefit>
            <Benefit bgColor="purple">
              <Coffee size={20} weight="fill" />
              Compra simples e segura
            </Benefit>
          </article>
        </BenefitsContainer>
      </div>
      <img src="src/assets/images/branding-coffee.svg" alt="" />
    </IntroContainer>
  )
}
