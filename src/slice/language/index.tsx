import { createSlice } from '@reduxjs/toolkit'

interface LanguageState {
  value: string
}

const initialState: LanguageState = {
  value: 'en',
}

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage(state, action) {
      state.value = action.payload
    },
    setDictionary(state, action) {
      state.value = action.payload
    },
  },
})

export const { setLanguage, setDictionary } = languageSlice.actions
export const selectLanguage = (state: { language: { value: any } }) =>
  state.language.value

export const selectDictionary = (state: { language: { value: any } }) =>
  state.language.value

export default languageSlice.reducer
