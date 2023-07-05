import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  cep: '',
  street: '',
  number: '',
  neighborhood: '',
  city: '',
  state: '',
}

export const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    setAddress: (state, action: PayloadAction<typeof initialState>) => {
      const { cep, city, neighborhood, number, street } = action.payload

      state.cep = cep
      state.city = city
      state.neighborhood = neighborhood
      state.number = number
      state.state = action.payload.state
      state.street = street
    },
  },
})

export const { setAddress } = addressSlice.actions

export const addressReducer = addressSlice.reducer
