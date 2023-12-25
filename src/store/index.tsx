import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../slice/count'
import languageReducer from '../slice/language'

export default configureStore({
  reducer: {
    counter: counterReducer,
    language: languageReducer,
  },
})
