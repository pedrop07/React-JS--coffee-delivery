import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { PaymentMethod } from '../../pages/Checkout/components/Payment'

interface InitialState {
  paymentMethod: PaymentMethod
}

const initialState: InitialState = {
  paymentMethod: '',
}

export const paymentMethodSlice = createSlice({
  name: 'paymentMethod',
  initialState,
  reducers: {
    changePaymentMethod: (state, action: PayloadAction<InitialState>) => {
      state.paymentMethod = action.payload.paymentMethod
    },
  },
})

export const { changePaymentMethod } = paymentMethodSlice.actions

export const paymentMethodReducer = paymentMethodSlice.reducer
