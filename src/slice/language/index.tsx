import { createSlice } from '@reduxjs/toolkit'

interface LanguageState {
  value: string
  dict: any
}

const initialState: LanguageState = {
  value: 'en',
  dict: {},
}

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage(state, action) {
      state.value = action.payload
    },
    setDictionary(state, action) {
      state.dict = action.payload
    },
  },
})

export const { setLanguage, setDictionary } = languageSlice.actions
export const selectLanguage = (state: { language: { value: any } }) =>
  state.language.value

export const selectDictionary = (state: { language: { dict: any } }) =>
  state.language.dict

export default languageSlice.reducer
