import { configureStore } from '@reduxjs/toolkit'
import { cartReducer } from './reducers/cart'
import { paymentMethodReducer } from './reducers/paymentMethod'
import { addressReducer } from './reducers/address'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    paymentMethod: paymentMethodReducer,
    address: addressReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
