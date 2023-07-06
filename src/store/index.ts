import { configureStore } from '@reduxjs/toolkit'
import { cartReducer } from './reducers/cart'
import { paymentMethodReducer } from './reducers/paymentMethod'
import { addressReducer } from './reducers/address'
import { darkModeReducer } from './reducers/darkMode'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    paymentMethod: paymentMethodReducer,
    address: addressReducer,
    darkMode: darkModeReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
