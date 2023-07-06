import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  isDarkMode: false,
}

export const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    handleDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload
    },
  },
})

export const { handleDarkMode } = darkModeSlice.actions

export const darkModeReducer = darkModeSlice.reducer
