import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CartItem {
  name: string
  amount: number
  maxAmount: number
  price: number
  total: number
  image: string
}

const initialState: CartItem[] = []

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<CartItem & { index: number }>) => {
      const { index, ...rest } = action.payload

      if (index !== -1) {
        state[index] = rest
      } else {
        state.push(rest)
      }
    },
    deleteItem: (state, action: PayloadAction<number>) => {
      state.splice(action.payload, 1)
    },
  },
})

export const { increment, deleteItem } = cartSlice.actions

export const cartReducer = cartSlice.reducer
