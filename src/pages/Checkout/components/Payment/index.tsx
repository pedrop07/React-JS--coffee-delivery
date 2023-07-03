import { useState } from 'react'
import {
  PaymentMethodButton,
  PaymentMethodContainer,
  PaymentMethodWrapper,
} from './styles'
import { Bank, CreditCard, Money } from 'phosphor-react'

type PaymentMethod = 'credit-card' | 'debit-card' | 'cash' | null

export function Payment() {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(null)

  const handlePaymentMethod = (paymentMethod: PaymentMethod) => {
    setPaymentMethod(paymentMethod)
  }

  return (
    <PaymentMethodContainer>
      <div>
        <span>Pagamento</span>
        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
      </div>
      <PaymentMethodWrapper>
        <PaymentMethodButton
          onClick={() => handlePaymentMethod('credit-card')}
          active={paymentMethod === 'credit-card'}
        >
          <CreditCard size={20} />
          Cartão de crédito
        </PaymentMethodButton>
        <PaymentMethodButton
          onClick={() => handlePaymentMethod('debit-card')}
          active={paymentMethod === 'debit-card'}
        >
          <Bank size={20} />
          Cartão de débito
        </PaymentMethodButton>
        <PaymentMethodButton
          onClick={() => handlePaymentMethod('cash')}
          active={paymentMethod === 'cash'}
        >
          <Money size={20} />
          Dinheiro
        </PaymentMethodButton>
      </PaymentMethodWrapper>
    </PaymentMethodContainer>
  )
}
