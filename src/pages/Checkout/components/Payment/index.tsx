import { useState } from 'react'
import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'

type PaymentMethod = 'credit-card' | 'debit-card' | 'cash' | null

export function Payment() {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(null)

  const handlePaymentMethod = (paymentMethod: PaymentMethod) => {
    setPaymentMethod(paymentMethod)
  }

  return (
    <div className="bg-gray-100 rounded-md p-6 lg:p-10">
      <div className="mb-8 flex items-center gap-2">
        <CurrencyDollar className="hidden sm:block" size={30} color="#8047F8" />

        <div>
          <span className="text-gray-800">Pagamento</span>
          <p className="text-gray-700 text-sm">
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-3">
        <button
          onClick={() => handlePaymentMethod('credit-card')}
          data-method={paymentMethod}
          className="cursor-pointer flex gap-3 items-center p-4 border border-transparent bg-gray-400 hover:bg-gray-500 rounded-md text-gray-700 text-sm uppercase data-[method=credit-card]:border-purple-500 data-[method=credit-card]:bg-purple-300"
        >
          <CreditCard size={20} color="#8047F8" />
          Cartão de crédito
        </button>
        <button
          onClick={() => handlePaymentMethod('debit-card')}
          data-method={paymentMethod}
          className="cursor-pointer flex gap-3 items-center p-4 border border-transparent bg-gray-400 hover:bg-gray-500 rounded-md text-gray-700 text-sm uppercase data-[method=debit-card]:border-purple-500 data-[method=debit-card]:bg-purple-300"
        >
          <Bank size={20} color="#8047F8" />
          Cartão de débito
        </button>
        <button
          onClick={() => handlePaymentMethod('cash')}
          data-method={paymentMethod}
          className="cursor-pointer flex gap-3 items-center p-4 border border-transparent bg-gray-400 hover:bg-gray-500 rounded-md text-gray-700 text-sm uppercase data-[method=cash]:border-purple-500 data-[method=cash]:bg-purple-300"
        >
          <Money size={20} color="#8047F8" />
          Dinheiro
        </button>
      </div>
    </div>
  )
}
