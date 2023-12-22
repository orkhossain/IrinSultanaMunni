import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../slice/count'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})
