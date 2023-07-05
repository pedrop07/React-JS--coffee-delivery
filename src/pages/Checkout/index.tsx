import { ArrowCircleLeft, CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useAppSelector } from '../../store/hooks/useAppSelector'
import { Address } from './components/Address'
import { Payment } from './components/Payment'
import { SelectedItems } from './components/SelectedItems'
import { NavLink } from 'react-router-dom'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { setAddress } from '../../store/reducers/address'
import { useState } from 'react'
import { clearCart } from '../../store/reducers/cart'
import { PaymentMethod } from '../../interfaces/PaymentMethod'

const addressSchema = z.object({
  cep: z
    .string({ required_error: 'CEP é obrigatório' })
    .min(9, { message: 'CEP Inválido' }),
  street: z.string({ required_error: 'Nome da rua é obrigatório' }),
  number: z.string({ required_error: 'Número é obrigatório' }),
  additional: z.string().optional(),
  neighborhood: z.string({ required_error: 'Nome do Bairro é obrigatório' }),
  city: z.string({ required_error: 'Nome da cidade é obrigatório' }),
  state: z.string({ required_error: 'Nome do estado é obrigatório' }),
})

type AddressFormSchema = z.infer<typeof addressSchema>

export function Checkout() {
  const [success, setSuccess] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('')
  const cart = useAppSelector((state) => state.cart)
  const address = useAppSelector((state) => state.address)
  const dispatch = useDispatch()
  const methods = useForm<AddressFormSchema>({
    resolver: zodResolver(addressSchema),
  })

  const paymentMethodsVariables: Record<PaymentMethod, string> = {
    'credit-card': 'Cartão de crédito',
    'debit-card': 'Cartão de débito',
    cash: 'Dinheiro',
    '': '',
  }

  const onSubmit = (data: AddressFormSchema) => {
    if (!paymentMethod) {
      return toast.error('Selecione um método de pagamento.')
    }

    dispatch(setAddress(data))
    dispatch(clearCart())
    setSuccess(true)
  }

  if (success) {
    return (
      <div>
        <h1 className="font-cursive text-yellow-700 text-4xl mb-1 font-extrabold">
          Uhu! Pedido confirmado
        </h1>
        <h4 className="text-gray-800 text-xl">
          Agora é só aguardar que logo o café chegará até você
        </h4>

        <div className="mt-10 p-10 w-fit rounded-tl-[6px] rounded-tr-[36px] rounded-bl-[36px] rounded-br-[6px] border border-purple-500 flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <div className="flex justify-center items-center p-2 rounded-full bg-purple-500">
              <MapPin size={20} weight="fill" color="#fff" />
            </div>
            <p className="text-gray-700">
              Entrega em Rua <span className="font-bold">{address.street}</span>
              , {address.number}
              <br />
              {address.neighborhood} - {address.city}, {address.state}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex justify-center items-center p-2 rounded-full bg-yellow-500">
              <Timer size={20} weight="fill" color="#fff" />
            </div>
            <p className="text-gray-700">
              Previsão de entrega
              <br />
              <span className="font-bold">20 min - 30 min</span>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex justify-center items-center p-2 rounded-full bg-yellow-700">
              <CurrencyDollar size={20} color="#fff" />
            </div>
            <p className="text-gray-700">
              Pagamento na entrega
              <br />
              <span className="font-bold">
                {paymentMethodsVariables[paymentMethod]}
              </span>
            </p>
          </div>
        </div>
      </div>
    )
  }

  if (cart.length === 0) {
    return (
      <div className="p-4 rounded-md bg-gray-100 flex flex-col items-center justify-center gap-4 h-[500px]">
        <h2 className="font-cursive font-extrabold text-3xl text-gray-800">
          Seu Carrinho está vazio !
        </h2>
        <NavLink
          className="p-2 rounded-md flex gap-2 items-center text-white bg-purple-700 hover:bg-purple-500 transition duration-150"
          to="/"
        >
          <ArrowCircleLeft size={28} />
          Voltar para a página inicial
        </NavLink>
      </div>
    )
  }

  return (
    <FormProvider {...methods}>
      <div className="pt-3 pb-8">
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="flex flex-wrap gap-8">
            <div>
              <h3 className="font-cursive text-gray-800 font-bold text-lg mb-4">
                Complete seu pedido
              </h3>
              <div className="flex flex-col gap-4">
                <Address />
                <Payment
                  paymentMethod={paymentMethod}
                  setPaymentMethod={setPaymentMethod}
                />
              </div>
            </div>

            <div>
              <h3 className="font-cursive text-gray-800 font-bold text-lg mb-4">
                Cafés selecionados
              </h3>
              <SelectedItems />
            </div>
          </div>
        </form>
      </div>
    </FormProvider>
  )
}
