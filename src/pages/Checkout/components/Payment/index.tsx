import React from 'react'
import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useDispatch } from 'react-redux'
import { changePaymentMethod } from '../../../../store/reducers/paymentMethod'
import { PaymentMethod } from '../../../../interfaces/PaymentMethod'

interface Props {
  paymentMethod: PaymentMethod
  setPaymentMethod: React.Dispatch<React.SetStateAction<PaymentMethod>>
}

export function Payment({ paymentMethod, setPaymentMethod }: Props) {
  const dispatch = useDispatch()

  const handlePaymentMethod = (paymentMethod: PaymentMethod) => {
    setPaymentMethod(paymentMethod)
    dispatch(changePaymentMethod({ paymentMethod }))
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
          type="button"
          onClick={() => handlePaymentMethod('credit-card')}
          data-method={paymentMethod}
          className="cursor-pointer flex gap-3 items-center p-4 border border-transparent bg-gray-400 hover:bg-gray-500 rounded-md text-gray-700 text-sm uppercase data-[method=credit-card]:border-purple-500 data-[method=credit-card]:bg-purple-300"
        >
          <CreditCard size={20} color="#8047F8" />
          Cartão de crédito
        </button>
        <button
          type="button"
          onClick={() => handlePaymentMethod('debit-card')}
          data-method={paymentMethod}
          className="cursor-pointer flex gap-3 items-center p-4 border border-transparent bg-gray-400 hover:bg-gray-500 rounded-md text-gray-700 text-sm uppercase data-[method=debit-card]:border-purple-500 data-[method=debit-card]:bg-purple-300"
        >
          <Bank size={20} color="#8047F8" />
          Cartão de débito
        </button>
        <button
          type="button"
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
